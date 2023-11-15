import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <footer>
      <nav className="nav-footer">
        <ul className="un">
          <li>
            <a href="/FAQ">FAQ</a>
          </li>
          <li>
            <a href="/Contact">{i18n.t('FooterContact')}</a>
          </li>
          <li>
            <a href="/CGU">{i18n.t('FooterCGU')}</a>
          </li>
          <li>
            <a href="/Qui">{i18n.t('CGU')}</a>
          </li>
          <li>
            <a href="/Mention">{i18n.t('FooterMention')}</a>
          </li>
        </ul>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              alt=""
              style={{ width: '50px', marginLeft: '1rem' }}
            />
          </a>
          <a
            href="https://www.youtube.com/?hl=fr&gl=FR"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
              alt=""
              style={{ width: '50px', marginLeft: '1rem' }}
            />
          </a>
          <a
            href="https://www.facebook.com/?locale=fr_FR"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
              alt=""
              style={{ width: '50px', marginLeft: '1rem' }}
            />
          </a>
        </li>
      </nav>
      <div className="logo">
        <a href="/">Da'Wave!</a>
      </div>
      <div className="allright">Da'Wave! 2023 All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
