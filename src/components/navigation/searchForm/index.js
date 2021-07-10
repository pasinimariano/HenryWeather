import React from 'react';
import { connect } from 'react-redux';
import { getCity } from '../../../redux/actions/actionCreators.js';


const SearchBar = ({ getCity }) => {

    let inputValue = React.createRef();

    let onClickHandler = (event) => {
        event.preventDefault();
        getCity(inputValue.current.value);
        event.target.reset()
    };

    return (
        <div className='SeachBar'>
            <form onSubmit={onClickHandler}>
                <input
                    type='text'
                    ref={inputValue}
                    placeholder='Ingresa el nombre de una ciudad' />
                <button type='submit'> Buscar </button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCity: city => dispatch(getCity(city))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(SearchBar);
