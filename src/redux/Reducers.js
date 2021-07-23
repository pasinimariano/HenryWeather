import { ADD_CITY, REMOVE_CITY, GET_CITY } from './actions/';


const initialState = {
    citiesLoaded: [],
    cityDetails: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            let index = state.citiesLoaded.findIndex(obj => obj.id === action.payload.id);
            if (index === -1) {
                return {
                    ...state,
                    citiesLoaded: [...state.citiesLoaded, action.payload]
                };
            };
        case REMOVE_CITY:
            return {
                ...state,
                citiesLoaded: state.citiesLoaded.filter(city => city.id !== action.payload)
            }
        case GET_CITY:
            return {
                ...state,
                cityDetails: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;