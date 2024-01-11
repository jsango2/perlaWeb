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
  WrapFeaturedImage,
  Wrapbroj,
  Broj,
  WrapTopTitle,
  WrapNasloviBroj,
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
import { catalogData } from "../../../../catalogData.js";
import { useState } from "react";
import { useEffect } from "react";

function ReceptSection({ data }) {
  const [current, setCurrent] = useState(1);
  const [personNumber, setPersonNumber] = useState(1);
  const [perlaProizvodFeaturedCatNumber, setPerlaProizvodFeaturedCatNumber] =
    useState(undefined);
  const [sastojciPerla, setSastojciPerla] = useState([]);
  const [sastojciPerlaEng, setSastojciPerlaEng] = useState([]);

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

  const perlaProizvodFeatured = catalogData.find(
    (s) =>
      data.receptData.node.perlaRecepti.perlaSastojci !== null &&
      s["IME PROIZVODA - do 60 znakova"] ===
        data.receptData.node.perlaRecepti.perlaSastojci[0].perlaProizvodUReceptu
  );

  console.log(perlaProizvodFeatured);
  console.log(data);
  useEffect(() => {
    if (perlaProizvodFeatured !== undefined) {
      setPerlaProizvodFeaturedCatNumber(
        perlaProizvodFeatured["Kataloški broj:"]
      );
      setSastojciPerla(
        data.receptData.node.perlaRecepti.perlaSastojci.map((s) => s)
      );
      setSastojciPerlaEng(
        data.receptData.node.perlaRecepti.perlaSastojciEng.map((s) => s)
      );
    }
  }, []);

  // const perlaProizvodFeaturedCatNumber =
  //   perlaProizvodFeatured["Kataloški broj:"];
  // const sastojciPerla = data.receptData.node.perlaRecepti.perlaSastojci.map(
  //   (s) => s
  // );
  // const sastojciPerlaEng =
  //   data.receptData.node.perlaRecepti.perlaSastojciEng.map((s) => s);
  const handleClick = (kat) => {
    current === kat ? setCurrent(null) : setCurrent(kat);
    setPersonNumber(kat);
  };
  return (
    <WrapAll>
      <RedLine>
        <WrapLogoPerla>
          <Image src="/perlaLogo.svg" layout="fill" />
        </WrapLogoPerla>
      </RedLine>
      <WrapTopTitle>
        <NaslovRecepta>
          {locale === "hr"
            ? data.receptData.node.perlaRecepti.naslovRecepta
            : data.receptData.node.perlaRecepti.naslovReceptaEng}
        </NaslovRecepta>
        <PripremaVrijeme>
          {locale === "hr" ? "Priprema" : "Preparation"} :{" "}
          {data.receptData.node.perlaRecepti.trajanjeKuhanja} min
        </PripremaVrijeme>
      </WrapTopTitle>
      <WrapContent>
        <Sastojci>
          <WrapNasloviBroj>
            <NaslovSastojci>BROJ OSOBA</NaslovSastojci>
            <Wrapbroj>
              <Broj
                onClick={() => handleClick(1)}
                id="1"
                className={current === 1 ? "blueLink" : ""}
              >
                1
              </Broj>
              <Broj
                onClick={() => handleClick(2)}
                id="2"
                className={current === 2 ? "blueLink" : ""}
              >
                2
              </Broj>
              <Broj
                onClick={() => handleClick(3)}
                id="3"
                className={current === 3 ? "blueLink" : ""}
              >
                3
              </Broj>
              <Broj
                onClick={() => handleClick(4)}
                id="4"
                className={current === 4 ? "blueLink" : ""}
              >
                4
              </Broj>
              <Broj
                onClick={() => handleClick(5)}
                id="5"
                className={current === 5 ? "blueLink" : ""}
              >
                5
              </Broj>
              <Broj
                onClick={() => handleClick(6)}
                id="6"
                className={current === 6 ? "blueLink" : ""}
              >
                6
              </Broj>
            </Wrapbroj>
          </WrapNasloviBroj>
          <NaslovSastojci>SASTOJCI</NaslovSastojci>

          <ul>
            {locale === "hr"
              ? [
                  perlaProizvodFeatured !== undefined &&
                    sastojciPerla.map((sastojak) => (
                      <li
                        key={sastojak.perlaProizvodUReceptu}
                        className="perlaProizvod"
                      >
                        {sastojak.perlaProizvodUReceptu},{" "}
                        {(personNumber * sastojak.kolicina)
                          .toFixed(2)
                          .replace(/[.,]00$/, "")}{" "}
                        {sastojak.jedinicnaMjera}
                      </li>
                    )),
                  data.receptData.node.perlaRecepti.sastojcizaglavnojelo.map(
                    (sastojak) => (
                      <li key={sastojak.nazivNamirnice}>
                        {sastojak.nazivNamirnice},{" "}
                        {(personNumber * sastojak.kolicina)
                          .toFixed(2)
                          .replace(/[.,]00$/, "")}{" "}
                        {sastojak.jedinicnaMjera}
                      </li>
                    )
                  ),
                ]
              : [
                  perlaProizvodFeatured !== undefined &&
                    sastojciPerlaEng.map((sastojak) => (
                      <li
                        key={sastojak.perlaProizvodUReceptu}
                        className="perlaProizvod"
                      >
                        {sastojak.perlaProizvodUReceptu},{" "}
                        {(personNumber * sastojak.kolicina)
                          .toFixed(2)
                          .replace(/[.,]00$/, "")}{" "}
                        {sastojak.jedinicnaMjera}
                      </li>
                    )),
                  data.receptData.node.perlaRecepti.sastojcizaglavnojeloEng.map(
                    (sastojak) => (
                      <li key={sastojak.nazivNamirniceEng}>
                        {sastojak.nazivNamirniceEng},{" "}
                        {(personNumber * sastojak.kolicinaEng)
                          .toFixed(2)
                          .replace(/[.,]00$/, "")}
                        {sastojak.jedinicnaMjeraEng}
                      </li>
                    )
                  ),
                ]}
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
                      {sastojak.nazivNamirnice},{" "}
                      {(personNumber * sastojak.kolicina)
                        .toFixed(2)
                        .replace(/[.,]00$/, "")}{" "}
                      {sastojak.jedinicnaMjera}
                    </li>
                  )
                )
              : data.receptData.node.perlaRecepti.dodatniPrilogEng
                  .sastojciZaDodatniPrilogEng !== null &&
                data.receptData.node.perlaRecepti.dodatniPrilogEng.sastojciZaDodatniPrilogEng.map(
                  (sastojak) => (
                    <li>
                      {sastojak.nazivNamirniceEng},{" "}
                      {(personNumber * sastojak.kolicinaEng)
                        .toFixed(2)
                        .replace(/[.,]00$/, "")}{" "}
                      {sastojak.jedinicnaMjeraEng}
                    </li>
                  )
                )}{" "}
          </ul>
          {perlaProizvodFeaturedCatNumber && (
            <WrapFeaturedImage>
              <Image
                src={`/productImages/${perlaProizvodFeaturedCatNumber}.webp`}
                layout="fill"
              />
            </WrapFeaturedImage>
          )}
        </Sastojci>
        <Postupak>
          {/* <NaslovRecepta>
            {locale === "hr"
              ? data.receptData.node.perlaRecepti.naslovRecepta
              : data.receptData.node.perlaRecepti.naslovReceptaEng}
          </NaslovRecepta>
          <PripremaVrijeme>
            {locale === "hr" ? "Priprema" : "Preparation"} :{" "}
            {data.receptData.node.perlaRecepti.trajanjeKuhanja} min
          </PripremaVrijeme> */}
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
      {data.receptData.node.perlaRecepti.fotografijaReceptaDonja.sourceUrl !==
        null && (
        <BottomCoverPhoto
          photo={
            data.receptData.node.perlaRecepti.fotografijaReceptaDonja.sourceUrl
          }
        >
          <BottomOverlay />
          <DobarTek>
            {locale === "hr" ? "DOBAR TEK!" : "BOUN APETITE!"}
          </DobarTek>
        </BottomCoverPhoto>
      )}
    </WrapAll>
  );
}

export default ReceptSection;
