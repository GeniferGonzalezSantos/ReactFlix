import React from 'react';
import styled from 'styled-components';

const ButtonForm = styled.button`
  background-color: var(--blackLighter);
  border:none;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;;
  margin:10px;
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

ButtonForm.Position = styled.div`
  display: flex;
  flex-direction: row;
  `;


function Button({ children }) {
  return (
    <ButtonForm.Position>
        <ButtonForm>{ children }</ButtonForm> 
    </ButtonForm.Position>
  )
}

export default Button;


