import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const withRedirectLogic = (predicate, redirectPath) => ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location, ...props }) => (predicate()
      ? (
        <Redirect to={{
          pathname: redirectPath,
          state: { referrer: location },
        }}
        />
      )
      : <Component {...props} />)}
  />
);

export default withRedirectLogic;
