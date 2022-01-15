import React from "react";
import { Loading } from "../Loading";

//@ts-ignore
const Table = React.lazy(() => import("pin/Table"));

export default () => {
  return (
    <React.Fragment>
      <div style={{ minHeight: "100px" }} />
      <div style={{ flex: 1 }}>
        <React.Suspense fallback={<Loading />}>
          <Table />
        </React.Suspense>
      </div>
    </React.Fragment>
  );
};
