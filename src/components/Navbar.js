import React from 'react';
import {Link} from "react-router-dom";
import AuthLink from "./AuthLink";
import logo from './../logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={logo} height="28"/>
        </a>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Inicio</Link>
          <Link to="/solicitud" className="navbar-item">Ingresar solicitud</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <AuthLink/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
