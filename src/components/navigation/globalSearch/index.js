import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCity } from '../../../redux/actions/actionCreators'
import Style from './style/Style.module.css';


const GlobalSearch = ({ city, getCity }) => {

    let inputValue = React.createRef();

    let onClickHandler = (event) => {
        event.preventDefault();
        getCity(inputValue.current.value);
        event.target.reset()
    };

    return (
        <div className={Style.FormContainer}>
            <form onSubmit={onClickHandler}>
                <input
                    className={Style.Input}
                    type='text'
                    name='inputCity'
                    ref={inputValue}
                    placeholder='Nombre ciudad...' />
                <Link to={`/city/${city.id}`}> //ARREGLAR
                    <button type='submit' className={Style.Button}> Buscar </button>
                </Link>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        city: state.cityDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCity: city => dispatch(getCity(city))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GlobalSearch);