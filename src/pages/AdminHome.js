import React, { useState, useEffect } from 'react';
import {
  Hero, Container, Section, Columns, Content, Table,
} from 'react-bulma-components';
import isArray from 'lodash.isarray';
import size from 'lodash.size';
import AdminApplicationRow from '../components/AdminApplicationRow';
import ApproveModal from '../components/ApproveModal';
import RejectModal from '../components/RejectModal';
import { list } from '../services/applications';

const AdminHome = () => {
  const [applications, setApplications] = useState(null);
  const [approveModal, setApproveModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const isLoading = applications === null;
  const isEmpty = isArray(applications) && size(applications) === 0;
  const hasResults = isArray(applications) && size(applications) > 0;

  useEffect(() => {
    list()
      .then((res) => res.json())
      .then((data) => (setApplications(data)));
  }, []);

  return (
    <>
      <Hero>
        <Hero.Body>
          <Container>
            <Section>
              <Columns>
                <Columns.Column size={10} offset={1}>
                  <Content size="medium">
                    <h1 className="title">Dashboard:</h1>
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
                          <th>Creación</th>
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
      <ApproveModal
        application={selectedApplication}
        show={approveModal}
        handleClose={() => {
          setApproveModal(false);
          setSelectedApplication(null);
        }}
      />
      <RejectModal
        application={selectedApplication}
        show={rejectModal}
        handleClose={() => {
          setRejectModal(false);
          setSelectedApplication(null);
        }}
      />
    </>
  );
};

export default AdminHome;
