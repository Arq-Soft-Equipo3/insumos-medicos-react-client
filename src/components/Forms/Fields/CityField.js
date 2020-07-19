import React from 'react';
import { Form, Icon } from 'react-bulma-components';
import { renderOption } from '../../../helpers';

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

const CityField = () => (
  <Form.Field>
    <Form.Label htmlFor="city">Localidad:</Form.Label>
    <Form.Control iconLeft>
      <div className="select is-fullwidth">
        <select id="city" name="city" required>
          <option value="">¿En qué localidad se encuentra?</option>
          {cities.map((e, i) => renderOption(e, e, i))}
        </select>
      </div>
      <Icon size="small" align="left"><i className="fas fa-map-marker" /></Icon>
    </Form.Control>
  </Form.Field>
);

export default CityField;
