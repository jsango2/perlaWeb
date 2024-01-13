import React, { useEffect, useState } from "react";

import {
  WrapAll,
  RedLine,
  WrapLogoPerla,
  RedLineBottom,
  BlueLine,
  WrapContent2,
  Title,
  WrapCategories,
  Category,
  WrapRecipies,
  Recipe,
  PhotoWrap,
  TextWrap,
  Time,
  Overlay,
  Timer,
  Button,
  Text,
  Photo,
  WrapSocial,
  Instagram,
  Facebook,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import ReceptKartica from "./ReceptKartica/index.js";
import slugify from "slugify";
import Link from "next/link.js";
import { catalogData } from "../../../catalogData.js";

function FrontRecepti({ recepti, samoRecepti }) {
  console.log(recepti);
  console.log(catalogData);
  const [sortedRecipes, setSortedRecipes] = useState(recepti.edges);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();
  // const t = useTranslations("Index");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  // Nađi jedinstvene tagove
  const tags = [];
  // recepti.edges.map((post, i) => {
  //   post.node.perlaRecepti.tag.map((tag) => tags.push(tag.name));
  // });

  const receptiSaKataloskimBrojemPerlaProizvoda = recepti.edges;

  receptiSaKataloskimBrojemPerlaProizvoda.forEach((recept) => {
    recept.catalogId = null;
    for (let j = 0; j < catalogData.length; j++) {
      if (
        recept.node.perlaRecepti.perlaSastojci[0].perlaProizvodUReceptu ===
        catalogData[j]["IME PROIZVODA - do 60 znakova"]
      ) {
        recept.catalogId = catalogData[j]["Kataloški broj: "];
      }
    }
  });

  receptiSaKataloskimBrojemPerlaProizvoda.map((post, i) => {
    if (locale === "hr") {
      if (post.node.perlaRecepti.tag !== null) {
        post.node.perlaRecepti.tag.map((tag) => tags.push(tag.name));
      }
    } else {
      if (post.node.perlaRecepti.tagEng !== null) {
        post.node.perlaRecepti.tagEng.map((tag) => tags.push(tag.name));
      }
    }
  });
  const uniqueTags = [...new Set(tags)];

  const handleTagClick = (tag) => {
    if (locale === "hr") {
      if (tag === "Svi") {
        setSortedRecipes(receptiSaKataloskimBrojemPerlaProizvoda);
      } else {
        const recipesSortedByTag =
          receptiSaKataloskimBrojemPerlaProizvoda.filter((x) =>
            x.node.perlaRecepti.tag.some((g) => g.name === tag)
          );
        setSortedRecipes(recipesSortedByTag);

        // console.log(recipesSortedByTag);
      }
    } else {
      if (tag === "All") {
        setSortedRecipes(receptiSaKataloskimBrojemPerlaProizvoda);
      } else {
        const recipesSortedByTag =
          receptiSaKataloskimBrojemPerlaProizvoda.filter((x) =>
            x.node.perlaRecepti.tagEng.some((g) => g.name === tag)
          );
        setSortedRecipes(recipesSortedByTag);

        // console.log(recipesSortedByTag);
      }
    }
  };
  // PRIMJER::::
  // const filteredDataByCategory = catalogData.filter(
  //   (f) =>
  //     (locale === "hr"
  //       ? f["Kategorija kojoj proizvod pripada:"]
  //       : f["Kategorija kojoj proizvod pripada ENG:"]) === kategorija
  // );

  // newArr1.forEach((item) => {
  //   item.hasUrl = false;
  //   for (let j = 0; j < photoIdList.length; j++) {
  //     if (item["Kataloški broj:"] == +photoIdList[j]) {
  //       item.hasUrl = true;
  //     }
  //   }
  // });
  // ------

  // const perlaProizvodFeatured = catalogData.find(
  //   (s) =>
  //     data.receptData.node.perlaRecepti.perlaSastojci !== null &&
  //     s["IME PROIZVODA - do 60 znakova"] ===
  //       data.receptData.node.perlaRecepti.perlaSastojci[0].perlaProizvodUReceptu
  // );
  console.log(samoRecepti);
  return (
    <div>
      <WrapAll ref={ref}>
        <RedLine>
          <WrapLogoPerla>
            <Image src="/perlaLogo.svg" layout="fill" />
          </WrapLogoPerla>
        </RedLine>

        <WrapContent2>
          {" "}
          <BlueLine />
          {locale === "hr" ? (
            <Title>
              NAŠI RECEPTI SU
              <span style={{ color: "#4299C8" }}> JEDNOSTAVNI I ZABAVNI </span>
              PROVJERITE ZAŠTO
            </Title>
          ) : (
            <Title>
              OUR RECIPES ARE{" "}
              <span style={{ color: "#4299C8" }}>SIMPLE AND FUN</span>, CHECK
              WHY
            </Title>
          )}
          <WrapCategories>
            {locale === "hr" ? (
              <Category onClick={() => handleTagClick("Svi")}>Svi</Category>
            ) : (
              <Category onClick={() => handleTagClick("All")}>All</Category>
            )}

            {uniqueTags.map((tag) => (
              <Category key={tag} onClick={() => handleTagClick(tag)}>
                {tag}
              </Category>
            ))}
          </WrapCategories>
          <WrapRecipies samoRecepti={samoRecepti}>
            {samoRecepti === true
              ? sortedRecipes.map((recept) => (
                  <ReceptKartica
                    key={recept.node.id}
                    catalogId={recept.catalogId}
                    photo={
                      recept.node.perlaRecepti.fotografijaRecepta.sourceUrl
                    }
                    trajanje={recept.node.perlaRecepti.trajanjeKuhanja}
                    naslov={
                      locale === "hr"
                        ? recept.node.perlaRecepti.naslovRecepta
                        : recept.node.perlaRecepti.naslovReceptaEng
                    }
                    link={
                      locale === "hr"
                        ? slugify(
                            recept.node.perlaRecepti.naslovRecepta
                              .toLowerCase()
                              .split(" ")
                              .join("-"),
                            {
                              locale: "hrv",
                            }
                          ) +
                          "-" +
                          new Date(recept.node.date).toISOString().split("T")[0]
                        : slugify(
                            recept.node.perlaRecepti.naslovReceptaEng
                              .toLowerCase()
                              .split(" ")
                              .join("-"),
                            {
                              locale: "hrv",
                            }
                          ) +
                          "-" +
                          new Date(recept.node.date).toISOString().split("T")[0]
                    }
                  ></ReceptKartica>
                ))
              : (size.width < 850
                  ? sortedRecipes.slice(0, 4)
                  : sortedRecipes.slice(0, 6)
                ).map((recept) => (
                  <ReceptKartica
                    key={recept.node.id}
                    catalogId={recept.catalogId}
                    photo={
                      recept.node.perlaRecepti.fotografijaRecepta.sourceUrl
                    }
                    trajanje={recept.node.perlaRecepti.trajanjeKuhanja}
                    naslov={
                      locale === "hr"
                        ? recept.node.perlaRecepti.naslovRecepta
                        : recept.node.perlaRecepti.naslovReceptaEng
                    }
                    link={
                      locale === "hr"
                        ? slugify(
                            recept.node.perlaRecepti.naslovRecepta
                              .toLowerCase()
                              .split(" ")
                              .join("-"),
                            {
                              locale: "hrv",
                            }
                          ) +
                          "-" +
                          new Date(recept.node.date).toISOString().split("T")[0]
                        : slugify(
                            recept.node.perlaRecepti.naslovReceptaEng
                              .toLowerCase()
                              .split(" ")
                              .join("-"),
                            {
                              locale: "hrv",
                            }
                          ) +
                          "-" +
                          new Date(recept.node.date).toISOString().split("T")[0]
                    }
                  ></ReceptKartica>
                ))}
          </WrapRecipies>
          {samoRecepti !== true && (
            <>
              <Link href="/recepti">
                <Button>
                  {locale === "hr" ? "PRONAĐI RECEPT" : "FIND RECIPE"}
                </Button>
              </Link>
              <BlueLine />
              <Title>
                {locale === "hr"
                  ? "UZ NAS KUHAJ KAO VRHUNSKI CHEF"
                  : "COOK LIKE A TOP CHEF WITH US"}
              </Title>
              <Text>{t.PerlaFront.Vrhunski}</Text>
              <Photo>
                <WrapSocial>
                  <Instagram>@BISERMORA</Instagram>
                  <Facebook>PERLA - Biser Mora</Facebook>
                </WrapSocial>
              </Photo>
            </>
          )}
        </WrapContent2>
        {/* <RedLineBottom>
          <WrapLogoPerla>
            <Image src="/perlaLogo.svg" layout="fill" />
          </WrapLogoPerla>
        </RedLineBottom> */}
      </WrapAll>
    </div>
  );
}

export default FrontRecepti;
