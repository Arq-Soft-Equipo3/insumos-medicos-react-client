import React from 'react';

const getFormData = (target, extras = {}) => {
  const formData = new FormData(target);
  const formEntries = Object.fromEntries(formData);
  return JSON.stringify({ ...formEntries, ...extras });
};

const renderOption = (value, label = value, i) => <option key={i} value={value}>{label}</option>;

export { getFormData, renderOption };
