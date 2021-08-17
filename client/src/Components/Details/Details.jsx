import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIdDogs } from "../../Actions/index";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import S from "./detail.module.css";

export default function Details() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.dogDetails);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getIdDogs(id));
  }, [id]);
  return (
    <div className={S.flexs}>
      <Link to='/Home'>Home</Link>
      <div className={S.content}>
        <img src={detail.image} className={S.img} />
        <h1>{detail.name}</h1>
        <h4>Height: {detail.height} M</h4>
        <h4>Weight: {detail.weight} M</h4>
        <h4>Life span: {detail.life_span}</h4>
        <h4>Temperaments: 
          {
            detail.temperaments ?
              typeof(detail.temperaments) === 'object' ?
              detail.temperaments.map((e) => {
                if (e) {
                  return " " + e  ;
                }
              }):
              detail.temperaments.map((e) => {
                if (e) {
                  return " " + e.name  ;
                }
              }): 'Not fount'
          }
        </h4>
      </div>
    </div>
  );
}
