import React from "react";
import Details from "../Details/Details";
import { Link } from "react-router-dom";
import S from "./card.module.css";

export default function Card(props) {

  return (
    <Link to={`/Details/${props.id}`} className={S.card}>
      <div>
        <div className="card-body">
          { props.image?
          <img src={props.image} className="card-img-top" />:
          <img src='https://pbs.twimg.com/media/EPzN-oYXkAA_H_e?format=jpg&name=small' className="card-img-top" />
        }
          
        </div>

        <h4 className="card-title">{props.name}</h4>
        <p className="card-subtitle mb-2 text-muted">
          { props.temperament
            ? typeof props.temperament[0] === "object"
              ? props.temperament.map((e) => {
                  return e.name + ", ";
                })
              : props.temperament.map((e) => {
                  return e + ", ";
                })
            : "Not fount"}
        </p>
      </div>
    </Link>
  );
}
