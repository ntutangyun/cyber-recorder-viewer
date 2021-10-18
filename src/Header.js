/* eslint-disable no-undef */
import React from "react";

const styles = {};

function readFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = (evt) => {
            resolve(evt.target.result);
        };
        reader.readAsText(file);
    });
}

function Header() {
    const onProtobufLibsSelected = async (e) => {
        console.log(e.target.files);
        console.log(Array.from(e.target.files));

        const fileContentList = [];
        for (const file of Array.from(e.target.files)) {
            const fileContent = await readFile(file);
            fileContentList.push(fileContent);
        }

        console.log(fileContentList);

        fileContentList.forEach(fileContent => {
            eval(fileContent);
        });

        console.log(proto);
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
                <input type="file"/>
            </label>

        </header>
    );
}

export default Header;
