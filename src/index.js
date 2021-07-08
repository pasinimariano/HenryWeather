import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from "./App";
import Store from './redux/Store.js';


ReactDOM.render(
    <Provider store={Store}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);