import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIdDogs } from "../../Actions/index";
import { useParams } from "react-router";

export default function Details() {
  const dispatch = useDispatch();
  const detail = useSelector(state => state.dogDetails)

  let { id } = useParams();

  useEffect(() => {
    dispatch(getIdDogs(id));
  }, [id]);

  return (
    <div>
      <h1>{detail.name}</h1>
      <h4>{detail.height} M</h4>
      <h4>{detail.weight} M</h4>
      <h4>{detail.life_span}</h4>
      <h4>
        {detail.temperament &&
          detail.temperament.map((e) => {
            return e + ", ";
          })}
      </h4>
    </div>
  );
}
