import Meta from "../components/meta";
import FooterSection from "./FooterSection";
import Header from "./header";

export default function Layout({
  preview,
  children,
  receptiNaslovi,
  oglasiNaslovi,
}) {
  return (
    <>
      <Header receptiNaslovi={receptiNaslovi} />
      <Meta />
      <main>{children}</main>
      <FooterSection />
    </>
  );
}
