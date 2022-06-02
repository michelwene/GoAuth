import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  height: 100vh;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  row-gap: 5rem;
  height: 100%;
  width: 50%;

  & > div {
    align-items: center;
    column-gap: 1rem;
    display: flex;
    justify-content: center;
    flex: 1;
    width: 100%;
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

  > a {
    align-self: flex-start;
    font-weight: 700;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const FormLink = styled.a``;
