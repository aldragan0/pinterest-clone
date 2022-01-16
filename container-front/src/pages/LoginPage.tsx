import React from "react";
import { Loading } from "../components/Loading";

//@ts-ignore
const Login = React.lazy(() => import("auth/Login"));

export default (props: { signupRoute: string; mainRoute: string }) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <React.Suspense fallback={<Loading />}>
        <Login signupRoute={props.signupRoute} mainRoute={props.mainRoute} />
      </React.Suspense>
    </div>
  );
};
