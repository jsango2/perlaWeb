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
import { catalogData } from "../../../../catalogData.js";
import Link from "next/link.js";
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

  const receptiSaKataloskimBrojemPerlaProizvoda = otherRecipes;

  receptiSaKataloskimBrojemPerlaProizvoda.forEach((recept) => {
    recept.catalogId = null;
    for (let j = 0; j < catalogData.length; j++) {
      if (
        recept.node.perlaRecepti.perlaSastojci[0].perlaProizvodUReceptu ===
        catalogData[j]["IME PROIZVODA - do 60 znakova"]
      ) {
        recept.catalogId = catalogData[j]["Kataloški broj: "];
      }
    }
  });
  return (
    <WrapAll>
      <BlueLine />
      <NaslovRecepta>
        {locale === "hr" ? "Ostali recepti" : "Other recepies"}
      </NaslovRecepta>
      <WrapRecipies>
        {receptiSaKataloskimBrojemPerlaProizvoda.slice(0, 3).map((recept) => (
          <ReceptKartica
            key={recept.node.id}
            catalogId={recept.catalogId}
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
                      strict: true,
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
                      locale: "eng",
                      strict: true,
                    }
                  ) +
                  "-" +
                  new Date(recept.node.date).toISOString().split("T")[0]
            }
          ></ReceptKartica>
        ))}
      </WrapRecipies>
      <Link href="/recepti">
        <Button>
          {locale === "hr" ? "ISTRAŽI RECEPTE" : "SEARCH RECEPIES"}
        </Button>
      </Link>
    </WrapAll>
  );
}

export default OstaliRecepti;
