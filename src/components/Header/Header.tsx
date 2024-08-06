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
      <button className="dark" onClick={switchTheme}>
        Dark
      </button>
      <Link to="/">
        <button className="logo-button" onClick={searchToFalse}>
          <h1>Yummy</h1>
          <img src="/img/yummy-logo.png" className="header-logo"></img>
        </button>
      </Link>
      <Suche />
    </header>
  );
};

export default Header;
