import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';
import { signUp } from '../services/auth';
import Navbar from '../components/Navbar';
import { getFormData } from '../helpers';

const errorMessages = {
  422: 'Revisá los datos ingresados y volvé a intentar.',
  409: 'El email ingresado ya fue registrado previamente.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const cities = ['Almirante Brown',
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
  'Vicente López'];

const SignUp = () => {
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const body = getFormData(event.target);
    try {
      const response = await signUp(body);
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

  return (
    redirect ? <Redirect to="/" />
      : (
        <>
          <Navbar />
          <div className="hero is-primary flex-1">
            <div className="hero-body">
              <h1 className="title has-text-centered is-size-3">Registrarme</h1>
              <div className="columns is-centered">
                <div className="column is-one-third">
                  <div className="notification is-light">
                    <form onSubmit={handleSubmit}>
                      {isError && (
                      <div className="message is-danger">
                        <div className="message-body">{isError.message}</div>
                      </div>
                      )}
                      <div className="field">
                        <label className="label" htmlFor="email">Email</label>
                        <p className="control has-icons-left has-icons-right">
                          <input
                            id="email"
                            name="email"
                            className="input"
                            type="email"
                            placeholder="Ingresá tu email"
                            required
                          />
                          <span className="icon is-small is-left"><i className="fas fa-envelope" /></span>
                        </p>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="password">Password:</label>
                        <p className="control has-icons-left">
                          <input
                            id="password"
                            name="password"
                            className="input"
                            type="password"
                            placeholder="Ingresá tu password"
                            required
                          />
                          <span className="icon is-small is-left"><i className="fas fa-lock" /></span>
                        </p>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="repeat_password">Repetir Password:</label>
                        <p className="control has-icons-left">
                          <input
                            id="repeat_password"
                            name="repeat_password"
                            className="input"
                            type="password"
                            placeholder="Repetí tu password"
                            required
                          />
                          <span className="icon is-small is-left"><i className="fas fa-lock" /></span>
                        </p>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="phone">Teléfono:</label>
                        <p className="control has-icons-left">
                          <input
                            id="phone"
                            name="phone"
                            className="input"
                            type="text"
                            placeholder="Ingresá un teléfono de contacto"
                            required
                          />
                          <span className="icon is-small is-left"><i className="fas fa-phone" /></span>
                        </p>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="organization">Entidad:</label>
                        <p className="control has-icons-left">
                          <input
                            id="organization"
                            name="organization"
                            className="input"
                            type="text"
                            placeholder="¿A qué entidad perteneces?"
                            required
                          />
                          <span className="icon is-small is-left"><i className="fas fa-hospital" /></span>
                        </p>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="position">Cargo:</label>
                        <p className="control has-icons-left">
                          <input
                            id="position"
                            name="position"
                            className="input"
                            type="text"
                            placeholder="¿Cuál es tu cargo?"
                            required
                          />
                          <span className="icon is-small is-left"><i className="fas fa-briefcase" /></span>
                        </p>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="city">Localidad:</label>
                        <div className="control has-icons-left">
                          <div className="select is-fullwidth">
                            <select id="city" name="city" required>
                              <option value="">¿En qué localidad se encuentra?</option>
                              {cities.map((e) => <option value={e}>{e}</option>)}
                            </select>
                          </div>
                          <div className="icon is-small is-left">
                            <i className="fas fa-map-marker" />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className={classNames('button', 'is-fullwidth', 'is-info', 'is-outlined', 'is-medium', { 'is-loading': isLoading })}
                      >
                        Registrarme
                      </button>
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

export default SignUp;
