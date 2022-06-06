import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "styles/global";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
    <ToastContainer hideProgressBar autoClose={3000} />
  </React.StrictMode>
);
