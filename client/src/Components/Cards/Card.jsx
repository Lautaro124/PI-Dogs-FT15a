import React from "react";

export default function Card(props) {
    console.log(props)
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}
