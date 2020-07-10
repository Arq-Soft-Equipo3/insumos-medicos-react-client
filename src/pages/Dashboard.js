import React, { useState, useEffect } from 'react';
import {
  Hero, Container, Section, Columns, Content, Table,
} from 'react-bulma-components';
import isArray from 'lodash.isarray';
import size from 'lodash.size';
import Navbar from '../components/Navbar';
import AdminApplicationRow from '../components/AdminApplicationRow';
import ApproveModal from '../components/ApproveModal';
import RejectModal from '../components/RejectModal';

const Dashboard = () => {
  const [applications, setApplications] = useState(null);
  const [approveModal, setApproveModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const isLoading = applications === null;
  const isEmpty = isArray(applications) && size(applications) === 0;
  const hasResults = isArray(applications) && size(applications) > 0;

  useEffect(() => {
    setApplications([{
      applicationID: { S: '1720' }, area: { S: 'Terapia Intensiva' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }, {
      applicationID: { S: '2077' }, area: { S: 'T\u00e9cnicos' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }, {
      applicationID: { S: '2701' }, area: { S: 'Terapia Intensiva' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }, {
      applicationID: { S: '4490' }, area: { S: 'Terapia Intensiva' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }, {
      applicationID: { S: '5859' }, area: { S: 'Terapia Intensiva' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }, {
      applicationID: { S: '6492' }, area: { S: 'Terapia Intensiva' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }, {
      applicationID: { S: '7308' }, area: { S: 'Terapia Intensiva' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }, {
      applicationID: { S: '8389' }, area: { S: 'Terapia Intensiva' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }, {
      applicationID: { S: '9158' }, area: { S: 'Terapia Intensiva' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }, {
      applicationID: { S: '9257' }, area: { S: 'Terapia Intensiva' }, filler: { S: 'Token has expired. Please log in again.' }, status: { S: 'Pending' }, supply: { S: 'Respiradores' },
    }]);
  }, []);

  return (
    <>
      <Navbar />
      <Hero>
        <Hero.Body>
          <Container>
            <Section>
              <Columns>
                <Columns.Column size={10} offset={1}>
                  <Content size="medium">
                    <h1 className="title">
                      Dashboard:
                      {' '}
                      {selectedApplication}
                    </h1>
                    { isLoading && <p>Aguarde un momento, estamos buscando las solicitudes...</p>}
                    { isEmpty && <p>Aún no hay solicitudes cargadas.</p>}
                    { hasResults && (
                    <Table>
                      <thead>
                        <tr>
                          <th>Solicitante</th>
                          <th>Insumo</th>
                          <th>Área</th>
                          <th>Estado</th>
                          <th style={{ textAlign: 'center' }}>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        { applications.map((a) => (
                          <AdminApplicationRow
                            handleSelect={setSelectedApplication}
                            handleApprove={() => { setApproveModal(true); }}
                            handleReject={() => { setRejectModal(true); }}
                            key={a.applicationID.S}
                            application={a}
                          />
                        ))}
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
      <ApproveModal applicationId={selectedApplication} show={approveModal} handleClose={() => { setApproveModal(false); setSelectedApplication(null); }} />
      <RejectModal applicationId={selectedApplication} show={rejectModal} handleClose={() => { setRejectModal(false); setSelectedApplication(null); }} />
    </>
  );
};

export default Dashboard;
