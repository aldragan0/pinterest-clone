import React from "react";
import { Loading } from "../Loading";

//@ts-ignore
const Table = React.lazy(() => import("pin/Table"));

export default (props: { mainRoute: string; searchString: string }) => {
  //TODO: move auth logic into the explore page, only pas props here
  const value = localStorage.getItem("token");
  const token = value ? JSON.parse(value) : value;

  if (!token) {
    return null;
  }

  return (
    <React.Fragment>
      <div style={{ minHeight: "100px" }} />
      <div style={{ flex: 1 }}>
        <React.Suspense fallback={<Loading />}>
          <Table token={token} searchQuery={props.searchString} />
        </React.Suspense>
      </div>
    </React.Fragment>
  );
};
