import SubmitComponent from "../components/Submit/SubmitComponent";
import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import LeftSideMenu from "../components/LeftSideMenu/LeftSideMenu";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <LeftSideMenu />
      <Footer />
    </Container>
  );
};
