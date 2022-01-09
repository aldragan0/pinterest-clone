import "../styles/Auth.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateAccount } from "./CreateAccount";
import { Login } from "./Login";

const Auth = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Auth;