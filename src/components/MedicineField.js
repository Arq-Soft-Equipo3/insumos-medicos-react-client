import React from 'react';
import { Form, Icon } from 'react-bulma-components';
import { renderOption } from '../helpers';

const medicines = ['A', 'B', 'C', 'D'];

const MedicineField = () => (
  <Form.Field>
    <Form.Label htmlFor="medicine">Medicamento:</Form.Label>
    <Form.Control iconLeft>
      <div className="select is-fullwidth">
        <select id="medicine" name="medicine" required>
          <option value="">¿Qué medicamento necesita?</option>
          {medicines.map((e) => renderOption(e))}
        </select>
      </div>
      <Icon size="small" align="left"><i className="fas fa-medkit" /></Icon>
    </Form.Control>
  </Form.Field>
);

export default MedicineField;
