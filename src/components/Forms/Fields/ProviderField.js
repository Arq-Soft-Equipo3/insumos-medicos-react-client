import React from 'react';
import { Form, Icon } from 'react-bulma-components';
import { renderOption } from '../../../helpers';

const providers = ['Dispromed', 'Hospimed', 'Mundo Medic', 'Top Medical'];

const ProviderField = () => (
  <Form.Field>
    <Form.Label htmlFor="provider">Seleccione un proveedor:</Form.Label>
    <Form.Control iconLeft>
      <div className="select is-fullwidth">
        <select id="provider" name="provider" required>
          <option value="">Seleccione un proveedor</option>
          {providers.map((e, i) => renderOption(e, e, i))}
        </select>
      </div>
      <Icon size="small" align="left"><i className="fas fa-medkit" /></Icon>
    </Form.Control>
  </Form.Field>
);

export default ProviderField;
