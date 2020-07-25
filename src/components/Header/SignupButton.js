import React from 'react';
import { Link } from 'react-router-dom';

const SignupButton = () => (
  <Link to="/signup" className="button is-primary"><strong>Registrarme</strong></Link>
);

export default SignupButton;
