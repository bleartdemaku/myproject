import React from "react";
import './Footer.scss';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Cloumn 1 */}
          <div className="part col-md-3 col-sm-6">
            <h4>lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          {/* Cloumn 2 */}
          <div className="part col-md-3 col-sm-6">
            <h4>lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          {/* Cloumn 3 */}
          <div className="part col-md-3 col-sm-6">
            <h4>lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
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
