import React from 'react';
import PropTypes from 'prop-types';
import toLowerCase from 'lodash.lowercase';
import { isAdmin, isUser } from '../../services/auth';
import ApproveButton from '../ApproveButton';
import RejectButton from '../RejectButton';
import CancelButton from '../CancelButton';
import StatusBadge from '../StatusBadge';
import timeAgo from '../../helpers/time-ago';

const supply = (app) => (app.medicine ? app.medicine.S : app.supply.S);

const isPending = (application) => application.status.S === 'Pending';

const ApplicationRow = ({
  application, handleApprove, handleReject, handleSelect, handleCancel,
}) => {
  const createdAt = new Date(application.timeStamp.S);
  createdAt.setHours(createdAt.getHours() - 3);

  return (
    <tr>
      { isAdmin() && <td>{application.filler.S}</td> }
      <td>{supply(application)}</td>
      <td>{application.area.S}</td>
      <td><StatusBadge status={toLowerCase(application.status.S)} /></td>
      <td>{application.provider && application.provider.S}</td>
      <td>{application.motive && application.motive.S}</td>
      <td>{timeAgo.format(createdAt)}</td>
      <td style={{ textAlign: 'center' }}>
        { isAdmin() && isPending(application) && <ApproveButton handleClick={() => { handleSelect(application); handleApprove(); }} /> }
        { isAdmin() && isPending(application) && <RejectButton handleClick={() => { handleSelect(application); handleReject(); }} /> }
        { isUser() && isPending(application) && <CancelButton applicationId={application.applicationID.S} onCancel={handleCancel} /> }
      </td>
    </tr>
  );
};

const S = { S: PropTypes.string };

ApplicationRow.propTypes = {
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
  handleCancel: PropTypes.func.isRequired,
};

export default ApplicationRow;
