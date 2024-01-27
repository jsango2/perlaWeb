import React, { useState, useEffect, useContext } from "react";
// import { catalogData } from "../../catalogData.js";
// import { news } from "../../news";
import Layout from "../../components/layout.js";
import { useRouter } from "next/router";

import Image from "next/image";
// import {
//   FeaturedImage,
//   TextSection,
//   TitleBlock,
//   Content,
//   Datum,
//   Naslov,
//   WrapContent,
// } from "../../components/NovostiSection/style";
import AppContext from "../../components/AppContext.js";
// import { BlueLine } from "../../components/NovostiSection/newsCard/style.js";
import parse from "html-react-parser";
import slugify from "slugify";
// import OtherNews from "../../components/NovostiSection/OtherNewsSection/index.js";
import Head from "next/head.js";
import { getAllRecepti, getAllReceptiNaslovi } from "../../lib/api2.js";
import Recept from "../../components/Recepti/Recept/index.js";

export default function News({
  pageData,
  recepti,
  receptiNaslovi,
  testData,
  params,
}) {
  const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  const router = useRouter();

  // const novost = pageData.node.novosti;

  // const textNovosti =
  //   locale === "hr" ? novost.textNovosti : novost.textNovostiEng;
  // const htmlString = `<div>${textNovosti}</div>`;
  const recept = pageData.node.perlaRecepti;
  return (
    <Layout receptiNaslovi={receptiNaslovi.edges}>
      <Head>
        <title>
          {" "}
          {locale === "hr" ? recept.naslovRecepta : recept.naslovReceptaEng}
        </title>
        {/* <link
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
        /> */}

        <meta
          property="og:title"
          content={
            locale === "hr"
              ? `Perla recepti - ${recept.naslovRecepta}`
              : `Perla recepti - ${recept.naslovReceptaEng}`
          }
          key="title"
        />
        <meta
          name="twitter:title"
          content={
            locale === "hr"
              ? `Perla recepti - ${recept.naslovRecepta}`
              : `Perla recepti - ${recept.naslovReceptaEng}`
          }
        />
        <meta
          name="twitter:description"
          content={
            locale === "hr" ? recept.naslovRecepta : recept.naslovReceptaEng
          }
        />
        <meta
          name="twitter:image"
          content={recept.fotografijaRecepta.sourceUrl}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr" ? recept.naslovRecepta : recept.naslovReceptaEng
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr" ? recept.naslovRecepta : recept.naslovReceptaEng
          }
        />
        {/* <meta
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
        /> */}
        <meta
          property="og:image"
          content={recept.fotografijaRecepta.sourceUrl}
        />
      </Head>
      <Recept receptData={pageData} recepti={recepti} />
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const recepti = await getAllRecepti();

  const paths = [];

  recepti.edges.map((post, i) => {
    // return locales.map((locale) => {
    return paths.push({
      params: {
        slug:
          slugify(
            post.node.perlaRecepti.naslovRecepta
              .toLowerCase()
              .split(" ")
              .join("-"),
            {
              locale: "hrv",
              strict: true,
            }
          ) +
          "-" +
          new Date(post.node.date).toISOString().split("T")[0],
      },
      locale: "hr",
    });
    // });
  });

  recepti.edges.map((post, i) => {
    // return locales.map((locale) => {
    if (post.node.perlaRecepti.naslovReceptaEng !== null) {
      return paths.push({
        params: {
          slug:
            slugify(
              post.node.perlaRecepti.naslovReceptaEng
                .toLowerCase()
                .split(" ")
                .join("-"),
              {
                locale: "eng",
                strict: true,
              }
            ) +
            "-" +
            new Date(post.node.date).toISOString().split("T")[0],
        },
        locale: "en",
      });
    }
    // });
  });

  // novosti.edges.map((post, i) => {
  //   // return locales.map((locale) => {
  //   return paths.push({
  //     params: {
  //       slug:
  //         slugify(
  //           post.node.novosti.naslovEng.toLowerCase().split(" ").join("-"),
  //           {
  //             locale: "eng",
  //           }
  //         ) +
  //         "-" +
  //         post.node.novosti.datum.split("/").join("-"),
  //     },
  //     locale: "en",
  //   });
  //   // });
  // });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const recepti = await getAllRecepti();
  const receptiNaslovi = await getAllReceptiNaslovi();

  // const novostiNaslovi = await getAllNovostiNaslovi();
  const currentPath = params.slug;
  const pageData = recepti.edges.find(
    (recept) =>
      slugify(
        recept.node.perlaRecepti.naslovRecepta
          .toLowerCase()
          .split(" ")
          .join("-"),
        {
          locale: "hrv",
          strict: true,
        }
      ) +
        "-" +
        new Date(recept.node.date).toISOString().split("T")[0] ===
        currentPath ||
      slugify(
        recept.node.perlaRecepti.naslovReceptaEng
          .toLowerCase()
          .split(" ")
          .join("-"),
        {
          locale: "eng",
          strict: true,
        }
      ) +
        "-" +
        new Date(recept.node.date).toISOString().split("T")[0] ===
        currentPath
  ) || {
    notfound: true,
  };
  return {
    props: { pageData, recepti, receptiNaslovi, params },
  };
}
// export async function getStaticPaths({ locales }) {
//   const novosti = await getAllNovosti();

//   const paths = [];

//   novosti.edges.map((post, i) => {
//     return locales.map((locale) => {
//       return paths.push({
//         params: {
//           slug:
//             slugify(
//               post.node.novosti.naslov.toLowerCase().split(" ").join("-"),
//               { locale: "hrv" }
//             ) +
//             "-" +
//             post.node.novosti.datum.split("/").join("-"),
//         },
//         locale: "hr",
//       });
//     });
//   });

//   novosti.edges.map((post, i) => {
//     return locales.map((locale) => {
//       return paths.push({
//         params: {
//           slug:
//             post.node.novosti.naslovEng.toLowerCase().split(" ").join("-") +
//             "-" +
//             post.node.novosti.datum.split("/").join("-"),
//         },
//         locale: "en",
//       });
//     });
//   });

//   return { paths, fallback: false };
// }
