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
import { filtrerEtMelangerGages } from './gages';
import './App.css';

function App() {
  const [currentGageIndex, setCurrentGageIndex] = useState(0);
  const [tour, setTour] = useState(1);

  const gages = useSelector((state) => state.gages);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const MainApp = () => {
    const navigate = useNavigate();

    const onStartGame = () => {
      navigate('/formulaire-participants');
    };

    const onFinishParticipants = () => {
      navigate('/selection-categories');
    };

    const onFinishCategories = (selectedCategories) => {
      console.log(selectedCategories)
      const gagesFiltres = filtrerEtMelangerGages(selectedCategories);
      dispatch({ type: 'SET_GAGES', payload: gagesFiltres });
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

    return (
      <div className="App">
        <div class="bg">
          <div class="gradient"></div>
        </div>
        <Routes>
          <Route path="/" element={<Accueil onStartGame={onStartGame} />} />
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
                onFinishCategories={onFinishCategories}
              />
            }
          />
          <Route
            path="/jeu"
            element={
              <div>
                <CompteurGage tour={tour} />
                <SlideGage
                  gage={gages[currentGageIndex]}
                  onNextGage={onNextGage}
                  onPreviousGage={onPreviousGage}
                />
              </div>
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