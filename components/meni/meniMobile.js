// import { Link } from "gatsby"
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import Button from "../button/button.js";
// import { useHistory } from "react-router-dom"
import { WrapAll } from "./style.js";
// import scrollTo from "gatsby-plugin-smoothscroll"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { HashLink } from "react-router-hash-link";

import LanguageSwitcher from "../language switcher/index.js";
import { useRouter } from "next/router.js";
import useScrollBlock from "../helper/useScrollBlock.js";
import Image from "next/image.js";

const MeniMobile = ({
  isOpen,
  setIsOpen,
  closeMenu,
  receptiNaslovi,
  oglasiNaslovi,
}) => {
  const [isOnamaMenuOpen, setIsOnamaMenuOpen] = useState(false);

  const { locale } = useRouter();
  const [blockScroll, allowScroll] = useScrollBlock();
  const router = useRouter();

  // const history = useHistory()
  // const goToHome = () => {
  //   // console.log("klikni")
  //   // let path = `/`
  //   // history.push(path)
  // }
  useEffect(() => {
    if (isOpen === false) {
      setIsOnamaMenuOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`menu ${isOpen ? "openMenu" : "closedMenu"}`}>
        {/* <div className={`menu ${isOpen ? "openMenu" : "closedMenu"}`}> */}
        {/* className={` ${inView ? "inViewHero" : "outViewHero"}`} */}
        {/* <div
          onClick={() => {
            setIsOnamaMenuOpen(!isOnamaMenuOpen);
          }}
          className={`linkOnama ${
            isOnamaMenuOpen ? "linkOnamaOpen" : "linkOnamaClosed"
          }`}
        >
          {locale === "hr" ? "O nama" : "About us"}
        </div>
        {isOnamaMenuOpen && (
          <div className="mobileSubLinkParent">
            <Link href="/o-nama">
              {locale === "hr" ? "Naša priča" : "Our story"}
            </Link>
            <Link href="/marikomerc-kvalitete">
              {locale === "hr"
                ? "Marikomerc kvalitete"
                : "Marikomerc qualities"}
            </Link>
            <Link href="/prerada-i-skladiste">
              {locale === "hr"
                ? "Prerada i skladište"
                : "Processing and Storage"}
            </Link>
          </div>
        )} */}
        <Link className="mobileLinks" href="/">
          {locale === "hr" ? "Početna stranica" : "Home"}
        </Link>
        {/* <Link
          className="mobileLinks"
          href="/proizvodi"
        >
          {locale === "hr" ? "Proizvodi" : "Products"}
        </Link> */}
        {router.pathname === "/" ? (
          <Link
            // className="navLink"
            href="#ProizvodiSectionMobile"
            scroll={false}
          >
            <a
              className="mobileLinks"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {locale === "hr" ? "Proizvodi" : "Products"}
            </a>
          </Link>
        ) : (
          <Link
            // className="navLink"
            href="/#ProizvodiSectionMobile"
            scroll={false}
          >
            {locale === "hr" ? "Proizvodi" : "Products"}
          </Link>
        )}
        {/* <Link href="/horeca">
          {locale === "hr" ? "HoReCa suradnja" : "HoReCa collaboration"}
        </Link> */}
        {/* <Link href="/karijere">{locale === "hr" ? "Karijere" : "Careers"}</Link> */}
        {/* <Link href="/kontakt">{locale === "hr" ? "Kontakt" : "Contact"}</Link> */}
        <Link href="/recepti">{locale === "hr" ? "Recepti" : "Recipes"}</Link>
        {/* <Link href="/">Grupa</Link> */}
        <div className="mobileLinkDivider"></div>
        <LanguageSwitcher
          closeMenu={closeMenu}
          receptiNaslovi={receptiNaslovi}
          oglasiNaslovi={oglasiNaslovi}
        />
        <div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {" "}
          </div>
        </div>
        <div className="perlaLogoUMeniMobile">
          <img src="/perlaLogoWithRed.svg" />
        </div>
      </div>
    </>
  );
};

export default MeniMobile;
