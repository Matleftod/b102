import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
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

  const MainApp = () => {
    const navigate = useNavigate();

    const onStartGame = () => {
      navigate('/formulaire-participants');
    };

    const onFinishParticipants = () => {
      navigate('/selection-categories');
    };

    const onFinishCategories = () => {
      // Logique pour démarrer le jeu avec les participants et les catégories sélectionnées
    };

    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil onStartGame={onStartGame} />} />
          <Route
            path="/formulaire-participants"
            element={
              <FormulaireParticipants
                participants={participants}
                setParticipants={setParticipants}
                onFinishParticipants={onFinishParticipants}
              />
            }
          />
          <Route
            path="/selection-categories"
            element={
              <SelectionCategories
                categories={categories}
                setCategories={setCategories}
                onFinishCategories={onFinishCategories}
              />
            }
          />
        </Routes>
      </div>
    );
  };

  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;