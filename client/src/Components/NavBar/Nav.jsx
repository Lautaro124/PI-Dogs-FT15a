import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Home from "../Home/Home";

export default function Nav() {
  return (
    <div>
      <NavLink exact to="/Home"> Home</NavLink>
      <NavLink to="/Details"> Details</NavLink>
    </div>
  );
}
