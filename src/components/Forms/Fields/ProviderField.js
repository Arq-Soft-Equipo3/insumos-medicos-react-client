import React from 'react';
import Select from './Select';

const providers = ['Dispromed', 'Hospimed', 'Mundo Medic', 'Top Medical'];

const ProviderField = () => <Select label="Seleccione un proveedor" name="provider" blankOption="Seleccione un proveedor" options={providers} icon="medkit" />;

export default ProviderField;
