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

function Recept(data) {
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
  const proizvodiOdPerle = data.perlaProizvodi;
  // console.log({ data });
  return (
    <WrapAll>
      <Hero
        photo={data.receptData.node.perlaRecepti.fotografijaRecepta.sourceUrl}
      />
      <ReceptSection data={data} proizvodi={proizvodiOdPerle} />
      {/* <OstaliRecepti data={recept} /> */}
    </WrapAll>
  );
}

export default Recept;
