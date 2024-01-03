import React from "react";

import {
  Title,
  SubTitle,
  WrapText,
  HeroWrap,
  HeroContent,
  Galeb1,
  Galeb2,
  Galeb3,
  WrapImage,
  Icon,
  Broj,
  Linija,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { AiOutlineYoutube } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
function Hero(photo) {
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
      <HeroWrap>
        <HeroContent photo={photo.photo}></HeroContent>
        {/* <WrapText>
          <Title
            ref={ref}
            className={` ${inView ? "inViewHero" : "outViewHero"}`}
          >
            {t.Hero.title}
          </Title>
          <SubTitle className={` ${inView ? "inViewHero" : "outViewHero"}`}>
            {t.Hero.description}
          </SubTitle>
  
        </WrapText> */}
        {/* <WrapImage>
     
          <video autoPlay muted loop="loop" className="videoHero" playsInline>
            <source src="/HeroVideo.mp4" type="video/mp4" />
          </video>
          <Icon href="https://www.youtube.com/watch?v=JjshNMQqKnU">
            <AiOutlineYoutube size={45} />
          </Icon>
        </WrapImage> */}
      </HeroWrap>
    </div>
  );
}

export default Hero;
