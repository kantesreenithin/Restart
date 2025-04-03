import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <Breadcrumbs />
      <Outlet />
    </div>
  );
}

export default MainLayout;
