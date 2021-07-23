import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCity } from '../redux/actions/actionCreators';
import Styles from './Styles/CityDetails.module.css'


const CityDetails = (props) => {

    const { city, getCity } = props;
    const cityId = props.match.params.id;

    useEffect(() => {
        getCity(cityId)
    }, []);

    return (
        <div className={Styles.CityContainer}>
            {!city ?
                <h2>LOADING....</h2>
                :
                <div className={Styles.PEPE}>
                    <div className={Styles.NameContainer}>
                        <h2> {city.name}, {city.sys.country}</h2>
                        <h3> {city.timezone}, {new Date().toISOString().substring(0, 10)}</h3>
                    </div>
                    <div className={Styles.TempContainer}>
                        <img
                            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                            alt={`${city.name} actual weather`}
                        />
                        <div className={Styles.ActualTemp}>
                            <div className={Styles.MinMax}>
                                <h4>
                                    {(city.main.temp_min - 273.15).toFixed(1)}
                                    -
                                    {(city.main.temp_max - 273.15).toFixed(1) }
                                </h4>
                            </div>
                            <div className={Styles.Actual}>
                                <h2> {(city.main.temp - 273.15).toFixed(1)} °C </h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};
// {(city.main.temp - 273.15).toFixed(1)}°C
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
)(CityDetails);
