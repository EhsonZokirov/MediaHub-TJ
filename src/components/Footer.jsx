import { Link } from "react-router-dom";
import Logo from "../images/LogoMediaHub.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="MediaHub TJ" />
          </Link>

          <p>
            Платформа для поиска блогеров и размещения рекламы в Таджикистане.
          </p>
        </div>


        <div className="footer-links">
          <h3>Навигация</h3>

          <a href="/">Главная</a>
          <a href="/bloggers">Блогеры</a>
          <a href="/smm">SMM</a>
          <a href="/contacts">Контакты</a>
        </div>


        <div className="footer-links">
          <h3>Для блогеров</h3>

          <a href="/add-blogger">
            Добавить блогера
          </a>

          <a href="/contacts">
            Связаться с нами 
          </a>
        </div>

      </div>


      <div className="footer-bottom">
        <p>
          © 2026 MediaHub TJ. Все права защищены.
        </p>

        <p>
          Сделано в Таджикистане 🇹🇯
        </p>
      </div>
    </footer>
  );
}

export default Footer;