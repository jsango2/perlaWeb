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
  WrapLogoPerla2,
  Button,
} from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "../../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import { catalogData } from "../../../../catalogData.js";
import { RedLine } from "../style.js";

function PerlaProizvodi() {
  const settings = {
    // dots: false,
    // infinite: true,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    className: "testimonialSlider",
    speed: 1500,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          dots: true,
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: false,
          autoplaySpeed: 0,
          cssEase: "linear",
          className: "testimonialSlider",
          speed: 1500,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          dots: true,
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          autoplaySpeed: 0,
          cssEase: "linear",
          className: "testimonialSlider",
          speed: 1500,
        },
      },
      {
        breakpoint: 850,
        settings: {
          dots: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 0,
          cssEase: "linear",
          className: "testimonialSlider",
          speed: 1500,
        },
      },
    ],
  };
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
        <RedLine>
          <WrapLogoPerla>
            <Image src="/perlaLogo.svg" layout="fill" />
          </WrapLogoPerla>
        </RedLine>
        <WrapContent>
          <BlueLine />
          <Title>PERLA PROIZVODI</Title>
          <Proizvodi>
            <Slider {...settings}>
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
            </Slider>
          </Proizvodi>
          {/* <Button>UČITAJ SVE PERLA PROIZVODE</Button> */}
          <WrapLogoPerla2>
            <Image src="/perlaLogoWithRed.svg" layout="fill" />
          </WrapLogoPerla2>
        </WrapContent>
      </WrapAll>
    </div>
  );
}

export default PerlaProizvodi;
