import React, { useState, useEffect, useContext } from "react";
// import { catalogData } from "../../catalogData.js";
// import { news } from "../../news";
import Layout from "../../components/layout.js";
import { useRouter } from "next/router";
import { catalogData } from "../../catalogData.js";
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
import Proizvod from "../../components/proizvodPage/proizvod.js";
import { getAllRecepti } from "../../lib/api2.js";

export default function ProizvodPage({ pageData, params, recepti }) {
  const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  const router = useRouter();

  // const novost = pageData.node.novosti;

  // const textNovosti =
  //   locale === "hr" ? novost.textNovosti : novost.textNovostiEng;
  // const htmlString = `<div>${textNovosti}</div>`;

  let namirnica = pageData["IME PROIZVODA - skraceno"];

  // const namirnicaNoSpaces = namirnica.toLowerCase().replaceAll(" ", "");

  // function includeWords(wanted, seen) {
  //   var wantedMap = wanted
  //       .toLowerCase()
  //       .split(/\s+/)
  //       .slice(0, -1)
  //       .reduce((m, s) => m.set(s, (m.get(s) || 0) + 1), new Map()),
  //     wantedArray = Array.from(wantedMap.keys()),
  //     count = 0;
  //   // const wantedArrayNoLastLetter = wantedArray.map((r) => r.slice(0, -1));

  //   seen
  //     .toLowerCase()
  //     .split(/\s+/)
  //     .forEach((s) => {
  //       let sh = s.slice(0, -1);
  //       var key = wantedArray.find(
  //         (t) =>
  //           sh === t ||
  //           (sh.length > 3 &&
  //             t.length > 3 &&
  //             (sh.startsWith(t) || t.startsWith(sh)))
  //       );
  //       if (!wantedMap.get(key)) return;
  //       console.log(sh, key);
  //       ++count;
  //       wantedMap.set(key, wantedMap.get(key) - 1);
  //     });

  //   if (count > 0) return true;
  // }
  // let receptiSaProizvodom = [];
  // recepti.edges.map((post) => {
  //   post.node.perlaRecepti.sastojcizaglavnojelo.map((r) => {
  //     if (includeWords(namirnica, r.nazivNamirnice)) {
  //       receptiSaProizvodom.push(post);
  //     }
  //   });
  // });

  const receptiSaOvimPerlaProizvodom = recepti.edges.filter(
    (recept) =>
      recept.node.perlaRecepti.perlaSastojci[0].perlaProizvodUReceptu ===
      namirnica
  );

  console.log(receptiSaOvimPerlaProizvodom);
  console.log(namirnica);

  // const wantedArray = ["Lignja", "očišćena", "patagonica"];

  // const seen = "Brudet od lignja";

  // seen
  //   .toLowerCase()
  //   .split(/\s+/)
  //   .forEach((s) => {
  //     s = s.slice(0, -1);
  //     var key = wantedArray.find(
  //       (t) =>
  //         s === t ||
  //         (s.length > 3 && t.length > 3 && (s.startsWith(t) || t.startsWith(s)))
  //     );
  //   });

  return (
    <Layout>
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
        receptiSaProizvodom={receptiSaOvimPerlaProizvodom}
      />
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = [];
  const perlaData = catalogData.filter(
    (data) => data["Kategorija kojoj proizvod pripada:"] === "PERLA"
  );

  perlaData.map((product, i) => {
    // return locales.map((locale) => {
    return paths.push({
      params: {
        slug:
          slugify(
            product["IME PROIZVODA - do 60 znakova"]
              .toLowerCase()
              .split(" ")
              .join("-"),
            {
              locale: "hrv",
            }
          ) +
          "-" +
          product["Kataloški broj: "],
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
            product["PRODUCT NAME - up to 60 characters"]
              .toLowerCase()
              .split(" ")
              .join("-"),
            {
              locale: "eng",
            }
          ) +
          "-" +
          product["Kataloški broj: "],
      },
      locale: "en",
    });
    // });
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const novostiNaslovi = await getAllNovostiNaslovi();
  const recepti = await getAllRecepti();
  const data = await catalogData;
  const currentPath = params.slug;
  const pageData = data.find(
    (product) =>
      slugify(
        product["IME PROIZVODA - do 60 znakova"]
          .toLowerCase()
          .split(" ")
          .join("-"),
        {
          locale: "hrv",
        }
      ) +
        "-" +
        product["Kataloški broj: "] ===
        currentPath ||
      slugify(
        product["PRODUCT NAME - up to 60 characters"]
          .toLowerCase()
          .split(" ")
          .join("-"),
        {
          locale: "eng",
        }
      ) +
        "-" +
        product["Kataloški broj: "] ===
        currentPath
  ) || {
    notfound: true,
  };
  return {
    props: { pageData, params, recepti },
  };
}
// export async function getStaticPaths({ locales }) {
//   const novosti = await getAllNovosti();

//   return { paths, fallback: false };
// }
