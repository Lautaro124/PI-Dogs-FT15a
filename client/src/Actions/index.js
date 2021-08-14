import { GET_DOGS, GET_ID_DOGS, GET_TEMPERAMENT, GET_NAME_DOGS, SEND_DOGS, FILTER_ZA,FILTER_AZ } from './constantes'
import { URL_DOG, URL_TEMPERAMENT } from '../Constantes'
import axios from 'axios'

export function getDogs(){

    return async function(dispatch) {

        let algo=  await axios.get('http://localhost:3001/dogs')
        return dispatch({type: GET_DOGS, payload: algo.data})
    }
}

export  function getIdDogs(id){

    return async function(dispatch) {

        let algo=  await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({type: GET_ID_DOGS, payload: algo.data})
    }
}

export function getNameDogs(name){

    return async function(dispatch) {

        let algo =  await axios.get(`http://localhost:3001/dogs?name=${name}`)
        return dispatch({type: GET_NAME_DOGS, payload: algo.data})
    }
}

export function getTemperament(){   
    
    return async function(dispatch) {

        let algo=  await axios.get(URL_TEMPERAMENT)
        return dispatch({type: GET_TEMPERAMENT, payload: algo.data})
    }
}

export function sendDogs(){ 

    return async function(dispatch) {

        let algo=  await axios.get(URL_DOG)
        return dispatch({type:SEND_DOGS, payload: algo.data})
    }
}

export function filterZA(ar){
    return async function(dispatch){
        return dispatch({type:FILTER_ZA, payload: ar})
    }
}
