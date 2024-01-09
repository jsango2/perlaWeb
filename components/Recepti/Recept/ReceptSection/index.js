import React from "react";

import {
  WrapAll,
  WrapContent,
  Sastojci,
  Postupak,
  NaslovSastojci,
  NaslovRecepta,
  NaslovReceptaPrilog,
  PripremaVrijeme,
  PostupakPripreme,
  RedniBroj,
  BottomCoverPhoto,
  BottomOverlay,
  DobarTek,
  Divider,
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

  const yourDate = new Date(data.receptData.node.date)
    .toISOString()
    .split("T")[0];
  console.log(data);
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
            {locale === "hr"
              ? data.receptData.node.perlaRecepti.sastojcizaglavnojelo.map(
                  (sastojak) => (
                    <li>
                      {sastojak.nazivNamirnice}, {sastojak.kolicina}{" "}
                      {sastojak.jedinicnaMjera}
                    </li>
                  )
                )
              : data.receptData.node.perlaRecepti.sastojcizaglavnojeloEng.map(
                  (sastojak) => (
                    <li>
                      {sastojak.nazivNamirniceEng}, {sastojak.kolicinaEng}{" "}
                      {sastojak.jedinicnaMjeraEng}
                    </li>
                  )
                )}
          </ul>

          {locale === "hr"
            ? data.receptData.node.perlaRecepti.dodatniPrilog
                .sastojciZaDodatniPrilog !== null && (
                <>
                  <Divider></Divider>
                  <NaslovSastojci>
                    {
                      data.receptData.node.perlaRecepti.dodatniPrilog
                        .nazivDodatnogPriloga
                    }
                  </NaslovSastojci>
                </>
              )
            : data.receptData.node.perlaRecepti.dodatniPrilogEng
                .sastojciZaDodatniPrilogEng !== null && (
                <>
                  <Divider></Divider>
                  <NaslovSastojci>
                    {
                      data.receptData.node.perlaRecepti.dodatniPrilogEng
                        .nazivDodatnogPrilogaEng
                    }
                  </NaslovSastojci>
                </>
              )}
          <ul>
            {" "}
            {locale === "hr"
              ? data.receptData.node.perlaRecepti.dodatniPrilog
                  .sastojciZaDodatniPrilog !== null &&
                data.receptData.node.perlaRecepti.dodatniPrilog.sastojciZaDodatniPrilog.map(
                  (sastojak) => (
                    <li>
                      {sastojak.nazivNamirnice}, {sastojak.kolicina}{" "}
                      {sastojak.jedinicnaMjera}
                    </li>
                  )
                )
              : data.receptData.node.perlaRecepti.dodatniPrilogEng
                  .sastojciZaDodatniPrilogEng !== null &&
                data.receptData.node.perlaRecepti.dodatniPrilogEng.sastojciZaDodatniPrilogEng.map(
                  (sastojak) => (
                    <li>
                      {sastojak.nazivNamirniceEng}, {sastojak.kolicinaEng}{" "}
                      {sastojak.jedinicnaMjeraEng}
                    </li>
                  )
                )}{" "}
          </ul>
        </Sastojci>
        <Postupak>
          <NaslovRecepta>
            {locale === "hr"
              ? data.receptData.node.perlaRecepti.naslovRecepta
              : data.receptData.node.perlaRecepti.naslovReceptaEng}
          </NaslovRecepta>
          <PripremaVrijeme>
            {locale === "hr" ? "Priprema" : "Preparation"} :{" "}
            {data.receptData.node.perlaRecepti.trajanjeKuhanja} min
          </PripremaVrijeme>
          {locale === "hr"
            ? data.receptData.node.perlaRecepti.postupakPoKoracima.map(
                (korak, index) => (
                  <PostupakPripreme>
                    <RedniBroj>
                      {index < 9 && 0}
                      {index + 1}
                    </RedniBroj>
                    {parse(korak.korak)}
                  </PostupakPripreme>
                )
              )
            : data.receptData.node.perlaRecepti.postupakPoKoracimaEng.map(
                (korak, index) => (
                  <PostupakPripreme>
                    <RedniBroj>
                      {index < 9 && 0}
                      {index + 1}
                    </RedniBroj>
                    {parse(korak.korakEng)}
                  </PostupakPripreme>
                )
              )}
          {data.receptData.node.perlaRecepti.postupakPoKoracimaPrilog !==
            null && <Divider></Divider>}

          {locale === "hr"
            ? data.receptData.node.perlaRecepti.postupakPoKoracimaPrilog !==
                null && (
                <div>
                  <NaslovReceptaPrilog>
                    {
                      data.receptData.node.perlaRecepti.dodatniPrilog
                        .nazivDodatnogPriloga
                    }
                  </NaslovReceptaPrilog>
                  {data.receptData.node.perlaRecepti.postupakPoKoracimaPrilog.map(
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
                </div>
              )
            : data.receptData.node.perlaRecepti.postupakPoKoracimaPrilogEng !==
                null && (
                <div>
                  <NaslovReceptaPrilog>
                    {
                      data.receptData.node.perlaRecepti.dodatniPrilogEng
                        .nazivDodatnogPrilogaEng
                    }
                  </NaslovReceptaPrilog>
                  {data.receptData.node.perlaRecepti.postupakPoKoracimaPrilogEng.map(
                    (korak, index) => (
                      <PostupakPripreme>
                        <RedniBroj>
                          {index < 9 && 0}
                          {index + 1}
                        </RedniBroj>
                        {parse(korak.korakEng)}
                      </PostupakPripreme>
                    )
                  )}
                </div>
              )}
        </Postupak>
      </WrapContent>
      <BottomCoverPhoto
        photo={
          data.receptData.node.perlaRecepti.fotografijaReceptaDonja.sourceUrl
        }
      >
        <BottomOverlay />
        <DobarTek>{locale === "hr" ? "DOBAR TEK!" : "BOUN APETITE!"}</DobarTek>
      </BottomCoverPhoto>
    </WrapAll>
  );
}

export default ReceptSection;
