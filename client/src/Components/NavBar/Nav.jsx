import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux"
import { filterZA, getDogs, getTemperament } from '../../Actions/index'
import { useEffect } from "react";

export default function Nav() {
  const dispatch = useDispatch();
  const dogis = useSelector((state) => state.dogsLoaded)
  const temps = useSelector((state) => state.temperaments)

  function HandleChangeAZ(e){
    if(e.target.value === 'Z-A'){
      dispatch(filterZA(dogis))
    }
    else{
      dispatch(getDogs())
    }
  }

  useEffect(()=>{
    dispatch(getTemperament())
  },[dispatch])
    
  console.log(temps)
  return (
    <div>
      <NavLink exact to="/Home"> Home</NavLink>
      <select onChange={e => HandleChangeAZ(e)}>
        <option value='A-Z'>A-Z</option>
        <option value='Z-A'>Z-A</option>
      </select>
      <select >
        {temps && temps.map(e =>{
          return (<option value={e.name}>{e.name}</option>)
        })}
      </select>
      <SearchBar/>
    </div>
  );
}
