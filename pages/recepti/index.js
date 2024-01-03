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

function index(props) {
  const [itemOffset, setItemOffset] = useState([]);
  const [itemsPerPage] = useState(6);
  const endOffset = itemOffset + itemsPerPage;
  const [blockScroll, allowScroll] = useScrollBlock();
  const catDat = catalogData.map(
    (item) => item["IME PROIZVODA - do 60 znakova"]
  );

  const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  // const recepti = props.edges;
  // console.log(recepti);
  // pronađi istaknutu novost
  // const sortNovostyByDate = novosti.sort((a, b) => {
  //   return Math.abs(
  //     new Date(a.node.novosti.datum) - new Date(b.node.novosti.datum)
  //   );
  // });

  // const featuredNovost = sortNovostyByDate.filter(
  //   (n) => n.node.novosti.istaknutaNovost === true
  // );
  // sve novosti osim istaknute
  // const otherNovosti = novosti
  //   .filter(
  //     (n) => n.node.novosti.naslov != featuredNovost[0].node.novosti.naslov
  //   )
  //   .sort(
  //     (objA, objB) =>
  //       new Date(objB.node.novosti.datum) - new Date(objA.node.novosti.datum)
  //   );

  // otherNovosti.forEach((n) => {
  //   const datumFix = format(new Date(a.node.novosti.datum), "P");
  //   return {
  //     ...a,
  //     datum: datumFix,
  //   };
  // });

  // otherNovosti.forEach((item) => {
  //   item.node.novosti.datum = format(new Date(item.node.novosti.datum), "P");
  // });

  // const currentItems = otherNovosti.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(otherNovosti.length / itemsPerPage);
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % otherNovosti.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );

  //   setItemOffset(newOffset);
  // };
  // const paginationClick = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // };
  // useEffect(() => {
  //   allowScroll();
  // }, []);

  // na stranici /novosti   prikaži featured novost (zadnja novost označena u cms-u kao Featured ili istaknuta)
  // nakon toga prikaži ostale novosti ali bez ove koja je featured(napraviti treba)
  return (
    <Layout>
      {/* <Container>
        {featuredNovost && (
          <FeaturedNews>
            <Left>
              <Image
                src={
                  featuredNovost[0].node.novosti.istaknutaFotografija.sourceUrl
                }
                layout="fill"
                objectFit="cover"
              />
            </Left>
            <Right>
              <NewsCard
                datum={featuredNovost[0].node.novosti.datum}
                naslov={
                  locale === "hr"
                    ? featuredNovost[0].node.novosti.naslov
                    : featuredNovost[0].node.novosti.naslovEng
                }
                text={
                  locale === "hr"
                    ? featuredNovost[0].node.novosti.textNovosti
                    : featuredNovost[0].node.novosti.textNovostiEng
                }
                link={
                  locale === "hr"
                    ? slugify(
                        featuredNovost[0].node.novosti.naslov
                          .toLowerCase()
                          .split(" ")
                          .join("-") +
                          "-" +
                          featuredNovost[0].node.novosti.datum
                            .split("/")
                            .join("-"),
                        { locale: "hrv" }
                      )
                    : slugify(
                        featuredNovost[0].node.novosti.naslovEng
                          .toLowerCase()
                          .split(" ")
                          .join("-") +
                          "-" +
                          featuredNovost[0].node.novosti.datum
                            .split("/")
                            .join("-")
                      )
                }
                isFeatured
              />
            </Right>
          </FeaturedNews>
        )}

        <News>
          {currentItems.map((card) => (
            <NewsCard
              key={card.node.id}
              datum={card.node.novosti.datum}
              naslov={
                locale === "hr"
                  ? card.node.novosti.naslov
                  : card.node.novosti.naslovEng
              }
              text={
                locale === "hr"
                  ? card.node.novosti.textNovosti
                  : card.node.novosti.textNovostiEng
              }
              link={
                locale === "hr"
                  ? slugify(
                      card.node.novosti.naslov
                        .toLowerCase()
                        .split(" ")
                        .join("-") +
                        "-" +
                        card.node.novosti.datum.split("/").join("-"),
                      { locale: "hrv" }
                    )
                  : slugify(
                      card.node.novosti.naslovEng
                        .toLowerCase()
                        .split(" ")
                        .join("-") +
                        "-" +
                        card.node.novosti.datum.split("/").join("-")
                    )
              }
              isFeatured={false}
              photo={card.node.novosti.istaknutaFotografija.sourceUrl}
            />
          ))}
        </News>
        <Pagination>
          <ReactPaginate
            breakLabel="..."
            nextLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageClassName={"pageClassName"}
            // activeClassName={"activePage"}
            activeLinkClassName={"activePage"}
            pageLinkClassName={"pagelink"}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            previousLabel={""}
            // forcePage={forcePage}
            onClick={paginationClick}
          />
        </Pagination>
      </Container> */}
    </Layout>
  );
}

export default index;

// export async function getStaticProps({ preview = false }) {
//   const novosti = await getAllNovosti(preview);
//   return {
//     props: { novosti, preview },
//   };
// }

export async function getStaticProps({ locales }) {
  const recepti = await getAllRecepti();
  const paths = [];

  recepti.edges.map((recept, i) => {
    // return locales.map((locale) => {
    return paths.push({
      params: {
        slug:
          slugify(
            recept.node.perlaRecepti.naslovRecepta
              .toLowerCase()
              .split(" ")
              .join("-"),
            {
              locale: "hrv",
            }
          ) +
          "-" +
          new Date(recept.node.date).toISOString().split("T")[0],
      },
      locale: "hr",
    });
    // });
  });

  // novosti.edges.map((post, i) => {
  //   return paths.push({
  //     params: {
  //       slug:
  //         post.node.novosti.naslovEng.toLowerCase().split(" ").join("-") +
  //         "-" +
  //         post.node.novosti.datum.split("/").join("-"),
  //     },
  //     locale: "en",
  //   });
  // });

  // pathsAllHr.push({
  //   params: {
  //     slug: novostiNaslovHr.toLowerCase().split(" ").join("-"),
  //   },
  // });
  // pathsAllEng.push({
  //   params: {
  //     slug: novostiNaslovEng.toLowerCase().split(" ").join("-"),
  //   },
  // });

  // locales.forEach((locale, i) => {
  //   novosti.edges.forEach((post, i) => {
  //     paths.push({
  //       params: {
  //         slugHr: post.node.novosti.naslov.toLowerCase().split(" ").join("-"),
  //         slugEn: post.node.novosti.naslovEng
  //           .toLowerCase()
  //           .split(" ")
  //           .join("-"),
  //       },
  //       locale,
  //     });

  //     // paths.push({
  //     //   hrnovosti: post.node.novosti.naslov.toLowerCase().split(" ").join("-"),
  //     //   ennovosti: post.node.novosti.naslovEng.toLowerCase().split(" ").join("-"),
  //     // });
  //   });
  // });

  return {
    props: {
      paths: paths,

      fallback: false,
      recepti,
    },
  };
}
