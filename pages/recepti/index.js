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
