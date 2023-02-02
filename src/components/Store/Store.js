import React from 'react'
import playstore from "../../assets/android.png";
import applestore from "../../assets/apple.png";

import './Store.scss'

const Store = () => {
  return (
    <div>
      <div className="fourthPart">
        <p id="fourthPartText">
        <strong>L’application sera disponible le 1 er Janvier 2023.</strong> <br></br>
        Inscrivez vous dès maintenant et gagnez <strong>30 € sur votre wallet</strong>. Vous
          recevrez une notification au moment de son lancement et vous ferez
          partie de nos premiers visiteurs.
        </p>
        <div className="store">
          <img className='andr' src={playstore}></img>
          <img className='appl' src={applestore}></img>
        </div>
      </div>
    </div>
  );
}

export default Store
