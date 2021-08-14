import { GET_DOGS, GET_ID_DOGS, GET_TEMPERAMENT, GET_NAME_DOGS, SEND_DOGS, FILTER_ZA, FILTER_AZ } from '../Actions/constantes'

const initialState = {
    dogsLoaded: [],
    dogDetails: {},
    dogsFilter: [],
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
                dogsFilter: action.payload
            };

        case SEND_DOGS:
            return {
                ...state,
                sendDogs: action.payload
            };
        
        case FILTER_ZA:
            return {
                
                dogsFilter: action.payload.reverse()
            };
        default: 
            return state;
    }
}