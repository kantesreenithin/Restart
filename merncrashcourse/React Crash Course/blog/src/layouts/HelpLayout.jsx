import React from "react";
import { Link, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div>
      <p>
        HelpLayout Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
        maiores.
      </p>
      <Link to="faq">FAQ</Link>
      <Link to="contact">Contact</Link>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
