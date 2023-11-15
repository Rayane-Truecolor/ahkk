import React from 'react';
import { useTranslation } from 'react-i18next';

const Card = () => {
  const { i18n } = useTranslation();

  return (
    <div className="image_card">
      <div className="image_container">
        <img
          src={require('./Image_Screen/femme_hiver.jpg')}
          alt="Femme en hiver"
        />
        <a href="/nouvelle-collection" className="text_overlay">
          Nouvelle collection <br></br> Da'Wave!
        </a>
        <hr></hr>
      </div>

      <div className="image_container">
        <img src={require('./Image_Screen/homme2.jpg')} alt="Homme 2" />
        <a href="/gopro" className="text_overlay">
          GOPRO HERO5 <br></br>
          {i18n.t('GoProCard')}
        </a>
        <hr></hr>
      </div>

      <div className="image_container">
        <img src={require('./Image_Screen/homme1.jpg')} alt="Homme 1" />
        <a href="/new" className="text_overlay">
          {i18n.t('Nouveau')}
        </a>
        <hr></hr>
      </div>
    </div>
  );
};
export default Card;
