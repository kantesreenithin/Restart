import React from "react";
import { Link } from "react-router-dom";
import "../index.css"
function Notfound() {
  return (
    <div className="not-found">
      <h2>Sorry Not Found</h2>
      <p>The page cannot be found</p>
      <Link to="/">back to Homepage...</Link>
    </div>
  );
}

export default Notfound;

// npx json-server --watch data/db.json --port 8000