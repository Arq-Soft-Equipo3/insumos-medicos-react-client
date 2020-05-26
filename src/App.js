import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Form from "./pages/Form";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/logout" component={LogIn} />
          <PrivateRoute path="/solicitud" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
