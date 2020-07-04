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
                              <option value="Almirante Brown">Almirante Brown</option>
                              <option value="Avellaneda">Avellaneda</option>
                              <option value="Berazategui">Berazategui</option>
                              <option value="Buenos Aires">Buenos Aires</option>
                              <option value="Esteban Echeverría">Esteban Echeverría</option>
                              <option value="Ezeiza">Ezeiza</option>
                              <option value="Florencio Varela">Florencio Varela</option>
                              <option value="General San Martín">General San Martín</option>
                              <option value="Hurlingham">Hurlingham</option>
                              <option value="Ituzaingó">Ituzaingó</option>
                              <option value="José C. Paz">José C. Paz</option>
                              <option value="La Matanza">La Matanza</option>
                              <option value="Lanús">Lanús</option>
                              <option value="Lomas de Zamora">Lomas de Zamora</option>
                              <option value="Malvinas Argentinas">Malvinas Argentinas</option>
                              <option value="Merlo">Merlo</option>
                              <option value="Moreno">Moreno</option>
                              <option value="Morón">Morón</option>
                              <option value="Quilmes">Quilmes</option>
                              <option value="San Fernando">San Fernando</option>
                              <option value="San Isidro">San Isidro</option>
                              <option value="San Miguel">San Miguel</option>
                              <option value="Tigre">Tigre</option>
                              <option value="Tres de Febrero">Tres de Febrero</option>
                              <option value="Vicente López">Vicente López</option>
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
