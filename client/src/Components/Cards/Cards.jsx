import React from 'react'
import Card from './Card'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getIdDogs } from '../../Actions/index'
    
export default function Cards(){
    const dispatch = useDispatch()
    const dogis = useSelector(state => state.dogsLoaded)
    const detail = useSelector(state => state.dogDetails)
    
    useEffect(()=>{
        dispatch(getDogs());
    },[dispatch])
    
    return(
        <div>
            {
               dogis && dogis.map(e => {
                   return (<Card name={e.name} image={e.image} temperament={e.temperament}/>)
               })
            }
        </div>
    )

    
}