import React from "react";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default (props: {
  loginRoute: string,
  signupRoute: string
}) => (
  <React.Fragment>
    <Header {...props} />
    <Content />
    <Footer />
  </React.Fragment>
);