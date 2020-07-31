import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputForm = styled.input`
  background-color: var(--blackLighter);
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-style: normal;
  font-size: 16px;
  margin:10px;
  padding: 10px 18px;
  text-decoration: none;
  transition: opacity .3s;
  width:100%;

  &:hover,
  &:focus {
  opacity: .5;
}
`;

function FormField({
  label, name, onChange, type, value,
}) {
  const fieldId = `id_${name}`;

  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
        <InputForm
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default FormField;