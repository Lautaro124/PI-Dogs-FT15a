import React from 'react'
import Card from './Card'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from '../../Actions/index'
    
export default function Cards(){
    const dispatch = useDispatch()
    const dogis = useSelector(state => state.dogsLoaded)
    
    useEffect(()=>{
        dispatch(getDogs());
    },[dispatch])
    
    return(
        <div>
            {
               dogis && dogis.map(e => {
                   return <Card name={e.name}/>
               }) 
            }
        </div>
    )
}