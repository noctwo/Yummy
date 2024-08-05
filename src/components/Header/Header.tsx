import Suche from "../Suche/Suche";
import "./Header.css"
const Header = () => {
    return (
        <header>
            <h1>Yummy</h1>
            <img src="/img/yummy-logo.png" className="header-logo"></img>
        <Suche/>
        </header>
    );
}
 
export default Header;