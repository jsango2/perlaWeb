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
          <SingleLink>{t.Linkovi.onama}</SingleLink>
          <SingleLink>{t.Linkovi.onama}</SingleLink>
          <SingleLink>{t.Linkovi.onama}</SingleLink>
        </MainLinks>
        <Title>Pratite nas na Instagramu i ostalim mrežama!</Title>
        <Social>
          <Link href="/">
            <Image src="/instagram.svg" width={25} height={25} />
          </Link>

          <Link href="/">
            <Image src="/Instagram.svg" width={25} height={25} />
          </Link>

          <Link href="/">
            <Image src="/Linkedin.svg" width={25} height={25} />
          </Link>

          <Link href="/">
            <Image src="/Facebook.svg" width={25} height={25} />
          </Link>

          <Link href="/">
            <Image src="/Email.svg" width={25} height={25} />
          </Link>
        </Social>

        <Copy>
          <CopyLink>
            Marikomerc d.o.o., Grabi 54, 23241 Poličnik, Hrvatska;
            info@perla.hr, +385(0)23/342-613
          </CopyLink>
          <CopyLink>
            <Link href="/">© 2022 MARIKOMERC GRUPA &nbsp;·</Link>
            <Link href="/">&nbsp; Uvjeti korištenja &nbsp;·</Link>
            <Link href="/">&nbsp; Izjava o privatnosti &nbsp;·</Link>
            <Link href="/">&nbsp; Web design SUTRA</Link>
          </CopyLink>
        </Copy>
      </Container>
    </WrapAll>
  );
}

export default FooterSection;
