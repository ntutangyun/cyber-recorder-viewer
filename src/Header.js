const styles = {};

function Header() {
    return (
        <header className={"flex-row justify-content-between"}>
            <h1>Apollo Cyber Record Viewer</h1>
            <input type="file"/>
        </header>
    );
}

export default Header;
