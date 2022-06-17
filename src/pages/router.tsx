import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { ForgotPassword } from "./Forgot-Password";
import { Login } from "./Login";
import { RegisterUser } from "./Register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrar-se" element={<RegisterUser />} />
      <Route path="/resgatar-senha" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
