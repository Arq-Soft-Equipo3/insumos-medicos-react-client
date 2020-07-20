import React from 'react';
import { Button, Icon } from 'react-bulma-components';
import PropTypes from 'prop-types';

const RejectButton = ({ handleClick }) => (
  <Button
    style={{ borderRadius: '50%', margin: '0 5px', backgroundColor: 'rgb(228 72 94)' }}
    className="is-icon-button"
    color="danger"
    size="small"
    onClick={handleClick}
  >
    <Icon size="small"><i className="fas fa-times" /></Icon>
  </Button>
);

RejectButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default RejectButton;
