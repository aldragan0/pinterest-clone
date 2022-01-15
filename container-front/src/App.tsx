import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "./components/Loading";
import Home from "./pages/Home";
import Main from "./pages/Main";

//@ts-ignore
const Login = React.lazy(() => import("auth/Login"));
//@ts-ignore
const Signup = React.lazy(() => import("auth/Signup"));

const loginRoute = "/login";
const signupRoute = "/signup";
const mainRoute = "/explore";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home loginRoute={loginRoute} signupRoute={signupRoute} />}
        />
        <Route
          path={loginRoute}
          element={
            <React.Suspense fallback={<Loading />}>
              <Login signupRoute={signupRoute} />
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
        <Route path={mainRoute} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
