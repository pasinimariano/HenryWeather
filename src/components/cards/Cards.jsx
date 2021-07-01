import React from 'react';
import SingleCard from './SingleCard.jsx';
import styles from './style/Style.module.css';


export default function Cards({ cities, onClose }) {

    if (cities.length === 0) {
        return (
            <div className='NoData'>
                <h2> No hay ciudades Que mostrar</h2>
            </div>
        );
    };

    return (
        <div className={styles.CardContainer}>
            {cities.map(city =>
                <SingleCard
                    key={city.id}
                    name={city.name}
                    country={city.country}
                    time={city.time}
                    temp={city.temp}
                    icon={city.icon}
                    text={city.text}
                    hum={city.hum}
                    onClose={() => onClose(city.id)}
                />
            )};
        </div>
    );
}
