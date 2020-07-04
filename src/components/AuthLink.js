import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/auth';

const AuthLink = withRouter(({ history }) => (isAuthenticated()
  ? (
    <button
      type="button"
      className="button is-primary"
      onClick={() => { logout(); history.push('/'); }}
    >
      Cerrar sesión
    </button>
  )
  : (
    <>
      <Link to="/signup" className="button is-primary"><strong>Registrarme</strong></Link>
      <Link to="/login" className="button is-light">Iniciar sesión</Link>
    </>
  )));

export default AuthLink;
