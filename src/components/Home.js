import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Page1A from "./Page1A";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 me-auto">
            <div className="container-fluid">
              <NavLink className="navbar-brand mt-2" to={"/"}>
                Sample Project
              </NavLink>
              <div className="mt-5">
                <div className="main">
                  <NavLink className="nav-link main-link">Document</NavLink>
                  <NavLink className="nav-link main-link">File</NavLink>
                  <NavLink className="nav-link main-link">Edit</NavLink>
                  <NavLink className="nav-link main-link">View</NavLink>
                  <div className="main-1  ">
                    <NavLink className="nav-link">e-Sign</NavLink>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <NavLink className="nav-link">e-Sign Status</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Page1A />
    </>
  );
};

export default Home;
