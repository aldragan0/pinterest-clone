import React from "react";
import { Content } from "../components/home/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/home/Header";

export default (props: { loginRoute: string; signupRoute: string }) => (
  <React.Fragment>
    <Header {...props} />
    <Content />
    <Footer />
  </React.Fragment>
);
