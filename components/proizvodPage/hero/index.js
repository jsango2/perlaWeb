import React from "react";

import {
  HeroWrap,
  Container,
  Overlay,
  WrapProizvodImage,
  Proizvod,
  Data,
  Pakiranje,
  Naziv,
  NazivTop,
  NazivLat,
  WrapInfo,
  WrapCerts,
  WrapCert,
  Download,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

// import useWindowSize from "../../../helper/usewindowsize.js";
// // import { useTranslations } from "next-intl";
// import en from "../../../../locales/en.json";
// import hr from "../../../../locales/hr.json";
import { AiOutlineYoutube } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
function Hero({ pageData }) {
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
  console.log("Proizvod page::::", pageData);
  return (
    <HeroWrap>
      <Container>
        <Proizvod>
          <Overlay />
          <WrapProizvodImage>
            <Image
              src={`/productImages/${pageData["Kataloški broj: "]}.webp`}
              layout="fill"
              alt="p1"
              objectFit="contain"
            />
          </WrapProizvodImage>
        </Proizvod>
        <Data>
          <Pakiranje>{pageData["Težina po jedinici mjere"]}</Pakiranje>
          <NazivTop>
            {locale === "hr"
              ? pageData["IME PROIZVODA - do 60 znakova"]
              : pageData["PRODUCT NAME - up to 60 characters"]}
          </NazivTop>
          {pageData["LATINSKI NAZIV - do 60 znakova"] !== "-" && (
            <NazivLat>
              lat. {pageData["LATINSKI NAZIV - do 60 znakova"]}
            </NazivLat>
          )}

          <WrapInfo>
            {locale === "hr" ? "Pakiranje:" : "Packaging:"}
            <strong style={{ marginLeft: "5px", marginRight: "10px" }}>
              {locale === "hr"
                ? pageData["OPIS (DO 300 ZNAKOVA)"]
                : pageData["OPIS ENGLESKI"]}
            </strong>
            <div>
              {pageData["NAČIN SMRZAVANJA"] !== "-" && locale === "hr"
                ? `Način smrzavanja: ${pageData["NAČIN SMRZAVANJA"]}`
                : `Freezing method: ${pageData["NAČIN SMRZAVANJA"]}`}
            </div>
          </WrapInfo>
          <WrapCerts>
            {pageData["IFS Food"] === "DA" ? (
              <WrapCert>
                <Image
                  src="/IFSfood.svg"
                  width={140}
                  height={65}
                  objectFit="cover"
                />
              </WrapCert>
            ) : null}
            <div style={{ marginLeft: "10px" }}>
              {pageData["Certifikat 'MSC' (DA/NE)"] === "DA" ? (
                <WrapCert>
                  <Image
                    src="/MSC.svg"
                    width={55}
                    height={65}
                    objectFit="cover"
                  />
                </WrapCert>
              ) : null}
            </div>
            <div style={{ marginLeft: "10px" }}>
              {pageData["Certifikat 'Živjeti Zdravo' (DA/NE)"] === "DA" ? (
                <WrapCert>
                  <Image
                    src="/zivjetizdravo.svg"
                    width={80}
                    height={65}
                    objectFit="cover"
                  />
                </WrapCert>
              ) : null}
            </div>
          </WrapCerts>
          <Download href="/">
            {locale === "hr"
              ? "Download specifikacije proizvoda"
              : "Download product specification"}
          </Download>
        </Data>
      </Container>
    </HeroWrap>
  );
}

export default Hero;
