import React from "react";
import { Loading } from "../components/Loading";

//@ts-ignore
const Signup = React.lazy(() => import("auth/Signup"));

export default (props: { loginRoute: string }) => {
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
        <Signup loginRoute={props.loginRoute} />
      </React.Suspense>
    </div>
  );
};
