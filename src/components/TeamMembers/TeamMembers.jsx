import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/Footer/Footer";
import NavbarBootstrap from "../../components/Navbar/NavbarBootstrap";
import "./TeamMembers.scss";
import github from "../../assets/github.svg";
import website from "../../assets/website.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

function TeamMembers() {
  const { id } = useParams();
  const {
    data: employee,
    error,
    isPending,
  } = useFetch("http://localhost:8000/employees/" + id);

  return (
    <>
      <NavbarBootstrap />

      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    {employee && (
                      <img
                        src={employee.image}
                        alt="...loading"
                        className="rouned-circle"
                        width="150"
                      />
                    )}
                    <div className="mt-3">
                      {isPending && <div>Loading...</div>}
                      {error && <div>{error}</div>}
                      {employee && (
                        <>
                          <h4>{employee.name}</h4>
                          <p className="text-secondary">{employee.job}</p>
                          <p className="text-muted font-size-sm">
                            {employee.location}
                          </p>
                          <button className="space btn btn-primary">
                            Follow
                          </button>
                          <button className="btn btn-outline-primary">
                            Message
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <img
                        src={website}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        alt="...loading"
                      />
                      Website
                    </h6>
                    <span class="text-secondary">
                      Localy hosted at the moment!
                    </span>
                  </li>

                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <img
                        src={github}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        alt="...loading"
                      />
                      GitHub
                    </h6>
                    <span class="text-secondary">bleartdemaku/myproject</span>
                  </li>

                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <img
                        src={twitter}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        alt="...loading"
                      />
                      Twitter
                    </h6>
                    <span class="text-secondary">bleartd</span>
                  </li>

                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <img
                        src={instagram}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        alt="...loading"
                      />
                      Instagram
                    </h6>
                    <span class="text-secondary">bleartd</span>
                  </li>

                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <img
                        src={facebook}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        alt="...loading"
                      />
                      Facebook
                    </h6>
                    <span class="text-secondary">bleartd</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              {employee && (
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {employee.name}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {employee.email}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone Number</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {employee.phone}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {employee.location}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {employee.location}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <button className="btn btn-info">Save Changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                      <small>Mobile template</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                      <small>Mobile template</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TeamMembers;
