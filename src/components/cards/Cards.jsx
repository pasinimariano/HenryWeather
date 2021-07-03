import React from 'react';
import SingleCard from './SingleCard.jsx';
import styles from './style/Style.module.css';


const Cards = ({ cities, onClose }) => {

    if (cities.length === 0) {
        return (
            <div className={styles.NoData}>
                <h2> No hay ciudades que mostrar, utiliza el buscador </h2>
            </div>
        );
    };

    return (
        <div className={styles.CardContainer}>
            {cities.map(city =>
                <SingleCard 
                    key={city.id}
                    id={city.id}
                    name={city.name}
                    country={city.country}
                    time={city.timezone}
                    temp={city.temp}
                    icon={city.icon}
                    onClose={() => onClose(city.id)}
                />
            )};
        </div>
    );
}

export default Cards;