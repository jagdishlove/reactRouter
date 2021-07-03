import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

export default function Header({ btn, btn1 }) {
  return (
    <>
      <div className="header">
        <h1>React Router</h1>

        <div className="links">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>Home</h1>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <h1>About</h1>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <h1>Profile</h1>
          </Link>

          <button onClick={(onclickHandler) => btn1(!btn)}>
            {!btn ? "log out" : "login"}
          </button>
        </div>
      </div>
    </>
  );
}
