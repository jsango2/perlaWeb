import React from "react";

import Layout from "../../components/layout.js";
import { useRouter } from "next/router";

import slugify from "slugify";
import Head from "next/head.js";
import { getAllPerlaProizvodi, getAllRecepti } from "../../lib/api2.js";
import Recept from "../../components/Recepti/Recept/index.js";

export default function News({ pageData, recepti, perlaProizvodi }) {
  const { locale } = useRouter();
  // const router = useRouter();

  const recept = pageData.node.perlaRecepti;

  return (
    <Layout receptiNaslovi={recepti.edges}>
      <Head>
        <title>
          {" "}
          {locale === "hr" ? recept.naslovRecepta : recept.naslovReceptaEng}
        </title>

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

        <meta
          property="og:image"
          content={recept.fotografijaRecepta.sourceUrl}
        />
      </Head>
      <Recept
        receptData={pageData}
        recept={recepti}
        perlaProizvodi={perlaProizvodi}
      />
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const recepti = await getAllRecepti();
  const paths = [];

  recepti.edges.forEach(({ node }) => {
    const date = new Date(node.date).toISOString().split("T")[0];

    if (node.perlaRecepti?.naslovRecepta) {
      paths.push({
        params: {
          slug:
            slugify(node.perlaRecepti.naslovRecepta, {
              locale: "hr",
              strict: true,
              lower: true,
            }) + `-${date}`,
        },
        locale: "hr",
      });
    }

    if (node.perlaRecepti?.naslovReceptaEng) {
      paths.push({
        params: {
          slug:
            slugify(node.perlaRecepti.naslovReceptaEng, {
              locale: "en",
              strict: true,
              lower: true,
            }) + `-${date}`,
        },
        locale: "en",
      });
    }
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const recepti = await getAllRecepti();
  const perlaProizvodi = await getAllPerlaProizvodi();
  const currentSlug = params.slug;

  const found = recepti.edges.find(({ node }) => {
    const date = new Date(node.date).toISOString().split("T")[0];

    const hrSlug =
      slugify(node.perlaRecepti?.naslovRecepta || "", {
        locale: "hr",
        strict: true,
        lower: true,
      }) + `-${date}`;

    const enSlug =
      slugify(node.perlaRecepti?.naslovReceptaEng || "", {
        locale: "en",
        strict: true,
        lower: true,
      }) + `-${date}`;

    return hrSlug === currentSlug || enSlug === currentSlug;
  });

  if (!found) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData: found,
      recepti,
      params,
      perlaProizvodi,
    },
  };
}
