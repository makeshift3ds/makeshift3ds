/* Import the css so it is run through css-loader */
import './assets/css/normalize.css';
import './assets/css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
