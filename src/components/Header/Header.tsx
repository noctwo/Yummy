import { Link } from "react-router-dom";
import Suche from "../Suche/Suche";
import "./Header.css"
const Header = () => {
    return (
        <header>
            <Link to="/">
            <h1>Yummy</h1>
            <img src="/img/yummy-logo.png" className="header-logo"></img>
            </Link>
        <Suche/>
        </header>
    );
}
 
export default Header;