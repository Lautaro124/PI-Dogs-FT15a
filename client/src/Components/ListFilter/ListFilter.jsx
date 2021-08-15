import React from "react";
import Card from "../Cards/Card";
import { useSelector } from "react-redux";
import Nav from "../NavBar/Nav";
import S from "../Cards/card.module.css";

export default function ListFilter() {
  const aut = useSelector((state) => state.dogsLoaded);

  return (
    <div>
      <Nav />
      
      <div className={S.conten}>
        {aut &&
          aut.map((e) => {
            
            return (
              <Card
                key={e.id}
                id = {e.id}
                name={e.name}
                image={
                  "https://cdn2.thedogapi.com/images/" +
                  e.reference_image_id + '.jpg'
                }
                temperament={e.temperament}
              />
            );
          })}
      </div>
    </div>
  );
}
