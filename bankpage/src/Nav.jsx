import { Link } from 'react-router-dom';
import "./Nav.css"

function Nav() {

    return <>
    <header className="navbar">
      <ul className="nav_links">
        <li id='logo_container'>
            <img id="logo" src="/assets/logo.png" alt="Goldman Sachs Logo" />
        </li>
        <li className="nav_button"><Link to="/">Home</Link></li>
        <li className="nav_button"><Link to="/team">Team</Link></li>
        {/*<li><p id="gs_title">Goldman Sachs</p></li>*/}
      </ul>
    </header>
    
    </>
}

export default Nav