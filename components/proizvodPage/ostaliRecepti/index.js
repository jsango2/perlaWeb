import React from "react";

import { Container } from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

// import useWindowSize from "../../../helper/usewindowsize.js";
// // import { useTranslations } from "next-intl";
// import en from "../../../../locales/en.json";
// import hr from "../../../../locales/hr.json";
import { AiOutlineYoutube } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import ReceptKartica from "../../Recepti/FrontRecepti/ReceptKartica/index.js";
import slugify from "slugify";
function OstaliRecepti({ receptiSaProizvodom }) {
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.2,
  //   triggerOnce: true,
  // });
  // const size = useWindowSize();
  // const t = useTranslations("Index");
  const router = useRouter();
  const { locale } = router;
  // const t = locale === "en" ? en : hr;
  console.log(receptiSaProizvodom);

  return (
    <Container>
      {receptiSaProizvodom.map((recept) => (
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
    </Container>
  );
}

export default OstaliRecepti;
