import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location, ...props }) => (isAuthenticated()
      ? <Component {...props} />
      : (
        <Redirect to={{
          pathname: '/login',
          state: { referrer: location },
        }}
        />
      ))}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.element,
};

export default PrivateRoute;
