import React, { useEffect, useState } from "react";

import {
  WrapAll,
  RedLine,
  WrapLogoPerla,
  RedLineBottom,
  BlueLine,
  WrapContent,
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

function FrontRecepti({ recepti, samoRecepti }) {
  console.log(samoRecepti);
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
  recepti.edges.map((post, i) => {
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
        setSortedRecipes(recepti.edges);
      } else {
        const recipesSortedByTag = recepti.edges.filter((x) =>
          x.node.perlaRecepti.tag.some((g) => g.name === tag)
        );
        setSortedRecipes(recipesSortedByTag);

        // console.log(recipesSortedByTag);
      }
    } else {
      if (tag === "All") {
        setSortedRecipes(recepti.edges);
      } else {
        const recipesSortedByTag = recepti.edges.filter((x) =>
          x.node.perlaRecepti.tagEng.some((g) => g.name === tag)
        );
        setSortedRecipes(recipesSortedByTag);

        // console.log(recipesSortedByTag);
      }
    }
  };
  console.log(sortedRecipes);
  return (
    <div>
      <WrapAll ref={ref}>
        <RedLine>
          <WrapLogoPerla>
            <Image src="/perlaLogo.svg" layout="fill" />
          </WrapLogoPerla>
        </RedLine>

        <WrapContent>
          {" "}
          <BlueLine />
          <Title>
            NAŠI RECEPTI SU{" "}
            <span style={{ color: "#4299C8" }}>JEDNOSTAVNI I ZABAVNI</span>,
            PROVJERITE ZAŠTO
          </Title>
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
          <WrapRecipies>
            {sortedRecipes.map((recept) => (
              <ReceptKartica
                key={recept.node.id}
                photo={recept.node.perlaRecepti.fotografijaRecepta.sourceUrl}
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
                <Button>PRONAĐI RECEPT</Button>
              </Link>
              <BlueLine />
              <Title>UZ NAS KUHAJ KAO VRHUNSKI CHEF</Title>
              <Text>
                Vrhunski plodovi mora naša su strast i obveza prema potrošačima.
                To je ono što dobro radimo i u što vjerujemo. Izuzetno smo
                ponosni na proizvode koje razvijamo za profesionalni segment,
                stoga nam je užitak to podijeliti sa svima. Zato smo kreirali
                Perla liniju proizvoda, s kojom je priprema maštovitih jela
                jednostavna i zabavna.
              </Text>
              <WrapSocial>
                <Instagram>@BISERMORA</Instagram>
                <Facebook>PERLA - Biser Mora</Facebook>
              </WrapSocial>
              <Photo>
                <Image src="/fotoMixPerla.png" layout="fill" />
              </Photo>
            </>
          )}
        </WrapContent>
        <RedLineBottom>
          <WrapLogoPerla>
            <Image src="/perlaLogo.svg" layout="fill" />
          </WrapLogoPerla>
        </RedLineBottom>
      </WrapAll>
    </div>
  );
}

export default FrontRecepti;
