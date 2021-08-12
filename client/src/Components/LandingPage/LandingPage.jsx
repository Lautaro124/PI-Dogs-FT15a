import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="App">
      <Link to="/Home">
        <h1>Welcome!</h1>
      </Link>
    </div>
  );
}
