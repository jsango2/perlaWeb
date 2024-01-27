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
  WrapCertZZ,
  WrapCertMSC,
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
            {pageData["NAČIN SMRZAVANJA"] !== "-" && (
              <div>
                {locale === "hr"
                  ? `Način smrzavanja: ${pageData["NAČIN SMRZAVANJA"]}`
                  : `Freezing method: ${pageData["NAČIN SMRZAVANJA"]}`}
              </div>
            )}
          </WrapInfo>
          <WrapCerts>
            {pageData["IFS Food"] === "DA" ? (
              <WrapCert>
                <Image src="/IFSfood.svg" layout="fill" objectFit="contain" />
              </WrapCert>
            ) : null}
            <div style={{ marginLeft: "10px" }}>
              {pageData["Certifikat 'MSC' (DA/NE)"] === "DA" ? (
                <WrapCertMSC>
                  <Image src="/MSC.svg" layout="fill" objectFit="contain" />
                </WrapCertMSC>
              ) : null}
            </div>
            <div style={{ marginLeft: "10px" }}>
              {pageData["Certifikat 'Živjeti Zdravo' (DA/NE)"] === "DA" ? (
                <WrapCertZZ>
                  <Image
                    src="/zivjetizdravo.svg"
                    layout="fill"
                    objectFit="contain"
                  />
                </WrapCertZZ>
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
