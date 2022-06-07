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

    button {
      align-items: center;
      justify-content: center;
      max-width: 100px;
    }
  }
`;

export const InfoUser = styled.div`
  flex: 2;
  flex-direction: column;
  row-gap: 1rem;

  h1 {
    font-size: 2rem;
  }
`;
