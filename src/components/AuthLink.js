import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bulma-components';
import { isAuthenticated, logout } from '../services/auth';

const AuthLink = withRouter(({ history }) => (isAuthenticated()
  ? <Button state="primary" onClick={() => { logout(); history.push('/'); }}>Cerrar sesión</Button>
  : (
    <>
      <Link to="/signup" className="button is-primary"><strong>Registrarme</strong></Link>
      <Link to="/login" className="button is-light">Iniciar sesión</Link>
    </>
  )));

export default AuthLink;
