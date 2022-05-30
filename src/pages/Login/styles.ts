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

export const InputGroup = styled.div``;

export const FormLabel = styled.label``;

export const FormInput = styled.input``;

export const FormLink = styled.a``;

export const FormButton = styled.button``;

export const AuthIcon = styled(SiAuthy)`
  font-size: 1.5rem;
`;
