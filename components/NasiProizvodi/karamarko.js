import React, { useEffect, useState } from "react";

import {
  Karamarko,
  Left,
  PozadinaPerla,
  ImageWrap,
  Potpis,
  Right,
  Title2,
  LogoHks,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";
import { useScrollPercentage } from "react-scroll-percentage";
import PotpisKaramarko from "../../assets/images/potpiskaramarko.png";

import useWindowSize from "../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import { catalogData } from "../../catalogData.js";
import slugify from "slugify";
import Link from "next/link.js";

function KaramarkoComp() {
  const [perlaData, setPerlaData] = useState([]);
  const [sliced, setSliced] = useState(false);

  const [slice, setSlice] = useState([]);
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

  const [ref3, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  const size = useWindowSize();
  // const t = useTranslations("Index");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const handleClick = () => {};
  return (
    <Karamarko ref={ref}>
      <Left>
        <PozadinaPerla percentage={percentage}>
          <Image src="/perlaLogoShell.svg" layout="fill" />
        </PozadinaPerla>{" "}
        <ImageWrap></ImageWrap>
        <Potpis percentage={percentage}>
          <Image src={PotpisKaramarko} alt="p2" objectFit="cover" />
        </Potpis>
      </Left>
      <Right>
        <Title2>{t.Perla2.karamarkoText}</Title2>
        <LogoHks>
          {" "}
          <Image src="/HKS.svg" alt="p1" layout="fill" objectFit="cover" />
        </LogoHks>
      </Right>
    </Karamarko>
  );
}

export default KaramarkoComp;
