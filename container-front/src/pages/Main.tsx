import React from "react";
import Content from "../components/main/Content";
import { Footer } from "../components/Footer";
import Header from "../components/main/Header";

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
};
