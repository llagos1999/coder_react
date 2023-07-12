import React from "react";
import '../styles.css';
import CartWidget from "../navBar/CartWidget";
const Menu = () => {
    return (
    <ul className="menu">
        <li><a href="#">Productos</a></li>
        <li><a href="#">Categorías</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <li><CartWidget/></li>
    </ul>
    )
}
export default Menu;