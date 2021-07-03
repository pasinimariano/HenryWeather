import React from 'react';


const SearchBar = ({ onSearch }) => {

    let inputValue = React.createRef();

    let onClickHandler = () => {
        onSearch(inputValue.current.value)
    }

    return (
        <div className='SeachBar'>
            <input
                type='text'
                ref={inputValue}
                placeholder='Ingresa el nombre de una ciudad' />
            <button onClick={onClickHandler}> Buscar </button>
        </div>
    );
}

export default SearchBar;

