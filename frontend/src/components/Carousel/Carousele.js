import Carousel from 'react-grid-carousel';
import { useTranslation } from 'react-i18next';

const Carousele = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <br></br>
      <h3 className="Carousel" style={{ marginTop: '100px' }}>
        {i18n.t('Carousel1')}
      </h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Carousel cols={4} rows={1} gap={2} loop>
          <Carousel.Item>
            <a className="Produit_Carousel" href="/Quicksilver">
              <img
                className="carousel-image"
                src="https://logos-world.net/wp-content/uploads/2020/12/Quicksilver-Logo.png"
                alt="Item1"
              />
              <p className="TitleCarouselProduct">Quicksilver</p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a className="Produit_Carousel" href="/Venon">
              <img
                className="carousel-image"
                src="https://whitecaps-surf.com/images/categories/521-category.jpg"
                alt="Item2"
              />
              <p className="TitleCarouselProduct">Venon Surfboard</p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a className="Produit_Carousel" href="/Kudat">
              <img
                className="carousel-image"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Volcom_Circle_Stone.jpg"
                alt="Item3"
              />
              <p className="TitleCarouselProduct">Volcom</p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a className="Produit_Carousel" href="/Phipps">
              <img
                className="carousel-image"
                src="https://www.wellenreitshop.de/media/mgs_brand/m/a/mark-phipps.jpg"
                alt="Item4"
              />
              <p className="TitleCarouselProduct">Mark Phipps</p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a className="Produit_Carousel" href="/NKX">
              <img
                className="carousel-image"
                src="https://nkx-sports.com/wp-content/uploads/2019/10/NKX-Box-Logo-1.png"
                alt="Item5"
              />
              <p className="TitleCarouselProduct">NKX</p>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a className="Produit_Carousel" href="/Olaian">
              <img
                className="carousel-image"
                src="https://www.decathlon.media/shared/phototheque/fichiers/logo-olaian_tvuzywnb.jpg"
                alt="Item6"
              />
              <p className="TitleCarouselProduct">Olaian</p>
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr></hr>
    </div>
  );
};

export default Carousele;
