import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "styles/global";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";
import { UserContextProvider } from "context/userContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserContextProvider>
    <React.StrictMode>
      <App />
      <GlobalStyle />

      <ToastContainer hideProgressBar={true} autoClose={2000} />
    </React.StrictMode>
  </UserContextProvider>
);
