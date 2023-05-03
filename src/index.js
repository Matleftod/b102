import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Si vous souhaitez démarrer la mesure de la performance de votre application lors des tests,
// passez une fonction pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à un service d'analyse de la performance de votre choix, comme Google Analytics.
//reportWebVitals();
