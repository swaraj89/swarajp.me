import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'typeface-lato';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
