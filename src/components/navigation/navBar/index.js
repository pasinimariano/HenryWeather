import React from 'react';
import { Link } from 'react-router-dom';
import GlobalSearch from '../globalSearch/';
import Logo from '../img/logoHenry.png';
import Styles from './styles/Styles.module.css';


const NavBar = () => {
    return (
        <div className={Styles.NavBarContainer}>
            <div className={Styles.LinkContainer}>
                <img
                    className={Styles.HenryLogo}
                    src={Logo}
                    alt="https://www.soyhenry.com/"
                />
                <Link to='/' className={Styles.Link}>
                    <h2> HOME </h2>
                </Link>
                <Link to='/about' className={Styles.Link}>
                    <h2> ABOUT US </h2>
                </Link>
                <Link to='/submit' className={Styles.Link}>
                    <h2> SIGN UP </h2>
                </Link>
            </div>
            <div className={Styles.SearchBar}>
                <GlobalSearch />
            </div>
        </div>
    );
}

export default NavBar;