import React from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading";

//@ts-ignore
const Table = React.lazy(() => import("pin/Table"));

export default (props: { homeRoute: string }) => {
  // TODO: uncomment this once the authentication in place
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");

  // if (!token) {
  //   navigate(props.homeRoute);
  //   return null;
  // }
  const token = "";

  return (
    <React.Fragment>
      <div style={{ minHeight: "100px" }} />
      <div style={{ flex: 1 }}>
        <React.Suspense fallback={<Loading />}>
          <Table token={token} />
        </React.Suspense>
      </div>
    </React.Fragment>
  );
};
