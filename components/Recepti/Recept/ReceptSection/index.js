import React from "react";

import {
  WrapAll,
  WrapContent,
  Sastojci,
  Postupak,
  NaslovSastojci,
  NaslovRecepta,
  PripremaVrijeme,
  PostupakPripreme,
  RedniBroj,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";
import parse from "html-react-parser";

import useWindowSize from "../../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { AiOutlineYoutube } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { RedLine, WrapLogoPerla } from "../style.js";
function ReceptSection({ data }) {
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
  console.log(data);
  const yourDate = new Date(data.receptData.node.date)
    .toISOString()
    .split("T")[0];
  console.log(yourDate);
  return (
    <WrapAll>
      <RedLine>
        <WrapLogoPerla>
          <Image src="/perlaLogo.svg" layout="fill" />
        </WrapLogoPerla>
      </RedLine>
      <WrapContent>
        <Sastojci>
          <NaslovSastojci>SASTOJCI</NaslovSastojci>
          <ul>
            {data.receptData.node.perlaRecepti.sastojcizaglavnojelo.map(
              (sastojak) => (
                <li>
                  {sastojak.nazivNamirnice}, {sastojak.kolicina}{" "}
                  {sastojak.jedinicnaMjera}
                </li>
              )
            )}
          </ul>
          {data.receptData.node.perlaRecepti.dodatniPrilog
            .sastojciZaDodatniPrilog !== null && (
            <NaslovSastojci>
              {
                data.receptData.node.perlaRecepti.dodatniPrilog
                  .nazivDodatnogPriloga
              }
            </NaslovSastojci>
          )}
          <ul>
            {" "}
            {data.receptData.node.perlaRecepti.dodatniPrilog.sastojciZaDodatniPrilog.map(
              (sastojak) => (
                <li>
                  {sastojak.nazivNamirnice}, {sastojak.kolicina}{" "}
                  {sastojak.jedinicnaMjera}
                </li>
              )
            )}{" "}
          </ul>
        </Sastojci>
        <Postupak>
          <NaslovRecepta>
            {data.receptData.node.perlaRecepti.naslovRecepta}
          </NaslovRecepta>
          <PripremaVrijeme>
            Priprema: {data.receptData.node.perlaRecepti.trajanjeKuhanja} min
          </PripremaVrijeme>
          {data.receptData.node.perlaRecepti.postupakPoKoracima.map(
            (korak, index) => (
              <PostupakPripreme>
                <RedniBroj>
                  {index < 9 && 0}
                  {index + 1}
                </RedniBroj>
                {parse(korak.korak)}
              </PostupakPripreme>
            )
          )}
        </Postupak>
      </WrapContent>
    </WrapAll>
  );
}

export default ReceptSection;
