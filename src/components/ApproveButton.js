import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-bulma-components';

const ApproveButton = ({ handleClick }) => (
  <Button
    style={{ borderRadius: '50%', margin: '0 5px', backgroundColor: 'rgb(70 165 93)' }}
    className="is-icon-button"
    color="success"
    size="small"
    onClick={handleClick}
  >
    <Icon size="small"><i className="fas fa-check" /></Icon>
  </Button>
);

ApproveButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ApproveButton;
