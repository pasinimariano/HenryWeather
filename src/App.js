import React from 'react';
import SearchBar from './components/searchBar/SearchBar.jsx';
import Cards from './components/cards/Cards.jsx';
import './style/AppStyle.css'


export default function App() {
    return (
        <div className='App'>
            <SearchBar />
            <hr />
            <Cards />
        </div>
    );
}

