import Meta from "../components/meta";
import FooterSection from "./FooterSection";
import Header from "./header";

export default function Layout({
  preview,
  children,
  receptiNaslovi,
  oglasiNaslovi,
  proizvodiNaslovi,
}) {
  return (
    <>
      <Header
        receptiNaslovi={receptiNaslovi}
        proizvodiNaslovi={proizvodiNaslovi}
      />
      <Meta />
      <main>{children}</main>
      <FooterSection />
    </>
  );
}
