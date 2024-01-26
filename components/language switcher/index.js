import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { Switcher } from "./style.js";
import { Context } from "../../pages/index.js";
import { useRouter } from "next/router";
import AppContext from "../../components/AppContext.js";
import slugify from "slugify";
import { catalogData } from "../../catalogData.js";

function LanguageSwitcher({
  receptiNaslovi,
  oglasiNaslovi,
  setMessage,
  closeMenu,
}) {
  const context = useContext(AppContext);
  const { locale, asPath } = useRouter();

  const router = useRouter();
  const lang = ["hr", "en"];

  const handleSelectLang = (e, lang) => {
    handleRouteChange(lang);
  };
  const chooseMessage = (message) => {
    setMessage(message);
  };

  console.log(catalogData);

  // funkcija za promjenu jezika i trazenje url-a za istu stranicu na drugom jeziku. novostiNaslovi u propsima dolazi iz parent page Novosti
  function handleRouteChange(lang) {
    if (lang != locale) {
      const getSlug = window.location.pathname.split("/").pop();
      if (asPath === "/") {
        const homeRedirect = locale === "hr" ? "/en" : "/";
        return router.push(homeRedirect, undefined, { locale: lang });
      }
      if (asPath === "/recepti") {
        const homeRedirect = locale === "hr" ? "/en/recepti" : "/recepti";
        return router.push(homeRedirect, undefined, { locale: lang });
      }
      if (asPath === "/kontakt") {
        return router.push("/kontakt", undefined, { locale: lang });
      }
      if (asPath === "/proizvodi") {
        return router.push("/proizvodi", undefined, { locale: lang });
      }
      if (asPath.includes("/recepti/")) {
        const getTranslationRouteForNews = receptiNaslovi.filter((naslov) =>
          locale === "en"
            ? slugify(
                naslov.node.perlaRecepti.naslovReceptaEng
                  .toLowerCase()
                  .split(" ")
                  .join("-"),
                {
                  strict: true,
                  locale: "eng",
                }
              ) +
                "-" +
                new Date(naslov.node.date).toISOString().split("T")[0] ===
              getSlug
            : slugify(
                naslov.node.perlaRecepti.naslovRecepta
                  .toLowerCase()
                  .split(" ")
                  .join("-") +
                  "-" +
                  new Date(naslov.node.date).toISOString().split("T")[0],

                { locale: "hrv", strict: true }
              ) === getSlug
        );
        // console.log("GTR:::::", getTranslationRouteForNews);
        const matchingUrl =
          locale === "hr"
            ? slugify(
                getTranslationRouteForNews[0].node.perlaRecepti.naslovReceptaEng
                  .toLowerCase()
                  .split(" ")
                  .join("-") +
                  "-" +
                  new Date(getTranslationRouteForNews[0].node.date)
                    .toISOString()
                    .split("T")[0],

                { locale: "eng", strict: true }
              )
            : slugify(
                getTranslationRouteForNews[0].node.perlaRecepti.naslovRecepta
                  .toLowerCase()
                  .split(" ")
                  .join("-") +
                  "-" +
                  new Date(getTranslationRouteForNews[0].node.date)
                    .toISOString()
                    .split("T")[0],

                { locale: "hrv", strict: true }
              );
        console.log(matchingUrl);
        return router.push(matchingUrl, undefined, { locale: lang });
      }

      if (asPath.includes("/proizvodi/")) {
        const getTranslationRouteForProduct = catalogData.filter((naslov) =>
          locale === "en"
            ? slugify(
                naslov["PRODUCT NAME - up to 60 characters"]
                  .toLowerCase()
                  .split(" ")
                  .join("-"),
                {
                  locale: "eng",
                }
              ) +
                "-" +
                naslov["Kataloški broj: "] ===
              getSlug
            : slugify(
                naslov["IME PROIZVODA - do 60 znakova"]
                  .toLowerCase()
                  .split(" ")
                  .join("-"),
                {
                  locale: "hrv",
                }
              ) +
                "-" +
                naslov["Kataloški broj: "] ===
              getSlug
        );

        const matchingUrl =
          locale === "hr"
            ? slugify(
                getTranslationRouteForProduct[0][
                  "PRODUCT NAME - up to 60 characters"
                ]
                  .toLowerCase()
                  .split(" ")
                  .join("-"),
                {
                  locale: "eng",
                }
              ) +
              "-" +
              getTranslationRouteForProduct[0]["Kataloški broj: "]
            : slugify(
                getTranslationRouteForProduct[0][
                  "IME PROIZVODA - do 60 znakova"
                ]
                  .toLowerCase()
                  .split(" ")
                  .join("-"),
                { locale: "hrv" }
              ) +
              "-" +
              getTranslationRouteForProduct[0]["Kataloški broj: "];

        console.log(matchingUrl);
        return router.push(matchingUrl, undefined, { locale: lang });
      }
      // pronađi za matchinUrl za Novosti
    }
  }
  return (
    <div className="languageSwitchWrap">
      <Switcher
        onClick={(e) => {
          handleSelectLang(e, "hr");
          closeMenu();
        }}
        className={locale === "hr" ? "activeLangLink" : ""}
      >
        HR
      </Switcher>
      <Switcher
        onClick={(e) => {
          handleSelectLang(e, "en");
          closeMenu();
        }}
        className={locale === "en" ? "activeLangLink" : ""}
      >
        EN
      </Switcher>
    </div>
  );
}

export default LanguageSwitcher;
