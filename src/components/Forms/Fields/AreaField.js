import React from 'react';
import Select from './Select';

const areas = ['Atención de pacientes', 'Técnicos', 'Terapia Intensiva'];

const AreaField = () => <Select label="Área" name="area" blankOption="¿A que area esta destinado?" options={areas} icon="users" />;

AreaField.propTypes = {};

export default AreaField;
