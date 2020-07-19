import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button, Form, Icon, Notification, Columns, Hero, Heading,
} from 'react-bulma-components';
import { toast } from 'react-toastify';
import { signUp } from '../services/auth';
import Navbar from '../components/Navbar';
import { getFormData, renderOption } from '../helpers';

const errorMessages = {
  422: 'Revisá los datos ingresados y volvé a intentar.',
  409: 'El email ingresado ya fue registrado previamente.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const cities = [
  'Ciudad Autónoma de Buenos Aires',
  'Almirante Brown',
  'Avellaneda',
  'Berazategui',
  'Buenos Aires',
  'Esteban Echeverría',
  'Ezeiza',
  'Florencio Varela',
  'General San Martín',
  'Hurlingham',
  'Ituzaingó',
  'José C. Paz',
  'La Matanza',
  'Lanús',
  'Lomas de Zamora',
  'Malvinas Argentinas',
  'Merlo',
  'Moreno',
  'Morón',
  'Quilmes',
  'San Fernando',
  'San Isidro',
  'San Miguel',
  'Tigre',
  'Tres de Febrero',
  'Vicente López',
];

const SignUp = () => {
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const body = getFormData(event.target);
    signUp(body).then((res) => {
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
    redirect ? <Redirect to="/" />
      : (
        <>
          <Navbar />
          <Hero color="primary" className="flex-1">
            <Hero.Body>
              <Heading size={3} className="has-text-centered">Registrarme</Heading>
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
                      <Form.Field>
                        <Form.Label htmlFor="repeat_password">Repetir Password:</Form.Label>
                        <Form.Control iconLeft>
                          <input id="repeat_password" name="repeat_password" className="input" type="password" placeholder="Repetí tu password" required />
                          <Icon size="small" align="left"><i className="fas fa-lock" /></Icon>
                        </Form.Control>
                      </Form.Field>
                      <Form.Field>
                        <Form.Label htmlFor="phone">Teléfono:</Form.Label>
                        <Form.Control iconLeft>
                          <input id="phone" name="phone" className="input" type="text" placeholder="Ingresá un teléfono de contacto" required />
                          <Icon size="small" align="left"><i className="fas fa-phone" /></Icon>
                        </Form.Control>
                      </Form.Field>
                      <Form.Field>
                        <Form.Label htmlFor="organization">Entidad:</Form.Label>
                        <Form.Control iconLeft>
                          <input id="organization" name="organization" className="input" type="text" placeholder="¿A qué entidad perteneces?" required />
                          <Icon size="small" align="left"><i className="fas fa-hospital" /></Icon>
                        </Form.Control>
                      </Form.Field>
                      <Form.Field>
                        <Form.Label htmlFor="position">Cargo:</Form.Label>
                        <Form.Control iconLeft>
                          <input id="position" name="position" className="input" type="text" placeholder="¿Cuál es tu cargo?" required />
                          <Icon size="small" align="left"><i className="fas fa-briefcase" /></Icon>
                        </Form.Control>
                      </Form.Field>
                      <Form.Field>
                        <Form.Label htmlFor="city">Localidad:</Form.Label>
                        <Form.Control iconLeft>
                          <div className="select is-fullwidth">
                            <select id="city" name="city" required>
                              <option value="">¿En qué localidad se encuentra?</option>
                              {cities.map((e, i) => renderOption(e, e, i))}
                            </select>
                          </div>
                          <Icon size="small" align="left"><i className="fas fa-map-marker" /></Icon>
                        </Form.Control>
                      </Form.Field>

                      <Button submit fullwidth outlined size="medium" color="info" loading={isLoading}>Registrarme</Button>
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

export default SignUp;
