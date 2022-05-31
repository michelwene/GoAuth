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
