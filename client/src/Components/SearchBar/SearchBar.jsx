import React from "react";
import { getNameDogs } from "../../Actions/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function HandleChange(e) {

    setInput(e.target.value);
  }

  function HandleSubmit() {

    dispatch(getNameDogs(input));
    setInput("");  
  }
  return (
    <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => HandleChange(e)}
        />

        {input !== "" ? (
          <Link to="/Home/Search">
            <button type="submit" onClick={() => HandleSubmit()}>Search</button>
          </Link>
        ) : (
          <Link to="/Home">
            <button type="submit" onClick={() => HandleSubmit()}>Search</button>
          </Link>
        )}
    </div>
  );
}
