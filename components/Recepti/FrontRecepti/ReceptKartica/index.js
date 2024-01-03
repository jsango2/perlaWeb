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
  WrapRecipe,
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
import slugify from "slugify";

import useWindowSize from "../../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";

import { useInView } from "react-intersection-observer";

function ReceptKartica({ photo, naslov, trajanje, link }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();
  // const t = useTranslations("Index");
  const router = useRouter();
  const { locale } = router;
  // const t = locale === "en" ? en : hr;

  return (
    <WrapRecipe href={`/recepti/${link}`}>
      <Recipe>
        <PhotoWrap photo={photo}>
          <Overlay />
          <Time>
            <Timer />
            {trajanje} min
          </Time>
        </PhotoWrap>
        <TextWrap>{naslov}</TextWrap>
      </Recipe>
    </WrapRecipe>
  );
}

export default ReceptKartica;
