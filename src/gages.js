// src/gages.js

import gagesClassiques from './data/gages_classiques.json';
import gagesDebiles from './data/gages_debiles.json';
import gagesHard from './data/gages_hard.json';

const gagesParCategorie = {
  classique: gagesClassiques,
  debile: gagesDebiles,
  hard: gagesHard,
};

const filtrerEtMelangerGages = (categoriesSelectionnees) => {

  if (!Array.isArray(categoriesSelectionnees)) {
    console.error('categoriesSelectionnees doit être un tableau');
    return [];
  }

    //console.log('Catégories sélectionnées:', categoriesSelectionnees);

    // Rassemblez les gages des catégories sélectionnées
    const gagesFiltres = categoriesSelectionnees.flatMap(
        (categorie) => gagesParCategorie[categorie]
    );

    //console.log('Gages filtrés:', gagesFiltres);
  // Mélangez les gages filtrés
  const gagesMelanges = melangerGages(gagesFiltres);

  // Sélectionnez les 30 premiers gages mélangés
  const gagesSelectionnes = gagesMelanges.slice(0, 50);

  return gagesSelectionnes;
};

const melangerGages = (gages) => {
  for (let i = gages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gages[i], gages[j]] = [gages[j], gages[i]];
  }
  return gages;
};

export { filtrerEtMelangerGages };