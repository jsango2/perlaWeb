import {
  WrapAll,
  Container,
  Name,
  MainLinks,
  SingleLink,
  WrapLogo,
  SingleLink2,
  SubLinks,
  Column,
  Column2,
  ColumnIkone,
  SubName,
  Title,
  Social,
  Copy,
  CopyLink,
} from "./style.js";
// import MarikomercLogo from "../../assets/svg/marikomerc_logo_footer.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import Facebook from "../../assets/svg/Facebook.svg";
import Linkedin from "../../assets/svg/Linkedin.svg";
import Location from "../../assets/svg/Location.svg";
import Email from "../../assets/svg/Email.svg";
import useWindowSize from "../helper/usewindowsize";
import { useInView } from "react-intersection-observer";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
function FooterSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  // const { ref, inView, entry } = useInView({

  //   threshold: 0,
  //   triggerOnce: true,
  // });
  return (
    <WrapAll>
      <Container>
        <MainLinks>
          <SingleLink>{t.Linkovi.onama}</SingleLink>
          <SingleLink>{t.Linkovi.onama}</SingleLink>
          <SingleLink>{t.Linkovi.onama}</SingleLink>
          <SingleLink>{t.Linkovi.onama}</SingleLink>
        </MainLinks>
        <Title>Pratite nas na Instagramu i ostalim mrežama!</Title>
        <Social>
          <Link href="/social">
            <Instagram></Instagram>
          </Link>

          <Link href="/social">
            <Facebook></Facebook>
          </Link>

          <Link href="/social">
            <Linkedin></Linkedin>
          </Link>

          <Link href="/social">
            <Location></Location>
          </Link>

          <Link href="/social">
            <Email></Email>
          </Link>
        </Social>

        <Copy>
          <CopyLink>
            Marikomerc d.o.o., Grabi 54, 23241 Poličnik, Hrvatska;
            info@perla.hr, +385(0)23/342-613
          </CopyLink>
          <CopyLink>
            <Link href="/uvjeti">© 2022 MARIKOMERC GRUPA &nbsp;·</Link>
            <Link href="/uvjeti">&nbsp; Uvjeti korištenja &nbsp;·</Link>
            <Link href="/uvjeti">&nbsp; Izjava o privatnosti &nbsp;·</Link>
            <Link href="/uvjeti">&nbsp; Web design SUTRA</Link>
          </CopyLink>
        </Copy>
      </Container>
    </WrapAll>
  );
}

export default FooterSection;
