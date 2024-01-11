// import React from "react";
// import { graphql } from "gatsby";
import Layout from "../components/layout.js";
// import Seo from "../components/seo";
import Head from "next/head";
import { createContext, useContext, useEffect, useState } from "react";

import useWindowSize from "../components/helper/usewindowsize.js";

import AppContext from "../components/AppContext.js";
import Hero from "../components/Hero/index.js";
import FrontRecepti from "../components/Recepti/FrontRecepti/index.js";
import NasiProizvodi from "../components/NasiProizvodi/index.js";
import { getAllRecepti } from "../lib/api2.js";
import KaoVrhunski from "../components/Recepti/FrontRecepti/KuhajKaoVrhunski/index.js";
import { WrapAll } from "../components/Recepti/FrontRecepti/style.js";
import { catalogData } from "../catalogData.js";
import Script from "next/script";
import { Container } from "../components/proizvodPage/hero/style.js";
import Pop from "../components/pop.js";
export default function IndexPage({ allRecepti }) {
  const context = useContext(AppContext);
  const size = useWindowSize();

  return (
    <Layout>
      <Pop />
    </Layout>
  );
}
