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
import { catalogData } from "../../../catalogData.js";
import { BlueLine } from "../../NasiProizvodi/style.js";
import { Naziv } from "../hero/style.js";

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
  const receptiSaKataloskimBrojemPerlaProizvoda = receptiSaProizvodom;

  receptiSaKataloskimBrojemPerlaProizvoda.forEach((recept) => {
    recept.catalogId = null;
    for (let j = 0; j < catalogData.length; j++) {
      if (
        recept.node.perlaRecepti.perlaSastojci[0].perlaProizvodUReceptu ===
        catalogData[j]["IME PROIZVODA - skraceno"]
      ) {
        recept.catalogId = catalogData[j]["Kataloški broj: "];
      }
    }
  });
  return (
    <>
      {receptiSaKataloskimBrojemPerlaProizvoda.length !== 0 && (
        <>
          <BlueLine />
          <Naziv>
            {locale === "hr"
              ? "Recepti sa ovim proizvodom"
              : "Recipes with this product"}
          </Naziv>
          <Container>
            {receptiSaKataloskimBrojemPerlaProizvoda.map((recept) => (
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
                          strict: true,
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
                          strict: true,
                          locale: "eng",
                        }
                      ) +
                      "-" +
                      new Date(recept.node.date).toISOString().split("T")[0]
                }
              ></ReceptKartica>
            ))}
          </Container>
        </>
      )}
    </>
  );
}

export default OstaliRecepti;
