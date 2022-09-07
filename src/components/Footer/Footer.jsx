import React from "react";
import "./Footer.scss";

const Footer = () => (
  <footer className="main-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row text-white">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Our ptoject!!</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3 links">
          <h5 className="text-uppercase">Fast Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3 links">
          <h5 className="text-uppercase">Contact Us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3 text-white">
      © 2020 Copyright:
      <a href="#!" style={{ textDecoration: 'none', color: 'grey'}}> Bleart</a>
    </div>
  </footer>
);

export default Footer;
