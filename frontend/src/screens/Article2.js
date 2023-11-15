import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function Article1() {
  const { i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{i18n.t('Titre1Article')}</title>
      </Helmet>
      <h1>{i18n.t('Titre2Article')}</h1>

      <img
        src="https://i.eurosport.com/2023/03/15/3653749-74383908-2560-1440.jpg"
        alt="Championnat de surf 2"
        style={{ width: '100%' }} // Définissez la largeur de l'image pour qu'elle prenne toute la largeur de la page
      />
      <p className="text_article">{i18n.t('Bloc1Article')}</p>
      <p className="text_article">{i18n.t('Bloc2Article')}</p>
      <p className="text_article">{i18n.t('Bloc3Article')}</p>
      <p className="text_article">{i18n.t('Bloc4Article')}</p>

      <p className="text_article">{i18n.t('Bloc5Article')}</p>
      <p className="text_article">{i18n.t('Bloc6Article')}</p>

      <p className="text_article">
        {i18n.t('Bloc7Article')}{' '}
        <a
          href="https://www.youtube.com/watch?v=1mjGZKlCIoA"
          target="_blank"
          rel="noopener noreferrer"
        >
          {i18n.t('Bloc8Article')}
        </a>
        .
      </p>
      <div className="video-container">
        <img
          src="https://i.ytimg.com/vi/T8T1wmz42Xk/maxresdefault.jpg"
          alt="Championnat de surf 3"
          style={{ width: '100%' }} // Définissez la largeur de l'image pour qu'elle prenne toute la largeur de la page
        />
      </div>
    </div>
  );
}

export default Article1;
