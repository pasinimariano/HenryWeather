import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logoHenry.png';
import styles from './styles/Styles.module.css';


const NavBar = () => {
    return (
        <div className={styles.NavBarContainer}>
            <Link to='/'>
                <img
                    className={styles.HenryLogo}
                    src={Logo}
                    alt="https://www.soyhenry.com/"
                />
            </Link>
            <h1> Henry - Weather App</h1>
            <Link to='/about'>
                <h2> About Us </h2>
            </Link>
            <Link to='/submit'>
                <h2> Sign Up </h2>
            </Link>
        </div>
    );
}

export default NavBar;