import { ADD_CITY, REMOVE_CITY, GET_CITY } from './index.js';


export const addCity = (city) => {
    const APIKEY = '4f1ca4abca8ab37b6d420864a5ca84e6';
    return dispatch => {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: ADD_CITY, payload: json })
            })
    }
};

export const removeCity = (id) => {
    return {
        type: REMOVE_CITY,
        payload: id
    }
};

export const getCity = (id) => {
    const APIKEY = '4f1ca4abca8ab37b6d420864a5ca84e6';
    return dispatch => {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APIKEY}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_CITY, payload: json })
            })
    }
};

