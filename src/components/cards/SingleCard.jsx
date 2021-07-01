import React from 'react';
import styles from './style/Style.module.css';


export default function SingleCard(props) {
    return (
        <div className={styles.CardBody}>
            <div className={styles.CardTop}>
                <button onClick={props.onClose}> X </button>
                <img src={props.icon} alt={`${props.name} actual weather`} />
            </div>
            <div className={styles.CardBottom}>
                <h2> {props.name}, {props.country} </h2>
                <div className={styles.Separator}> </div>
                <div className={styles.TempContainer}>
                    <h4> {props.temp}°C </h4>
                </div>
                <div className={styles.TimeContainer}>
                    <h4> {props.time} </h4>
                </div>
            </div>
        </div>
    );
}