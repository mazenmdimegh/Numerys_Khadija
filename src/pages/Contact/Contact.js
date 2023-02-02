import React from "react";
import "./Contact.scss";
import shape3 from "../../assets/Contact/Rectangle4435.png"
import shape2 from "../../assets/Contact/Rectangle4492.png"
import board from "../../assets/Contact/satisfied-good-looking-female.png"
import boardVM from "../../assets/Contact/satisfied-good-looking-female-with-dark-skin-holds-cell-phone-chats-with-followers-social-networks-points-away-fore-finger-demonstrates-free-space-pro.png"
import circleFB from "../../assets/Contact/Iconawesome-facebook-f.png"
import Insta from "../../assets/Contact/Insta.png"
import In from "../../assets/Contact/Iconawesome-linkedin-in.png"
import twitter from "../../assets/Contact/twitter.png"
import Store from "../../components/Store/Store";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();



    return (
        <div className="contact-wrapper">
            <div className="reussir-wrapper">
                <div className="reussir1">
                    <div className="reussir1-left">
                        <img className="img" src={board} />
                        <img className="imgVM" src={boardVM} />
                        <img className="shape" src={shape3} />
                        <img className="shapeVM" src={shape2} />
                    </div>
                    <div className="reussir1-right">
                        <h2 className="text-centre">Contactez-nous</h2>
                        <p className="text-centre">Nous nous ferons un plaisir de discuter avec vous. Contactez notre équipe pour toutes informations supplémentaires ou pour un éventuel partenariat.</p>
                        <button onClick={() => { navigate("/contact/pargit"); window.location.reload(false) }}>S'inscrire</button>
                        <div className="socialMedia-wrapper">
                            <a href=" https://www.facebook.com/Kadija.io/" className="imgBackgroundFB">
                                <img className="shape" src={circleFB} />
                            </a>
                            <a href="https://www.instagram.com/kadija.io/" className="imgBackgroundInst">
                                <img className="shape" src={Insta} />
                            </a>
                            <a href="https://www.linkedin.com/company/kadija-io/" className="imgBackgroundIn">
                                <img className="shape" src={In} />
                            </a>
                            <a href='https://twitter.com/Kadija_io' className="imgBackgroundSnap">
                                <img className="shape" src={twitter} />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Store/>
        </div>
    )
}
export default Contact;