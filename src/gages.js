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
    // Rassemblez les gages des catégories sélectionnées
    const gagesFiltres = categoriesSelectionnees.flatMap(
        (categorie) => gagesParCategorie[categorie]
    );

  // Mélangez les gages filtrés
  const gagesMelanges = melangerGages(gagesFiltres);

  // Sélectionnez les 50 premiers gages mélangés
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

// Ajoutez cette fonction pour obtenir un tableau de participants uniques pour un gage donné
const getUniqueParticipants = (numParticipants, participants) => {
  const uniqueParticipants = [];
  const participantsCopy = [...participants];

  for (let i = 0; i < numParticipants; i++) {
    const randomIndex = Math.floor(Math.random() * participantsCopy.length);
    const selectedParticipant = participantsCopy.splice(randomIndex, 1)[0];
    uniqueParticipants.push(selectedParticipant);
  }

  return uniqueParticipants;
};

// Ajoutez cette fonction pour remplacer les marqueurs de participants dans le texte du gage
const getGageTextWithParticipants = (gage, participants) => {
  if (!gage) {
    return '';
  }

  if (!gage.player) {
    return gage.text;
  }

  const numParticipants = (gage.text.match(/\$/g) || []).length;
  const uniqueParticipants = getUniqueParticipants(numParticipants, participants);
  let gageText = gage.text;

  uniqueParticipants.forEach((participant) => {
    gageText = gageText.replace('$', participant);
  });
  return gageText;
};

export { filtrerEtMelangerGages, getGageTextWithParticipants };