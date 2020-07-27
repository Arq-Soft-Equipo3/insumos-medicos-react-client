import React from 'react';
import Select from './Select';

const cities = [
  'Ciudad Autónoma de Buenos Aires',
  'Almirante Brown',
  'Avellaneda',
  'Berazategui',
  'Buenos Aires',
  'Esteban Echeverría',
  'Ezeiza',
  'Florencio Varela',
  'General San Martín',
  'Hurlingham',
  'Ituzaingó',
  'José C. Paz',
  'La Matanza',
  'Lanús',
  'Lomas de Zamora',
  'Malvinas Argentinas',
  'Merlo',
  'Moreno',
  'Morón',
  'Quilmes',
  'San Fernando',
  'San Isidro',
  'San Miguel',
  'Tigre',
  'Tres de Febrero',
  'Vicente López',
];

const CityField = () => <Select label="Localidad" name="city" blankOption="¿En qué localidad se encuentra?" options={cities} icon="map-marker" />;

export default CityField;
