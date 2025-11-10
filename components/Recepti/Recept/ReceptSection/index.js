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

import parse from "react-html-parser";
import slugify from "slugify";
import useWindowSize from "../../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import { RedLine, WrapLogoPerla } from "../style.js";
// import { catalogData } from "../../../../catalogData.js";
import { useState } from "react";
import Link from "next/link.js";

function ReceptSection({ data, proizvodi }) {
  // console.log({ data });
  const perlaProizvodi = proizvodi;
  // data.proizvodiOdPerle.filter(
  //   (data) =>
  //     data.node.proizvodiInformacije.kategorijaKojojProizvodPripada === "PERLA"
  // );

  const [current, setCurrent] = useState(1);
  const [personNumber, setPersonNumber] = useState(1);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const perlaProizvodiFeatured =
    data.receptData.node.perlaRecepti.perlaSastojci;
  const perlaProizvodiFeaturedEng =
    data.receptData.node.perlaRecepti.perlaSastojciEng;

  // --- Optimization Step: Create a map for efficient lookups ---
  // Create a map for Croatian names
  const perlaProizvodiHrMap = new Map();
  perlaProizvodi.forEach((product) => {
    const node = product.node;
    if (node?.proizvodiInformacije?.imeProizvodaDo60Znakova) {
      perlaProizvodiHrMap.set(
        node.proizvodiInformacije.imeProizvodaDo60Znakova,
        node
      );
    }
  });

  // Create a map for English names
  const perlaProizvodiEngMap = new Map();
  perlaProizvodi.forEach((product) => {
    const node = product.node;
    if (node?.proizvodiInformacije?.imeProizvodaDo60ZnakovaEng) {
      perlaProizvodiEngMap.set(
        node.proizvodiInformacije.imeProizvodaDo60ZnakovaEng,
        node
      );
    }
  });
  // --- End Optimization Step ---

  // Apply logic for Croatian featured products
  perlaProizvodiFeatured.forEach((sastojak) => {
    sastojak.punoImeProizvoda = null;
    sastojak.idProizvoda = null;

    const matchedNode = perlaProizvodiHrMap.get(sastojak.perlaProizvodUReceptu);

    if (matchedNode) {
      sastojak.punoImeProizvoda =
        matchedNode.proizvodiInformacije.imeProizvodaDo60Znakova;
      sastojak.idProizvoda = matchedNode.proizvodiInformacije.kataloskiBroj;
    }
  });

  // Apply logic for English featured products
  perlaProizvodiFeaturedEng.forEach((sastojak) => {
    sastojak.punoImeProizvodaEng = null;
    sastojak.idProizvoda = null;

    const matchedNode = perlaProizvodiEngMap.get(
      sastojak.perlaProizvodUReceptu
    );

    if (matchedNode) {
      sastojak.punoImeProizvodaEng =
        matchedNode.proizvodiInformacije.imeProizvodaDo60ZnakovaEng;
      sastojak.idProizvoda = matchedNode.proizvodiInformacije.kataloskiBroj;
    }
  });

  // receptiSaKataloskimBrojemPerlaProizvoda.forEach((recept) => {
  //   recept.catalogId = null;
  //   for (let j = 0; j < perlaProizvodi.length; j++) {
  //     if (
  //       recept.node.perlaRecepti.perlaSastojci[0].perlaProizvodUReceptu ===
  //       perlaProizvodi[j].node.proizvodiInformacije.imeProizvodaDo60Znakova
  //     ) {
  //       recept.catalogId =
  //         perlaProizvodi[j].node.proizvodiInformacije.kataloskiBroj;
  //     }
  //   }
  // });
  // const sastojciPerlaEng =
  //   data.receptData.node.perlaRecepti.perlaSastojciEng.map((s) => s);
  // // useEffect(() => {
  // //   setPerlaProizvodFeaturedCatNumber(
  // //     perlaProizvodFeatured["Kataloški broj: "]
  // //   );
  // //   setSastojciPerla(
  // //     data.receptData.node.perlaRecepti.perlaSastojci.map((s) => s)
  // //   );
  // //   setSastojciPerlaEng(
  // //     data.receptData.node.perlaRecepti.perlaSastojciEng.map((s) => s)
  // //   );
  // // }, []);

  // // const perlaProizvodFeaturedCatNumber =
  // //   perlaProizvodFeatured["Kataloški broj:"];
  // // const sastojciPerla = data.receptData.node.perlaRecepti.perlaSastojci.map(
  // //   (s) => s
  // // );
  // // const sastojciPerlaEng =
  // //   data.receptData.node.perlaRecepti.perlaSastojciEng.map((s) => s);
  // const handleClick = (kat) => {
  //   current === kat ? setCurrent(null) : setCurrent(kat);
  //   setPersonNumber(kat);
  // };
  // // console.log(data.receptData.node.perlaRecepti);
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
                            sastojak.perlaProizvodUReceptu
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
                        {+(personNumber * sastojak.kolicina).toFixed(2)}
                        {sastojak.jedinicnaMjera}
                      </li>
                    )
                  ),
                ]
              : [
                  perlaProizvodiFeaturedEng !== undefined &&
                    perlaProizvodiFeaturedEng.map((sastojak) => (
                      <Link
                        key={sastojak.punoImeProizvoda}
                        href={`/proizvodi/${
                          slugify(
                            sastojak.perlaProizvodUReceptu
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
                          {+(personNumber * sastojak.kolicina).toFixed(2)}
                          {sastojak.jedinicnaMjera}
                        </li>
                      </Link>
                    )),
                  data.receptData.node.perlaRecepti.sastojcizaglavnojeloEng.map(
                    (sastojak) => (
                      <li key={sastojak.nazivNamirniceEng}>
                        {sastojak.nazivNamirniceEng},{" "}
                        {+(personNumber * sastojak.kolicinaEng).toFixed(2)}
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
                      {+(personNumber * sastojak.kolicina).toFixed(2)}{" "}
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
                      {+(personNumber * sastojak.kolicinaEng).toFixed(2)}{" "}
                      {sastojak.jedinicnaMjeraEng}
                    </li>
                  )
                )}{" "}
          </ul>
          {/* {perlaProizvodFeaturedCatNumber && (
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
          )} */}
        </Sastojci>
        <Postupak>
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

      <BottomCoverPhoto
        photo={
          data.receptData.node.perlaRecepti.fotografijaReceptaDonja !== null
            ? data.receptData.node.perlaRecepti.fotografijaReceptaDonja
                .sourceUrl
            : data.receptData.node.perlaRecepti.fotografijaRecepta.sourceUrl
        }
      >
        <BottomOverlay />
        <DobarTek>{locale === "hr" ? "DOBAR TEK!" : "BON APPETIT!"}</DobarTek>
      </BottomCoverPhoto>
    </WrapAll>
  );
}

export default ReceptSection;
