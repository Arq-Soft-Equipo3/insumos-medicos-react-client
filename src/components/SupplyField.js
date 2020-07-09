import React from 'react';
import PropType from 'prop-types';
import { Form, Icon } from 'react-bulma-components';
import { renderOption } from '../helpers';

const supplies = ['Máscaras protectoras', 'Barbijos', 'Respiradores', 'Guantes', 'Medicamento'];

const SupplyField = ({ handleChange }) => (
  <Form.Field>
    <Form.Label htmlFor="supply">Insumo:</Form.Label>
    <Form.Control iconLeft>
      <div className="select is-fullwidth">
        <select id="supply" onChange={handleChange} name="supply" required>
          <option value="">¿Qué insumo necesita?</option>
          {supplies.map((e, i) => renderOption(e, e, i))}
        </select>
      </div>
      <Icon size="small" align="left"><i className="fas fa-users" /></Icon>
    </Form.Control>
  </Form.Field>
);

SupplyField.propTypes = {
  handleChange: PropType.func.isRequired,
};

export default SupplyField;
