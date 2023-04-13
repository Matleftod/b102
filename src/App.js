import React, { useState } from 'react';
import Accueil from './components/Accueil/Accueil';
import FormulaireParticipants from './components/FormulaireParticipants/FormulaireParticipants';
import SelectionCategories from './components/SelectionCategories/SelectionCategories';
import CompteurGages from './components/CompteurGages/CompteurGages';
import SlideGage from './components/SlideGage/SlideGage';
import './App.css';

function App() {
  const [participants, setParticipants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [gagesRestants, setGagesRestants] = useState(0);

  // Votre logique pour gérer les participants, les catégories et les gages

  return (
    <div className="App">
      <Accueil />
      <FormulaireParticipants
        participants={participants}
        setParticipants={setParticipants}
      />
      <SelectionCategories
        categories={categories}
        setCategories={setCategories}
      />
      <CompteurGages gagesRestants={gagesRestants} />
      <SlideGage
        participants={participants}
        categories={categories}
        setGagesRestants={setGagesRestants}
      />
    </div>
  );
}

export default App;