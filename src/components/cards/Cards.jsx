import React from 'react';
import CardsLogic from './CardsLogic.jsx';
import data from '../data/Data.js'


export default function Cards() {
    return (
        <CardsLogic cities={data} />
    );
}