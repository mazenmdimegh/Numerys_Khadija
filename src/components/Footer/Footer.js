import React, { useEffect, useState } from "react";
import "./Footer.scss";
import logo from "../../assets/Logo.png";


const Footer = (Joke) => {

    return (
        <div >
            <div className="footer-wrapper">
                <div className="firstPart">
                    <div className="left">
                        <img src={logo}></img>
                        <h5 className="kad">Kadija</h5>
                        <p>Plus qu’une simple plateforme de Marketplace, un vrai lieu de rencontre communautaire dont la mission consiste à soutenir les échanges de produits islamiques et ethniques, le tout en animant un écosystème collaboratif qui respecte l’identité de ses utilisateurs et soutient une culture philanthropique</p>
                        <h5>Besoin d’aide</h5>
                        <p>Vous avez une question relative à votre e-commerce, vos produits exposés sur Kadija ainsi que sur nos différentes prestations ? N’hésitez pas à nous contacter en partageant vos questionnements, votre satisfaction est notre priorité !</p>
                    </div>
                    <div className="right">
                        <div className="left1">
                            <h4>A propos de Kadija</h4>
                            <p>Qui sommes-nous ?<br></br>
                                Rejoignez-nous<br></br>
                                Blog<br></br>
                                Les prestations<br></br>
                                Besoin d’aide ?</p>
                        </div>
                        <div className="right1">
                            <h4>Contact</h4>
                            <p>contact@kadija.io</p>
                        </div>

                    </div>
                </div>
                <hr></hr>
                <div className="secondPart">
                    <div className="CopyRight">
                        <p>Copyright © 2022 Kadija, Tous droits réservés.</p>
                    </div>
                    <div className="Terms">
                        <p>Termes et Conditions</p>
                        <p>Politique de confidentialité</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;