import React from 'react';
import Select from './Select';

const medicines = ['Amoxicilina', 'Aspirina', 'Codeína', 'Ibuprofeno', 'Paracetamol'];

const MedicineField = () => <Select label="Medicamento" name="medicine" blankOption="¿Qué medicamento necesita?" options={medicines} icon="medkit" />;

export default MedicineField;
