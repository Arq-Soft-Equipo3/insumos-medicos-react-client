import React from 'react';
import { Link } from 'react-router-dom';
import AuthLink from './AuthLink';
import logo from '../logo.jpg';
import { isAuthenticated } from '../services/auth';

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/"><img alt="Logo Insumos Médicos" src={logo} height="28" /></Link>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">Inicio</Link>
        { isAuthenticated() && <Link to="/solicitud" className="navbar-item">Cargar solicitud</Link>}
        { isAuthenticated() && <Link to="/mis-solicitudes" className="navbar-item">Mis solicitudes</Link>}
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <AuthLink />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
