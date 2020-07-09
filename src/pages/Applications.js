import React, { useState, useEffect } from 'react';
import isArray from 'lodash.isarray';
import size from 'lodash.size';
import { Button, Icon } from 'react-bulma-components';
import { list, cancel } from '../services/applications';
import Navbar from '../components/Navbar';

const statuses = {
  pending: 'Pendiente',
  rejected: 'Rechazado',
  approved: 'Aprobado',
  cancelled: 'Cancelada',
};

const responseMessages = {
  200: 'Su solicitud ha sido cancelada con éxito.',
  403: 'La solicitud que intentó cancelar no le pertenece.',
  412: 'No se puede cancelar una solicitud que no se encuentra en estado pendiente.',
  422: 'Revisá los datos ingresados y volvé a intentar.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const CancelButton = ({ applicationId, onCancel }) => {
  const [isLoading, setIsLoading] = useState(false);
  const cancelFn = () => {
    setIsLoading(true);
    const body = JSON.stringify({ id: applicationId });
    // onCancel(applicationId);
    // setIsLoading(false);
    cancel(body).then((res) => res.json());
  };

  return (
    <Button
      style={{ borderRadius: '50%' }}
      className="is-icon-button"
      color="danger"
      size="small"
      loading={isLoading}
      onClick={cancelFn}
    >
      <Icon size="small"><i className="fas fa-times-circle" /></Icon>
    </Button>
  );
};

const Applications = () => {
  const [applications, setApplications] = useState(null);
  const isLoading = applications === null;
  const isEmpty = isArray(applications) && size(applications) === 0;
  const hasResults = isArray(applications) && size(applications) > 0;

  useEffect(() => {
    list()
      .then((res) => res.json())
      // TODO: De la api debería venirme lista vacía en lugar de null
      .then((data) => (data === null ? setApplications([]) : setApplications(data)));
  }, []);

  const handleCancel = (applicationId) => {
    const res = applications.map((application) => {
      if (application.applicationID.S === applicationId) {
        return { ...application, status: { S: 'Cancelled' } };
      }
      return application;
    });
    setApplications(res);
  };

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
                          <th>Cancelar</th>
                        </thead>
                        <tbody>
                          { applications.map((e) => (
                            <tr>
                              {/* TODO: Deberíamos sacar el .S resolviendo esto desde la respuesta de la API */}
                              <td>{e.supply.S}</td>
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
