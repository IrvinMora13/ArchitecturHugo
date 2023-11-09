import React from "react";
//import { } from 'swiper/element/bundle';
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css"
import "./proyects.css"
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/common";
const Proyects = () => {
    return (
        <section className="pWrapper">
            <div className="paddings innerWidth pContainer">
                <div className="pHead flexColStart">
                    <span className="orangeText">
                        Proyectos
                    </span>
                    <span className="primaryText">
                        Construcciones
                    </span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {data.map((card,i)=>(
                            <SwiperSlide key={i}>
                                <div className="pCard flexColStart">
                                    <img src={card.image} alt="home" />
                                    <span className="secondaryText pName">
                                        <span className="primaryText">
                                        {card.name}
                                        </span>
                                        <span className="secondarytext">
                                        {card.detail}
                                        </span>
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Proyects;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter pButtons">
            <button onClick={() => swiper.slidePrev()}>
                &lt;
            </button>
            <button onClick={() => swiper.slideNext()}>
                &gt;
            </button>
        </div>
    )
}