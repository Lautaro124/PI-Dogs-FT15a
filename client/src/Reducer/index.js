import { GET_DOGS, GET_ID_DOGS, GET_TEMPERAMENT, GET_NAME_DOGS, 
         SEND_DOGS, FILTER_ZA, FILTER_AZ, ORDER_HEIGHT_MAX, ORDER_HEIGHT_MIN, 
         ORDER_WEIGHT_MAX, ORDER_WEIGHT_MIN, FILTER_TEMP } from '../Actions/constantes'
import axios from 'axios'
import { orderAZ, height, weight } from '../Components/ListOrder/ListOrder.jsx'

const initialState = {
    dogsLoaded: [],
    dogDetails: {},
    temperaments: [],
    copyBread: []
}

export default function reducer(state= initialState, action) {

    switch (action.type) {
        
        case GET_DOGS: 
            return {
                ...state,
                dogsLoaded: action.payload,
                copyBread: action.payload
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
                dogsLoaded: action.payload
            };

        case FILTER_ZA:
            return {
                ...state,
                dogsLoaded: state.dogsLoaded.slice().sort(orderAZ).reverse()
            };

        case FILTER_AZ:
            return {
                ...state,
                dogsLoaded: state.dogsLoaded.slice().sort(orderAZ)
            };
        case ORDER_HEIGHT_MAX:
            return {
                ...state,
                dogsLoaded: state.dogsLoaded.slice().sort(height)
            }

        case ORDER_HEIGHT_MIN:
            return {
                ...state,
                dogsLoaded: state.dogsLoaded.slice().sort(height).reverse()
            }
        
        case ORDER_WEIGHT_MAX:
            return {
                ...state,
                dogsLoaded: state.dogsLoaded.slice().sort(weight)
            }
        
        case ORDER_WEIGHT_MIN:
            return {
                ...state,
                dogsLoaded: state.dogsLoaded.slice().sort(weight).reverse()
            }

        case FILTER_TEMP:

            return {
                ...state,
                dogsLoaded: state.copyBread.filter(e => {
                    if(e.temperaments !== undefined){
                       if(typeof e.temperaments[0] === 'string'){
                        
                       return e.temperaments?.includes(action.payload)
                    }
                    let arr = e.temperaments?.map(e => e.name)
                    return arr.includes(action.payload) 
                    }
                    
                })
            }

        default: 
            return state;
    }
}