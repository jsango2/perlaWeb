// import React from "react";
// import { graphql } from "gatsby";
import Layout from "./../components/layout";
// import Seo from "../components/seo";
import Head from "next/head";
// import { useContext, useEffect, useState } from "react";

// import useWindowSize from "../components/helper/usewindowsize";

// import AppContext from "../components/AppContext.js";
import Hero from "../components/Hero/index.js";
import FrontRecepti from "../components/Recepti/FrontRecepti/index.js";
import NasiProizvodi from "../components/NasiProizvodi/index.js";
import {
  getAllPerlaProizvodi,
  getAllProizvodi2,
  // getAllPerlaProizvodi,
  // getAllProizvodi,
  getAllRecepti,
} from "../lib/api2.js";
// import KaoVrhunski from "../components/Recepti/FrontRecepti/KuhajKaoVrhunski/index.js";
// import { WrapAll } from "../components/Recepti/FrontRecepti/style.js";
// import { catalogData } from "../catalogData.js";
import { useRouter } from "next/router.js";
import { perlaProizvodiLocal } from "../perlaProizvodi.js";

export default function IndexPage({ allRecepti, allProizvodi, allProizvodi2 }) {
  const perlaProizvodi = allProizvodi;
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout>
      <Head>
        <title>Perla Recepti</title>
        <meta property="og:title" content="Perla recepti" key="title" />

        {/* <link
          rel="alternate"
          hreflang={locale === "hr" ? "hr" : "en"}
          href={locale === "hr" ? "https://www.perla.hr":"https://www.perla.hr/en"}
          data-react-helmet="true"
        ></link> */}
        {/* <link
          rel="canonical"
          href={locale === "hr" ? "https://www.perla.hr":"https://www.perla.hr/en"}
          data-react-helmet="true"
        ></link> */}

        <meta name="twitter:card" content="summary_large_image" />

        {/* <meta property="og:url" content="https://www.runzadar.com" /> */}
        <meta
          name="google-site-verification"
          content="KSOsBchhDMtcxBavoVnUbAVI8Jxcipv9J5ceC1K4Rag"
        />
        <meta
          property="og:image"
          content="http://marikomerc.sutra.hr/wp-content/uploads/2024/01/perlaOGimage.png"
        />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "Otkrijte raznolike recepte na Perla web stranici, idealne za ljubitelje morskih plodova. Pronađite inspiraciju za vaš sljedeći obrok, od jednostavnih do gurmanskih jela."
              : "Discover a variety of recipes on Perla's website, perfect for seafood enthusiasts. From simple to gourmet, find inspiration for your next meal."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "Otkrijte raznolike recepte na Perla web stranici, idealne za ljubitelje morskih plodova. Pronađite inspiraciju za vaš sljedeći obrok, od jednostavnih do gurmanskih jela."
              : "Discover a variety of recipes on Perla's website, perfect for seafood enthusiasts. From simple to gourmet, find inspiration for your next meal."
          }
        />
        <meta
          property="twitter:description"
          content={
            locale === "hr"
              ? "Otkrijte raznolike recepte na Perla web stranici, idealne za ljubitelje morskih plodova. Pronađite inspiraciju za vaš sljedeći obrok, od jednostavnih do gurmanskih jela."
              : "Discover a variety of recipes on Perla's website, perfect for seafood enthusiasts. From simple to gourmet, find inspiration for your next meal."
          }
        />
      </Head>
      <Hero />

      <FrontRecepti recepti={allRecepti} proizvodi={perlaProizvodi} />

      <NasiProizvodi
        proizvodi={perlaProizvodi}
        perlaProizvodi={allProizvodi2}
      />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allRecepti = await getAllRecepti();
  const allProizvodi = await perlaProizvodiLocal;
  const allProizvodi2 = await getAllPerlaProizvodi();

  return {
    props: {
      allRecepti,
      allProizvodi,
      allProizvodi2,
    },
  };
}
