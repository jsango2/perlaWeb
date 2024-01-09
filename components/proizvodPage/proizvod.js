import React from "react";

import { WrapAll, Divider } from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

// import useWindowSize from "../../../helper/usewindowsize.js";
// // import { useTranslations } from "next-intl";
// import en from "../../../../locales/en.json";
// import hr from "../../../../locales/hr.json";
import { AiOutlineYoutube } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import Hero from "./hero/index.js";
import { BlueLine } from "../NasiProizvodi/style.js";
import { Naziv } from "./hero/style.js";
import OstaliRecepti from "./ostaliRecepti/index.js";
import { Button } from "../Recepti/FrontRecepti/style.js";
import PerlaProizvodi from "../Recepti/Recept/PerlaProizvodi/index.js";

function Proizvod({ pageData, receptiSaProizvodom }) {
  //   const { ref, inView, entry } = useInView({
  //     /* Optional options */
  //     threshold: 0.2,
  //     triggerOnce: true,
  //   });
  //   const size = useWindowSize();
  //   // const t = useTranslations("Index");
  //   const router = useRouter();
  //   const { locale } = router;
  //   const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <Hero pageData={pageData} />
      <Divider />
      <BlueLine />
      <Naziv>Recepti sa ovim proizvodom</Naziv>
      <OstaliRecepti receptiSaProizvodom={receptiSaProizvodom} />
      <Button>ISTRAŽI RECEPTE</Button>
      <PerlaProizvodi />
    </WrapAll>
  );
}

export default Proizvod;
