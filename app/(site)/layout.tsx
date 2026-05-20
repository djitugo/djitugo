import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}
