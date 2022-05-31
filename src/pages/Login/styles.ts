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
    padding-bottom: 3rem;
  }

  p > a {
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
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

export const FormLabel = styled.label`
  pointer-events: none;
  position: absolute;
  top: calc(50% - 8px);
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

  &::placeholder {
    color: transparent;
  }

  &:focus:required:invalid {
    border: 2px solid red;
  }
`;

export const FormLink = styled.a`
  align-self: flex-start;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export const FormButton = styled.button`
  border: 0 none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;

  padding: 1rem 0;
  text-transform: uppercase;
  width: 100%;

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const AuthIcon = styled(SiAuthy)`
  font-size: 1.5rem;
`;
