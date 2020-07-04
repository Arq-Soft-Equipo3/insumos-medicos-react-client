import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { logIn } from '../services/auth';
import Navbar from '../components/Navbar';

const errorMessages = {
  422: 'Revisá los datos ingresados y volvé a intentar.',
  401: 'Las credenciales ingresadas no son válidas.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const getFormData = (target) => {
  const formData = new FormData(target);
  const formEntries = Object.fromEntries(formData);
  return JSON.stringify(formEntries);
};

const LogIn = (props) => {
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const body = getFormData(event.target);
    try {
      const response = await logIn(body);
      if (!response.ok) {
        setIsError({ message: errorMessages[response.status] });
      } else {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        setRedirect(true);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const { referrer } = props.location.state || { referrer: { pathname: '/' } };

  return (
    redirect ? <Redirect to={referrer} />
      : (
        <>
          <Navbar />
          <div className="hero is-primary flex-1">
            <div className="hero-body">
              <h1 className="title has-text-centered is-size-3">Iniciar Sesión</h1>
              <div className="columns is-centered">
                <div className="column is-one-third">
                  <div className="notification is-light">
                    <form onSubmit={handleSubmit}>
                      { isError && (
                      <div className="message is-danger">
                        <div className="message-body">{isError.message}</div>
                      </div>
                      ) }
                      <div className="field">
                        <label className="label" htmlFor="email">Email</label>
                        <p className="control has-icons-left has-icons-right">
                          <input id="email" name="email" className="input" type="email" placeholder="Ingresá tu email" required />
                          <span className="icon is-small is-left"><i className="fas fa-envelope" /></span>
                        </p>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="password">Password:</label>
                        <p className="control has-icons-left">
                          <input id="password" name="password" className="input" type="password" placeholder="Ingresá tu password" required />
                          <span className="icon is-small is-left"><i className="fas fa-lock" /></span>
                        </p>
                      </div>
                      <button className={`button is-fullwidth is-info is-outlined is-medium ${isLoading ? 'is-loading' : ''}`}>Iniciar sesión</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
  );
};

export default LogIn;
