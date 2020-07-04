import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './pages/SignUp';
import Applications from './pages/Applications';
import ApplicationForm from './pages/ApplicationForm';

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
