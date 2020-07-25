import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import {
  Home, SignUp, LogIn, Applications, ApplicationForm,
} from './pages';
import UserRoute from './components/Router/UserRoute';
import 'react-toastify/dist/ReactToastify.css';
import GuestRoute from './components/Router/GuestRoute';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <GuestRoute path="/" exact component={Home} />
          <GuestRoute path="/login" component={LogIn} />
          <GuestRoute path="/signup" component={SignUp} />
          <UserRoute path="/logout" component={LogIn} />
          <UserRoute path="/solicitud" component={ApplicationForm} />
          <UserRoute path="/mis-solicitudes" component={Applications} />
        </Switch>
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
