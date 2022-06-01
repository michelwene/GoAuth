import styled from "styled-components";

export const InputGroup = styled.div`
  padding-top: 0.75rem;
  position: relative;

  button {
    border: 0 none;
    background: inherit;

    height: 30px;
    width: 30px;

    position: absolute;
    right: 15px;
    top: calc(50% - 8px);
  }
`;

export const InputLayout = styled.input`
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
  min-width: 300px;
  padding: 15px 50px 15px 20px;
  font-size: 16px;
  transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  -webkit-appearance: none;

  &:focus {
    border: 2px solid #3951b2;
  }

  &:focus + label {
    font-size: 13px;
    top: 0;
    color: #3951b2;
  }

  &:invalid {
    border: 2px solid red;
  }

  &:invalid + label {
    color: red;
  }
`;

export const FormLabel = styled.label`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 15px;
  transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  background-color: white;
  padding: 5px;
`;
