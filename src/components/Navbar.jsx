import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/LogoMediaHub.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* ЛОГОТИП */}
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={Logo} alt="MediaHub TJ" />
      </Link>

      {/* КНОПКА МОБИЛЬНОГО МЕНЮ */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Открыть меню"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* НАВИГАЦИЯ */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/bloggers" onClick={closeMenu}>
          Блогеры
        </Link>

        <Link to="/smm" onClick={closeMenu}>
          SMM
        </Link>

        <Link to="/add-blogger" onClick={closeMenu}>
          Добавить блогера
        </Link>

        <Link to="/contacts" onClick={closeMenu}>
          Контакты
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;