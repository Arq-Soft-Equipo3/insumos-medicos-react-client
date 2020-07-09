import React from 'react';
import PropTypes from 'prop-types';
import toLowerCase from 'lodash.lowercase';
import CancelButton from './CancelButton';

const supply = (app) => (app.medicine ? app.medicine.S : app.supply.S);

const statuses = {
  pending: 'Pendiente',
  rejected: 'Rechazado',
  approved: 'Aprobado',
  canceled: 'Cancelada',
};

const AdminApplicationRow = ({ application, handleCancel }) => (
  <tr>
    <td>{supply(application)}</td>
    <td>{application.area.S}</td>
    <td>{statuses[toLowerCase(application.status.S)]}</td>
    <td style={{ textAlign: 'center' }}>
      {application.status.S === 'Pending' ? <CancelButton applicationId={application.applicationID.S} onCancel={handleCancel} /> : null }
    </td>
  </tr>
);

const S = { S: PropTypes.string };

AdminApplicationRow.propTypes = {
  application: PropTypes.shape({
    applicationID: PropTypes.shape(S),
    area: PropTypes.shape(S),
    status: PropTypes.shape(S),
    supply: PropTypes.shape(S),
  }).isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default AdminApplicationRow;
