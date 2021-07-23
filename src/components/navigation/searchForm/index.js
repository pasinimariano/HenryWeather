import React from 'react';
import { connect } from 'react-redux';
import { addCity } from '../../../redux/actions/actionCreators.js';
import Styles from './styles/Style.module.css'


const SearchBar = ({ addCity, error }) => {

    let inputValue = React.createRef();
    
    let onClickHandler = (event) => {
        event.preventDefault();
        addCity(inputValue.current.value);
        event.target.reset()
    };

    return (
        <div className={Styles.SeachBar}>
            <h2>BUSCADOR DE CIUDADES</h2>
            <form onSubmit={onClickHandler} className={Styles.Form}>
                <input
                    className={Styles.Input}
                    type='text'
                    ref={inputValue}
                    placeholder='Nombre ciudad...' />
                <button className={Styles.Button} type='submit'> Buscar </button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        error: state.errorCities
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCity: city => dispatch(addCity(city))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

