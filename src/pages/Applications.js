import React, { useState, useEffect } from 'react';
import isArray from 'lodash.isarray';
import size from 'lodash.size';
import {
  Hero, Section, Columns, Container, Content, Table,
} from 'react-bulma-components';
import { list } from '../services/applications';
import Navbar from '../components/Navbar';
import ApplicationRow from './ApplicationRow';

const responseMessages = {
  200: 'Su solicitud ha sido cancelada con éxito.',
  403: 'La solicitud que intentó cancelar no le pertenece.',
  412: 'No se puede cancelar una solicitud que no se encuentra en estado pendiente.',
  422: 'Revisá los datos ingresados y volvé a intentar.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

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
      <Hero>
        <Hero.Body>
          <Container>
            <Section>
              <Columns>
                <Columns.Column size="8" offset="2">
                  <Content size="medium">
                    <h1 className="title">Mis solicitudes:</h1>
                    { isLoading && <p>Aguarde un momento, estamos buscando sus solicitudes...</p>}
                    { isEmpty && <p>Aún no cargaste solicitudes.</p>}
                    { hasResults && (
                      <Table>
                        <thead>
                          <th>Insumo</th>
                          <th>Área</th>
                          <th>Estado</th>
                          <th style={{ textAlign: 'center' }}>Acción</th>
                        </thead>
                        <tbody>
                          { applications.map((a) => <ApplicationRow handleCancel={handleCancel} application={a} />)}
                        </tbody>
                      </Table>
                    )}
                  </Content>
                </Columns.Column>
              </Columns>
            </Section>
          </Container>
        </Hero.Body>
      </Hero>
    </>
  );
};

export default Applications;
