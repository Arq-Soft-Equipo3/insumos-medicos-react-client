import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import {
  Home, SignUp, LogIn, Applications, ApplicationForm,
} from './pages';
import PrivateRoute from './components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';

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
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
