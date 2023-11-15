import React from 'react';
import { useState, useEffect } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';

function Search() {
  // Déclaration de trois états locaux pour gérer les données de recherche, le terme de recherche et l'affichage des résultats
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Utilisation de useEffect pour effectuer une action après que le composant a été monté
  useEffect(() => {
    // Envoie d'une requête à l'API '/api/products' pour obtenir des données produits
    fetch('/api/products')
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []); // Le tableau vide signifie que cela ne s'exécute qu'une seule fois après le montage du composant
  // Gestionnaire de changement de terme de recherche
  const handleSearchTerm = (e) => {
    let value = e.target.value;
    // Met à jour l'état 'searchTerm' avec la nouvelle valeur
    setSearchTerm(value);
    // Affiche les résultats
    setShowResults(true);
  };
  // Gestionnaire de clic sur un résultat
  const handleResultClick = () => {
    // Cache les résultats lorsque l'utilisateur clique sur un résultat
    setShowResults(false);
  };
  // Rendu du composant
  return (
    <>
      <div className="searchBar">
        {/* Input de recherche */}
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearchTerm} // Appelle le gestionnaire de changement de terme de recherche
        />
        {showResults && ( // Affiche les résultats si 'showResults' est vrai
          <div className="search_results">
            {/* Filtrage et mappage des données pour afficher les résultats */}
            {datas
              .filter((val) => {
                return val.name.includes(searchTerm);
              })
              .map((val) => {
                return (
                  // Crée un lien vers un produit spécifique
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/product/${val.slug}`}
                    key={val.id}
                    onClick={handleResultClick} // Ajoute un gestionnaire de clic
                  >
                    {/* Affiche le nom du produit */}
                    <div className="search__result">{val.name}</div>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}

// Exporte le composant Search pour pouvoir l'utiliser ailleurs
export default Search;
