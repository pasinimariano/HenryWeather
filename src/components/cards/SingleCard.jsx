import React from 'react';
import './style/style.css';


export default function SingleCard(props) {
    return (
        <div className='CardContainer'>
            <div className='CardTop'>
                <button onClick={props.onClose}> X </button>
                <h2> {props.name} </h2>
            </div>
            <div className='CardBottom'>
                <div>
                    <h3> Min </h3>
                    <h4> {props.min}° </h4>
                </div>
                <div>
                    <h3> Max </h3>
                    <h4> {props.max}° </h4>
                </div>
                <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={`${props.name} actual weather`}/>
            </div>
        </div>
    );
}