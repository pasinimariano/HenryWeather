import React from 'react';
import styles from '../styles/Styles.module.css';


export default function SearchBar({ onSearch }) {

    let inputValue = React.createRef();

    let onClickHandler = () => {
        onSearch(inputValue.current.value)
    }

    return (
        <div className={styles.SeachBar}>
            <input 
                type='text'
                ref={inputValue}
                placeholder='Buscar una ciudad'/>
            <button onClick={onClickHandler}> Click Me! </button>
        </div>
    );
}

