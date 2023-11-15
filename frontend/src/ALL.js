import Card from './screens/Card';
import Carousele from './components/Carousel/Carousele';
import CarouselePopulaire from './components/Carousel/Carousele_top';
import GridExample from './components/Card';
import gopro from './gopro.mp4';
import { useTranslation } from 'react-i18next';

function ALL() {
  const { i18n } = useTranslation();

  return (
    <div>
      <main>
        <div className="body">
          <div className="hero">
            {' '}
            {/* Ajoutez la classe "hero" ici */}
            <video src={gopro} autoPlay loop muted />
            <div className="content">
              <h1>da'wave! club</h1>
              <p>{i18n.t('Hero1')}</p>
              <a href="./screen/SigninScreen" class="button">
                {i18n.t('Inscrire')}
              </a>
            </div>
          </div>
        </div>
        <Card />
        <Carousele />
        <CarouselePopulaire />
        <GridExample />
      </main>
    </div>
  );
}

export default ALL;
