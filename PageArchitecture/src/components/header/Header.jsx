import React, {useState} from "react";
import './header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    const getMenuStyles = (menuOpened) => {
        if(document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && "-100%"}
        }
    }
    return (
        <section className="hWrapper">
            <div className="flexCenter paddings innerWidth hContainer paddingsHeader">
                <img src="./logo.png" alt="logo" width={40} />

                <OutsideClickHandler
                onOutsideClick={()=>{
                    setMenuOpened(false)
                }}
                >
                <div className="flexCenter hMenu"
                style={getMenuStyles(menuOpened)}
                >
                    <a href="">Inicio</a>
                    <a href="">Nosotros</a>
                    <a href="">Servicios</a>
                    <a href="">Proyectos</a>
                    <a href="">Contactos</a>
                </div>
                </OutsideClickHandler>
                <div className="menuIcon" onClick={() => setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size={30}/>
            </div>
            </div>
        </section>
    )
}

export default Header;