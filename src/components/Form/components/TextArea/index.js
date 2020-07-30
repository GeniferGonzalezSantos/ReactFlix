import styled from 'styled-components';

const TextArea = styled.textarea`
  background-color: var(--blackLighter);
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-style: normal;
  font-size: 16px;
  height: 200px;
  margin:10px;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s;
  width:100%;
  

  &:hover,
  &:focus {
  opacity: .5;
}
`;

export default TextArea;


