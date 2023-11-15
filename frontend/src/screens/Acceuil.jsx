import React from 'react';
import gopro from '../gopro.mp4';

const Accueil = () => {
  return (
    <div className="body">
      <div className="hero">
        <video src={gopro} autoPlay loop muted />

        <div className="content">
          <h1>da'wave! club</h1>
          <p>
            Pour l'ouverture du site, inscrivez-vous et profitez de réductions
            exclusives.
          </p>
          <a href="lien-vers-la-page-d-inscription" class="button">
            Je m'inscris
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
