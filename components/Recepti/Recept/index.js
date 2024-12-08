import React from "react";

import { WrapAll } from "./style.js";
import { useRouter } from "next/router";

import useWindowSize from "../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import Hero from "./Hero/index.js";
import ReceptSection from "./ReceptSection/index.js";
import OstaliRecepti from "./OstaliReceptiSection/index.js";
import PerlaProizvodi from "./PerlaProizvodi/index.js";

function Recept(recept, recepti) {
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
      <OstaliRecepti data={recept} />
      <PerlaProizvodi />
    </WrapAll>
  );
}

export default Recept;
