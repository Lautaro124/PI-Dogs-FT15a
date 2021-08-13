import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../Actions/index";
import S from "./card.module.css";
import Paginate from "./Paginate";

export default function Cards() {
  const dispatch = useDispatch();
  const dogis = useSelector((state) => state.dogsLoaded);
  const [page, setPage] = useState(1);
  const [breads, setBreads] = useState(9);

  const indexLast = page * breads;
  const firstIndex = indexLast - breads;

  const currentBreads = dogis.slice(firstIndex, indexLast);

  function pagenate(pageNumber) {
    setPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className={S.conten}>
      {currentBreads &&
        currentBreads.map((e) => {
          return (
            <Card
              key={e.id}
              name={e.name}
              image={e.image}
              temperament={e.temperament}
              id={e.id}
            />
          );
        })}

      <div>
        <Paginate dogis={dogis} breads={breads} paginate={pagenate}/>
      </div>
    </div>
  );
}
