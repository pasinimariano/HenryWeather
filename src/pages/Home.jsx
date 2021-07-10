import React from 'react';
import SearchForm from '../components/navigation/searchForm'
import Cards from '../components/cards';
import Style from './Styles/Home.module.css';


const Home = () => {

    return (
        <div className={Style.Home}>
            <SearchForm />
            <Cards />
        </div>
    );
}

export default Home;