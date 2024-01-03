import React from "react";

import { WrapAll, Button, NaslovRecepta } from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";
import parse from "html-react-parser";

import useWindowSize from "../../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { AiOutlineYoutube } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { BlueLine, RedLine, WrapLogoPerla } from "../style.js";
import { WrapRecipies } from "../../FrontRecepti/style.js";
import ReceptKartica from "../../FrontRecepti/ReceptKartica/index.js";
import slugify from "slugify";
function OstaliRecepti({ data }) {
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

  const yourDate = new Date(data.receptData.node.date)
    .toISOString()
    .split("T")[0];
  const currentReceptId = data.receptData.node.id;
  const otherRecipes = data.recepti.edges.filter(
    (rec) => rec.node.id !== currentReceptId
  );
  return (
    <WrapAll>
      <BlueLine />
      <NaslovRecepta>Ostali recepti</NaslovRecepta>
      <WrapRecipies>
        {otherRecipes.slice(0, 3).map((recept) => (
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
      <Button>ISTRAŽI RECEPTE</Button>
    </WrapAll>
  );
}

export default OstaliRecepti;
