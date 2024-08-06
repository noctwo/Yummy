import { Link } from "react-router-dom";
import Suche from "../Suche/Suche";
import "./Header.css";
import { useContext } from "react";
import { SearchContext, ThemeContext } from "../../context/context";

const themesArray = ["light", "dark"];

const Header = () => {
  const displaySearch2 = useContext(SearchContext);
  const useThemeContext = useContext(ThemeContext);

  const searchToFalse = () => {
    displaySearch2?.setDisplaySearch(false);
  };

  const switchTheme = () => {
    if (useThemeContext) {
      const nextTheme =
        themesArray[
          (themesArray.indexOf(useThemeContext.theme) + 1) % themesArray.length
        ];
      useThemeContext?.setTheme(nextTheme);
    }
  };

  return (
    <header>
      <div className="toggleDark">
        <button className="toggle-theme" onClick={switchTheme}>
          <div className="dark-image-wrapper">
            {/* <img src="/img/sun (1).svg" alt="" /> */}
          </div>
        </button>
      </div>
      <Link to="/">
        <button className="logo-button" onClick={searchToFalse}>
          <h1 className="yummy-titel">Yummy</h1>
          <div className="logo-image-wrapper">
            {/* <img src="/img/yummy-logo.png" className="header-logo"></img> */}
          </div>
        </button>
      </Link>
      <Suche />
    </header>
  );
};

export default Header;
