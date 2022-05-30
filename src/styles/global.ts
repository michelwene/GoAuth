import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@media(max-width:1080px){
    html{
        font-size: 93.75%;
    }
}

@media(max-width: 768px){
    html{
        font-size: 87.50%;
    }
}

:root{

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}

body,input,textarea, button{
    font-weight: 400;
}


h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
    &:hover {
        filter: brightness(0.8);
      }
      &:active {
        transform: scale(0.98);
      }
}


input{
  font-size: 1.125rem;
  font-weight: 300;
}

a {
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }
[disabled]{
    cursor: not-allowed;
}

&::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: rgba(0,0,0,0.05);
  }
  @media (max-width: 425px) {
    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-track {
      display: none;
    }
  }


`;
