import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cheeses = [
  "Bath Blue",
  "Barkham Blue",
  "Buxton Blue",
  "Cheshire Blue",
  "Devon Blue",
  "Dorset Blue Vinney"
];

ReactDOM.render(<App cheeses={cheeses}/>, document.getElementById('root'));
registerServiceWorker();
