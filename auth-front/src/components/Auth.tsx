import "../styles/Auth.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateAccount } from "./CreateAccount";
import { Login } from "./Login";

const Auth = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login signupRoute="/signup" />} />
        <Route path="/signup" element={<CreateAccount loginRoute="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Auth;