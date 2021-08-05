import Logo from "../miaLand.png"

import "./NavBar"
import NavBar from "./NavBar";

const Header = () =>{
    return (
    <header className="Header"> 
        <img src={Logo} className="HeaderLogo"/>
        <NavBar/>
    </header>
    )
}
export default Header;