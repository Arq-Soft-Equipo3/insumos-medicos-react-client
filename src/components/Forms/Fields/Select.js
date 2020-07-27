import React from 'react';
import { Form, Icon } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { renderOption } from '../../../helpers';

const Select = ({
  label, name, blankOption, options, icon, handleChange,
}) => (
  <Form.Field>
    <Form.Label htmlFor="area">
      {label}
      :
    </Form.Label>
    <Form.Control iconLeft>
      <div className="select is-fullwidth">
        <select onChange={handleChange} id={name} name={name} required>
          <option value="">{blankOption}</option>
          {options.map((e, i) => renderOption(e, e, i))}
        </select>
      </div>
      <Icon size="small" align="left"><i className={`fas fa-${icon}`} /></Icon>
    </Form.Control>
  </Form.Field>
);

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  blankOption: PropTypes.string,
  options: PropTypes.array,
  icon: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Select;
