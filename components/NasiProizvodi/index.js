import React, { useEffect, useState } from "react";

import {
  WrapAll,
  Title,
  BlueLine,
  WrapContent,
  Proizvodi,
  Proizvod,
  WrapProizvod,
  Overlay,
  WrapProizvodImage,
  ProizvodName,
  WrapLogoPerla,
  Button,
  RedLine,
  WrapCert,
  WrapCertMSC,
  WrapCertZZ,
  WrapCerts,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import { catalogData } from "../../catalogData.js";
import slugify from "slugify";
import Link from "next/link.js";
import KaramarkoComp from "./karamarko.js";

function NasiProizvodi({ proizvodi }) {
  const [perlaData, setPerlaData] = useState([]);
  const [sliced, setSliced] = useState(false);

  const [slice, setSlice] = useState([]);
  useEffect(() => {
    setPerlaData(
      // catalogData.filter(
      //   (data) => data["Kategorija kojoj proizvod pripada:"] == "PERLA"
      // )
      proizvodi
    );
  }, []);
  // useEffect(() => {
  //   setPerlaData(
  //     proizvodi.edges.filter(
  //       (data) =>
  //         data.node.proizvodiInformacije.kategorijaKojojProizvodPripada ==
  //         "PERLA"
  //     )
  //   );
  // }, []);

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
  // const handleClick = () => {};
  return (
    <div>
      <WrapAll ref={ref}>
        <RedLine id="ProizvodiSectionMobile">
          <WrapLogoPerla>
            <Image src="/perlaLogo.svg" layout="fill" />
          </WrapLogoPerla>
        </RedLine>
        <WrapContent>
          <BlueLine />
          <Title id="ProizvodiSection">
            {locale === "hr" ? "NAŠI PROIZVODI" : "OUR PRODUCTS"}
          </Title>
          <Proizvodi>
            {(sliced ? perlaData : perlaData.slice(0, 8)).map((data) => (
              <Link
                href={
                  locale === "hr"
                    ? `/proizvodi/${
                        slugify(
                          data.node.proizvodiInformacije.imeProizvodaDo60Znakova
                            .toLowerCase()
                            .split(" ")
                            .join("-"),
                          {
                            strict: true,
                            locale: "hrv",
                          }
                        ) +
                        "-" +
                        data.node.proizvodiInformacije.kataloskiBroj
                      }`
                    : `/proizvodi/${
                        slugify(
                          data.node.proizvodiInformacije.imeProizvodaDo60ZnakovaEng
                            .toLowerCase()
                            .split(" ")
                            .join("-"),
                          {
                            strict: true,
                            locale: "eng",
                          }
                        ) +
                        "-" +
                        data.node.proizvodiInformacije.kataloskiBroj
                      }`
                }
                key={data.node.proizvodiInformacije.kataloskiBroj}
              >
                <WrapProizvod>
                  <Proizvod>
                    <WrapCerts>
                      {data.node.proizvodiInformacije.ifsFood === true && (
                        <WrapCert>
                          <Image
                            src="/IFSfood.svg"
                            layout="fill"
                            objectFit="contain"
                          />
                        </WrapCert>
                      )}
                      {data.node.proizvodiInformacije.certifikatMsc ===
                        true && (
                        <div style={{ marginLeft: "5px" }}>
                          <WrapCertMSC>
                            <Image
                              src="/MSC.svg"
                              layout="fill"
                              objectFit="contain"
                            />
                          </WrapCertMSC>
                        </div>
                      )}
                      {data.node.proizvodiInformacije
                        .certifikatZivjetiZdravo === true && (
                        <div style={{ marginLeft: "5px" }}>
                          <WrapCertZZ>
                            <Image
                              src="/zivjetizdravo.svg"
                              layout="fill"
                              objectFit="contain"
                            />
                          </WrapCertZZ>
                        </div>
                      )}
                    </WrapCerts>
                    <Overlay className="proizvodBG" />
                    <WrapProizvodImage className="proizvodImg">
                      <Image
                        src={
                          data.node.proizvodiInformacije.slikaProizvoda != null
                            ? data.node.proizvodiInformacije.slikaProizvoda
                                .sourceUrl
                            : "/perlaLogoWithRed.svg"
                        }
                        layout="fill"
                        alt="p1"
                        objectFit="contain"
                        // placeholder="blur"
                        // blurDataURL={
                        //   data.node.proizvodiInformacije.slikaProizvoda !== null
                        //     ? `${data.node.proizvodiInformacije.slikaProizvoda.sourceUrl}?auto=format,compress&q=1&blur=100&w=2`
                        //     : null
                        // }
                      />
                    </WrapProizvodImage>
                  </Proizvod>
                  <ProizvodName>
                    {locale === "hr"
                      ? data.node.proizvodiInformacije.imeProizvodaDo60Znakova
                      : data.node.proizvodiInformacije
                          .imeProizvodaDo60ZnakovaEng}
                  </ProizvodName>
                </WrapProizvod>
              </Link>
            ))}
          </Proizvodi>
          {/* <Proizvodi>
            {(sliced ? perlaData : perlaData.slice(0, 8)).map((data) => (
              <Link
                href={
                  locale === "hr"
                    ? `/proizvodi/${
                        slugify(
                          data["IME PROIZVODA - do 60 znakova"]
                            .toLowerCase()
                            .split(" ")
                            .join("-"),
                          {
                            strict: true,
                            locale: "hrv",
                          }
                        ) +
                        "-" +
                        data["Kataloški broj: "]
                      }`
                    : `/proizvodi/${
                        slugify(
                          data["PRODUCT NAME - up to 60 characters"]
                            .toLowerCase()
                            .split(" ")
                            .join("-"),
                          {
                            strict: true,
                            locale: "eng",
                          }
                        ) +
                        "-" +
                        data["Kataloški broj: "]
                      }`
                }
                key={data["Kataloški broj: "]}
              >
                <WrapProizvod>
                  <Proizvod>
                    <WrapCerts>
                      {data["IFS Food"] === "DA" && (
                        <WrapCert>
                          <Image
                            src="/IFSfood.svg"
                            layout="fill"
                            objectFit="contain"
                          />
                        </WrapCert>
                      )}
                      {data["Certifikat 'MSC' (DA/NE)"] === "DA" && (
                        <div style={{ marginLeft: "5px" }}>
                          <WrapCertMSC>
                            <Image
                              src="/MSC.svg"
                              layout="fill"
                              objectFit="contain"
                            />
                          </WrapCertMSC>
                        </div>
                      )}
                      {data["Certifikat 'Živjeti Zdravo' (DA/NE)"] === "DA" && (
                        <div style={{ marginLeft: "5px" }}>
                          <WrapCertZZ>
                            <Image
                              src="/zivjetizdravo.svg"
                              layout="fill"
                              objectFit="contain"
                            />
                          </WrapCertZZ>
                        </div>
                      )}
                    </WrapCerts>
                    <Overlay className="proizvodBG" />
                    <WrapProizvodImage className="proizvodImg">
                      <Image
                        src={`/productImages/${data["Kataloški broj: "]}.webp`}
                        layout="fill"
                        alt="p1"
                        objectFit="contain"
                        placeholder="blur"
                        blurDataURL={`/productImages/${data["Kataloški broj: "]}.webp?auto=format,compress&q=1&blur=100&w=2`}
                      />
                    </WrapProizvodImage>
                  </Proizvod>
                  <ProizvodName>
                    {locale === "hr"
                      ? data["IME PROIZVODA - do 60 znakova"]
                      : data["PRODUCT NAME - up to 60 characters"]}
                  </ProizvodName>
                </WrapProizvod>
              </Link>
            ))}
          </Proizvodi> */}
          <Button onClick={() => setSliced(!sliced)}>
            {!sliced
              ? locale === "hr"
                ? "UČITAJ SVE PERLA PROIZVODE"
                : "LOAD MORE PERLA PRODUCTS"
              : locale === "hr"
              ? "UČITAJ MANJE PERLA PROIZVODA"
              : "LOAD LESS PERLA PRODUCTS"}
          </Button>

          <KaramarkoComp />
        </WrapContent>
      </WrapAll>
    </div>
  );
}

export default NasiProizvodi;
