import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesWeb from './components/RoutesWeb.js';
import NavBar from './components/navigation/navBar/';
import styles from './style/AppStyle.module.css'


const App = () => {

    return (
        <Router className={styles.App}>
            <NavBar />
            <hr />
            <RoutesWeb />
        </Router>
    );
}

export default App;
