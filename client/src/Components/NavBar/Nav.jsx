import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { filterZA, filterAZ, orderHeightMax, orderHeightMim, orderWeightMax, orderWeightMim,
   getDogs, getTemperament, filterTemp } from "../../Actions/index";
import { useEffect, useState } from "react";


export default function Nav() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('')
  const [filter,setFilter] = useState('default')
  const temps = useSelector((state) => state.temperaments);

  useEffect(() => {
    if(filter === 'default'){
      dispatch(getTemperament())
    }else{
      dispatch(filterTemp(filter))
    }
  },[dispatch, filter])

  useEffect(() => {
    if(order === "Z-A") dispatch(filterZA())
    if(order === "A-Z") dispatch(filterAZ())
    if(order === "heigthMay") dispatch(orderHeightMax())
    if(order === "heigthMin") dispatch(orderHeightMim())
    if(order === "weigthMay") dispatch(orderWeightMax())
    if(order === "weigthMin") dispatch(orderWeightMim())
  }, [dispatch,order]);

  function HundleOnchangeOrder(e) {
    setOrder(e.target.value)
  }

  function HundleOnchangeFilter(e) {
    setFilter(e.target.value)
  }
  return (
    <div>
      <NavLink exact to="/Home">
        Home
      </NavLink> 
      <select onChange={e => HundleOnchangeOrder(e)} >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="heigthMay">Heigth May</option>
        <option value="heigthMin">Heigth Min</option>
        <option value="weigthMay">Weigth May</option>
        <option value="weigthMin" >Weigth Min</option>
      </select>
      <select onChange={e => HundleOnchangeFilter(e)}>
        <option value="default">Temperaments</option>
        {temps &&
          temps.map((e) => {
            return <option key={e.id} value={e.name}>{e.name}</option>;
          })}
      </select>
      <Link to='/Create'><button>Create</button></Link>
      <SearchBar />
    </div>
  );
}
