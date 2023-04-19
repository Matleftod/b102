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
  const gagesFiltres = categoriesSelectionnees.flatMap(
    (categorie) => gagesParCategorie[categorie]
  );

  // Mélangez les gages filtrés
  const gagesMelanges = melangerGages(gagesFiltres);

  return gagesMelanges;
};

const melangerGages = (gages) => {
  for (let i = gages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gages[i], gages[j]] = [gages[j], gages[i]];
  }
  return gages;
};

export { filtrerEtMelangerGages };
