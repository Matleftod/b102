import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si vous souhaitez démarrer la mesure de la performance de votre application lors des tests,
// passez une fonction pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à un service d'analyse de la performance de votre choix, comme Google Analytics.
//reportWebVitals();
