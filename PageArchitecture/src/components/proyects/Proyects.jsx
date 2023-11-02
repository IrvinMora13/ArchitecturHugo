import React from "react";
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css"
import "./proyects.css"
import data from '../../utils/slider.json'
const Proyects = () => {
    return (
        <section className="pWrapper">
            <div className="paddings innerWidth pContainer">
                <div className="pHead flexColStart">
                    <span className="orangeText">
                        Proyectos
                    </span>
                    <span>
                        Construcciones
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Proyects