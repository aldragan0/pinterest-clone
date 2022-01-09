import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateAccount } from "./components/CreateAccount";
import { Login } from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login signupRoute="/signup" />} />
        <Route path="/signup" element={<CreateAccount loginRoute="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;