import React from 'react'
import "./hero.css"
import imgFondo from '../../assets/ImgFondoInicio.jpg'

const Hero = () => {
    return (
        <section className='heroWrapper'>
            <div className="paddings innerWidth flexCenter heroContainer">
                <div className="flexColStart heroLeft">
                    <div className="heroTitle">
                        <div className="orangeCircle" />
                        <h1>
                            La innovación arquitectónica
                            <br />Te espera
                            <br />¿Estás listo?
                        </h1>
                    </div>
                    <div className='heroDes flexColStart'>
<span className='secondaryText'>Somos una empresa mexicana dedicada a la construccion de proyectos personales como comerciales.</span>
<span className='secondaryText'>Incluimos el total desarrollo de su proyecto desde diseño hasta construccion</span>
                    </div>
                    <div className='flexStart buttonNav'>
                        <button className="button">Proyectos</button>
                        <button className="button">Contacto</button>
                        <button className="button">Acerca </button>
                    </div>
                    <div className='flexColStart stats'>
                        /*Pendientes minute 41*/
                    </div>
                </div>
                <div className="flexCenter heroRight">
                    <div className="imgContainer">
                        <img src={imgFondo} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;