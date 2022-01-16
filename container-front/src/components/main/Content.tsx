import React from "react";
import { Loading } from "../Loading";

//@ts-ignore
const Table = React.lazy(() => import("pin/Table"));

export default (props: { mainRoute: string }) => {
  // const token = localStorage.getItem("token");
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
