import { useState } from "react";
import "./Header.css";

const Header = (props) => {
  /* ===================  TOGGLE MENU =================== */
  const [Toggle, showMenu] = useState(false);
  const [themeIcon, setThemeIcon] = useState(<i class="uil uil-moon"></i>);

  const [curTheme, setCurTheme] = useState("Bright");
  const switchTheme = () => {
    props.themeSwitch();
    if (curTheme === "Bright") {
      setCurTheme("Dark");
      setThemeIcon(
        <>
          <i class="uil uil-brightness"></i>
        </>
      );
    } else {
      setCurTheme("Bright");
      setThemeIcon(<i class="uil uil-moon"></i>);
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          AN
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>{" "}
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
            <li className="nav__item">
              <a onClick={switchTheme} className="nav__link nav__theme_switch">
                {themeIcon}
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu((prevValue) => !prevValue)}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => showMenu((prevValue) => !prevValue)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
