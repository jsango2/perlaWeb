import React, { useState, useEffect, useContext } from "react";
// import { catalogData } from "../../catalogData.js";
// import { news } from "../../news";
import Layout from "../../components/layout.js";
import { useRouter } from "next/router";
// import { catalogData } from "../../catalogData.js";
// import Image from "next/image";
// import {
//   FeaturedImage,
//   TextSection,
//   TitleBlock,
//   Content,
//   Datum,
//   Naslov,
//   WrapContent,
// } from "../../components/NovostiSection/style";
// import AppContext from "../../components/AppContext.js";
// import { BlueLine } from "../../components/NovostiSection/newsCard/style.js";
// import parse from "html-react-parser";
import slugify from "slugify";
// import OtherNews from "../../components/NovostiSection/OtherNewsSection/index.js";
import Head from "next/head.js";
import Proizvod from "../../components/proizvodPage/proizvod.js";
import {
  getAllPerlaProizvodi,
  getAllProizvodi,
  getAllRecepti,
} from "../../lib/api2.js";

export default function ProizvodPage({ pageData, perlaProizvodi, recepti }) {
  // const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  const router = useRouter();
  let namirnica = pageData.node.proizvodiInformacije.imeProizvodaDo60Znakova;

  const receptiSaProizvodima = [];
  const sviReceptiSaOvimPerlaProizvodom = recepti.edges.filter((recept) =>
    recept.node.perlaRecepti.perlaSastojci.map((item) => {
      if (item.perlaProizvodUReceptu === namirnica) {
        receptiSaProizvodima.push(recept);
      }
    })
  );

  return (
    <Layout proizvodiNaslovi={perlaProizvodi}>
      {/* <Head>
        <title> {locale === "hr" ? novost.naslov : novost.naslovEng}</title>
        <link
          rel="canonical"
          href={
            locale === "hr"
              ? `https://www.marikomerc.hr/novosti/${
                  slugify(novost.naslov.toLowerCase().split(" ").join("-"), {
                    locale: "hrv",
                  }) +
                  "-" +
                  novost.datum.split("/").join("-")
                }`
              : `https://www.marikomerc.hr/novosti/${
                  slugify(novost.naslovEng.toLowerCase().split(" ").join("-"), {
                    locale: "hrv",
                  }) +
                  "-" +
                  novost.datum.split("/").join("-")
                }`
          }
          key="canonical"
        />

        <meta
          property="og:title"
          content={
            locale === "hr"
              ? `Marikomerc - ${novost.naslov}`
              : `Marikomerc - ${novost.naslovEng}`
          }
          key="title"
        />
        <meta
          name="twitter:title"
          content={
            locale === "hr"
              ? `Marikomerc - ${novost.naslov}`
              : `Marikomerc - ${novost.naslovEng}`
          }
        />
        <meta
          name="twitter:description"
          content={
            locale === "hr" ? `${novost.seoOpis}` : `${novost.seoDescription}`
          }
        />
        <meta
          name="twitter:image"
          content={`${novost.istaknutaFotografija.sourceUrl}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr" ? `${novost.seoOpis}` : `${novost.seoDescription}`
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr" ? `${novost.seoOpis}` : `${novost.seoDescription}`
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `https://www.marikomerc.hr/novosti/${
                  slugify(novost.naslov.toLowerCase().split(" ").join("-"), {
                    locale: "hrv",
                  }) +
                  "-" +
                  novost.datum.split("/").join("-")
                }`
              : `https://www.marikomerc.hr/novosti/${
                  slugify(novost.naslovEng.toLowerCase().split(" ").join("-"), {
                    locale: "hrv",
                  }) +
                  "-" +
                  novost.datum.split("/").join("-")
                }`
          }
        />
        <meta
          property="og:image"
          content={`${novost.istaknutaFotografija.sourceUrl}`}
        />
      </Head> */}
      <Proizvod
        pageData={pageData}
        receptiSaProizvodom={receptiSaProizvodima}
        perlaProizvodi={perlaProizvodi}
      />
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  // const proizvodi = await getAllProizvodi();
  const perlaData = await getAllPerlaProizvodi();

  const paths = [];
  // const perlaData = proizvodi.edges.filter(
  //   (data) =>
  //     data.node.proizvodiInformacije.kategorijaKojojProizvodPripada === "PERLA"
  // );

  perlaData.map((product, i) => {
    // return locales.map((locale) => {
    return paths.push({
      params: {
        slug:
          slugify(
            product.node.proizvodiInformacije.imeProizvodaDo60Znakova
              .toLowerCase()
              .split(" ")
              .join("-"),
            {
              locale: "hrv",
              strict: true,
            }
          ) +
          "-" +
          product.node.proizvodiInformacije.kataloskiBroj,
      },
      locale: "hr",
    });
    // });
  });

  perlaData.map((product, i) => {
    // return locales.map((locale) => {
    return paths.push({
      params: {
        slug:
          slugify(
            product.node.proizvodiInformacije.imeProizvodaDo60ZnakovaEng
              .toLowerCase()
              .split(" ")
              .join("-"),
            {
              locale: "eng",
              strict: true,
            }
          ) +
          "-" +
          product.node.proizvodiInformacije.kataloskiBroj,
      },
      locale: "en",
    });
    // });
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const perlaProizvodi = await getAllPerlaProizvodi();
  // const recepti = await getAllRecepti();

  // const perlaProizvodi = proizvodi.edges.filter(
  //   (data) =>
  //     data.node.proizvodiInformacije.kategorijaKojojProizvodPripada === "PERLA"
  // );

  // const data = await catalogData;
  const currentPath = params.slug;
  const pageData = perlaProizvodi.find(
    (product) =>
      slugify(
        product.node.proizvodiInformacije.imeProizvodaDo60Znakova
          .toLowerCase()
          .split(" ")
          .join("-"),
        {
          locale: "hrv",
          strict: true,
        }
      ) +
        "-" +
        product.node.proizvodiInformacije.kataloskiBroj ===
        currentPath ||
      slugify(
        product.node.proizvodiInformacije.imeProizvodaDo60ZnakovaEng
          .toLowerCase()
          .split(" ")
          .join("-"),
        {
          locale: "eng",
          strict: true,
        }
      ) +
        "-" +
        product.node.proizvodiInformacije.kataloskiBroj ===
        currentPath
  ) || {
    notfound: true,
  };

  return {
    props: { pageData, perlaProizvodi },
  };
}
