import React from 'react';
import PropTypes from 'prop-types';
import toLowerCase from 'lodash.lowercase';
import ApproveButton from './ApproveButton';
import RejectButton from './RejectButton';
import timeAgo from '../helpers/time-ago';

const supply = (app) => (app.medicine ? app.medicine.S : app.supply.S);

const isPending = (application) => application.status.S === 'Pending';

const statuses = {
  pending: 'Pendiente',
  rejected: 'Rechazado',
  approved: 'Aprobado',
  canceled: 'Cancelada',
};

const AdminApplicationRow = ({
  application, handleApprove, handleReject, handleSelect,
}) => {
  const createdAt = new Date(application.timeStamp.S);
  createdAt.setHours(createdAt.getHours() - 3);
  return (
    <tr>
      <td>{application.filler.S}</td>
      <td>{supply(application)}</td>
      <td>{application.area.S}</td>
      <td>{statuses[toLowerCase(application.status.S)]}</td>
      <td>{application.provider && application.provider.S}</td>
      <td>{application.motive && application.motive.S}</td>
      <td>{timeAgo.format(createdAt)}</td>
      <td style={{ textAlign: 'center' }}>
        {isPending(application)
        && <ApproveButton handleClick={() => { handleSelect(application); handleApprove(); }} />}
        {isPending(application)
        && <RejectButton handleClick={() => { handleSelect(application); handleReject(); }} />}
      </td>
    </tr>
  );
};

const S = { S: PropTypes.string };

AdminApplicationRow.propTypes = {
  application: PropTypes.shape({
    applicationID: PropTypes.shape(S),
    area: PropTypes.shape(S),
    status: PropTypes.shape(S),
    supply: PropTypes.shape(S),
    filler: PropTypes.shape(S),
    timeStamp: PropTypes.shape(S),
    provider: PropTypes.shape(S),
    motive: PropTypes.shape(S),
  }).isRequired,
  handleApprove: PropTypes.func.isRequired,
  handleReject: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default AdminApplicationRow;
