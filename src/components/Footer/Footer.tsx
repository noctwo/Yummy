import "./Footer.css"
import { useContext } from "react";
import { SearchContext, ThemeContext } from "../../context/context";

const Footer = () => {

    const useThemeContext = useContext(ThemeContext);

    return (
        <footer>   
        <div className="footer-social-wrapper">

        {useThemeContext?.theme === "light" ? (
        <>
          <img src="/img/instagram.svg"></img>
          <img src="/img/youtube.svg"></img>
            <img src="/img/facebook-f.svg"></img>
            </>
        ) : (
            <>
            <img src="/img/instagram-light.svg"></img>
            <img src="/img/youtube-light.svg"></img>
              <img src="/img/facebook-light.svg"></img>
              </>
        )}
        </div>
        </footer>
    );
}
 
export default Footer;