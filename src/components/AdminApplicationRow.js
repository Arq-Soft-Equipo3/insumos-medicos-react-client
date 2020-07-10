import React from 'react';
import PropTypes from 'prop-types';
import toLowerCase from 'lodash.lowercase';
import ApproveButton from './ApproveButton';
import RejectButton from './RejectButton';

const supply = (app) => (app.medicine ? app.medicine.S : app.supply.S);

const statuses = {
  pending: 'Pendiente',
  rejected: 'Rechazado',
  approved: 'Aprobado',
  canceled: 'Cancelada',
};

const AdminApplicationRow = ({
  application, handleApprove, handleReject, handleSelect,
}) => (
  <tr>
    <td>{application.filler.S}</td>
    <td>{supply(application)}</td>
    <td>{application.area.S}</td>
    <td>{statuses[toLowerCase(application.status.S)]}</td>
    <td style={{ textAlign: 'center' }}>
      <ApproveButton handleClick={() => {
        handleSelect(application.applicationID.S);
        handleApprove();
      }}
      />
      <RejectButton handleClick={() => {
        handleSelect(application.applicationID.S);
        handleReject();
      }}
      />
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
    filler: PropTypes.shape(S),
  }).isRequired,
  handleApprove: PropTypes.func.isRequired,
  handleReject: PropTypes.func.isRequired,
};

export default AdminApplicationRow;
