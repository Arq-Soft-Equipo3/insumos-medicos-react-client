import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Home, SignUp, LogIn, Applications, ApplicationForm,
} from './pages';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/logout" component={LogIn} />
          <PrivateRoute path="/solicitud" component={ApplicationForm} />
          <PrivateRoute path="/mis-solicitudes" component={Applications} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
