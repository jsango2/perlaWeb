import React from "react";

import {
  WrapAll,
  WrapContent,
  Sastojci,
  Postupak,
  NaslovSastojci,
  NaslovDodatniSastojci,
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
  YouTubeWrap,
  WrapIkona,
  VideoLink,
  WrapTimer,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import slugify from "slugify";
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
import Link from "next/link.js";
import { clearStorage } from "mapbox-gl";

function ReceptSection({ data }) {
  const [current, setCurrent] = useState(1);
  const [personNumber, setPersonNumber] = useState(1);
  // const [perlaProizvodFeaturedCatNumber, setPerlaProizvodFeaturedCatNumber] =
  //   useState(undefined);
  // const [sastojciPerla, setSastojciPerla] = useState([]);
  // const [sastojciPerlaEng, setSastojciPerlaEng] = useState([]);

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
      s["IME PROIZVODA - skraceno"] ===
        data.receptData.node.perlaRecepti.perlaSastojci[0].perlaProizvodUReceptu
  );

  const perlaProizvodiFeatured =
    data.receptData.node.perlaRecepti.perlaSastojci;
  const perlaProizvodiFeaturedEng =
    data.receptData.node.perlaRecepti.perlaSastojciEng;
  perlaProizvodiFeatured.forEach((sastojak) => {
    sastojak.punoImeProizvoda = null;
    sastojak.idProizvoda = null;
    for (let j = 0; j < catalogData.length; j++) {
      if (
        sastojak.perlaProizvodUReceptu ===
        catalogData[j][["IME PROIZVODA - skraceno"]]
      ) {
        sastojak.punoImeProizvoda =
          catalogData[j]["IME PROIZVODA - do 60 znakova"];
        sastojak.idProizvoda = catalogData[j]["Kataloški broj: "];
      }
    }
  });
  perlaProizvodiFeaturedEng.forEach((sastojak) => {
    sastojak.punoImeProizvodaEng = null;
    sastojak.idProizvoda = null;
    for (let j = 0; j < catalogData.length; j++) {
      if (
        sastojak.perlaProizvodUReceptu ===
        catalogData[j][["PRODUCT NAME - short"]]
      ) {
        sastojak.punoImeProizvoda =
          catalogData[j]["PRODUCT NAME - up to 60 characters"];
        sastojak.idProizvoda = catalogData[j]["Kataloški broj: "];
      }
    }
  });

  const perlaProizvodFeaturedCatNumber =
    perlaProizvodFeatured["Kataloški broj: "];
  const sastojciPerla = data.receptData.node.perlaRecepti.perlaSastojci.map(
    (s) => s
  );

  // receptiSaKataloskimBrojemPerlaProizvoda.forEach((recept) => {
  //   recept.catalogId = null;
  //   for (let j = 0; j < catalogData.length; j++) {
  //     if (
  //       recept.node.perlaRecepti.perlaSastojci[0].perlaProizvodUReceptu ===
  //       catalogData[j]["IME PROIZVODA - do 60 znakova"]
  //     ) {
  //       recept.catalogId = catalogData[j]["Kataloški broj: "];
  //     }
  //   }
  // });
  const sastojciPerlaEng =
    data.receptData.node.perlaRecepti.perlaSastojciEng.map((s) => s);
  // useEffect(() => {
  //   setPerlaProizvodFeaturedCatNumber(
  //     perlaProizvodFeatured["Kataloški broj: "]
  //   );
  //   setSastojciPerla(
  //     data.receptData.node.perlaRecepti.perlaSastojci.map((s) => s)
  //   );
  //   setSastojciPerlaEng(
  //     data.receptData.node.perlaRecepti.perlaSastojciEng.map((s) => s)
  //   );
  // }, []);

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
  console.log(data.receptData.node.perlaRecepti);
  return (
    <WrapAll>
      <RedLine>
        <WrapLogoPerla>
          <Image src="/perlaLogo.svg" layout="fill" />
        </WrapLogoPerla>
      </RedLine>
      <WrapContent>
        <WrapTopTitle>
          <NaslovRecepta>
            {locale === "hr"
              ? data.receptData.node.perlaRecepti.naslovRecepta
              : data.receptData.node.perlaRecepti.naslovReceptaEng}
          </NaslovRecepta>
          <PripremaVrijeme>
            {" "}
            {data.receptData.node.perlaRecepti.trajanjePripreme !== null ? (
              <>
                <WrapTimer>
                  <WrapIkona>
                    <Image src="/satIkona.svg" layout="fill" />
                  </WrapIkona>
                  {locale === "hr" ? "Priprema" : "Preparation"} :{" "}
                  {data.receptData.node.perlaRecepti.trajanjePripreme} min
                </WrapTimer>

                <span style={{ margin: "0 5px" }}>|</span>
              </>
            ) : null}
            <WrapTimer>
              <WrapIkona>
                <Image src="/satIkona.svg" layout="fill" />
              </WrapIkona>
              {locale === "hr" ? "Kuhanje" : "Cooking"} :{" "}
              {data.receptData.node.perlaRecepti.trajanjeKuhanja} min
            </WrapTimer>
            {data.receptData.node.perlaRecepti.youtubeLinkVidea !== null ? (
              <VideoLink>
                <span style={{ margin: "0 5px" }}>|</span>
                <WrapIkona>
                  <Image src="/videoIkona.svg" layout="fill" />
                </WrapIkona>
                <a href="#youtube" scroll={false}>
                  VIDEO
                </a>
              </VideoLink>
            ) : null}
          </PripremaVrijeme>
        </WrapTopTitle>
        <Sastojci>
          <WrapNasloviBroj>
            <NaslovSastojci>
              {" "}
              {locale === "hr" ? "BROJ OSOBA" : "PERSONS"}
            </NaslovSastojci>
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
            </Wrapbroj>
          </WrapNasloviBroj>
          <NaslovSastojci>
            {locale === "hr" ? "SASTOJCI:" : "INGREDIENTS:"}
          </NaslovSastojci>

          <ul>
            {locale === "hr"
              ? [
                  perlaProizvodiFeatured !== undefined &&
                    perlaProizvodiFeatured.map((sastojak) => (
                      <Link
                        key={sastojak.idProizvoda}
                        href={`/proizvodi/${
                          slugify(
                            sastojak.punoImeProizvoda
                              .toLowerCase()
                              .split(" ")
                              .join("-"),
                            {
                              locale: "hrv",
                              strict: true,
                            }
                          ) +
                          "-" +
                          sastojak.idProizvoda
                        }`}
                      >
                        <li
                          key={sastojak.perlaProizvodUReceptu}
                          className="perlaProizvod"
                        >
                          {sastojak.perlaProizvodUReceptu},{" "}
                          {(personNumber * sastojak.kolicina).toString()}
                          {sastojak.jedinicnaMjera}
                        </li>
                      </Link>
                    )),
                  data.receptData.node.perlaRecepti.sastojcizaglavnojelo.map(
                    (sastojak) => (
                      <li key={sastojak.nazivNamirnice}>
                        {sastojak.nazivNamirnice},{" "}
                        {+(personNumber * sastojak.kolicina).toString()}
                        {sastojak.jedinicnaMjera}
                      </li>
                    )
                  ),
                ]
              : [
                  perlaProizvodiFeaturedEng !== undefined &&
                    perlaProizvodiFeaturedEng.map((sastojak) => (
                      <Link
                        href={`/proizvodi/${
                          slugify(
                            sastojak.punoImeProizvoda
                              .toLowerCase()
                              .split(" ")
                              .join("-"),
                            {
                              locale: "eng",
                              strict: true,
                            }
                          ) +
                          "-" +
                          sastojak.idProizvoda
                        }`}
                      >
                        <li
                          key={sastojak.perlaProizvodUReceptu}
                          className="perlaProizvod"
                        >
                          {sastojak.perlaProizvodUReceptu},{" "}
                          {(personNumber * sastojak.kolicina).toString()}
                          {sastojak.jedinicnaMjera}
                        </li>
                      </Link>
                    )),
                  data.receptData.node.perlaRecepti.sastojcizaglavnojeloEng.map(
                    (sastojak) => (
                      <li key={sastojak.nazivNamirniceEng}>
                        {sastojak.nazivNamirniceEng},{" "}
                        {(personNumber * sastojak.kolicinaEng).toString()}
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
                  <NaslovDodatniSastojci>
                    {
                      data.receptData.node.perlaRecepti.dodatniPrilog
                        .nazivDodatnogPriloga
                    }
                    :
                  </NaslovDodatniSastojci>
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
                    <li key={sastojak.nazivNamirnice}>
                      {sastojak.nazivNamirnice},{" "}
                      {(personNumber * sastojak.kolicina).toString()}{" "}
                      {sastojak.jedinicnaMjera}
                    </li>
                  )
                )
              : data.receptData.node.perlaRecepti.dodatniPrilogEng
                  .sastojciZaDodatniPrilogEng !== null &&
                data.receptData.node.perlaRecepti.dodatniPrilogEng.sastojciZaDodatniPrilogEng.map(
                  (sastojak) => (
                    <li key={sastojak.nazivNamirniceEng}>
                      {sastojak.nazivNamirniceEng},{" "}
                      {(personNumber * sastojak.kolicinaEng).toString()}{" "}
                      {sastojak.jedinicnaMjeraEng}
                    </li>
                  )
                )}{" "}
          </ul>
          {perlaProizvodFeaturedCatNumber && (
            <Link
              href={
                locale === "hr"
                  ? `/proizvodi/${
                      slugify(
                        perlaProizvodFeatured["IME PROIZVODA - do 60 znakova"]
                          .toLowerCase()
                          .split(" ")
                          .join("-"),
                        {
                          locale: "hrv",
                          strict: true,
                        }
                      ) +
                      "-" +
                      perlaProizvodFeatured["Kataloški broj: "]
                    }`
                  : `/proizvodi/${
                      slugify(
                        perlaProizvodFeatured[
                          "PRODUCT NAME - up to 60 characters"
                        ]
                          .toLowerCase()
                          .split(" ")
                          .join("-"),
                        {
                          locale: "eng",
                          strict: true,
                        }
                      ) +
                      "-" +
                      perlaProizvodFeatured["Kataloški broj: "]
                    }`
              }
            >
              <WrapFeaturedImage>
                <Image
                  src={`/productImages/${perlaProizvodFeaturedCatNumber}.webp`}
                  layout="fill"
                  objectFit="contain"
                />
              </WrapFeaturedImage>
            </Link>
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
                  <PostupakPripreme key={index}>
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
                  <PostupakPripreme key={index}>
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
                      <PostupakPripreme key={index}>
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
                      <PostupakPripreme key={index}>
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
          {data.receptData.node.perlaRecepti.youtubeLinkVidea !== null && (
            <YouTubeWrap id="youtube">
              <iframe
                width="100%"
                height="100%"
                src={`${data.receptData.node.perlaRecepti.youtubeLinkVidea}`}
                title="Perla video recepta"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </YouTubeWrap>
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
