import React from "react";

export default function Card(props) {
  console.log(props)
  return (
    <div className='card'>
      <div className='card-body'>
        <img src={props.image} className='card-img-top'/>
      </div>
      <h4 className='card-title'>{props.name}</h4>
      <p className='card-subtitle mb-2 text-muted'>{props.temperament && props.temperament.map(e=>{
        return e + ', '
      })}</p>
    </div>
  );
}