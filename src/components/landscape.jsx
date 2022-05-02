import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landscape extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <h1 className="gallary">GALLARY</h1>
        </header>
        <div className="container-fluid">
          <div className="row row-gallary">
            <div className="col-4 gallary-bg">
              <h4 className="head-gallary text-center py-3">category</h4>
              <ul className="nav-bar list-unstyled text-center my-2">
                <li className="navbar-item py-4">
                  <Link to="/landscape" className="navbar-link">
                    landscape
                  </Link>
                </li>
                <li className="navbar-item py-4">
                  <Link to="/programming" className="navbar-link">
                    programming
                  </Link>
                </li>
                <li className="navbar-item py-4">
                  <Link to="/ocean" className="navbar-link">
                    ocean
                  </Link>
                </li>
                <li className="navbar-item py-4">
                  <Link to="/cities" className="navbar-link">
                    cities
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-8">
              <div class="d-flex flex-wrap justify-content-center">
                <img className="px-2 py-2 pic pic7" alt="" />
                <img className="px-2 py-2 pic pic8" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Landscape;
