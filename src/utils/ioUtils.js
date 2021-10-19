function readFileText(file) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = (evt) => {
            resolve(evt.target.result);
        };
        reader.readAsText(file);
    });
}

function readFileArrayBuffer(file) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = (evt) => {
            resolve(evt.target.result);
        };
        reader.readAsArrayBuffer(file);
    });
}

function bufferToHex(buffer) {
    return [...new Uint8Array(buffer)]
        .map(b => b.toString(16).padStart(2, "0")).join(" ").toUpperCase();
}

function bufferToHexLimitLength(buffer, length = 300) {
    const bufferString = [...new Uint8Array(buffer)]
        .map(b => b.toString(16).padStart(2, "0")).join(" ").toUpperCase();

    if (bufferString.length <= length) {
        return bufferString;
    } else {
        return <>
            {bufferString.slice(0, length)} ...
            <button onClick={() => {
                console.log(buffer);
                console.log(bufferString);
            }} title={"Click to log the raw buffer to console"}>
                Log buffer
            </button>
        </>;
    }
}


export {
    readFileText,
    readFileArrayBuffer,
    bufferToHexLimitLength,
    bufferToHex
};