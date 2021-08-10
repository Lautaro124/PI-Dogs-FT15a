import { GET_DOGS, GET_ID_DOGS, GET_TEMPERAMENT, GET_NAME_DOGS, SEND_DOGS } from './constantes'

const initialState = {
    dogsLoaded: [],
    dogDetails: {},
    temperaments: [], 
    sendDogs: {}
}

export default function reducer(state= initialState, action) {

    switch (action.type) {
        
        case GET_DOGS: 
            return {
                ...state,
                dogsLoaded: action.payload
            };

        case GET_ID_DOGS:
            return {
                ...state,
                dogDetails: action.payload
            };
        
        case GET_TEMPERAMENT:
            return {
                ...state,
                temperaments: action.payload
            };

        case GET_NAME_DOGS:
            return {
                ...state,
                dogsLoaded: action.payload
            };

        case SEND_DOGS:
            return {
                ...state,
                sendDogs: action.payload
            };

        default: 
            return state;
    }
}