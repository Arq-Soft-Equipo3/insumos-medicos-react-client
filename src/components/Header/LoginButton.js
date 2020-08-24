import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => (
  <Link to="/login" className="button is-light">Iniciar sesión</Link>
);

export default LoginButton;
