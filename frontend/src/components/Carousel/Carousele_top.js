import Carousel from 'react-grid-carousel';
import { useTranslation } from 'react-i18next';

const CarouselePopulaire = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <br></br>
      <h3 className="Carousel" style={{ marginTop: '100px' }}>
        {i18n.t('Carousel2')}
      </h3>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Carousel cols={4} rows={1} gap={185} loop>
          <Carousel.Item>
            <a
              className="Produit_Carousel"
              href="/product/planche02_longbard_kudat"
            >
              <img
                className="carousel-image"
                src="http://localhost:3000/images/Longboard/planche02_longbard_kudat.jpg"
                alt="Item1"
              />
              <p className="TitleCarouselProduct">Longboard Kudas 6'8</p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a className="Produit_Carousel" href="/product/Derive_Quicksilver">
              <img
                className="carousel-image"
                src="http://localhost:3000/images/Derive/Derive01_Quicksilver.jpg"
                alt="Item2"
              />
              <p className="TitleCarouselProduct">Derive sharp 3 pieces</p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              className="Produit_Carousel"
              href="/product/planche01_longbard_mark_phipps_caviar"
            >
              <img
                className="carousel-image"
                src="http://localhost:3000/images/Longboard/planche01_longbard_mark_phipps_caviar.jpg"
                alt="Item3"
              />
              <p className="TitleCarouselProduct">Longboard Phiss 6'9</p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              className="Produit_Carousel"
              href="/product/Combinaison01_Quicksilver"
            >
              <img
                className="carousel-image"
                src="http://localhost:3000/images/Combinaison/Combinaison01_Quicksilver.jpg"
                alt="Item4"
              />
              <p className="TitleCarouselProduct">
                Combinaison Néoprene Quicksilvber
              </p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              className="Produit_Carousel"
              href="/product/Pads_Mark_Phipps_Caviar"
            >
              <img
                className="carousel-image"
                src="http://localhost:3000/images/Pads/Pads01_Mark_Phipps_Caviar.jpg"
                alt="Item5"
              />
              <p className="TitleCarouselProduct">Pads Anti-dérapant</p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              className="Produit_Carousel"
              href="-/product/Leash01_Mark_Phipps_Caviar"
            >
              <img
                className="carousel-image"
                src="http://localhost:3000/images/Leash/Leash01_Mark_Phipps_Caviar.jpg"
                alt="Item6"
              />
              <p className="TitleCarouselProduct">Leash securisé</p>
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr></hr>
    </div>
  );
};

export default CarouselePopulaire;
