import React from 'react';
import SingleCard from './SingleCard.jsx';
import styles from './style/Style.module.css';


export default function CardsLogic(props) {

    if (!props.cities) {
        return <h2> No hay ciudades para mostrar </h2>
    };

    return (
        <div className={styles.CardContainer}>
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
        </div>
    );
}