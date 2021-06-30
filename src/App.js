import React from 'react';
import SearchBar from './components/searchBar/SearchBar.jsx';
import Cards from './components/cards/Cards.jsx';
import styles from './style/AppStyle.module.css'


export default function App() {
    return (
        <div className={styles.App}>
            <SearchBar />
            <hr />
            <Cards />
        </div>
    );
}

