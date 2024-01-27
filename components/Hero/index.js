import React from "react";

import {
  HeroWrap,
  HeroContent,
  Galeb1,
  Galeb2,
  Galeb3,
  PercentageDiv,
  RedLine,
  WrapLogoPerla,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../helper/usewindowsize.js";
import { useScrollPercentage } from "react-scroll-percentage";

// import { useTranslations } from "next-intl";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { AiOutlineYoutube } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
function Hero() {
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

  const [ref2, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  const percentage10 = percentage * 10;
  return (
    <div>
      <HeroWrap>
        <PercentageDiv ref={ref2} />
        <HeroContent percentage={percentage10}>
          <Galeb1 percentage={percentage10}>
            <Image src="/galeb1.png" layout="fill" />
          </Galeb1>
          <Galeb2 percentage={percentage10}>
            <Image src="/galeb2.png" layout="fill" />
          </Galeb2>
          <Galeb3 percentage={percentage10}>
            <Image src="/galeb3.png" layout="fill" />
          </Galeb3>
          <RedLine>
            <WrapLogoPerla>
              <Image src="/perlaLogo.svg" layout="fill" />
            </WrapLogoPerla>
          </RedLine>
        </HeroContent>
      </HeroWrap>
    </div>
  );
}

export default Hero;
