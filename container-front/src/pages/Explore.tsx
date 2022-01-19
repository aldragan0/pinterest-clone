import React, { useState } from "react";
import Content from "../components/main/Content";
import { Footer } from "../components/Footer";
import Header from "../components/main/Header";

export default (props: { mainRoute: string }) => {
  const [searchKey, setSearchKey] = useState("");

  return (
    <React.Fragment>
      <Header mainRoute={props.mainRoute} setSearch={setSearchKey} />
      <Content mainRoute={props.mainRoute} searchString={searchKey} />
      <Footer />
    </React.Fragment>
  );
};
