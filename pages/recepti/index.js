import React from "react";
import Layout from "../../components/layout";
// import {
//   Container,
//   FeaturedNews,
//   News,
//   Left,
//   Right,
//   Pagination,
// } from "../../components/NovostiSection/page/style.js";

import { getAllRecepti } from "../../lib/api2.js";
import Image from "next/image.js";
import { useRouter } from "next/router.js";
import slugify from "slugify";
import { catalogData } from "../../catalogData.js";
import useScrollBlock from "../../components/helper/useScrollBlock.js";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { format, parseISO } from "date-fns";
import Hero from "../../components/Hero/index.js";
import FrontRecepti from "../../components/Recepti/FrontRecepti/index.js";
import Head from "next/head.js";

function index(props) {
  const [itemOffset, setItemOffset] = useState([]);
  const [itemsPerPage] = useState(6);
  const endOffset = itemOffset + itemsPerPage;
  const [blockScroll, allowScroll] = useScrollBlock();
  const catDat = catalogData.map(
    (item) => item["IME PROIZVODA - do 60 znakova"]
  );

  const { locale, locales, defaultLocale, asPath, basePath } = useRouter();

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
      <FrontRecepti recepti={props.recepti} samoRecepti={true} />
    </Layout>
  );
}

export default index;

export async function getStaticProps({ locales }) {
  const recepti = await getAllRecepti();
  const paths = [];

  return {
    props: {
      paths: paths,

      fallback: false,
      recepti,
    },
  };
}
