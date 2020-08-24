import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button, Form, Icon, Notification, Columns, Hero, Heading,
} from 'react-bulma-components';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { logIn } from '../services/auth';
import Navbar from '../components/Header/Navbar';
import { getFormData } from '../helpers';

const errorMessages = {
  422: 'Revisá los datos ingresados y volvé a intentar.',
  401: 'Las credenciales ingresadas no son válidas.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const LogIn = ({ location: { state: { referrer } = {} } = {} }) => {
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const body = getFormData(event.target);
    logIn(body).then((res) => {
      if (!res.ok) {
        throw errorMessages[res.status];
      }

      return res.json();
    }).then(({ token }) => {
      localStorage.setItem('token', token);
      setRedirect(true);
    }).catch(toast.error)
      .finally(() => setIsLoading(false));
  };

  return (
    redirect ? <Redirect to={referrer || { referrer: { pathname: '/mis-solicitudes' } }} />
      : (
        <>
          <Navbar />
          <Hero color="primary" className="flex-1">
            <Hero.Body>
              <Heading size={3} className="has-text-centered">Iniciar Sesión</Heading>
              <Columns centered>
                <Columns.Column size="one-third">
                  <Notification color="light">
                    <form onSubmit={handleSubmit}>
                      <Form.Field>
                        <Form.Label htmlFor="email">Email:</Form.Label>
                        <Form.Control iconLeft>
                          <input id="email" name="email" className="input" type="email" placeholder="Ingresá tu email" required />
                          <Icon size="small" align="left"><i className="fas fa-envelope" /></Icon>
                        </Form.Control>
                      </Form.Field>
                      <Form.Field>
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control iconLeft>
                          <input id="password" name="password" className="input" type="password" placeholder="Ingresá tu password" required />
                          <Icon size="small" align="left"><i className="fas fa-lock" /></Icon>
                        </Form.Control>
                      </Form.Field>
                      <Button submit fullwidth outlined size="medium" color="info" loading={isLoading}>Iniciar sesión</Button>
                    </form>
                  </Notification>
                </Columns.Column>
              </Columns>
            </Hero.Body>
          </Hero>
        </>
      )
  );
};

LogIn.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      referrer: PropTypes.object,
    }),
  }),
};

export default LogIn;
