import {
  WrapAll,
  Container,
  MainLinks,
  SingleLink,
  Title,
  Social,
  Copy,
  CopyLink,
  WrapLogoPerla,
} from "./style.js";
// import MarikomercLogo from "../../assets/svg/marikomerc_logo_footer.svg";

import useWindowSize from "../helper/usewindowsize";
import { useInView } from "react-intersection-observer";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import Image from "next/image.js";
function FooterSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  const isHR = locale === "hr";
  // const { ref, inView, entry } = useInView({

  //   threshold: 0,
  //   triggerOnce: true,
  // });
  return (
    <WrapAll>
      <WrapLogoPerla>
        <Image src="/perlaLogoWithRed.svg" layout="fill" />
      </WrapLogoPerla>
      <Container>
        <MainLinks>
          <Link href="/recepti">
            <SingleLink>{locale === "hr" ? "Recepti" : "Recipes"}</SingleLink>
          </Link>
          <Link href="/">
            <SingleLink>
              {locale === "hr" ? "Proizvodi" : "Products"}
            </SingleLink>
          </Link>
          <Link href="mailto:info@marikomerc.hr">
            <SingleLink>{locale === "hr" ? "Kontakt" : "Contact"}</SingleLink>
          </Link>
        </MainLinks>
        <Title>
          {locale === "hr"
            ? "Pratite nas na Instagramu i ostalim mrežama!"
            : "Follow us on Instagram and other social networks"}
        </Title>
        <Social>
          {/* <Link href="/">
            <div style={{ cursor: "pointer" }}>
              <Image src="/instagram.svg" width={25} height={25} />
            </div>
          </Link> */}

          <Link
            href="https://www.instagram.com/perla_bisermora/"
            target="_blank"
          >
            <div style={{ cursor: "pointer" }}>
              <Image src="/Instagram.svg" width={25} height={25} />
            </div>
          </Link>

          <Link
            href="https://hr.linkedin.com/company/marikomerc"
            target="_blank"
          >
            <div style={{ cursor: "pointer" }}>
              <Image src="/Linkedin.svg" width={25} height={25} />
            </div>
          </Link>

          <Link href="https://www.facebook.com/perla.bisermora" target="_blank">
            <div style={{ cursor: "pointer" }}>
              <Image src="/Facebook.svg" width={25} height={25} />
            </div>
          </Link>

          <Link href="mailto: info@marikomerc.hr">
            <div style={{ cursor: "pointer" }}>
              <Image src="/Email.svg" width={25} height={25} />
            </div>
          </Link>
        </Social>

        <nav className="footer-legal">
          <a href={isHR ? "/politika-privatnosti" : "/en/politika-privatnosti"}>
            <span>{isHR ? "Politika privatnosti" : "Privacy Policy"}</span>
          </a>
          <span className="footer-legal__sep">•</span>
          <a href={isHR ? "/politika-kolacica" : "/en/politika-kolacica"}>
            <span>{isHR ? "Politika kolačića" : "Cookie Policy"}</span>
          </a>
          <span className="footer-legal__sep">•</span>
          <a href={isHR ? "/uvjeti-koristenja" : "/en/uvjeti-koristenja"}>
            <span>{isHR ? "Uvjeti korištenja" : "Terms of Use"}</span>
          </a>
        </nav>

        <Copy>
          <CopyLink>
            Marikomerc d.o.o., Grabi 54, 23241 Poličnik, Hrvatska;
            info@marikomerc.hr, +385 (0)23/630-539
          </CopyLink>
          <CopyLink>
            <Link href="/">© 2022 MARIKOMERC d.o.o. &nbsp;·&nbsp; </Link>
            {/* <Link href='/'>{locale === 'hr' ? 'Uvjeti korištenja · ' : ` Terms & Conditions · `}</Link>
            &nbsp;
            <Link href='/'>{locale === 'hr' ? 'Izjava o privatnosti · ' : ' Privacy policy · '}</Link> */}
            <Link href="/">&nbsp;Web design SUTRA</Link>
          </CopyLink>
        </Copy>
      </Container>
    </WrapAll>
  );
}

export default FooterSection;
