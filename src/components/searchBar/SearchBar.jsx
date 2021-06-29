import React from 'react';
import SearchBarLogic from './SearchBarLogic.jsx';


export default function SearchBar() {
    return (
        <SearchBarLogic onSearch={(city) => alert(city)} />
    );
}