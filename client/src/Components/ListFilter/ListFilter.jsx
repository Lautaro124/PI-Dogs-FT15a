import React from "react";
import Card from "../Cards/Card";
import { useSelector } from "react-redux";

export default function ListFilter() {
  const aut = useSelector(state => state.dogsFilter);
  console.log(aut)
  return (
    <div>
        <h1>Hola soy filter</h1>
      {aut &&
        aut.map((e) => {
          <Card
            key={e.id}
            name={e.name}
          />;
        })}
    </div>
  );
}
