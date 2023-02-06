import AlertPopup from "@/components/AlertPopup";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React, { ReactElement } from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Modals />
      <AlertPopup />
      <Footer />
    </>
  );
};

export default Layout;
