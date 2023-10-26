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