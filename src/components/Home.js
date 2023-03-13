import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Page1A from "./Page1A";

const Home = () => {
  const [Email, setEmail] = useState("");
  const [AToken, setAToken] = useState("");

  const handleAddData = () => {};

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
                    <div>
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <MdSettings />
                        Admin Settings
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Admin Settings
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="email"
                                    value={Email}
                                    onChange={(e) => {
                                      setEmail(e.target.value);
                                    }}
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                  />
                                  <label htmlFor="floatingInput">
                                    X-API user E-mail
                                  </label>
                                </div>
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    value={AToken}
                                    onChange={(e) => {
                                      setAToken(e.target.value);
                                    }}
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                  />
                                  <label htmlFor="floatingPassword">
                                    Paste The AccessToken
                                  </label>
                                </div>
                                <div className="form-floating">
                                  <button
                                    className="btn btn-success my-2"
                                    type="submit"
                                    onClick={handleAddData}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <h5 className="text-center text-danger">
                                Stay Tuned . . . We Are Working On it . . .
                              </h5>
                              <br />
                              <h6>This Page is Still under Process . . . </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
