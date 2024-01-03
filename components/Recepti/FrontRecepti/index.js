import React from "react";

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

function FrontRecepti({ recepti }) {
  const kategorije = [
    { naziv: "Brzi ručak" },
    { naziv: "Zdrava večera" },
    { naziv: "Za sportaše" },
    { naziv: "Rižoto" },
    { naziv: "Tjestenina" },
    { naziv: "Grill tava" },
  ];
  const recepti2 = [
    {
      naziv: "Odrezak tune na žaru s mahunama i krumpirom i nečim još",
      time: 45,
    },
    {
      naziv: "Tuna na žaru s mahunama i krumpirom i nečim još",
      time: 35,
    },
    {
      naziv: "Zubatac na žaru s mahunama i krumpirom i nečim još",
      time: 55,
    },
    {
      naziv: "Lignja tune na žaru s mahunama i krumpirom i nečim još",
      time: 25,
    },
    {
      naziv: "Sipa tune na žaru s mahunama i krumpirom i nečim još",
      time: 45,
    },
  ];
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
            {kategorije.map((cat) => (
              <Category>{cat.naziv}</Category>
            ))}
          </WrapCategories>
          <WrapRecipies>
            {recepti.edges.map((recept) => (
              <ReceptKartica
                key={recept.node.id}
                photo={recept.node.perlaRecepti.fotografijaRecepta.sourceUrl}
                trajanje={recept.node.perlaRecepti.trajanjeKuhanja}
                naslov={recept.node.perlaRecepti.naslovRecepta}
                link={
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
                  new Date(recept.node.date).toISOString().split("T")[0]
                }
              ></ReceptKartica>
            ))}
          </WrapRecipies>
          <Button>PRONAĐI RECEPT</Button>
          <BlueLine />
          <Title>UZ NAS KUHAJ KAO VRHUNSKI CHEF</Title>
          <Text>
            Vrhunski plodovi mora naša su strast i obveza prema potrošačima. To
            je ono što dobro radimo i u što vjerujemo. Izuzetno smo ponosni na
            proizvode koje razvijamo za profesionalni segment, stoga nam je
            užitak to podijeliti sa svima. Zato smo kreirali Perla liniju
            proizvoda, s kojom je priprema maštovitih jela jednostavna i
            zabavna.
          </Text>
          <WrapSocial>
            <Instagram>@BISERMORA</Instagram>
            <Facebook>PERLA - Biser Mora</Facebook>
          </WrapSocial>
          <Photo>
            <Image src="/fotoMixPerla.png" layout="fill" />
          </Photo>
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
