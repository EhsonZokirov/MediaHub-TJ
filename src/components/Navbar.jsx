import { Link } from "react-router-dom";
import Logo from "../images/LogoMediaHub.png";
function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="MediaHub TJ" />
      </Link>
      {/* <a href="/" className="logo">
        Media<span>Hub</span>
      </a> */}

      <div className="nav-links">
        <a href="/bloggers">
          Блогеры
        </a>

        <a href="/smm">
          SMM
        </a>

        <a href="Contacts">
          Контакты
        </a>

      </div>

    </nav>
  );
}

export default Navbar;