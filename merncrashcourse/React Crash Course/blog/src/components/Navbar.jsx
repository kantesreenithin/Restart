import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Blog</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/help">Help</Link>
      </div>
    </nav>
  );
}

export default Navbar;

// <a href="/">Home</a>
// <a
//   href="/create"
//   // style={{
//   //   color: "white",
//   //   backgroundColor: "#f1356d",
//   //   borderRadius: "8px",
//   // }}
// >
//   New Blog
// </a>
