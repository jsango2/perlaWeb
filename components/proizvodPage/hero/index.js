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
  // console.log({ pageData });
  return (
    <HeroWrap>
      <Container>
        <Proizvod>
          <Overlay />
          <WrapProizvodImage>
            {pageData.node.proizvodiInformacije.slikaProizvoda != null ? (
              <Image
                src={
                  pageData.node.proizvodiInformacije.slikaProizvoda.sourceUrl
                }
                layout="fill"
                alt="p1"
                objectFit="contain"
              />
            ) : null}
          </WrapProizvodImage>
        </Proizvod>
        <Data>
          <Pakiranje>
            {pageData.node.proizvodiInformacije.tezinaPoJediniciMjere}
          </Pakiranje>
          <NazivTop>
            {locale === "hr"
              ? pageData.node.proizvodiInformacije
                  .marketinskoImePerlaProizvodaHr
              : pageData.node.proizvodiInformacije
                  .marketinskoImePerlaProizvodaEng}
          </NazivTop>
          {pageData.node.proizvodiInformacije.latinskiNazivDo60Znakova !==
            null && (
            <NazivLat>
              lat. {pageData.node.proizvodiInformacije.latinskiNazivDo60Znakova}
            </NazivLat>
          )}

          <WrapInfo>
            {locale === "hr" ? "Pakiranje:" : "Packaging:"}
            <strong style={{ marginLeft: "5px", marginRight: "10px" }}>
              {locale === "hr"
                ? pageData.node.proizvodiInformacije.opisHrDo300Znakova
                : pageData.node.proizvodiInformacije.opisEngDo300Znakova}
            </strong>
            {pageData.node.proizvodiInformacije.nacinSmrzavanja !== null && (
              <div>
                {locale === "hr"
                  ? `Način smrzavanja: ${pageData.node.proizvodiInformacije.nacinSmrzavanja}`
                  : `Freezing method: ${pageData.node.proizvodiInformacije.nacinSmrzavanja}`}
              </div>
            )}
          </WrapInfo>
          <WrapCerts>
            {pageData.node.proizvodiInformacije.ifsFood === true ? (
              <WrapCert>
                <Image src="/IFSfood.svg" layout="fill" objectFit="contain" />
              </WrapCert>
            ) : null}
            <div style={{ marginLeft: "10px" }}>
              {pageData.node.proizvodiInformacije.certifikatMsc === true ? (
                <WrapCertMSC>
                  <Image src="/MSC.svg" layout="fill" objectFit="contain" />
                </WrapCertMSC>
              ) : null}
            </div>
            <div style={{ marginLeft: "10px" }}>
              {pageData.node.proizvodiInformacije.certifikatZivjetiZdravo ===
              true ? (
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
          {/* <Download href="/">
            {locale === "hr"
              ? "Download specifikacije proizvoda"
              : "Download product specification"}
          </Download> */}
        </Data>
      </Container>
    </HeroWrap>
  );
}

export default Hero;
