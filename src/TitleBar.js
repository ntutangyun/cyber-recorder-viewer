/* eslint-disable no-undef */
import React from "react";
import {readFileArrayBuffer, readFileText} from "./utils/ioUtils";

const styles = {};

function TitleBar({recordParser, setProtoObj, setRecording}) {
    const onProtobufLibsSelected = async (e) => {
        console.log(e.target.files);
        console.log(Array.from(e.target.files));

        const fileContentList = [];
        for (const file of Array.from(e.target.files)) {
            console.log(`processing: ${file.name}`);
            const fileContent = await readFileText(file);
            fileContentList.push(fileContent);
        }

        fileContentList.forEach(fileContent => {
            eval(fileContent);
        });

        setProtoObj(proto);
    };

    const onRecordingFileSelected = async (e) => {
        const arrayBuffer = await readFileArrayBuffer(e.target.files[0]);
        setRecording(arrayBuffer);
    };

    return (
        <header className={"flex-row justify-content-between"}>
            <h1>Apollo Cyber Record Viewer</h1>
            <label>
                import all protobuf_out files
                <input type="file" multiple onChange={onProtobufLibsSelected}/>
            </label>
            <label>
                Select recording file
                <input type="file" onChange={onRecordingFileSelected} disabled={recordParser === null}/>
            </label>
        </header>
    );
}

export default TitleBar;
