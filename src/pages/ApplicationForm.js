import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { submitApplication } from '../services/applications';
import Navbar from '../components/Navbar';
import { getFormData, renderOption } from '../helpers';

const responseMessages = {
  200: (
    <>
      Su solicitud fue cargada con éxito, puede seguir el estado de la misma
      {' '}
      <Link to="/mis-solicitudes">aquí</Link>
    </>
  ),
  404: 'Página no encontrada.',
  422: 'Revisá los datos ingresados y volvé a intentar.',
  409: 'El email ingresado ya fue registrado previamente.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const medicines = ['A', 'B', 'C', 'D'];

const areas = ['Atención de pacientes', 'Terapia Intensiva', 'Técnicos'];

const supplies = ['Máscaras protectoras', 'Barbijos', 'Respiradores', 'Guantes', 'Medicamentos'];

const ApplicationForm = () => {
  const [isMedicine, setIsMedicine] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const body = getFormData(event.target);
    try {
      const response = await submitApplication(body);
      if (!response.ok) {
        setIsError({ message: responseMessages[response.status] });
      } else {
        setIsSuccess({ message: responseMessages[response.status] });
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleChange = ({ target: { value } }) => value === 'Medicamentos' && setIsMedicine(true);

  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h1 className="title">Cargá tu solicitud:</h1>
                    <p>Completá el siguiente formulario para realizar tu solicitud, un administrador la evaluará y la misma será derivada una organización capaz de generar el insumo requerido.</p>
                    <div className="columns">
                      <div className="column is-9 is-offset-1">
                        <form style={{ backgroundColor: 'rgb(247, 247, 247)', padding: 20, borderRadius: 10 }} onSubmit={handleSubmit}>
                          {isError && (
                          <div className="message is-danger">
                            <div className="message-body">{isError.message}</div>
                          </div>
                          )}
                          {isSuccess && (
                            <div className="message is-success">
                              <div className="message-body">{isSuccess.message}</div>
                            </div>
                          )}
                          <div className="field">
                            <label className="label" htmlFor="supply">Insumo:</label>
                            <div className="control has-icons-left">
                              <div className="select is-fullwidth">
                                <select id="supply" onChange={handleChange} name="supply" required>
                                  <option value="">¿Qué insumo necesita?</option>
                                  {supplies.map(renderOption)}
                                </select>
                              </div>
                              <div className="icon is-small is-left">
                                <i className="fas fa-medkit" />
                              </div>
                            </div>
                          </div>
                          { isMedicine && (
                          <div className="field">
                            <label className="label" htmlFor="medicine">Medicamento:</label>
                            <div className="control has-icons-left">
                              <div className="select is-fullwidth">
                                <select id="medicine" name="medicine" required>
                                  <option value="">¿Qué medicamento necesita?</option>
                                  {medicines.map(renderOption)}
                                </select>
                              </div>
                              <div className="icon is-small is-left">
                                <i className="fas fa-medkit" />
                              </div>
                            </div>
                          </div>
                          ) }
                          <div className="field">
                            <label className="label" htmlFor="area">Área:</label>
                            <div className="control has-icons-left">
                              <div className="select is-fullwidth">
                                <select id="area" name="area" required>
                                  <option value="">¿A que area esta destinado?</option>
                                  {areas.map(renderOption)}
                                </select>
                              </div>
                              <div className="icon is-small is-left">
                                <i className="fas fa-users" />
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className={classNames('button', 'is-fullwidth', 'is-info', 'is-outlined', 'is-medium', { 'is-loading': isLoading })}
                          >
                            Enviar
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplicationForm;
