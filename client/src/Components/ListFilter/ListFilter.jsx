import React from "react";
import Card from "../Cards/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import Nav from "../NavBar/Nav";
import S from "../Cards/card.module.css";
import Paginate from "../Cards/Paginate";

export default function ListFilter() {
  const aut = useSelector((state) => state.dogsLoaded);

  const [page, setPage] = useState(1);
  const [breads] = useState(9);

  let indexLast = page * breads;
  let firstIndex = indexLast - breads;
  const currentBreads = aut?.slice(firstIndex, indexLast);

  function pagenate(pageNumber) {
    setPage(pageNumber);
  }

  return (
    <div>
      <Nav />
      <div className={S.center}>
        <div className={S.conten}>
          {currentBreads &&
            currentBreads.map((e) => {
              return (
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  image={e.image}
                  temperament={e.temperaments}
                />
              );
            })}
        </div>
        <div className={S.pag}>
          <Paginate dogis={aut} breads={breads} paginate={pagenate} />
        </div>
      </div>
    </div>
  );
}
