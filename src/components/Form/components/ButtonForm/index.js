import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ButtonForm = styled.button`
  background-color: var(--blackLighter);
  border:none;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;;
  margin: 0px 10px 10px 0px;
  padding: 16px 10px;
  text-decoration: none;
  text-align: center;
  transition: opacity .3s;
  width:15%;

  &:hover,
  &:focus {
  opacity: .5;

}
`;


function Button({
  children, className,
}) {
  return (
    <ButtonForm className={className}>
      {children}
    </ButtonForm>
  );
}

Button.defaultProps = {
  className: '',
  children: ''
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default Button;


