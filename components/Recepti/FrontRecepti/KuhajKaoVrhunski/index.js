import React, { useEffect, useState } from "react";

import {
  WrapAll,
  RedLine,
  WrapLogoPerla,
  RedLineBottom,
  BlueLine,
  WrapContent,
  Title,
  Button,
  Text,
  Photo,
  WrapSocial,
  Instagram,
  Facebook,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import slugify from "slugify";

function KaoVrhunski() {
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

  return (
    <div>
      <WrapAll>
        <WrapContent>
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

export default KaoVrhunski;
