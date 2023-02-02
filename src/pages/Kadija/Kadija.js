import React from "react";
import "./Kadija.scss";
import img1 from "../../images/kadijaimg1.png";
import img2 from "../../images/kadijaimg2.png";
import img3 from "../../images/kadijaimg3.png";
import kadijaimg3desktop from "../../images/kadijaimg3desktop.png";
import kadijaimg2dekstop from "../../images/kadijaimg2dekstop.png";
import cercle1 from "../../images/cercle1.png";
import cercle2 from "../../images/cercle2.png";
import valeur1 from "../../images/valeur1.png";
import valeur2 from "../../images/valeur2.png";
import valeur3 from "../../images/valeur3.png";
import valeur4 from "../../images/valeur4.png";
import valeur11 from "../../images/valeur11.png";
import valeur22 from "../../images/valeur22.png";
import valeur33 from "../../images/valeur33.png";
import valeur44 from "../../images/valeur44.png";
import sac from "../../images/sac.png";
import sacDesktop from "../../images/sacDesktop.png";
import rectangle from "../../images/rectangle.png";
import kadijaDesktop from "../../images/kadijaimgdesktop.png";
import rectangleDesktop from "../../images/rectangleDesktop.png";
import cercle22 from "../../images/cercle22.png";
import Store from "../../components/Store/Store";
import { useNavigate } from "react-router-dom";


