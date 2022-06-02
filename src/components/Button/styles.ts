import styled from "styled-components";

export const FormButton = styled.button`
  border: 0 none;
  border-radius: 30px;
  column-gap: 0.5rem;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  justify-content: center;

  padding: 1rem 0;
  text-transform: uppercase;
  width: 100%;

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`;
