import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NextNProgress from "nextjs-progressbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NextNProgress height={1} color="#3787FF" />
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
