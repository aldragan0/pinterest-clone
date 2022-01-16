import React from "react";
import Content from "../components/main/Content";
import { Footer } from "../components/Footer";
import Header from "../components/main/Header";

export default (props: { mainRoute: string }) => {
  return (
    <React.Fragment>
      <Header mainRoute={props.mainRoute} />
      <Content mainRoute={props.mainRoute} />
      <Footer />
    </React.Fragment>
  );
};
