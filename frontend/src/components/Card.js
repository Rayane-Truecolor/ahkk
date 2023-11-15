import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function GridExample() {
  const { i18n } = useTranslation();

  return (
    <div>
      <h3 style={{ textAlign: 'center', marginTop: '100px' }}>Article</h3>

      <div className="Card">
        <Card style={{ width: '30rem', margin: ' 0 25px 0 0' }}>
          <Card.Img
            variant="top"
            src="https://www.lessablesdolonne.fr/media/cdf-masters-sables-d-olonne.jpg"
          />
          <Card.Body>
            <Card.Title>Competition 2023</Card.Title>
            <Card.Text>{i18n.t('Article1')}</Card.Text>
            <Link to="/article1">
              <Button variant="primary"> {i18n.t('LireArticle')}</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '30rem', margin: ' 0 0 0 25px' }}>
          <Card.Img
            variant="top"
            src="https://i.eurosport.com/2023/03/15/3653749-74383908-2560-1440.jpg"
          />
          <Card.Body>
            <Card.Title>{i18n.t('Article2')}</Card.Title>
            <Card.Text>{i18n.t('Articles2')}</Card.Text>
            <Link to="/article2">
              <Button variant="primary">{i18n.t('LireArticle')}</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <hr></hr>
    </div>
  );
}

export default GridExample;
