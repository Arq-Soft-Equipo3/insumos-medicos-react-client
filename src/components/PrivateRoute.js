import React from 'react';
import {Redirect, Route} from "react-router-dom";

const isAuthenticated = () => !! localStorage.getItem('token');

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      return isAuthenticated() ?
        <Component {...props} /> :
        <Redirect to={{
          pathname: "/login",
          state: { referrer: props.location }
        }} />
    }}/>
  );
};

export default PrivateRoute;
