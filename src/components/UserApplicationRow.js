import React from 'react';
import PropTypes from 'prop-types';
import toLowerCase from 'lodash.lowercase';
import TimeAgo from 'javascript-time-ago';

import es from 'javascript-time-ago/locale/es';
import CancelButton from './CancelButton';

TimeAgo.addLocale(es);

const timeAgo = new TimeAgo('es-ES');

const supply = (app) => (app.medicine ? app.medicine.S : app.supply.S);

const statuses = {
  pending: 'Pendiente',
  rejected: 'Rechazado',
  approved: 'Aprobado',
  canceled: 'Cancelada',
};

const UserApplicationRow = ({ application, handleCancel }) => {
  // FIXME: Solucionar esto desde el server
  const createdAt = new Date(application.timeStamp.S);
  createdAt.setHours(createdAt.getHours() - 3);
  return (
    <tr>
      <td>{supply(application)}</td>
      <td>{application.area.S}</td>
      <td>{statuses[toLowerCase(application.status.S)]}</td>
      <td>{timeAgo.format(createdAt)}</td>
      <td style={{ textAlign: 'center' }}>
        {application.status.S === 'Pending' ? <CancelButton applicationId={application.applicationID.S} onCancel={handleCancel} /> : null }
      </td>
    </tr>
  );
};

const S = { S: PropTypes.string };

UserApplicationRow.propTypes = {
  application: PropTypes.shape({
    applicationID: PropTypes.shape(S),
    area: PropTypes.shape(S),
    status: PropTypes.shape(S),
    supply: PropTypes.shape(S),
  }).isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default UserApplicationRow;
