import React from 'react';

const getFormData = (target) => {
  const formData = new FormData(target);
  const formEntries = Object.fromEntries(formData);
  return JSON.stringify(formEntries);
};

const renderOption = (value, label = value, i) => <option key={i} value={value}>{label}</option>;

export { getFormData, renderOption };
