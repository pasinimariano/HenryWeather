import React from 'react';
import styles from './style/Style.module.css';


export default function SingleCard(props) {
    return (
        <div className={styles.CardBody}>
            <div className={styles.CardTop}>
                <button onClick={props.onClose}> X </button>
                <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={`${props.name} actual weather`} />
            </div>
            <div className={styles.CardBottom}>
                <h2> {props.name} </h2>
                <div className={styles.Separator}> </div>
                <div className={styles.MinContainer}>
                    <h3> Min </h3>
                    <h4> {props.min}° </h4>
                </div>
                <div className={styles.MaxContainer}>
                    <h3> Max </h3>
                    <h4> {props.max}° </h4>
                </div>
            </div>
        </div>
    );
}