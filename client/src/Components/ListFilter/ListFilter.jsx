import React from "react";
import Card from "../Cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Nav from "../NavBar/Nav";
import { getpage } from "../../Actions/index"
import S from "../Cards/card.module.css";
import Paginate from "../Cards/Paginate";

export default function ListFilter() {
  const dispatch = useDispatch();
  const aut = useSelector((state) => state.dogsLoaded);

  const page = useSelector((state) => state.dogsLoaded)
  const [breads] = useState(9);

  let indexLast = page * breads;
  let firstIndex = indexLast - breads;
  const currentBreads = aut?.slice(firstIndex, indexLast);

  function pagenate(pageNumber) {
    dispatch(getpage(pageNumber));
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
