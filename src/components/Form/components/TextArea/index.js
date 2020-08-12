import styled from 'styled-components';

const TextArea = styled.textarea`

background-color: var(--blackLighter);
  display: block;
 
  width: 100%;
  height: 200px;
  font-size: 16px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  
  padding: 14px 14px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);
  }

`;

export default TextArea;


