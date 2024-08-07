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
      <button className="toggle-theme" onClick={switchTheme}>
        {useThemeContext?.theme === "dark" ? (
          <img
            className="dark-switcher switcher"
            src="/img/dark.png"
            alt="Switch to light theme"
          />
        ) : (
          <img
            className="light-switcher switcher"
            src="/img/light.png"
            alt="Switch to dark theme"
          />
        )}
      </button>
      <Link to="/">
        <div className="logo-button" onClick={searchToFalse}>
          <h1 className="yummy-titel">Yummy</h1>
          <div className={`${useThemeContext?.theme}-image-wrapper divwrapper`}></div>
        </div>
      </Link>

      <Suche />
    </header>
  );
};

export default Header;
