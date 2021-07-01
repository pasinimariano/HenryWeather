import React from 'react';
import Logo from '../img/logoHenry.png';
import SeachBar from '../searchBar/SearchBar.jsx';
import styles from '../styles/Styles.module.css';


export default function NavBar({ onSearch }) {
    return (
        <div className={styles.NavBarContainer}>
            <img src={Logo} alt="https://www.soyhenry.com/" />
            <h1> Henry - Weather App</h1>
            <SeachBar onSearch={onSearch} />
        </div>
    );
}