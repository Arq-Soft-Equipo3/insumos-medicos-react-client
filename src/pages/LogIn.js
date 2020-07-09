import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button, Form, Icon, Notification, Columns, Hero, Heading,
} from 'react-bulma-components';
import { toast } from 'react-toastify';
import { logIn } from '../services/auth';
import Navbar from '../components/Navbar';
import { getFormData } from '../helpers';

const errorMessages = {
  422: 'Revisá los datos ingresados y volvé a intentar.',
  401: 'Las credenciales ingresadas no son válidas.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const LogIn = (props) => {
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const body = getFormData(event.target);
    try {
      const response = await logIn(body);
      if (!response.ok) {
        toast.error(errorMessages[response.status]);
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
                          {/* <Form.Input id="email" name="email" type="email" placeholder="Ingresá tu email" required /> */}
                          <input id="email" name="email" className="input" type="email" placeholder="Ingresá tu email" required />
                          <Icon size="small" align="left"><i className="fas fa-envelope" /></Icon>
                        </Form.Control>
                      </Form.Field>
                      <Form.Field>
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control iconLeft>
                          {/* <Form.Input id="password" name="password" type="password" placeholder="Ingresá tu password" required /> */}
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

export default LogIn;
