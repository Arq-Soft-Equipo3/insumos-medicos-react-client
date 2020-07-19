import React from 'react';
import { Form, Icon } from 'react-bulma-components';
import { renderOption } from '../../../helpers';

const areas = ['Atención de pacientes', 'Técnicos', 'Terapia Intensiva'];

const AreaField = () => (
  <Form.Field>
    <Form.Label htmlFor="area">Área:</Form.Label>
    <Form.Control iconLeft>
      <div className="select is-fullwidth">
        <select id="area" name="area" required>
          <option value="">¿A que area esta destinado?</option>
          {areas.map((e, i) => renderOption(e, e, i))}
        </select>
      </div>
      <Icon size="small" align="left"><i className="fas fa-users" /></Icon>
    </Form.Control>
  </Form.Field>
);

AreaField.propTypes = {};

export default AreaField;
