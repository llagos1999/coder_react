import React from "react";
import './styles.css';
import NavBar from "./navBar/navBar";
const Header = ({logo, menuItem}) => {
    return (
        <header className="header">
            <a href="/" className="logo">Panicami</a>
            <NavBar/>
        </header>
    )
}
export default Header;