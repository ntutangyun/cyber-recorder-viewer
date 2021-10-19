function SectionRenderer({recordParser, section}) {
    return <div>
        <h1>Section {section.typeName}</h1>
        <hr/>
        <div>
            {section.renderSection()}
        </div>
    </div>;
}

export default SectionRenderer;