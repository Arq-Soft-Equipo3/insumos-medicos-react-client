import React, { useState, useEffect } from 'react';
import isArray from 'lodash.isarray';
import size from 'lodash.size';
import { list } from '../services/applications';
import Navbar from '../components/Navbar';
import CancelButton from '../components/CancelButton';

const statuses = {
  pending: 'Pendiente',
  rejected: 'Rechazado',
  approved: 'Aprobado',
  canceled: 'Cancelada',
};

const responseMessages = {
  200: 'Su solicitud ha sido cancelada con éxito.',
  403: 'La solicitud que intentó cancelar no le pertenece.',
  412: 'No se puede cancelar una solicitud que no se encuentra en estado pendiente.',
  422: 'Revisá los datos ingresados y volvé a intentar.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const supply = (app) => (app.medicine ? app.medicine.S : app.supply.S);

const Applications = () => {
  const [applications, setApplications] = useState(null);
  const isLoading = applications === null;
  const isEmpty = isArray(applications) && size(applications) === 0;
  const hasResults = isArray(applications) && size(applications) > 0;

  useEffect(() => {
    list()
      .then((res) => res.json())
      .then((data) => (data === null ? setApplications([]) : setApplications(data)));
  }, []);

  const cancelApplication = (id) => (app) => (app.applicationID.S === id ? { ...app, status: { S: 'Canceled' } } : app);

  const handleCancel = (id) => setApplications(applications.map(cancelApplication(id)));

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
                    <h1 className="title">Mis solicitudes:</h1>
                    { isLoading && <p>Aguarde un momento, estamos buscando sus solicitudes...</p>}
                    { isEmpty && <p>Aún no cargaste solicitudes.</p>}
                    { hasResults && (
                      <table className="table">
                        <thead>
                          <th>Insumo</th>
                          <th>Área</th>
                          <th>Estado</th>
                          <th style={{ textAlign: 'center' }}>Acción</th>
                        </thead>
                        <tbody>
                          { applications.map((e) => (
                            <tr>
                              <td>{supply(e)}</td>
                              <td>{e.area.S}</td>
                              <td>{statuses[(e.status.S).toLowerCase()]}</td>
                              <td style={{ textAlign: 'center' }}>
                                {e.status.S === 'Pending' ? <CancelButton applicationId={e.applicationID.S} onCancel={handleCancel} /> : null }
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
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

export default Applications;
