import React from "react";

import { WrapAll } from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import slugify from "slugify";
import Hero from "./Hero/index.js";
import ReceptSection from "./ReceptSection/index.js";

function Recept(recept) {
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
    <WrapAll>
      <Hero
        photo={recept.receptData.node.perlaRecepti.fotografijaRecepta.sourceUrl}
      />
      <ReceptSection data={recept} />
    </WrapAll>
  );
}

export default Recept;
