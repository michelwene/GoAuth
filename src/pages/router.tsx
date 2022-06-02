import { Route, Routes } from "react-router-dom";
import { ForgotPassword } from "./Forgot-Password";
import { Login } from "./Login";
import { Register } from "./Register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrar-se" element={<Register />} />
      <Route path="/resgatar-senha" element={<ForgotPassword />} />
    </Routes>
  );
}
