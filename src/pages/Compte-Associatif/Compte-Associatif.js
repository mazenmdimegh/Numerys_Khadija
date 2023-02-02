import React from "react";
import "./Compte-Associatif.scss";
import business from "../../assets/Compte-Ass/6be40be7fb7b.png";
import shape from "../../assets/Compte-Ass/Ellipse693.png";
import shape3 from "../../assets/Compte-Ass/Ellipse688.png";
import shape2 from "../../assets/Compte-Ass/Tracé23597.png";
import board from "../../assets/Compte-Ass/elderly-person-children-holding-plant(1).png";
import boardVM from "../../assets/Compte-Ass/elderly-person-children-holding-plant(1)VM.png";
import Store from '../../components/Store/Store';
import { useNavigate } from "react-router-dom";

const CompteAssociatif = () => {
    const navigate = useNavigate();


    return (
        <div className="compte-Associatif-wrapper">
            <div className="Nations-wrap">
                <div className="quran">
                    <h2> Donnez de l’élan à votre projet associatif en collectant un maximum de dons !</h2>
                    <p>Vous êtes une association ? Vous souhaitez engager plus de monde dans votre cause et collecter un maximum de dons en vue de mener à bien votre mission ?<br></br>
                        Kadija vous offre un espace communautaire au sein duquel vous pouvez développer votre notoriété et collecter un maximum de ressources indispensables à votre développement.</p>
                    <button onClick={() => { navigate("/compte-associatif/ass"); window.location.reload(false) }}>S'inscrire</button>
                </div>
                <div className="business">
                    <img className="img" src={business} />
                    <img className="shape" src={shape} />
                </div>
                <div className="back-right"></div>
            </div>
            <div className="Nations-wrapVM">
                <div className="business">
                    <img className="img" src={business} />
                    <img className="shape" src={shape} />
                </div>
                <div className="quran">
                    <h2> Donnez de l’élan à votre projet associatif en collectant un maximum de dons !</h2>
                    <p>Vous êtes une association ? Vous souhaitez engager le plus de monde dans votre cause et collecter un maximum de dons en vue de mener à bien votre mission ?<br></br>
                        Kadija vous offre un espace communautaire au sein duquel vous pouvez développer votre notoriété et collecter un maximum de ressources indispensables à votre développement.</p>
                    <button onClick={() => { navigate("/compte-associatif/ass"); window.location.reload(false) }}>S'inscrire</button>
                </div>
                <div className="back-right"></div>
            </div>
            <div className="reussir-wrapper">
                <div className="reussir1">
                    {/* <div className="reussir1-leftVM">
                        <img className="img" src={boardVM} />
                        <img className="shape" src={shape2} />
                    </div> */}
                    <div className="reussir1-left">
                        <img className="imgVM" src={boardVM} />
                        <img className="img" src={board} />
                        {/* <img className="imgVM" src={boardVM} /> */}
                        <img className="shape" src={shape3} />
                        <img className="shape2" src={shape2} />
                    </div>
                    <div className="reussir1-right">
                        <h2 className="text-centre">Engagez plus de donateurs dans votre cause et soutenez votre croissance</h2>
                        <p className="text-centre">Il est vrai que la philanthropie communautaire n’est pas un phénomène nouveau, il s’agit d’une pratique inclusive et bienveillante aperçue dans la plupart des cultures et communautés, voire toutes. Elle se traduit à travers des pratiques d'échange, de solidarité et de développement communautaire qui existent depuis toujours…</p>
                        <p className="text-centre">Toutefois, malgré une attention renouvelée à ce mouvement communautaire, <span>il existe très peu d’actions qui aident réellement à investir dans des approches philanthropiques communautaires et c’est là qu’intervient le concept Kadija… </span></p>
                        <p>Nous sommes là pour <span>vous aider à vous distinguer et à refléter au mieux votre cause afin d’engager un maximum de donateurs.</span>  En plaçant le don au cœur de notre stratégie de référencement, nous incitons nos utilisateurs à s’impliquer davantage dans ce processus inclusif et humanitaire. Avec nous, vous aurez plus de chance de collecter des fonds et de toucher un plus grand public.</p>
                    </div>
                </div>
            </div>
            <Store />
        </div>
    )
}
export default CompteAssociatif;