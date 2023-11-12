import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <section className="fWrapper">
            <div className="paddings innerWidth flexCenter fContainer">

                {/*left Side */}
                <div className="flexColStart fLeft">
                    <img src="./logo.png" alt="" width={120} />
                    <span className='secondaryText'>
                    Innovación arquitectónica al <br/>
                    alcance de todos
                    </span>
                </div>
                
                {/*Right Side */}
                <div className="flexColStart fRight">
                    <span className='primaryText'>Informacion</span>
                    <span className='secondaryText'> 145, Col. Linda vista, Ave 14, Delicias Chihuahua</span>
                    <div className="flexCenter fMenu">
                        <span>Servicios</span>
                        <span>Proyextos</span>
                        <span>Servicios</span>
                        <span>Contacto</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;