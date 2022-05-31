import styled from "styled-components";
import { SiAuthy } from "react-icons/si";

export const Content = styled.section`
  display: flex;
  height: 100vh;
`;

export const Aside = styled.aside`
  background: url("/assets/login.jpg") center / cover no-repeat;
  display: flex;
  flex: 1;
  height: 100%;
  width: 50%;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  row-gap: 10rem;
  height: 100%;
  width: 50%;

  & > div {
    align-items: center;
    display: flex;
    flex: 1;

    h1 {
      padding-right: 1rem;
    }
  }
`;

export const FormGroup = styled.form`
  align-items: center;
  display: flex;
  flex: 2;
  flex-direction: column;

  row-gap: 1rem;

  h2 {
    font-weight: 400;
    padding-bottom: 1rem;
  }

  p > a {
    font-weight: 700;
  }
`;

export const InputGroup = styled.div`
  padding-top: 0.75rem;
  position: relative;

  input:required:invalid + label {
    color: red;
  }

  input:required:invalid + label::before {
    content: "*";
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: #3951b2;
  }
`;

export const FormLabel = styled.label`
  pointer-events: none;
  position: absolute;
  top: calc(50% - 10px);
  left: 15px;
  transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  background-color: white;
  padding: 5px;
`;

export const FormInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
  min-width: 250px;
  padding: 15px 20px;
  font-size: 16px;
  transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  -webkit-appearance: none;

  &:focus {
    border: 2px solid #3951b2;
  }

  &::placeholder {
    color: transparent;
  }

  &:focus:required:invalid {
    border: 2px solid red;
  }
`;

export const FormLink = styled.a``;

export const FormButton = styled.button``;

export const AuthIcon = styled(SiAuthy)`
  font-size: 1.5rem;
`;
