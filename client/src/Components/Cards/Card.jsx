import React from "react";
import Details from "../Details/Details";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <Link to={`/Details/${props.id}`}>
      <div className="card">
        <div className="card-body">
          <img src={props.image} className="card-img-top" />
        </div>
        <h4 className="card-title">{props.name}</h4>
        <p className="card-subtitle mb-2 text-muted">
          {props.temperament &&
            props.temperament.map((e) => {
              return e + ", ";
            })}
        </p>
      </div>
    </Link>
  );
}
