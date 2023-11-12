import React from "react";
import './header.css';
import Logo from "../../assets/Logo.png";

const Header = () => {
    return (
        <section className="hWrapper">
            <div className="flexCenter paddings innerWidth hContainer paddingsHeader">
                <img src="./logo.png" alt="logo" width={40} />
                <div className="flexCenter hMenu">
                    <a href="">Inicio</a>
                    <a href="">Nosotros</a>
                    <a href="">Servicios</a>
                    <a href="">Proyectos</a>
                    <a href="">Contactos</a>
                </div>
            </div>
        </section>
    )
}

export default Header;