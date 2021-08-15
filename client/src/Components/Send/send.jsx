import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperament } from '../../Actions/index'
export default function Send(){
    
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const temp = useSelector((state) => state.temperaments)

    useEffect(()=> {
        dispatch(getTemperament())
    },[dispatch])

    return(  
        <div>
            <form>
                <label>Name: <input type='text'/></label>
                <label>height: <input type='text'/></label>
                <label>weight: <input type='text'/></label>
                <label>life span: <input type='text'/></label>
                <label>Temperament: <input type='text' value ={input}/>
                <select onChange={e => setInput(e)}>
                        {temp && temp.sort().map(e => {
                            return( <option key={e.id}>{e.name}</option>)
                        })}
                    </select></label>
                <input type="submit"/>
            </form>
        </div>
    )
}