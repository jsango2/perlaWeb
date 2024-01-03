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
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import { catalogData } from "../../catalogData.js";

function NasiProizvodi() {
  const [perlaData, setPerlaData] = useState([]);
  useEffect(() => {
    setPerlaData(
      catalogData.filter(
        (data) => data["Kategorija kojoj proizvod pripada:"] == "PERLA"
      )
    );
  }, []);

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
  return (
    <div>
      <WrapAll ref={ref}>
        <WrapContent>
          <BlueLine />
          <Title>NAŠI PROIZVODI</Title>
          <Proizvodi>
            {perlaData.map((data) => (
              <WrapProizvod key={data["Kataloški broj:"]}>
                <Proizvod>
                  <Overlay />
                  <WrapProizvodImage>
                    <Image
                      src={`/productImages/${data["Kataloški broj:"]}.webp`}
                      layout="fill"
                      alt="p1"
                      objectFit="contain"
                    />
                  </WrapProizvodImage>
                </Proizvod>
                <ProizvodName>
                  {locale === "hr"
                    ? data["IME PROIZVODA - do 60 znakova"]
                    : data["PRODUCT NAME - up to 60 characters"]}
                </ProizvodName>
              </WrapProizvod>
            ))}
          </Proizvodi>
          <Button>UČITAJ SVE PERLA PROIZVODE</Button>
          <WrapLogoPerla>
            <Image src="/perlaLogoWithRed.svg" layout="fill" />
          </WrapLogoPerla>
        </WrapContent>
      </WrapAll>
    </div>
  );
}

export default NasiProizvodi;
