import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Loading } from "./components/Loading";
import Home from "./pages/Home";
import Explore from "./pages/Explore";

//@ts-ignore
const Login = React.lazy(() => import("auth/Login"));
//@ts-ignore
const Signup = React.lazy(() => import("auth/Signup"));

const mainRoute = "/";
const homeRoute = "/home";
const loginRoute = "/login";
const signupRoute = "/signup";
const exploreRoute = "/explore";

const Redirect = () => {
  const token = localStorage.getItem("token");
  console.log(`Redirect, token: ${token}`);
  return !token ? (
    <Navigate replace to={exploreRoute} />
  ) : (
    <Navigate replace to={homeRoute} />
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
            <React.Suspense fallback={<Loading />}>
              <Login signupRoute={signupRoute} mainRoute={mainRoute} />
            </React.Suspense>
          }
        />
        <Route
          path={signupRoute}
          element={
            <React.Suspense fallback={<Loading />}>
              <Signup loginRoute={loginRoute} />
            </React.Suspense>
          }
        />
        <Route
          path={exploreRoute}
          element={<Explore mainRoute={mainRoute} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
