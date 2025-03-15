import "./Nav.css"

function Nav() {

    return <>
    <header className="navbar">
      <ul className="nav_links">
        <li id='logo_container'>
            <img id="logo" src="/assets/logo.png" alt="Goldman Sachs Logo" />
        </li>
        <li className="nav_button"><a>Home</a></li>
        <li className="nav_button"><a>Team</a></li>
        {/*<li><p id="gs_title">Goldman Sachs</p></li>*/}
      </ul>
    </header>
    
    </>
}

export default Nav