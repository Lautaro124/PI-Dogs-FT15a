import { GET_DOGS, GET_ID_DOGS, GET_TEMPERAMENT, GET_NAME_DOGS, SEND_DOGS } from './constantes'
import { URL_DOGS, URL_DOG, URL_TEMPERAMENT } from '../Constantes'
import axios from 'axios'

export function getDogs(){

    return function(dispatch) {

        let algo=  await axios.get(URL_DOGS)
        dispatch({type: GET_DOGS, payload: dogs})
    }
}

export function getIdDogs(id){

    return async function(dispatch) {

        let algo=  await axios.get(`https://localhost:3001/dogs/${id}`)
        dispatch({type: GET_ID_DOGS, payload: dogs})
    }
}

export function getNameDogs(name){

    return async function(dispatch) {

        let algo =  await axios.get(`https://localhost:3001/dogs?name=${name}`)
        dispatch({type: GET_NAME_DOGS, payload: dogs})
    }
}

export function getTemperament(){   
    
    return async function(dispatch) {

        let algo=  await axios.get(URL_TEMPERAMENT)
        dispatch({type: GET_TEMPERAMENT, payload: dogs})
    }
}

export function sendDogs(){ 

    return async function(dispatch) {

        let algo=  await axios.get(URL_DOG)
        dispatch({type:SEND_DOGS, payload: dogs})
    }
}