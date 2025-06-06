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
  getAllPerlaProizvodiPaths,
} from "../../lib/api2.js";

export default function ProizvodPage({ pageData, perlaProizvodi, perlaData }) {
  // const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  const router = useRouter();
  let namirnica = pageData.node.proizvodiInformacije.imeProizvodaDo60Znakova;

  const receptiSaProizvodima = [];
  // const sviReceptiSaOvimPerlaProizvodom = recepti.edges.filter((recept) =>
  //   recept.node.perlaRecepti.perlaSastojci.map((item) => {
  //     if (item.perlaProizvodUReceptu === namirnica) {
  //       receptiSaProizvodima.push(recept);
  //     }
  //   })
  // );
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

// export async function getStaticPaths({ locales }) {
//   // const proizvodi = await getAllProizvodi();
//   const perlaData = await getAllPerlaProizvodi();

//   const paths = [];

//   perlaData.map((product, i) => {
//     // return locales.map((locale) => {
//     return paths.push({
//       params: {
//         slug:
//           slugify(
//             product.node.proizvodiInformacije.imeProizvodaDo60Znakova
//               .toLowerCase()
//               .split(" ")
//               .join("-"),
//             {
//               locale: "hrv",
//               strict: true,
//             }
//           ) +
//           "-" +
//           product.node.proizvodiInformacije.kataloskiBroj,
//       },
//       locale: "hr",
//     });
//     // });
//   });

//   perlaData.map((product, i) => {
//     // return locales.map((locale) => {
//     return paths.push({
//       params: {
//         slug:
//           slugify(
//             product.node.proizvodiInformacije.imeProizvodaDo60ZnakovaEng
//               .toLowerCase()
//               .split(" ")
//               .join("-"),
//             {
//               locale: "eng",
//               strict: true,
//             }
//           ) +
//           "-" +
//           product.node.proizvodiInformacije.kataloskiBroj,
//       },
//       locale: "en",
//     });
//     // });
//   });
//   return { paths, fallback: false };
// }

export async function getStaticPaths({ locales }) {
  const perlaData = await getAllPerlaProizvodiPaths();
  const paths = [];

  perlaData.forEach(({ node }) => {
    const info = node.proizvodiInformacije;
    const id = info?.kataloskiBroj;

    if (info?.imeProizvodaDo60Znakova && id) {
      paths.push({
        params: {
          slug:
            slugify(info.imeProizvodaDo60Znakova, {
              locale: "hr",
              strict: true,
              lower: true,
            }) + `-${id}`,
        },
        locale: "hr",
      });
    }

    if (info?.imeProizvodaDo60ZnakovaEng && id) {
      paths.push({
        params: {
          slug:
            slugify(info.imeProizvodaDo60ZnakovaEng, {
              locale: "en",
              strict: true,
              lower: true,
            }) + `-${id}`,
        },
        locale: "en",
      });
    }
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const perlaProizvodi = await getAllPerlaProizvodi();

  const currentSlug = params.slug;

  const found = perlaProizvodi.find(({ node }) => {
    const info = node.proizvodiInformacije;
    const id = info?.kataloskiBroj;

    if (!id) return false;

    const hrSlug =
      slugify(info.imeProizvodaDo60Znakova || "", {
        locale: "hr",
        strict: true,
        lower: true,
      }) + `-${id}`;

    const enSlug =
      slugify(info.imeProizvodaDo60ZnakovaEng || "", {
        locale: "en",
        strict: true,
        lower: true,
      }) + `-${id}`;

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
      perlaProizvodi,
    },
  };
}
