(this["webpackJsonpcyber-record-viewer"]=this["webpackJsonpcyber-record-viewer"]||[]).push([[0],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_utils_ioUtils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),styles={};function TitleBar(_ref){var recordParser=_ref.recordParser,setProtoObj=_ref.setProtoObj,setRecording=_ref.setRecording,onProtobufLibsSelected=function(){var _ref2=Object(_home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(e){var fileContentList,_i,_Array$from,file,fileContent;return _home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:console.log(e.target.files),console.log(Array.from(e.target.files)),fileContentList=[],_i=0,_Array$from=Array.from(e.target.files);case 4:if(!(_i<_Array$from.length)){_context.next=14;break}return file=_Array$from[_i],console.log("processing: ".concat(file.name)),_context.next=9,Object(_utils_ioUtils__WEBPACK_IMPORTED_MODULE_3__.c)(file);case 9:fileContent=_context.sent,fileContentList.push(fileContent);case 11:_i++,_context.next=4;break;case 14:fileContentList.forEach((function(fileContent){eval(fileContent)})),setProtoObj(proto);case 16:case"end":return _context.stop()}}),_callee)})));return function(e){return _ref2.apply(this,arguments)}}(),onRecordingFileSelected=function(){var e=Object(_home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(t){var n;return _home_tangyun_Desktop_cyber_record_viewer_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_utils_ioUtils__WEBPACK_IMPORTED_MODULE_3__.b)(t.target.files[0]);case 2:n=e.sent,setRecording(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("header",{className:"flex-row justify-content-between",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1",{children:"Apollo Cyber Record Viewer"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label",{children:["import all protobuf_out files",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{type:"file",multiple:!0,onChange:onProtobufLibsSelected})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label",{children:["Select recording file",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{type:"file",onChange:onRecordingFileSelected,disabled:null===recordParser})]})]})}__webpack_exports__.a=TitleBar},19:function(e,t,n){},2:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var i=n(11),s=n(0);function r(e){return new Promise((function(t){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.readAsText(e)}))}function c(e){return new Promise((function(t){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.readAsArrayBuffer(e)}))}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=Object(i.a)(new Uint8Array(e)).map((function(e){return e.toString(16).padStart(2,"0")})).join(" ").toUpperCase();return n.length<=t?n:Object(s.jsxs)(s.Fragment,{children:[n.slice(0,t)," ...",Object(s.jsx)("button",{onClick:function(){console.log(e),console.log(n)},title:"Click to log the raw buffer to console",children:"Log buffer"})]})}},21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),r=n(12),c=n.n(r),o=(n(19),n(20),n(5)),a=(n(21),n(13)),l=n(9),d=n(10),h=n(14),_=n.n(h),b=n(2),j=n(0),u=function(){function e(t){Object(l.a)(this,e),this.startPosition=t,this.type=null,this.typeName=null,this.class=null,this.size=null,this.bodyObject=null,this.typeBuffer=null,this.padBuffer=null,this.sizeBuffer=null,this.bodyBuffer=null}return Object(d.a)(e,[{key:"setTypeBuffer",value:function(e){this.typeBuffer=e,this.type=new DataView(e).getInt32(0,!0)}},{key:"setSizeBuffer",value:function(e){this.sizeBuffer=e,this.size=Number(new DataView(e).getBigInt64(0,!0))}},{key:"setPadBuffer",value:function(e){this.padBuffer=e}},{key:"setBodyBuffer",value:function(e){this.bodyBuffer=e,this.bodyObject=this.class.deserializeBinary(e).toObject()}},{key:"renderSection",value:function(){var e=this;return Object(j.jsxs)("table",{className:"byte-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Position"}),Object(j.jsx)("th",{children:"Byte Size"}),Object(j.jsx)("th",{children:"Raw Bytes"}),Object(j.jsx)("th",{children:"Value"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{className:"byte-table-position-column",children:[this.startPosition," - ",this.startPosition+3]}),Object(j.jsx)("td",{className:"byte-table-byte-size-column",children:"4"}),Object(j.jsx)("td",{className:"byte-table-byte-column",children:Object(b.a)(this.typeBuffer)}),Object(j.jsxs)("td",{children:[this.type," (",this.typeName,")"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{className:"byte-table-position-column",children:[this.startPosition+4," - ",this.startPosition+7]}),Object(j.jsx)("td",{className:"byte-table-byte-size-column",children:"4"}),Object(j.jsx)("td",{className:"byte-table-byte-column",children:Object(b.a)(this.typeBuffer)}),Object(j.jsx)("td",{children:"\xa0-\xa0"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{className:"byte-table-position-column",children:[this.startPosition+8," - ",this.startPosition+15]}),Object(j.jsx)("td",{className:"byte-table-byte-size-column",children:"8"}),Object(j.jsx)("td",{className:"byte-table-byte-column",children:Object(b.a)(this.sizeBuffer)}),Object(j.jsx)("td",{children:this.size})]}),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{className:"byte-table-position-column",children:[this.startPosition+16," - ",this.startPosition+16+this.size-1]}),Object(j.jsx)("td",{className:"byte-table-byte-size-column",children:this.size}),Object(j.jsx)("td",{className:"byte-table-byte-column",children:Object(b.a)(this.bodyBuffer)}),Object(j.jsxs)("td",{children:[2===this.type&&Object(j.jsx)("button",{onClick:function(){return console.log(e.bodyObject)},title:"Click to log the parsed chunk body to the browser console.",children:"Log Chunk Body to Console"}),2!==this.type&&Object(j.jsx)(_.a,{src:this.bodyObject,collapseStringsAfterLength:50,collapsed:3,groupArraysAfterLength:100})]})]})]})]})}}]),e}(),O=function(){function e(t){Object(l.a)(this,e),this.protoObj=t,this.Header=t.apollo.cyber.proto.Header,this.SectionType=t.apollo.cyber.proto.SectionType,this.Index=t.apollo.cyber.proto.Index,this.Channel=t.apollo.cyber.proto.Channel,this.ChunkHeader=t.apollo.cyber.proto.ChunkHeader,this.ChunkBody=t.apollo.cyber.proto.ChunkBody,this.ChannelCache=t.apollo.cyber.proto.ChannelCache,this.recording=null,this.readPosition=0,this.headerSection=null,this.indexSection=null,this.channelInfo={},this.sectionList=[],this.currentChunk=null,console.log(this.SectionType)}return Object(d.a)(e,[{key:"reset",value:function(){this.recording=null,this.readPosition=0,this.headerSection=null,this.indexSection=null,this.channelInfo={},this.sectionList=[],this.currentChunk=null}},{key:"parse",value:function(e){this.reset(),this.recording=e,this.readHeader(),this.readIndex(),this.readChunks(),console.log(this.sectionList)}},{key:"updateSectionList",value:function(e){this.sectionList.push(e),this.sectionList.sort((function(e,t){return e.startPosition-t.startPosition}))}},{key:"readHeader",value:function(){if(console.log("reading header"),this.headerSection=new u(this.readPosition),this.readSectionHead(this.headerSection),this.assignSectionClass(this.headerSection),this.headerSection.type!==this.SectionType.SECTION_HEADER)throw new Error("readHeader: check section type failed: ".concat(this.headerSection.type));return this.readSectionBody(this.headerSection),this.updateSectionList(this.headerSection),this.setPosition(2064),!0}},{key:"readIndex",value:function(){var e=this;if(!this.headerSection.bodyObject.isComplete)throw new Error("recording file is not complete");if(this.setPosition(this.headerSection.bodyObject.indexPosition),this.indexSection=new u(this.readPosition),this.readSectionHead(this.indexSection),this.assignSectionClass(this.indexSection),this.indexSection.type!==this.SectionType.SECTION_INDEX)throw new Error("readHeader: check section type failed");this.readSectionBody(this.indexSection),this.indexSection.bodyObject.indexesList.forEach((function(t){if(t.type===e.SectionType.SECTION_CHANNEL)if(t.channelCache){var n=t.channelCache;e.assignChannelCacheParser(n),e.channelInfo[n.name]=n}else console.log("single channel index does not have channel cache.")})),console.log(this.channelInfo),console.log(proto),this.updateSectionList(this.indexSection),this.setPosition(2064)}},{key:"assignChannelCacheParser",value:function(e){e.parser=e.messageType.split(".").reduce((function(e,t){return e[t]}),this.protoObj)}},{key:"readChunks",value:function(){for(var e=this,t=!1;!t;){var n=new u(this.readPosition);switch(this.readSectionHead(n),this.assignSectionClass(n),n.type){case this.SectionType.SECTION_INDEX:console.log("Read index section of size: ".concat(n.size)),this.skipPadding(n.size),t=!0;break;case this.SectionType.SECTION_CHANNEL:console.log("Read channel section of size: ".concat(n.size)),this.readSectionBody(n),this.updateSectionList(n);break;case this.SectionType.SECTION_CHUNK_HEADER:console.log("Read chunk header section of size: ".concat(n.size)),this.readSectionBody(n),this.updateSectionList(n);break;case this.SectionType.SECTION_CHUNK_BODY:console.log("Read chunk body section of size: ".concat(n.size)),this.readSectionBody(n),n.bodyObject.messagesList.forEach((function(t){if(!e.channelInfo.hasOwnProperty(t.channelName)||!e.channelInfo[t.channelName].parser)throw new Error("Error parsing message of chunk body: ".concat(t.channelName));t.parsedMessageContent=e.channelInfo[t.channelName].parser.deserializeBinary(t.content).toObject()})),this.updateSectionList(n);break;default:return console.error("Invalid section type: ".concat(n.type," size ").concat(n.size)),!1}}}},{key:"assignSectionClass",value:function(e){switch(e.type){case this.SectionType.SECTION_HEADER:e.class=this.Header,e.typeName="SECTION_HEADER";break;case this.SectionType.SECTION_CHUNK_HEADER:e.class=this.ChunkHeader,e.typeName="SECTION_CHUNK_HEADER";break;case this.SectionType.SECTION_CHUNK_BODY:e.class=this.ChunkBody,e.typeName="SECTION_CHUNK_BODY";break;case this.SectionType.SECTION_INDEX:e.class=this.Index,e.typeName="SECTION_INDEX";break;case this.SectionType.SECTION_CHANNEL:e.class=this.Channel,e.typeName="SECTION_CHANNEL";break;default:throw new Error("Assign section class failed: unknown section type: ".concat(e.type))}}},{key:"readSectionHead",value:function(e){return e.setTypeBuffer(this.readBytes(4),this.SectionType),e.setPadBuffer(this.readBytes(4)),e.setSizeBuffer(this.readBytes(8)),e}},{key:"readSectionBody",value:function(e){e.setBodyBuffer(this.readBytes(e.size))}},{key:"readBytes",value:function(e){var t=this.recording.slice(this.readPosition,this.readPosition+e);if(t.byteLength!==e)throw new Error("read bytes of size ".concat(e," error from index: ").concat(this.readPosition,", the recording length is ").concat(this.recording.byteLength));return this.readPosition+=e,t}},{key:"skipPadding",value:function(e){this.readPosition+=e}},{key:"setPosition",value:function(e){this.readPosition=e}}]),e}();var f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Introduction"}),Object(j.jsx)("p",{children:"This website can be used to understand or validate the data saved in the Baidu Apollo's recording files (produced by cyber_recorder command)."}),Object(j.jsx)("h2",{children:"Cyber Recording File"}),Object(j.jsxs)("p",{children:["The recording file is a binary file of a fixed format. It consists of 1 ",Object(j.jsx)("strong",{children:"Header"})," section, 1 ",Object(j.jsx)("strong",{children:"Index"})," section and 1+ ",Object(j.jsx)("strong",{children:"Channel"})," sections and 1+ ",Object(j.jsx)("strong",{children:"Chunk HEADER + Chunk Body"})," sections, saved in the following order"]}),Object(j.jsx)("code",{children:"[Header Section] [empty padding] [Channel Section 1] [Channel Section 2] ... [Chunk Header 1] [Chunk Body 1] [Chunk Header 2] [Chunk Body 2] ... [Index Section]"}),Object(j.jsx)("h2",{children:"Section Binary format"}),Object(j.jsx)("p",{children:"Each section has a fixed length section head (16 bytes) followed by flexible length section body. Sections have the following structure: "}),Object(j.jsxs)("table",{className:"instruction-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"position"}),Object(j.jsx)("th",{children:"data"}),Object(j.jsx)("th",{children:"Description"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"0 - 3"}),Object(j.jsx)("td",{children:"XX XX XX XX"}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("div",{children:["The first four bytes records signed 32 bit integer (little endian) whose value is the section type. The section types are defined in the file: ",Object(j.jsx)("code",{children:"cyber/proto/record.proto"})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:'"SECTION_HEADER": 0'}),Object(j.jsx)("li",{children:'"SECTION_CHUNK_HEADER": 1'}),Object(j.jsx)("li",{children:'"SECTION_CHUNK_BODY": 2'}),Object(j.jsx)("li",{children:'"SECTION_INDEX": 3'}),Object(j.jsx)("li",{children:'"SECTION_CHANNEL": 4'})]})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"4 - 7"}),Object(j.jsx)("td",{children:"00 00 00 00"}),Object(j.jsx)("td",{children:"These four bytes are empty for padding purpose."})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"8 - 15"}),Object(j.jsx)("td",{children:"XX XX XX XX XX XX XX XX"}),Object(j.jsx)("td",{children:"The next 8 bytes records signed 64 bit integer (little endian) whose value is the number of bytes of the section body (which follows the section head), a.k.a. section body size."})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"16 - (16 + section body size - 1)"}),Object(j.jsx)("td",{children:"XX XX XX XX ..."}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("div",{children:["The section body is parsed according to the section type defined in the section head. Section body are the encoded messages using protobuf libraries and thus can be decoded using corresponding libraries generated by ",Object(j.jsx)("code",{children:"protoc"}),"."]}),Object(j.jsxs)("div",{children:["For example, the first section is usually the Header Section, and the section body can be decoded by: ",Object(j.jsx)("code",{children:"Header.deserializeBinary(buf).toObject()"}),", where ",Object(j.jsx)("code",{children:"Header"})," is imported from protobuf libraries generated by ",Object(j.jsx)("code",{children:"protoc"}),"."]})]})]})]})]}),Object(j.jsx)("h2",{children:"Section Semantics"}),Object(j.jsxs)("table",{className:"instruction-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Section Type"}),Object(j.jsx)("th",{children:"Description"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"SECTION_HEADER"}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{children:"Header section records the following information:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"chunk_interval: limits the duration of each chunk"}),Object(j.jsx)("li",{children:"segment_interval: limits the duration of each recording segment file"}),Object(j.jsx)("li",{children:"index_position: the starting position of the last index section"}),Object(j.jsx)("li",{children:"chunk_number: number of chunks saved in this file"}),Object(j.jsx)("li",{children:"channel_number: number of channels in total in this file"}),Object(j.jsx)("li",{children:"begin_time"}),Object(j.jsx)("li",{children:"end_time"}),Object(j.jsx)("li",{children:"message_number: number of messages in total"}),Object(j.jsx)("li",{children:"size: total file size"}),Object(j.jsx)("li",{children:"..."})]})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"SECTION_CHANNEL"}),Object(j.jsx)("td",{children:'Channel Section records the channel name and message type. e.g. name: "/apollo/perception/obstacles" and type: "apollo.perception.PerceptionObstacles"'})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"SECTION_CHUNK_HEADER"}),Object(j.jsx)("td",{children:"The chunk header section indicates the start of a message chunk. It records the chunk's start timestamp and end timestamp as well as total number of messages saved in the chunk body section."})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"SECTION_CHUNK_BODY"}),Object(j.jsxs)("td",{children:[Object(j.jsx)("div",{children:"The chunk body section follows its chunk header section. It contains a message list which consists of all the cyber messages recorded during the period of the current chunk, ordered by message time. Each message in the list contains the following fields:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"channelName: e.g. /apollo/sensor/gnss/corrected_imu"}),Object(j.jsx)("li",{children:"time: message timestamp"}),Object(j.jsxs)("li",{children:["content: a string representing the protobuf encoded binary data of the message. The content of the message can be decoded by ",Object(j.jsx)("code",{children:"MessageClass.deserializeBinary(string).toObject()"}),", where ",Object(j.jsx)("code",{children:"MessageClass"})," is imported from protobuf libraries generated by ",Object(j.jsx)("code",{children:"protoc"})]})]})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"SECTION_INDEX"}),Object(j.jsx)("td",{children:"The index section is located at the end of each recording file. Its starting position is saved in the Header section. It saves the index list which records the starting positions and other information (e.g. number of messages, begin time, end time etc.) of all the Channel sections, Chunk Header sections and Chunk Body sections."})]})]})]}),Object(j.jsx)("h2",{children:"Usage"}),Object(j.jsxs)("ol",{children:[Object(j.jsxs)("li",{children:[Object(j.jsxs)("div",{children:["Generate protobuf libraries using ",Object(j.jsx)("code",{children:"protoc"}),"."]}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Enter Apollo terminal"}),Object(j.jsxs)("li",{children:["Create a temporary folder, e.g. ",Object(j.jsx)("code",{children:"/apollo/protobuf_out"})]}),Object(j.jsxs)("li",{children:["Use following command to generate protobuf libraries and save to the ",Object(j.jsx)("code",{children:"protobuf_out"})," folder ",Object(j.jsx)("br",{}),Object(j.jsx)("code",{children:'find modules/ cyber/ -name "*.proto" | grep -v node_modules | xargs protoc --js_out=import_style=library,binary:protobuf_out'})]}),Object(j.jsx)("li",{children:"If you encounter errors related to conflicts in yolo.proto and yolo4.proto, you may comment out unused proto files and try again."})]})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{children:"Import the generated JavaScript libraries"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:'Navigate to the top of this website, and click the "Choose files" button in the middle.'}),Object(j.jsxs)("li",{children:["Navigate to the ",Object(j.jsx)("code",{children:"protobuf_out"})," folder and select all the ",Object(j.jsx)("code",{children:".js"})," files"]}),Object(j.jsx)("li",{children:'Wait for some time and let the browser load those libraries. When ready, the "choose file" button on the right will be enabled.'})]})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{children:"Import the cyber recording file. Currently only supports one file at a time."}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:'Navigate to the top of the website, and click the "Choose file" button at the right end.'}),Object(j.jsx)("li",{children:"Select any recording file"}),Object(j.jsx)("li",{children:"Wait for some time to parse the file. When the parsing is done, you can scroll down and check out the results."})]})]})]}),Object(j.jsx)("h2",{children:"Author"}),Object(j.jsxs)("p",{children:["Apollo's \u793e\u533a\u5e03\u9053\u5e08 ",Object(j.jsx)("strong",{children:"Tang Yun"})," (ntutangyun [at] gmail [dot] com)"]}),Object(j.jsxs)("p",{children:["My current research interest is ",Object(j.jsx)("strong",{children:"software testing of Autonomous vehicles"}),". Feel free to drop me an email for research collaborations. :)"]}),Object(j.jsx)("p",{children:"The repository address is https://github.com/ntutangyun/cyber-recorder-viewer. Feel free to create forks and pull requests."}),Object(j.jsx)("p",{children:"Kindly acknowledge if you use any code from this repository :)"})]})};var y=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(null),c=Object(o.a)(r,2),l=c[0],d=c[1],h=Object(i.useState)(null),_=Object(o.a)(h,2),b=_[0],u=_[1],y=Object(i.useState)([]),p=Object(o.a)(y,2),x=p[0],m=p[1];return Object(i.useEffect)((function(){if(null!==n){var e=new O(n);u(e)}}),[n]),Object(i.useEffect)((function(){null!==l&&(console.log(l),b.parse(l),m(b.sectionList))}),[l]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(a.a,{recordParser:b,setProtoObj:s,setRecording:d}),Object(j.jsx)(f,{}),x&&x.length>0&&x.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:["Section ",e.typeName]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:e.renderSection()})]},t)}))]})};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d0037e88.chunk.js.map