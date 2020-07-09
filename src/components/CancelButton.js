import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-bulma-components';
import { cancel } from '../services/applications';

const CancelButton = ({ applicationId, onCancel }) => {
  const [isLoading, setIsLoading] = useState(false);
  const cancelFn = () => {
    setIsLoading(true);
    const body = JSON.stringify({ id: applicationId });
    onCancel(applicationId);
    setIsLoading(false);
    cancel(body).then((res) => res.json());
  };

  return (
    <Button
      style={{ borderRadius: '50%' }}
      className="is-icon-button"
      color="danger"
      size="small"
      loading={isLoading}
      onClick={cancelFn}
    >
      <Icon size="small"><i className="fas fa-times-circle" /></Icon>
    </Button>
  );
};

CancelButton.propTypes = {
  applicationId: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CancelButton;
