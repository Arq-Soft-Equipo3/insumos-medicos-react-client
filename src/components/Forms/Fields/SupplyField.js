import React from 'react';
import PropType from 'prop-types';
import Select from './Select';

const supplies = ['Barbijos', 'Guantes', 'Máscaras protectoras', 'Medicamentos', 'Respiradores'];

const SupplyField = ({ handleChange }) => <Select handleChange={handleChange} label="Insumo" name="supply" blankOption="¿Qué insumo necesita?" options={supplies} icon="users" />;

SupplyField.propTypes = { handleChange: PropType.func.isRequired };

export default SupplyField;
