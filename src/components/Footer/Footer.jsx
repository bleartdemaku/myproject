import React from "react";
import './Footer.scss';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Cloumn 1 */}
          <div className="part col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
          {/* Cloumn 2 */}
          <div className="part col-md-3 col-sm-6">
            <h4>My Github</h4>
            <ul className="list-unstyled">
              <li><a href="https://github.com/bleartdemaku/myproject">This project!</a></li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          {/* Cloumn 3 */}
          <div className="part col-md-3 col-sm-6">
            <h4>Our pages</h4>
            <ul className="list-unstyled">
              <li><a href="./home">Home Page</a></li>
              <li><a href="./team">Team</a></li>
              <li><a href="./services">Services</a></li>
              <li><a href="./about">About</a></li>
            </ul>
          </div>
          {/* Cloumn 4 */}
          <div className="part col-md-3 col-sm-6">
            <h4>lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy; {new Date().getFullYear()} Bleart Demaku - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
