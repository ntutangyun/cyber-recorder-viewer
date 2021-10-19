import "./App.css";
import TitleBar from "./TitleBar";
import {useEffect, useState} from "react";
import {RecordParser} from "./utils/recordUtils";
import Instructions from "./Instructions";

function App() {
    const [protoObj, setProtoObj] = useState(null);
    const [recording, setRecording] = useState(null);
    const [recordParser, setRecordParser] = useState(null);
    const [sectionList, setSectionList] = useState([]);

    useEffect(() => {
        if (protoObj !== null) {
            const recordParser = new RecordParser(protoObj);
            setRecordParser(recordParser);
        }
    }, [protoObj]);

    useEffect(() => {
        if (recording !== null) {
            console.log(recording);
            recordParser.parse(recording);
            setSectionList(recordParser.sectionList);
        }
    }, [recording]);

    return (
        <div className="App">
            <TitleBar recordParser={recordParser} setProtoObj={setProtoObj} setRecording={setRecording}/>
            <Instructions/>
            {
                sectionList && sectionList.length > 0 &&
                sectionList.map((section, i) =>
                    <div key={i}>
                        <h1>Section {section.typeName}</h1>
                        <hr/>
                        <div>
                            {section.renderSection()}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default App;
