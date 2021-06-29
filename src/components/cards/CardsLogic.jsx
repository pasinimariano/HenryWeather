import React from 'react';
import SingleCard from './SingleCard.jsx';


export default function CardsLogic(props) {

    if (!props.cities) {
        return <h2> Cities dont found </h2>
    };

    return (
        <>
            {props.cities.map(city =>
                <SingleCard
                    key={city.id}
                    max={city.main.temp_max}
                    min={city.main.temp_min}
                    name={city.name}
                    img={city.weather[0].icon}
                    onClose={() => alert(city.name)}
                />
            )}
        </>
    );
}