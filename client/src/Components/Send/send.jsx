import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperament, sendDogs } from "../../Actions/index";
import { Link } from "react-router-dom";
import S from "./send.module.css"
export default function Send() {

  var reg = new RegExp(/\d+/g);
  const [temps, setTemps] = useState("");
  const [objCreate, setObjCreate] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
  })

  const dispatch = useDispatch();
  const temp = useSelector((state) => state.temperaments);

  function HandleChange(e) {
    if(e.target.name !== 'name'){
      if(reg.test(e.target.value)){
        let temporal = {...objCreate}

        temporal[e.target.name]= e.target.value
        setObjCreate(temporal);
      }
      else{
      return alert('No ingreso un numero')
      }
    }
    
    let temporal = {...objCreate}

    temporal[e.target.name]= e.target.value
    setObjCreate(temporal);
  }

  function HandleTemps(e){
    setTemps(e.target.value+ ' '+ temps)
    
    let temporal = {...objCreate}
    temporal["temperaments"]= [...temporal["temperaments"], e.target.value]
    setObjCreate(temporal);
  }

  function HandleSubmit(e) {
    e.preventDefault();
    dispatch(sendDogs(objCreate));
    alert('You created a new dog')
  }
  
  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  return (
    <div>
      <nav className={S.navbar}>
        <Link to="/Home" className ={S.link}><h3>Home</h3></Link>
      </nav>   
      <div className={S.center}>
        <form onSubmit={e => HandleSubmit(e)} className={S.flex}>
          <div >
            <label className={S.texts}>
              Name: 
              <input
                type="text"
                name="name"
                value={objCreate.name}
                onChange={(e) => HandleChange(e)}
              />
            </label>
          </div>
          <div >
            <label className={S.texts}>
              Height: 
              <input
                type="text"
                name="height"
                value={objCreate.height}
                onChange={(e) => HandleChange(e)}
              />
            </label>
          </div>
          <div >
            <label className={S.texts}>
              Weight: 
              <input
                type="text"
                name="weight"
                value={objCreate.weight}
                onChange={(e) => HandleChange(e)}
              />
            </label>
          </div>
          <div >
            <label className={S.texts}>
              Life span: 
              <input
                type="text"
                name="life_span"
                value={objCreate.life_span}
                onChange={(e) => HandleChange(e)}
              />
            </label>
          </div>
          <div >
            <label className={S.texts}>
              Temperament: <h6>{temps}</h6>
            </label>
            <select onChange={(e) => HandleTemps(e)}>
              <option>-</option>
              {temp &&
                temp
                  .slice()
                  .sort()
                  .map((e) => {
                    return <option key={e.id} value={e.name}>{e.name}</option>;
                  })}
            </select>
          </div>

          <button type="submit" className={S.margin}>Create</button>
        </form>
      </div>
    </div>
  );
}