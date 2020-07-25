import React from 'react';
import { Button } from 'react-bulma-components';
import { withRouter } from 'react-router-dom';
import { logout } from '../../services/auth';

const LogoutButton = withRouter(({ history }) => (
  <Button color="primary" onClick={() => { logout(); history.push('/'); }}>Cerrar sesión</Button>
));

export default LogoutButton;
