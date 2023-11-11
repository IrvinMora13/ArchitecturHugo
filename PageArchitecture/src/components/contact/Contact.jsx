import React from "react";
import "./contact.css"
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () =>{
    return(
        <section className="cWrapper">
            <div className="paddings innerwidth flexCenter cContainer">
                {/* leftSide */}
                <div className="flexColStart cLeft">
                    <span className="orangeText">Nuestros Contactos</span>
                    <span className="primaryText">Contactanos</span>
                    <span className="secondaryText">Nosotros siempre estamos disponibles para atenderte y ofrecerte los mejores servicios</span>

                    <div className="flexColStart contactModes">
                        {/* first Row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">639-123-4212</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call now</div>
                            </div>

                            {/*Secondary mode*/}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">639-123-4212</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat now</div>
                            </div>
                        </div>

                        {/* Second Row*/}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Video Call</span>
                                        <span className="secondaryText">639-123-4212</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video call now</div>
                            </div>

                            {/*Fourth mode*/}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Messega</span>
                                        <span className="secondaryText">639-123-4212</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Messege now</div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* RightSide */}
                <div className="cRight">
                    <div className="imageContainer">
                        <img src="./P1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;