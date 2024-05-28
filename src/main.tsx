import React from 'react'
import ReactDOM from 'react-dom/client'

import Simulator1 from './simulator1/App.tsx'
import Simulator2 from './simulator2/App.tsx'
import Simulator3 from './simulator3/App.tsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

let App;

switch (import.meta.env.VITE_SIMULATOR_TO_BUILD) {
    case 'simulator1':
        App = Simulator1;
        break;
    case 'simulator2':
        App = Simulator2;
        break;
    case 'simulator3':
        App = Simulator3;
        break;
    default:
        throw new Error('VITE_SIMULATOR_TO_BUILD is not set');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
