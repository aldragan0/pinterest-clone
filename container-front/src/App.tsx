import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const mainRoute = "/";
const homeRoute = "/home";
const loginRoute = "/login";
const signupRoute = "/signup";
const exploreRoute = "/explore";

const Redirect = () => {
  const value = localStorage.getItem("token");
  const token = value ? JSON.parse(value) : value;

  console.log(`Redirect, token: ${token}`);
  return !token ? (
    <Navigate replace to={homeRoute} />
  ) : (
    <Navigate replace to={exploreRoute} />
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={mainRoute} element={<Redirect />} />
        <Route
          path={homeRoute}
          element={<Home loginRoute={loginRoute} signupRoute={signupRoute} />}
        />
        <Route
          path={loginRoute}
          element={
            <LoginPage signupRoute={signupRoute} mainRoute={mainRoute} />
          }
        />
        <Route
          path={signupRoute}
          element={<SignupPage loginRoute={loginRoute} />}
        />
        <Route
          path={exploreRoute}
          element={<Explore mainRoute={mainRoute} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
