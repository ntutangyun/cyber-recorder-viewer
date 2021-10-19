/* eslint-disable no-undef */
import ReactJson from "react-json-view";
import {bufferToHexLimitLength} from "./ioUtils";

const SECTION_LENGTH = 16;
const HEADER_LENGTH = 2048;

class SectionData {
    constructor(startPosition) {
        this.startPosition = startPosition;

        this.type = null;
        this.typeName = null;
        this.class = null;
        this.size = null;
        this.bodyObject = null;

        this.typeBuffer = null;
        this.padBuffer = null;
        this.sizeBuffer = null;
        this.bodyBuffer = null;
    }

    setTypeBuffer(buf) {
        this.typeBuffer = buf;
        this.type = new DataView(buf).getInt32(0, true);
    }

    setSizeBuffer(buf) {
        this.sizeBuffer = buf;
        this.size = Number(new DataView(buf).getBigInt64(0, true));
    }

    setPadBuffer(buf) {
        this.padBuffer = buf;
    }

    setBodyBuffer(buf) {
        this.bodyBuffer = buf;
        this.bodyObject = this.class.deserializeBinary(buf).toObject();
    }

    renderSection() {
        return <table className={"byte-table"}>
            <thead>
            <tr>
                <th>Position</th>
                <th>Byte Size</th>
                <th>Raw Bytes</th>
                <th>Value</th>
                {/*<th>Description</th>*/}
            </tr>
            </thead>
            <tbody>
            <tr>
                {/* 0 - 3 section type*/}
                <td className={"byte-table-position-column"}>{this.startPosition} - {this.startPosition + 3}</td>
                <td className={"byte-table-byte-size-column"}>4</td>
                <td className={"byte-table-byte-column"}>{bufferToHexLimitLength(this.typeBuffer)}</td>
                <td>{this.type} ({this.typeName})</td>
                {/*<td style=width: {}>These four bytes records the type of the following section body part.*/}
                {/*    The data is saved as signed integer 32 bit in little endian format.*/}
                {/*</td>*/}
            </tr>
            <tr>
                {/* 4 - 7 section padding */}
                <td className={"byte-table-position-column"}>{this.startPosition + 4} - {this.startPosition + 7}</td>
                <td className={"byte-table-byte-size-column"}>4</td>
                <td className={"byte-table-byte-column"}>{bufferToHexLimitLength(this.typeBuffer)}</td>
                <td>&nbsp;-&nbsp;</td>
                {/*<td style=width: {}>These four bytes is for padding purpose. Can be ignored.</td>*/}
            </tr>
            <tr>
                {/* 8 - 15 section padding */}
                <td className={"byte-table-position-column"}>{this.startPosition + 8} - {this.startPosition + 15}</td>
                <td className={"byte-table-byte-size-column"}>8</td>
                <td className={"byte-table-byte-column"}>{bufferToHexLimitLength(this.sizeBuffer)}</td>
                <td>{this.size}</td>
                {/*<td style=width: {}>These eight bytes records the size of the following section body part. The data is saved as signed*/}
                {/*    integer 64 bit in little endian format.*/}
                {/*</td>*/}
            </tr>
            <tr>
                {/*16 - 16 + section.size - 1  section body*/}
                <td className={"byte-table-position-column"}>{this.startPosition + 16} - {this.startPosition + 16 + this.size - 1}</td>
                <td className={"byte-table-byte-size-column"}>{this.size}</td>
                <td className={"byte-table-byte-column"}>{bufferToHexLimitLength(this.bodyBuffer)}</td>
                <td>
                    {
                        // use browser's default console to view the big data
                        this.type === 2 && <button onClick={() => console.log(this.bodyObject)}
                                                   title={"Click to log the parsed chunk body to the browser console."}>Log
                            Chunk Body to Console
                        </button>
                    }
                    {
                        this.type !== 2 && <ReactJson src={this.bodyObject}
                                                      collapseStringsAfterLength={50}
                                                      collapsed={3}
                                                      groupArraysAfterLength={100}/>
                    }
                </td>
            </tr>
            </tbody>
        </table>;
    }
}

class RecordParser {
    constructor(protoObj) {
        this.protoObj = protoObj;

        this.Header = protoObj.apollo.cyber.proto.Header;
        this.SectionType = protoObj.apollo.cyber.proto.SectionType;
        this.Index = protoObj.apollo.cyber.proto.Index;
        this.Channel = protoObj.apollo.cyber.proto.Channel;
        this.ChunkHeader = protoObj.apollo.cyber.proto.ChunkHeader;
        this.ChunkBody = protoObj.apollo.cyber.proto.ChunkBody;
        this.ChannelCache = protoObj.apollo.cyber.proto.ChannelCache;

        this.recording = null;
        this.readPosition = 0;

        // record data
        this.headerSection = null;
        this.indexSection = null;
        this.channelInfo = {};
        this.sectionList = [];

        this.currentChunk = null;

        console.log(this.SectionType);
    }

    reset() {
        this.recording = null;
        this.readPosition = 0;
        this.headerSection = null;
        this.indexSection = null;
        this.channelInfo = {};
        this.sectionList = [];

        this.currentChunk = null;
    }

    parse(recording) {
        this.reset();
        this.recording = recording;

        this.readHeader();
        this.readIndex();
        this.readChunks();

        console.log(this.sectionList);
    }

    updateSectionList(newSection) {
        this.sectionList.push(newSection);
        this.sectionList.sort((a, b) => a.startPosition - b.startPosition);
    }

