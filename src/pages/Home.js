import React from 'react';
import SearchForm from '../components/navigation/searchBar/searchBar.jsx';
import Cards from '../components/cards/Cards.jsx';


const Home = () => {

    return (
        <div>
            <SearchForm />
            <Cards />
        </div>
    );
}

export default Home;