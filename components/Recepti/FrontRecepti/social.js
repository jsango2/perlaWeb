import React from "react";

import {
  BlueLine,
  Title,
  Button,
  Text,
  Photo,
  WrapSocial,
  Instagram,
  Facebook,
  WrapIcon,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useInView } from "react-intersection-observer";

import Link from "next/link.js";

function SocialComp({ samoRecepti }) {
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
    <>
      {/* {samoRecepti !== true && ( */}
      {router.pathname === "/" && (
        <>
          <Link href="/recepti">
            <Button>{locale === "hr" ? "POGLEDAJ JOŠ" : "FIND MORE"}</Button>
          </Link>
          <BlueLine ref={ref} className={` ${inView ? "inView" : "outView"}`} />
          <Title className={` ${inView ? "inView" : "outView"}`}>
            {locale === "hr"
              ? "UZ NAS KUHAJ KAO VRHUNSKI CHEF"
              : "COOK LIKE A TOP CHEF WITH US"}
          </Title>
          <Text className={` ${inView ? "inView" : "outView"}`}>
            {t.PerlaFront.Vrhunski}
          </Text>
          <Photo className={` ${inView ? "inView" : "outView"}`}>
            <WrapSocial inView={inView}>
              <a
                href="https://www.instagram.com/perla_bisermora/"
                target="_blank"
              >
                <Instagram>
                  <WrapIcon>
                    <Image src="/igicon.svg" layout="fill" />
                  </WrapIcon>
                  @BISERMORA
                </Instagram>
              </a>
              <a
                href="https://www.facebook.com/perla.bisermora"
                target="_blank"
              >
                <Facebook>
                  <WrapIcon>
                    <Image src="/fbicon.svg" layout="fill" />
                  </WrapIcon>
                  PERLA - Biser Mora
                </Facebook>
              </a>
            </WrapSocial>
          </Photo>
        </>
      )}
    </>
  );
}

export default SocialComp;