    readHeader() {
        console.log("reading header");
        this.headerSection = new SectionData(this.readPosition);
        this.readSectionHead(this.headerSection);
        this.assignSectionClass(this.headerSection);

        if (this.headerSection.type !== this.SectionType.SECTION_HEADER) {
            throw new Error(`readHeader: check section type failed: ${this.headerSection.type}`);
        }

        this.readSectionBody(this.headerSection);
        this.updateSectionList(this.headerSection);

        this.setPosition(SECTION_LENGTH + HEADER_LENGTH);
        return true;
    }

    readIndex() {
        if (!this.headerSection.bodyObject.isComplete) {
            throw new Error("recording file is not complete");
        }

        this.setPosition(this.headerSection.bodyObject.indexPosition);

        this.indexSection = new SectionData(this.readPosition);
        this.readSectionHead(this.indexSection);
        this.assignSectionClass(this.indexSection);

        if (this.indexSection.type !== this.SectionType.SECTION_INDEX) {
            throw new Error("readHeader: check section type failed");
        }

        this.readSectionBody(this.indexSection);

        this.indexSection.bodyObject.indexesList.forEach(singleIdx => {
            if (singleIdx.type !== this.SectionType.SECTION_CHANNEL) {
                return;
            }
            if (!singleIdx.channelCache) {
                console.log(`single channel index does not have channel cache.`);
                return;
            }

            const channelCache = singleIdx.channelCache;
            this.assignChannelCacheParser(channelCache);
            this.channelInfo[channelCache.name] = channelCache;
        });
        console.log(this.channelInfo);
        console.log(proto);
        this.updateSectionList(this.indexSection);

        this.setPosition(SECTION_LENGTH + HEADER_LENGTH);
    }

    assignChannelCacheParser(channelCache) {
        channelCache.parser = channelCache.messageType.split(".").reduce((o, i) => o[i], this.protoObj);
    }

    readChunks() {
        let reachEnd = false;

        while (!reachEnd) {
            const section = new SectionData(this.readPosition);
            this.readSectionHead(section);
            this.assignSectionClass(section);

            switch (section.type) {
                case this.SectionType.SECTION_INDEX: {
                    console.log(`Read index section of size: ${section.size}`);
                    this.skipPadding(section.size);
                    reachEnd = true;
                    break;
                }
                case this.SectionType.SECTION_CHANNEL: {
                    console.log(`Read channel section of size: ${section.size}`);
                    this.readSectionBody(section);
                    // console.log(`name: ${section.bodyObject.name}, type: ${section.bodyObject.name.messageType}`);
                    this.updateSectionList(section);
                    break;
                }
                case this.SectionType.SECTION_CHUNK_HEADER: {
                    console.log(`Read chunk header section of size: ${section.size}`);
                    this.readSectionBody(section);
                    this.updateSectionList(section);
                    break;
                }
                case this.SectionType.SECTION_CHUNK_BODY: {
                    console.log(`Read chunk body section of size: ${section.size}`);
                    this.readSectionBody(section);

                    section.bodyObject.messagesList.forEach(msg => {
                        if (!this.channelInfo.hasOwnProperty(msg.channelName) || !this.channelInfo[msg.channelName].parser) {
                            throw new Error(`Error parsing message of chunk body: ${msg.channelName}`);
                        }
                        msg.parsedMessageContent = this.channelInfo[msg.channelName].parser.deserializeBinary(msg.content).toObject();
                    });
                    this.updateSectionList(section);
                    break;
                }
                default: {
                    console.error(`Invalid section type: ${section.type} size ${section.size}`);
                    return false;
                }
            }
        }
    }

    assignSectionClass(section) {
        switch (section.type) {
            case this.SectionType.SECTION_HEADER: {
                section.class = this.Header;
                section.typeName = "SECTION_HEADER";
                break;
            }
            case this.SectionType.SECTION_CHUNK_HEADER: {
                section.class = this.ChunkHeader;
                section.typeName = "SECTION_CHUNK_HEADER";
                break;
            }
            case this.SectionType.SECTION_CHUNK_BODY: {
                section.class = this.ChunkBody;
                section.typeName = "SECTION_CHUNK_BODY";
                break;
            }
            case this.SectionType.SECTION_INDEX: {
                section.class = this.Index;
                section.typeName = "SECTION_INDEX";
                break;
            }
            case this.SectionType.SECTION_CHANNEL: {
                section.class = this.Channel;
                section.typeName = "SECTION_CHANNEL";
                break;
            }
            default: {
                throw new Error(`Assign section class failed: unknown section type: ${section.type}`);
            }
        }
    }

    readSectionHead(section) {
        section.setTypeBuffer(this.readBytes(4), this.SectionType);
        section.setPadBuffer(this.readBytes(4));
        section.setSizeBuffer(this.readBytes(8));

        return section;
    }

    readSectionBody(section) {
        section.setBodyBuffer(this.readBytes(section.size));
    }

    readBytes(size) {
        const buf = this.recording.slice(this.readPosition, this.readPosition + size);
        if (buf.byteLength !== size) {
            throw new Error(`read bytes of size ${size} error from index: ${this.readPosition}, the recording length is ${this.recording.byteLength}`);
        }
        this.readPosition += size;
        return buf;
    }

    skipPadding(size) {
        this.readPosition += size;
    }

    setPosition(position) {
        this.readPosition = position;
    }
}

export {
    RecordParser
};
;