import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Accueil from './components/Accueil/Accueil';
import FormulaireParticipants from './components/FormulaireParticipants/FormulaireParticipants';
import SelectionCategories from './components/SelectionCategories/SelectionCategories';
import CompteurGage from './components/CompteurGages/CompteurGages';
import SlideGage from './components/SlideGage/SlideGage';
import FinDeJeu from './components/FinDeJeu/FinDeJeu';
import SelectGame from './components/SelectGame/SelectGame';
import { filtrerEtMelangerGages, getGageTextWithParticipants } from './gages';
import './App.css';

function App() {
  const [currentGageIndex, setCurrentGageIndex] = useState(0);
  const [currentParticipantIndex, setCurrentParticipantIndex] = useState(0);

  const [tour, setTour] = useState(1);

  const gages = useSelector((state) => state.gages);
  const dispatch = useDispatch();

  const MainApp = () => {
    const navigate = useNavigate();
    const participants = useSelector((state) => state.participants);

    const onStartGame = () => {
      navigate('/formulaire-participants');
    };

    const onSelectGame = () => {
      navigate('/selection-jeu');
    };

    const onFinishParticipants = () => {
      navigate('/selection-categories');
    };

    const onFinishGame = () => {
      navigate('/fin-de-jeu');
    };

    const onFinishCategories = (selectedCategories, participants) => {
      if (!participants || participants.length === 0) {
        throw new Error('Les participants doivent être définis avant de commencer le jeu');
      }
      
      const gagesFiltres = filtrerEtMelangerGages(selectedCategories);
      
      // Remplacez les '$' par les noms des participants avant de les stocker dans le store
      const gagesAvecParticipants = gagesFiltres.map((gage) =>
        getGageTextWithParticipants(gage, participants)
      );
      
      dispatch({ type: 'SET_GAGES', payload: gagesAvecParticipants });
      navigate('/jeu');
    };    

    const onNextGage = () => {
      setCurrentGageIndex(currentGageIndex + 1);
      setTour(tour + 1);
    };

    const onPreviousGage = () => {
      if (currentGageIndex > 0) {
        setCurrentGageIndex(currentGageIndex - 1);
        setTour(tour - 1);
      }
    };

    const handleValidate = () => {
      setCurrentParticipantIndex((currentParticipantIndex + 1) % participants.length);
      // Passez au gage suivant
      setCurrentGageIndex(currentGageIndex + 1);
    };
    
    const handleRefuse = () => {
      // Décrémentez le nombre de vies du participant actuel
      let newParticipants = [...participants];
      let currentParticipant = newParticipants[currentParticipantIndex];
      currentParticipant.lives--;
    
      if (currentParticipant.lives <= 0) {
        // Handle participant elimination or game end
      }
    
      // Mettre à jour les participants dans le Redux store
      dispatch({ type: 'UPDATE_PARTICIPANTS', payload: newParticipants });
    
      setCurrentParticipantIndex((currentParticipantIndex + 1) % participants.length);
      // Passez au gage suivant
      setCurrentGageIndex(currentGageIndex + 1);
    };    

    return (
      <div className="App">
        <div className="bg">
          <div className="gradient"></div>
        </div>
        <Routes>
          <Route path="/" element={<Accueil onSelectGame={onSelectGame} />} />
          <Route
            path="/selection-jeu"
            element={<SelectGame onStartGame={onStartGame} />}
          />
          <Route
            path="/formulaire-participants"
            element={
              <FormulaireParticipants
                onFinishParticipants={onFinishParticipants}
              />
            }
          />
          <Route
            path="/selection-categories"
            element={
              <SelectionCategories
                onFinishCategories={(selectedCategories) =>
                  onFinishCategories(selectedCategories, participants)
                }
              />
            }
          />
          <Route path="/jeu" element={
            <div>
              <CompteurGage tour={tour} />
                <SlideGage
                  gage={gages[currentGageIndex]}
                  onNextGage={onNextGage}
                  onPreviousGage={onPreviousGage}
                  isFirstGage={currentGageIndex === 0}
                  isLastGage={currentGageIndex === gages.length - 1}
                  onFinishGame={onFinishGame}
                  handleValidate={handleValidate}
                  handleRefuse={handleRefuse}
                  participants={participants}
                  currentParticipantIndex={currentParticipantIndex}
                />
            </div>
          }/>
          <Route path="/fin-de-jeu" element={
            <FinDeJeu />
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