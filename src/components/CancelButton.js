import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-bulma-components';
import { toast } from 'react-toastify';
import { cancel } from '../services/applications';

const CancelButton = ({ applicationId, onCancel }) => {
  const [isLoading, setIsLoading] = useState(false);
  const cancelFn = () => {
    setIsLoading(true);
    const body = JSON.stringify({ id: applicationId });
    onCancel(applicationId);
    setIsLoading(false);
    cancel(body).then(() => toast.success('La solicitud fue cancelada con éxito.'));
  };

  return (
    <Button
      style={{ borderRadius: '50%', backgroundColor: '#ebd27f', color: '#927a25' }}
      className="is-icon-button"
      color="warning"
      size="small"
      loading={isLoading}
      onClick={cancelFn}
    >
      <Icon size="small"><i className="fas fa-ban" /></Icon>
    </Button>
  );
};

CancelButton.propTypes = {
  applicationId: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CancelButton;
