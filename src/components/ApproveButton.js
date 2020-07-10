import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-bulma-components';

const ApproveButton = ({ handleClick }) => (
  <Button
    style={{ borderRadius: '50%', margin: '0 5px' }}
    className="is-icon-button"
    color="success"
    size="small"
    onClick={handleClick}
  >
    <Icon size="small"><i className="fas fa-thumbs-up" /></Icon>
  </Button>
);

ApproveButton.propTypes = {};

export default ApproveButton;
