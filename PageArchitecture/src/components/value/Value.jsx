import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Img from "../../assets/ImgFondoInicio.jpg"
import './value.css';
import data from "../../utils/accordion"

const Value = () => {
    const [accordionItems, setAccordionItems] = useState(data.map(() => false)); // Initialize all items as collapsed

    const handleAccordionItemClick = (index) => {
        const newAccordionItems = [...accordionItems];
        newAccordionItems[index] = !newAccordionItems[index];
        setAccordionItems(newAccordionItems);
    }

    return (
        <section className="vWrapper">
            <div className="paddings innerWidth flexCenter vContainer">
                {/* Left Images */}
                <div className="vLeft">
                    <div className="imageContainer">
                        <img src={Img} alt="" />
                    </div>
                </div>
                {/* Right Information */}
                <div className="flexColStart vRight">
                    <span className="orangeText">Nuestro Valor</span>
                    <span className="primaryText">Que te podemos ofrecer</span>
                    <span className="secondaryText">Nosotros siempre estamos listos para ayudar a cualquier proyecto.
                        <br />
                        En cualquier lugar ofreciendo los mejores servicios
                        <br />
                        Desde el diseño hasta la finalización del proyecto
                    </span>
                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {data.map((item, i) => (
                            <AccordionItem
                                className={`accordionItem ${accordionItems[i] ? "expanded" : "collapsed"}`}
                                key={i}
                                uuid={i}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton
                                        className="accordionButton flexCenter"
                                        onClick={() => handleAccordionItemClick(i)}
                                    >
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value;
