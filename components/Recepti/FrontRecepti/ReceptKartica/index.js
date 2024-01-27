import React from "react";

import {
  Recipe,
  PhotoWrap,
  TextWrap,
  WrapRecipe,
  Time,
  Overlay,
  FeaturedPerlaImage,
  Timer,
  BGplaceholder,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";
import slugify from "slugify";

import useWindowSize from "../../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";

import { useInView } from "react-intersection-observer";
import { catalogData } from "../../../../catalogData.js";

function ReceptKartica({
  photo,
  photoSrcSet,
  naslov,
  trajanje,
  link,
  catalogId,
}) {
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

  console.log("Photo srcSet:", photoSrcSet);

  return (
    <WrapRecipe href={`/recepti/${link}`}>
      <Recipe>
        <BGplaceholder />
        <Overlay />
        <FeaturedPerlaImage className="featuredPerlaImage">
          <Image
            src={`/productImages/${catalogId}.webp`}
            layout="fill"
            objectFit="contain"
          />
        </FeaturedPerlaImage>
        <Time>
          <Timer />
          {trajanje} min
        </Time>
        <PhotoWrap className="photoWrap">
          {/* <Image
            src={photo}
            // src={`${photo.slice(0, -4)}-768x432.png`}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL={`${photo}?auto=format,compress&q=1&blur=100&w=2`}
          /> */}
          <img srcSet={photoSrcSet} width="450" height="360" />
        </PhotoWrap>
        <TextWrap className="cardTextBg">{naslov}</TextWrap>
      </Recipe>
    </WrapRecipe>
  );
}

export default ReceptKartica;
