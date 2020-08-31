import React, { useState } from 'react';
import size from 'lodash.size';
import {
  Hero, Section, Columns, Container, Content,
} from 'react-bulma-components';
import Navbar from '../components/Header/Navbar';

import { isAdmin } from '../services/auth';
import ApproveModal from '../components/ApproveModal';
import RejectModal from '../components/RejectModal';
import useApplications, { CANCEL, APPROVE, REJECT } from '../components/useApplications';
import ApplicationsTable from '../components/Tables/ApplicationsTable';

// eslint-disable-next-line no-unused-vars
const responseMessages = {
  200: 'Su solicitud ha sido cancelada con éxito.',
  403: 'La solicitud que intentó cancelar no le pertenece.',
  412: 'No se puede cancelar una solicitud que no se encuentra en estado pendiente.',
  422: 'Revisá los datos ingresados y volvé a intentar.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const Applications = () => {
  const [applications, dispatch, isLoading] = useApplications();
  const [approveModal, setApproveModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const isEmpty = isLoading === false && size(applications) === 0;
  const hasResults = isLoading === false && size(applications) > 0;

  const handleCancel = (id) => dispatch({ type: CANCEL, payload: { id } });
  const handleApprove = (id, provider) => dispatch({ type: APPROVE, payload: { id, provider } });
  const handleReject = (id, motive) => dispatch({ type: REJECT, payload: { id, motive } });

  return (
    <>
      <Navbar />
      <Hero>
        <Hero.Body>
          <Container fluid>
            <Section>
              <Columns>
                <Columns.Column size={12}>
                  <Content size="medium">
                    <h1 className="title">{isAdmin() ? 'Dashboard' : 'Mis solicitudes:'}</h1>
                    { isLoading && <p>Aguarde un momento, estamos buscando sus solicitudes...</p> }
                    { isEmpty && <p>Aún no cargaste solicitudes.</p> }
                    { hasResults
                        && (
                        <ApplicationsTable
                          applications={applications}
                          handleCancel={handleCancel}
                          setSelectedApplication={setSelectedApplication}
                          setApproveModal={setApproveModal}
                          setRejectModal={setRejectModal}
                        />
                        ) }
                  </Content>
                </Columns.Column>
              </Columns>
            </Section>
          </Container>
        </Hero.Body>
      </Hero>
      { isAdmin() && (
        <ApproveModal
          application={selectedApplication}
          handleApprove={handleApprove}
          show={approveModal}
          handleClose={() => {
            setApproveModal(false);
            setSelectedApplication(null);
          }}
        />
      )}
      { isAdmin() && (
        <RejectModal
          application={selectedApplication}
          handleReject={handleReject}
          show={rejectModal}
          handleClose={() => {
            setRejectModal(false);
            setSelectedApplication(null);
          }}
        />
      )}
    </>
  );
};

export default Applications;
