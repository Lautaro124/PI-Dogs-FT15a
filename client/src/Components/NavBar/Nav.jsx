import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { filterZA, filterAZ, orderHeightMax, orderHeightMim, orderWeightMax, orderWeightMim,
   getDogs, getTemperament, filterTemp } from "../../Actions/index";
import { useEffect, useState } from "react";
import S from'./nav.module.css'

export default function Nav() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('')
  const [filter,setFilter] = useState('default')

  const temps = useSelector((state) => state.temperaments);
  useEffect(() => {
    if(filter === 'default'){
      dispatch(getTemperament())
      dispatch(getDogs())
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
    <nav className="navbar navbar-dark bg-dark">
      <div className= 'container'>
        <NavLink exact to="/Home" className="navbar-brand">
          Home
        </NavLink>
        <Link to='/Create'><button className='navbar-toggler'>Create</button></Link>
        <div>
          <select className="nav-link dropdown-toggle" onChange={e => HundleOnchangeOrder(e)} >       
            <option className="dropdown-item" value="A-Z">A-Z</option>
            <option className="dropdown-item" value="Z-A">Z-A</option>
            <option className="dropdown-item" value="heigthMay">Heigth May</option>
            <option className="dropdown-item" value="heigthMin">Heigth Min</option>
            <option className="dropdown-item" value="weigthMay">Weigth May</option>
            <option className="dropdown-item" value="weigthMin" >Weigth Min</option>       
          </select>
        </div>
        <div className="">
          <select className='nav-link dropdown-toggle' onChange={e => HundleOnchangeFilter(e)}>
            <option value="default">All dogs</option>
            {temps &&
              temps.map((e) => {
                return <option className="dropdown-item" key={e.id} value={e.name}>{e.name}</option>;
              })}
          </select>
        </div>     
        <SearchBar />
      </div>
    </nav>
    
  );
}
