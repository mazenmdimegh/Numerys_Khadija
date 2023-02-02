import React from "react";
import "./Compte-Professionnel.scss";
import women from "../../assets/Compte-Pro/happy-arab-woman-hijab-with-laptop-portrait-smiling-girl-posing-green-studio.png";
import item1 from "../../assets/Compte-Pro/Groupe9824.png";
import item0 from "../../assets/Tracé23603.png";
import item2 from "../../assets/Compte-Pro/Composant88–1.png";
import item3 from "../../assets/Compte-Pro/Ellipse11.png";
import item4 from "../../assets/Compte-Pro/Ellipse12.png";
import item5 from "../../assets/Compte-Pro/Tracé23587.png";
import item6 from "../../assets/Compte-Pro/Tracé23590.png";
import item7 from "../../assets/Compte-Pro/Tracé23592.png";
import hideItem from "../../assets/Compte-Pro/Tracé23603.png";
import shape from "../../assets/Compte-Pro/Tracé23593.png";
import shape2 from "../../assets/Compte-Pro/Ellipse685.png";
import board from "../../assets/Compte-Pro/asian-muslim-lady-write-information-strategy-reminder-glass-board-new-normal-officeVD.png";
import boardVM from "../../assets/Compte-Pro/asian-muslim-lady-write-information-strategy-reminder-glass-board-new-normal-office.png";
import check from "../../assets/Compte-Pro/Iconawesome-check-circle.png";
import graph from "../../assets/Compte-Pro/colorful-business-graph-3d-render-illustration-removebg-preview (2).png";
import Store from "../../components/Store/Store";
import { useNavigate } from "react-router-dom";


const CompteProfessionnel = () => {
    const navigate = useNavigate();



    return (
        <div className="compte-professionnel-Wrapper">
            <div className="creez-wrapper">
                <div className="creez-left">
                    <h1>Créez votre boutique en ligne et maximisez vos ventes avec Kadija</h1>
                    <p>Avec Kadija nous vous aidons à <span>développer votre business, améliorer votre croissance et augmenter vos ventes en mettant le don au cœur de vos échanges.</span> Que vous soyez un nouveau vendeur ou une star de l’e-Commerce, préparez vous à atteindre votre pique de croissance et <span>rejoignez une communauté philanthropique qui valorise l’entraide et soutient les actions charitables.</span></p>
                    <button onClick={() => { navigate("/compte-professionnel/pro"); window.location.reload(false)}}>S'inscrire</button>
                </div>
                <div className="creez-right">
                    <img className="women" src={women} />
                    <img className="item0" src={item0} />
                    <img className="item1" src={item1} />
                    <img className="item2" src={item2} />
                    <img className="item3" src={item3} />
                    <img className="item4" src={item4} />
                    <img className="item5" src={item5} />
                    <img className="item6" src={item6} />
                    <img className="item7" src={item7} />
                    <img className="hideItem" src={hideItem} />
                </div>
            </div>
            <div className="reussir-wrapper">
                <div className="reussir1">
                    {/* <div className="reussir1-leftVM">
                        <img className="img" src={boardVM} />
                        <img className="shape" src={shape2} />
                    </div> */}
                    <div className="reussir1-left">
                        <img className="img" src={board} />
                        <img className="imgVM" src={boardVM} />
                        <img className="shape" src={shape} />
                        <img className="shape2" src={shape2} />
                    </div>
                    <div className="reussir1-right">
                        <h2 className="text-centre">Réussir sur Kadija</h2>
                        <p className="text-centre">Réussir un projet professionnel en ligne n’est pas une chose facile surtout de nos jours où chacun cherche à créer sa propre boutique et réaliser un maximum de profit par tous les moyens.</p>
                        <p className="text-centre">Avec nous c’est différent, tout est pensé pour être simple, pratique et efficace. Nous vous aiderons à <span>développer votre activité e-Commerce</span> et nous vous offrirons de nombreux avantages qui vous permettront <span>d'atteindre rapidement le succès professionnel auquel vous aspirez.</span> </p>
                        <p className="bold-color"><span><img className="check" src={check} /></span>Créez votre boutique en ligne</p>
                        <p>et <span>profitez des avantages de chaque réseau social lié à Kadija</span> pour mieux vous faire connaitre et promouvoir votre marque et votre notoriété en toute simplicité.</p>
                        <p className="bold-color"><span><img className="check" src={check} /></span>Développez votre chiffre d’affaires</p>
                        <p>via notre marketplace et <span>permettez à votre activité de s’ouvrir à de nouveaux marchés en étant présent 24h/24 7j/7</span> et en touchant une plus grande audience.</p>
                        <p className="bold-color"><span><img className="check" src={check} /></span>Faites du bien à votre business mais également aux autres</p>
                        <p>et profitez <span>d’un meilleur référencement en transformant votre budget marketing en dons</span> qui soutiendront nos associations partenaires.</p>
                        <p className="bold-color"><span><img className="check" src={check} /></span>Soyez Kadija</p>
                        <p>et faites partie d’une communauté qui s’articule autour de <span>valeurs communes telles que l’honnêteté, la transparence et l’empathie</span> et gérez vos transactions de manière optimale et surtout sécurisée.</p>
                    </div>
                </div>
            </div>
            <div className="donner-wrapper">
                <div className="donner-text">
                    <h1>Donner plus  pour gagner plus ! </h1>
                    <p>Avec Kadija vous pouvez faire des dons pour soutenir des causes humanitaires qui vous tiennent à cœur ! En allouant un pourcentage sur vos ventes, vous participez au financement de l'association ou de l'école de votre choix. Ces dons vous permettront d'améliorer votre référencement et d’atteindre un très grand nombre d’utilisateurs.</p>
                    <p className="nous"><span >Nous croyons à l’idée de faire du bien en toute simplicité.</span></p>
                    <button onClick={() => { navigate("/compte-professionnel/pro"); window.location.reload(false)}}>S'inscrire</button>
                </div>
                <div className="donner-img">
                <img className="img" src={graph} />
                </div>
            </div>
            <Store/>
        </div>
    )
}
export default CompteProfessionnel;