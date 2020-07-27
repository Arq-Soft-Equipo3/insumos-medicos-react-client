import React from 'react';
import { Table } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { isAdmin } from '../../services/auth';
import ApplicationRow from './ApplicationRow';

const ApplicationsTable = ({
  applications, setSelectedApplication, setApproveModal, setRejectModal, handleCancel,
}) => (
  <Table>
    <thead>
      <tr>
        {isAdmin() && <th>Solicitante</th>}
        <th>Insumo</th>
        <th>Área</th>
        <th>Estado</th>
        <th>Responsable</th>
        <th>Comentarios</th>
        <th>Creación</th>
        <th style={{ textAlign: 'center' }}>Acción</th>
      </tr>
    </thead>
    <tbody>
      { applications.map((a) => (
        <ApplicationRow
          handleSelect={setSelectedApplication}
          handleApprove={() => { setApproveModal(true); }}
          handleReject={() => { setRejectModal(true); }}
          key={a.applicationID.S}
          handleCancel={handleCancel}
          application={a}
        />
      ))}
    </tbody>
  </Table>
);

ApplicationsTable.propTypes = {
  applications: PropTypes.array.isRequired,
  setSelectedApplication: PropTypes.func.isRequired,
  setApproveModal: PropTypes.func.isRequired,
  setRejectModal: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default ApplicationsTable;
