import React from 'react';
import PropTypes from 'prop-types';

const statuses = {
  canceled: {
    background: '#ebd27f',
    text: '#927a25',
    label: 'Cancelada',
  },
  rejected: {
    background: '#f5c6cc',
    text: '#894952',
    label: 'Rechazada',
  },
  approved: {
    background: '#d3eddb',
    text: '#457350',
    label: 'Aprobada',
  },
  pending: {
    background: '#cbe4fa',
    text: '#2e6099',
    label: 'Pendiente',
  },
};

const styleDefaults = {
  fontWeight: 'bold',
  padding: '4px 8px',
  fontSize: '1rem',
  borderRadius: '10px',
};

const StatusBadge = ({ status }) => {
  const { background, text, label } = statuses[status];
  return (
    <span style={{ backgroundColor: background, color: text, ...styleDefaults }}>
      {label}
    </span>
  );
};

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusBadge;
