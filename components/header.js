import Link from "next/link";
import React, { useState, useRef } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import MeniMobile from "./meni/meniMobile";
import { Link as Veza } from "react-scroll";
// import scrollTo from "gatsby-plugin-smoothscroll"
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import LanguageSwitcher from "./language switcher";
import { useOnClickOutside } from "./helper/useClickOutside";
import useScrollBlock from "../components/helper/useScrollBlock";
import { useEffect } from "react";
import Headroom from "react-headroom";
const Header = ({ siteTitle, novostiNaslovi, oglasiNaslovi }) => {
  const ref = useRef();
  // State for our modal
  const [blockScroll, allowScroll] = useScrollBlock();

  // Call hook passing in the ref and a function to call on outside click
  // useOnClickOutside(ref, () => setIsOnamaOpen(false));

  const router = useRouter();
  const { locale } = router;

  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState("Hello World");

  // const [isOnamaOpen, setIsOnamaOpen] = useState(false);

  function handleCloseMenu() {
    setIsOpen(false);
  }

  // useEffect(() => {
  //   isOpen == true ? blockScroll() : allowScroll();
  // }, [isOpen]);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isOpen ? "hidden" : "";
    }
  }, [isOpen]);

  // <Headroom
  //   style={{
  //     WebkitTransition: "all .5s ease-in-out",
  //     Transition: "all .5s ease-in-out",
  //     transition: "all .5s ease-in-out",
  //     zIndex: "999",
  //     height: "65px",
  //   }}
  // >
  return (
    <>
      {/* <Script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js" /> */}
      <Headroom>
        <header>
          <MeniMobile
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            closeMenu={handleCloseMenu}
            novostiNaslovi={novostiNaslovi}
            oglasiNaslovi={oglasiNaslovi}
          />
          <div className="headerWrap">
            <div className="navBar">
              <Link href="/">
                <div className="navLink navTitle navLogo">
                  <Image src="/PerlaLogoWhite.svg" layout="fill" />
                </div>
              </Link>
              <div className="NavLinksHamburgerWrap">
                <GiHamburgerMenu
                  className="hamburgerMenu"
                  onClick={() => {
                    setIsOpen(() => !isOpen);

                    // blockScroll()
                  }}
                />

                <div className="navLinks">
                  <div>
                    <div
                      style={{ cursor: "pointer" }}
                      // onMouseOver={handleOnamaOpen}
                    >
                      <Link className="navLink" href="/">
                        {locale === "hr" ? "O nama" : "About us"}
                      </Link>
                      {/* <ArrowDown
                        style={{ position: "relative", marginLeft: "-8px" }}
                      /> */}
                    </div>
                  </div>
                  <div>
                    <Link className="navLink" href="/proizvodi">
                      {locale === "hr" ? "Recepti" : "Recipies"}
                    </Link>
                  </div>
                  <div>
                    <Link className="navLink" href="/horeca">
                      {locale === "hr" ? "Proizvodi" : "Products"}
                    </Link>
                  </div>

                  <div>
                    <Link className="navLink" href="/kontakt">
                      {locale === "hr" ? "Kontakt" : "Contact"}
                    </Link>
                  </div>

                  {/* <div className="navLink borderNav"></div> */}
                </div>
              </div>
              <div className="languageSwitcher">
                {/* <ArrowDown
                    style={{
                      position: "relative",
                      marginLeft: "-8px",
                      marginRight: "5px",
                    }}
                  /> */}

                <LanguageSwitcher
                  novostiNaslovi={novostiNaslovi}
                  closeMenu={handleCloseMenu}
                  oglasiNaslovi={oglasiNaslovi}
                />
              </div>
            </div>
          </div>
        </header>
      </Headroom>
    </>
    // </Headroom>
  );
};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
