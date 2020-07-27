import React from 'react';
import { toast } from 'react-toastify';
import { logout } from '../services/auth';

const getFormData = (target, extras = {}) => {
  const formData = new FormData(target);
  const formEntries = Object.fromEntries(formData);
  return JSON.stringify({ ...formEntries, ...extras });
};

const renderOption = (value, label = value, i) => <option key={i} value={value}>{label}</option>;

const verifySession = (response) => {
  if (!response.ok && response.status === 401) {
    toast.error('La sesión expiró, iniciá sesión nuevamente');
    logout();
  }
  return response;
};

export { getFormData, renderOption, verifySession };
