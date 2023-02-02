import React, { useEffect, useState } from "react";
import business from "../../assets/team-multiethnical-diverse-business-people-two-men-women-standing-modern-office-discussing-working-together-using-laptop-185321921.png";
import shape from "../../assets/Tracé23587.png";
import shape2 from "../../assets/Tracé23589.png";
import shape3 from "../../assets/Tracé23588.png";
import volunteers from "../../assets/volunteers-packing-charity-boxes-with-food-clothes.png";
import volunteersVM from "../../assets/HomeVM/volunteers-packing-charity-boxes-with-food-clothes.png";
import img1 from "../../assets/image1.png";
import img21 from "../../assets/image2.1.png";
import img22 from "../../assets/image2.2.png";
import img31 from "../../assets/image3.1.png";
import img32 from "../../assets/image3.2.png";
import img41 from "../../assets/image4.1.png";
import img42 from "../../assets/image4.2.png";
import img51 from "../../assets/image5.1.png";
import img52 from "../../assets/image5.2.png";
import women from "../../assets/two-women-in-white-hijab-veils-in-office.png";
import womenVM from "../../assets/HomeVM/two-women-in-white-hijab-veils-in-office.png";
import phones from "../../assets/phones.png";
import apple from "../../assets/apple.png";
import android from "../../assets/android.png";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();


    return (
        <div className="Home-wrapper">
            <div className="marketplace">
                <h2>La première Marketplace dédiée aux produits islamiques et ethniques</h2>
            </div>
            <div className="roles-inscr">
                <div className="particulier">
                    <div className="particulier-content">
                        <h1>Particulier</h1>
                        <p>Organisez votre vide grenier en ligne et gagnez de l’argent tout en soutenant des causes humanitaires avec Kadija.</p>
                        <button onClick={() => { navigate("/par"); window.location.reload(false)}}>S'inscrire</button>
                        {/* <button onClick={() => { props.setVariable(prevValue => "Particulier")}}>S'inscrire</button> */}
                    </div>

                </div>
                <div className="proffessionnel">
                    <div className="proffessionnel-content">
                        <h1>Professionnel</h1>
                        <p>Boostez votre e-commerce, créez votre bootique, gagnez en visibilité et augmentez vos ventes avec Kadija.</p>
                        <button onClick={() => { navigate("/pro"); window.location.reload(false)}}>S'inscrire</button>
                    </div>
                </div>
                <div className="association">
                    <div className="association-content">
                        <h1>Association</h1>
                        <p>Faites connaitre votre association et engagez le plus de monde dans votre cause en collectant un maximum de dons avec Kadija.</p>
                        <button onClick={() => {navigate("/ass"); window.location.reload(false)}}>S'inscrire</button>
                    </div>
                </div>
                <div className="font"></div>
            </div>
            <div className="roles-inscrVM">
                <div className="particulier">
                    <div className="particulier-content">
                        <h1>Particulier</h1>
                        <p>Organisez votre vide grenier en ligne et gagnez de l’argent tout en soutenant des causes humanitaires avec Kadija.</p>
                        <button onClick={() => { navigate("/par"); window.location.reload(false) }}>S'inscrire</button>
                    </div>
                    <div className="font"></div>
                </div>
                <div className="proffessionnel">
                    <div className="proffessionnel-content">
                        <h1>Professionnel</h1>
                        <p>Boostez votre e-commerce, gagnez en visibilité et augmentez vos ventes avec Kadija.</p>
                        <button onClick={() => { navigate("/pro"); window.location.reload(false) }}>S'inscrire</button>
                    </div>
                    <div className="font"></div>
                </div>
                <div className="association">
                    <div className="association-content">
                        <h1>Association</h1>
                        <p>Faites connaitre votre association et engagez le plus de monde dans votre cause en collectant un maximum de dons avec Kadija.</p>
                        <button onClick={() => { navigate("/ass"); window.location.reload(false) }}>S'inscrire</button>
                    </div>
                    <div className="font"></div>
                </div>
            </div>
            <div className="Nations-wrapVM">
                <div className="quran">
                    <h2> يَـٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَـٰكُم مِّن ذَكَرٍۢ وَأُنثَىٰ وَجَعَلْنَـٰكُمْ شُعُوبًۭا وَقَبَآئِلَ"
                        "لِتَعَارَفُوٓا۟ إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ إِنَّ ٱللَّهَ عَلِيمٌ خَبِيرٌ</h2>
                    <p>“Nations et tribus, pour que vous vous entre-connaissiez“ [Quran 49: 13], Depuis la nuit des temps le commerce a toujours été au cœur des échanges, les chemins étaient plus longs, les transactions plus fastidieuses, mais la rencontre fut le but ultime… Aujourd’hui les routes se sont raccourcies, <span>notre monde est devenu un " village planétaire "</span> mettant à la portée de tous les richesses et la diversité que la vie a à offrir.</p>
                    <p>Nous pouvons désormais profiter de <span>la richesse que nous offrent toutes les cultures et les rassembler dans un seul lieu de rencontre </span>qui valorisera leur singularité et soutiendra une culture philanthropique, celle du respect des différences.
                    </p>
                </div>
                <div className="business">

                    <img className="img" src={business} />
                    <img className="shape" src={shape} />
                </div>
                <div className="back-right"></div>
            </div>
            <div className="Nations-wrap">
                <div className="quran">
                    <h2> يَـٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَـٰكُم مِّن ذَكَرٍۢ وَأُنثَىٰ وَجَعَلْنَـٰكُمْ شُعُوبًۭا وَقَبَآئِلَ"
                        "لِتَعَارَفُوٓا۟ إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ إِنَّ ٱللَّهَ عَلِيمٌ خَبِيرٌ</h2>
                    <p>“Nations et tribus, pour que vous vous entre-connaissiez“ [Quran 49: 13], Depuis la nuit des temps le commerce a toujours été au cœur des échanges, les chemins étaient plus longs, les transactions plus fastidieuses, mais la rencontre fut le but ultime… Aujourd’hui les routes se sont raccourcies, <span>notre monde est devenu un " village planétaire "</span> mettant à la portée de tous les richesses et la diversité que la vie a à offrir.</p>
                    <p>Nous pouvons désormais profiter de <span>la richesse que nous offrent toutes les cultures et les rassembler dans un seul lieu de rencontre </span>qui valorisera leur singularité et soutiendra une culture philanthropique, celle du respect des différences.
                    </p>
                </div>
                <div className="business">

                    <img className="img" src={business} />
                    <img className="shape" src={shape} />
                </div>
                <div className="back-right"></div>
            </div>
            <div className="dattePics">
                <div className="group">
                    <img src={img1} />
                </div>
                <div className="group">
                    <img src={img21} />
                    <img src={img22} />
                </div>
                <div className="group">
                    <img src={img31} />
                    <img src={img32} />
                </div>
                <div className="group">
                    <img src={img41} />
                    <img src={img42} />
                </div>
                <div className="group">
                    <img src={img51} />
                    <img src={img52} />
                </div>

            </div>
            <div className="inscr">
                <div className="inscr-content">
                    <div className="inscr-text">
                        <h2>Inscris toi dès maintenant et gagne ton bon d’achat de <span>30€ !</span></h2>
                        <p>L’application sera disponible le<span> 1er Janvier 2023</span>, Inscrivez vous dès maintenant pour recevoir une notification au moment de son lancement et <span>30€</span> dans votre portefeuille Kadija.</p>
                        <button onClick={() => { navigate("/par"); window.location.reload(false) }}>S'inscrire</button>
                    </div>
                </div>
            </div>
            <div className="reussir-wrapper">
                <div className="reussir1">
                    <div className="reussir1-leftVM">
                        <img className="img" src={womenVM} />
                        <img className="shape" src={shape2} />
                    </div>
                    <div className="reussir1-left">
                        <img className="img" src={women} />
                        <img className="shape" src={shape2} />
                    </div>
                    <div className="reussir1-right">
                        <h2>Réussir votre business avec Kadija</h2>
                        <p>On vous dévoile toutes les techniques pour <span>mieux vous référencer et maximiser vos ventes</span> avec Kadija. En rejoignant notre communauté, vous aurez l’opportunité de présenter vos produits, <span>booster votre notoriété, prospecter de nouveaux clients et tirer le meilleur profit.</span></p>
                        <p>En gros, pour augmenter vos ventes et faire la promotion de votre marque vous n’avez pas besoin de dépenser de l’argent ! Vous pouvez simplement <span>soutenir les associations à travers les dons</span> et cela vous aidera à <span>développer votre boutique.</span></p>
                        <p className="bold-color">Transformez votre budget marketing en un don généreux !</p>
                        <button onClick={() => navigate("/compte-professionnel")}>Plus de ventes</button>
                    </div>
                </div>
                <div className="reussir2">
                    <div className="reussir2-leftVM">
                        <img className="img" src={volunteersVM} />
                        <img className="shape" src={shape3} />
                    </div>
                    <div className="reussir2-left">
                        <img className="img" src={volunteers} />
                        <img className="shape" src={shape3} />
                    </div>
                    <div className="reussir2-right">
                        <h2>Réussir votre projet associatif avec Kadija</h2>
                        <p>On vous dévoile toutes les techniques pour <span>mieux vous référencer et collecter un maximum de dons</span> avec Kadija. Nous mettons <span>le don au cœur de notre référencement,</span> ce qui encourage chaque utilisateur à allouer une partie ou la totalité de ses ventes aux associations de son choix.</p>
                        <p>En plus de recevoir un maximum de dons qui vous permettront d’entreprendre les bonnes actions, vous aurez la chance de <span> faire connaitre votre cause et toucher un plus large public.</span></p>
                        <p className="bold-color">Faites connaître votre cause et recevez plus de dons grâce à Kadija.</p>
                        <button onClick={() => navigate("/compte-associatif")}>Plus de dons</button>
                    </div>
                </div>
            </div>
            <div className="Phone-wrapper">
                <div className="phones">
                    <img className="img" src={phones} />
                </div>
                <div className="phone-text">
                    <div className="phone-text-content">
                        <h2>La route de la soie en une application !</h2>
                        <p>Kadija vous offre la route de la soie sur une application et vous aide à faire du bien de la meilleure façon !</p>
                        <p className="smaller">L‘idée est toute simple et nous sommes convaincus qu’elle pourra créer de l’impact. Inscrivez vous dés maintenant pour recevoir votre bon d’achat de 30€.</p>
                        <div className="apple-android">
                            <img className="apple" src={apple} />
                            <img className="android" src={android} />

                        </div>
                    </div>
                </div>
                <div className="back"></div>
            </div>
        </div>
    );
}
export default Home;