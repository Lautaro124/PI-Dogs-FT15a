import React from "react";
import Cards from "../Cards/Cards";
import Nav from "../NavBar/Nav";
import S from './home.module.css'

export default function Home() {
  return (
    <div className={S.allCards}>
      <Nav />
      <div>
        <Cards/>
      </div>
    </div>
  );
}