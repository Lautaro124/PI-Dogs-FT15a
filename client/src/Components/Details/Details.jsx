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
      <nav className={S.navbar}>
        <Link to="/Home" className={S.send}><h3>Home</h3></Link>
      </nav>
      <div className={S.content}>
        <div>
          {detail.image ? (
            <img src={detail.image} className={S.img} />
          ) : (
            <img
              src="https://pbs.twimg.com/media/EPzN-oYXkAA_H_e?format=jpg&name=small"
              className={S.img}
            />
          )}
          <h3 className={S.nam}>{detail.name}</h3>
        </div>
        <div className={S.bottom}>
          <div className={S.show}>
            <h5>Height: </h5>
            <h5 className={S.margin}> {' '+detail.height}</h5>
          </div>
          
          <div className={S.show}>
            <h5>Weight: </h5>
            <h5 className={S.margin}> {' '+detail.weight}</h5>
          </div>
          
          <div className={S.show}>
            <h5>Life span: </h5>
            <h5 className={S.margin}> {' '+detail.life_span}</h5>
          </div>
          
          <div className={S.show}>
            <h5>Temperaments: </h5>
            <h5 className={S.margin}>
            {detail.temperaments
              ? typeof detail.temperaments === "object"
                ? detail.temperaments.map((e) => {
                    if (e) {
                      return " " + e;
                    }
                  })
                : detail.temperaments.map((e) => {
                    if (e) {
                      return " " + e.name;
                    }
                  })
              : "Not fount"}
          </h5>
          </div>
          
        </div>
      </div>
    </div>
  );
}
