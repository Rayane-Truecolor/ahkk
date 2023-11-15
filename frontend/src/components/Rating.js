import { useTranslation } from 'react-i18next';

function Rating(props) {
  const { i18n } = useTranslation(); // Utilisation de la traduction i18n

  const { rating, numReviews } = props; // Déstructuration des propriétés reçues en tant qu'arguments (rating et numReviews)
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      {/* Ce code génère une étoile pleine (fas fa-star) si la note est supérieure ou égale à 1,
      une étoile à moitié pleine (fas fa-star-half-alt) si la note est supérieure ou égale à 0.5 mais inférieure à 1,
      sinon une étoile vide (far fa-star). Ceci est répété pour chaque étoile. */}
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-star'
              : rating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        {' '}
        {numReviews} {i18n.t('Avis')}
      </span>
      {/* Affiche le nombre d'avis (numReviews) suivi du mot "Avis" (en utilisant i18n.t pour la traduction) */}
    </div>
  );
}
export default Rating; // Exporte le composant Rating pour pouvoir l'utiliser ailleurs dans l'application
