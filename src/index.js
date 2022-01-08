// the first executed file when browser page is loaded

import ReactDOM from 'react-dom';

import './index.css';
import App from './App';  //from src/App.js

//document.getElementById('root') -> is a default Javascript DOM API which call with root a html file from public index.html ( <div id="root"></div>)
//<App /> -> its a App.js component which begin to render in the place of that elenemt with an id of root.
//ReactDOM.render -> render the component App to the index.html, so inside of this ( <div id="root"></div>) , should be replaced with App.js

// RESULTS:

//----At the end only one html file is delivered to the browser, so we see the changes on the browser because of react.


ReactDOM.render(<App />, document.getElementById('root'));