const Kadija = () => {
  const navigate = useNavigate();

  return (
    <div className="Kadija-wrapper">
      <div className="description-Kadija">
        <div className="firstPart">
          <div className="firstImages">
            <img src={cercle1} id="cercle1"></img>
            <img src={rectangleDesktop} id="rectangleDesktop"></img>
            <img src={img1} id="img1"></img>
            <img src={kadijaDesktop} id="kadijaDesktop"></img>
          </div>
          <div className="kadija-text">
            <p id="text1">
              Plus qu’une simple Marketplace : <br></br> un vrai lieu de
              rencontre et d'échanges culturels !
            </p>
            <p id="text2">
              Inspirée par les besoins des nouvelles générations et fascinée par
              leurs différences ethniques et culturelles, Kadija se veut être la
              première MarketPlace de produits islamiques et ethniques mais pas
              que…Nous avons voulu créer un lieu de rencontre communautaire qui
              regroupe toutes les ethnies, respecte leur diversité, incite au
              partage et soutient une culture philanthropique traduites par de
              vraies actions humanitaires !<br></br>
              <button onClick={() => { navigate("/kadija/par"); window.location.reload(false) }}>S'inscrire</button>
            </p>
          </div>
        </div>
      </div>
      <div className="Parts">
        <div className="secondPart">
          <div className="secondImages">
            <img src={img2} id="img2"></img>
            <img src={kadijaimg2dekstop} id="kadijaimg2dekstop"></img>
            <img src={rectangle} id="rectangle"></img>
          </div>
          <div className="bloc1">
            <div className="image-cercle">
              <img src={cercle2} id="cercle2"></img>
              <img src={cercle22} id="cercle22"></img>
              <img src={img3} id="img3"></img>
              <img src={kadijaimg3desktop} id="kadijaimg3desktop"></img>
            </div>
            <div className="hadith">
              <div className="hadithContent">
                <p id="hadithProphet">
                  Le Prophète (ﷺ) a dit : « Le commerçant sincère et honnête
                  sera avec les Prophètes, les véridiques et les martyrs.»
                </p>
                <p id="reporter">- Rapporté par At-Tirmidhi et Al-Hakim</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p id="kadija">Qui est Kadija ?</p>
          <p id="kadija-presentation">
            Une idée reçue veut que pour réussir, il faut plutôt recevoir
            qu’offrir : penser principalement à son intérêt et faire du reste un
            second volet…Chez Kadija nous croyons qu'une autre croissance est
            possible,
            <strong>
              une croissance profitable aussi bien aux entreprises et
              associations qu'aux particuliers….
            </strong>{" "}
            <br></br>
            <br></br>
            Nous avons crée une MarketPlace dédiée aux{" "}
            <strong>
              {" "}
              produits islamiques et ethniques qui allie échanges commerciaux,
              valeurs humaines et soutient des causes charitables{" "}
            </strong>
            <br></br>
            <br></br>. On a pris comme référence{" "}
            <strong> la mère des croyants Kadija </strong> : une femme
            musulmane, commerçante, affranchie, inspirée par le tournant social
            de la philanthropie culturelle qui ne se résume pas en un simple
            état d’esprit, mais plutôt un vrai passage à l’action !
          </p>
          <button onClick={() => { navigate("/kadija/par"); window.location.reload(false) }}>S'inscrire</button>
        </div>
      </div>
      <div>
        <p id="vision">Notre vision</p>
        <p id="vision-presentation">
          Nous croyons que{" "}
          <strong>
            {" "}
            les différences doivent être célébrées plutôt que gommées et la
            pluralité culturelle soutenue plutôt que combattue{" "}
          </strong>
          et pour cette raison nous avons crée Kadija ! La première plateforme
          de MarketPlace dédiée à la vente et l’achat de produits islamiques et
          ethniques mais pas que…{" "}
          <strong>Un lieu de rencontre communautaire </strong> qui s’articule
          autour de quatre valeurs principales :
        </p>
      </div>
      <div className="value">
        <div className="valeurs">
          <div className="val">
            <img src={valeur1} id="val1"></img>
            <img src={valeur11} id="val11"></img>
            <p id="titre1">Inclusion</p>
            <p id="valeurs-text">
              Un lieu qui rassemble et unit tous les membres pour les inciter à
              vivre une expérience humaine riche de sens.
            </p>
          </div>
          <div className="val">
            <img src={valeur2} id="val2"></img>
            <img src={valeur22} id="val22"></img>
            <p id="titre2">Tolérance</p>
            <p id="valeurs-text">
              Un lieu qui tolère la différence, soutient la singularité et
              renforce l’identité de chacun sans imposer un mode opératoire
              discriminatoire.
            </p>
          </div>
        </div>
        <div className="valeurs">
          <div className="val">
            <img src={valeur3} id="val3"></img>
            <img src={valeur33} id="val33"></img>
            <p id="titre3">Partage</p>
            <p id="valeurs-text">
              Un lieu communautaire et participatif qui assure la
              synergie de ses membres, facilite leur rencontre et initie leur
              retour à l'essentiel.
            </p>
          </div>
          <div className="val">
            <img src={valeur4} id="val4"></img>
            <img src={valeur44} id="val44"></img>
            <p id="titre4">Entraide</p>
            <p id="valeurs-text">
              Un lieu qui initie une nouvelle façon d’être, partie prenante du
              développement et de l’amélioration du tissu social.
            </p>
          </div>
        </div>
      </div>
      <div className="thirdPart">
        <p id="thirdPartText">
          Notre ambition, la volonté de toujours faire mieux par le biais de nos
          transactions…
        </p>
        <div className="thirdPart-content">
          <p id="sacDescription">
            À travers notre plateforme, nous n’incitons pas aux échanges
            démoralisés, bien au contraire, nous voulons{" "}
            <strong>
              {" "}
              introduire le changement en initiant un nouveau mode opératoire
              plus humain : participer à faire le bien, de la meilleure des
              façons !
            </strong>{" "}
            Nous aidons donc les professionnels à améliorer leur croissance et
            les particuliers à optimiser leurs échanges commerciaux de manière
            responsable et surtout charitable.
            <br />
            <button onClick={() => { navigate("/kadija/par"); window.location.reload(false) }}>S'inscrire</button>
          </p>
          <img src={sac} id="sac"></img>
          <img src={sacDesktop} id="sacDesktop"></img>
        </div>
      </div>
      <Store />
    </div>
  );
};
export default Kadija;