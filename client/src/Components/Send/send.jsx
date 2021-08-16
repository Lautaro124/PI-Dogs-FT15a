import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperament } from '../../Actions/index'
export default function Send(){
    
    const [temps, setTemps] = useState('')
    const [objCreate, setObjCreate] = useState({name: '',height: '',width: '',life_span: '', temperament: []})
    const dispatch = useDispatch()
    const temp = useSelector((state) => state.temperaments)

    function HandleChange(name, value) {
        console.log(name, value)
        setObjCreate({name: value})
    }

    function HandleSubmit(){
        if(objCreate.name !== '' && objCreate.height !== '' && objCreate.width !== '' && objCreate.life_span !== ''){
            if(temps !== ''){
                
            }
            return alert('Un campo no se relleno correctamente')
        }
        return alert('Un campo no se relleno correctamente')
    }
    useEffect(()=> {
        dispatch(getTemperament())
    },[dispatch])

    return(  
        <div>
            <form onSubmit={HandleSubmit()}>
                <label>Name: <input type='text' name= 'name' onChange= {e => HandleChange(e.target.name, e.target.value)}/></label>
                <label>Height: <input type='text' name= 'height' onChange= {e => HandleChange(e.target.name, e.target.value)}/></label>
                <label>Weight: <input type='text' name= 'weight' onChange= {e => HandleChange(e.target.name, e.target.value)}/></label>
                <label>Life span: <input type='text' name= 'life_span' onChange= {e => HandleChange(e.target.name, e.target.value)}/></label>
                <label>Temperament: <h6>{temps}</h6></label>
                <select onChange={e => setTemps(temps+' '+e.target.value)}>
                    {temp && temp.slice().sort().map(e => {
                        return( <option key={e.id}>{e.name}</option>)
                    })}
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}