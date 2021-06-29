import React from 'react';


export default function SeachBarLogic(props) {
    return(
        <div className='BarStyle'>
            <input className='InputCity' type='text' placeholder='City Name'/>
            <button onClick={() => props.onSearch('Voy a encontrar una ciudad')}> Add City </button>
        </div>
    );
}