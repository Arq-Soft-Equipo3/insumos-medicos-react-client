import React from 'react';

const getFormData = (target) => {
  const formData = new FormData(target);
  const formEntries = Object.fromEntries(formData);
  return JSON.stringify(formEntries);
};

const renderOption = (value, label = value) => <option value={value}>{label}</option>;

export { getFormData, renderOption };
