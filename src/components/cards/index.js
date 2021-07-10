import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCity } from '../../redux/actions/actionCreators';
import styles from './style/Style.module.css';


const Cards = ({ cities, removeCity }) => {

    if (cities.length === 0) {
        return (
            <div className={styles.NoData}>
                <h2> Utiliza el buscador para comenzar a mostrar ciudades </h2>
            </div>
        )
    };
    return (
        <div className={styles.CardContainer}>
            {cities.map(city =>
                <div className={styles.CardBody} key={city.id}>
                    <div className={styles.CardTop}>
                        <button onClick={() => removeCity(city.id)}> X </button>
                        <img
                            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                            alt={`${city.name} actual weather`}
                        />
                    </div>
                    <div className={styles.CardBottom}>
                        <h2> {city.name}, {city.sys.country} </h2>
                        <div className={styles.Separator}> </div>
                        <div className={styles.TempContainer}>
                            <h4> {(city.main.temp - 273.15).toFixed(1)}°C </h4>
                        </div>
                        <div className={styles.TimeContainer}>
                            <h4>  props.time </h4>
                        </div>
                        <Link to={`/city/${city.id}`}>
                            <button> Más detalles </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesLoaded
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCity: city => dispatch(removeCity(city))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards)