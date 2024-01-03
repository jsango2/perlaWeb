// import React from "react";
// import { graphql } from "gatsby";
import Layout from "./../components/layout";
// import Seo from "../components/seo";
import Head from "next/head";
import { createContext, useContext, useEffect, useState } from "react";

import useWindowSize from "../components/helper/usewindowsize";

import AppContext from "../components/AppContext.js";
import Hero from "../components/Hero/index.js";
import FrontRecepti from "../components/Recepti/FrontRecepti/index.js";
import NasiProizvodi from "../components/NasiProizvodi/index.js";
import { getAllRecepti } from "../lib/api2.js";

export default function IndexPage({ allRecepti }) {
  const context = useContext(AppContext);
  const size = useWindowSize();
  // useEffect(() => {
  //   context.setNovostiNasloviContext(novostiNaslovi);
  // }, []);
  console.log(allRecepti);
  return (
    <Layout>
      <Hero />
      <FrontRecepti recepti={allRecepti} />
      <NasiProizvodi />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allRecepti = await getAllRecepti();

  return {
    props: { allRecepti },
  };
}
