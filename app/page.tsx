import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import KPIStrip from "@/components/KPIStrip";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Works from "@/components/Works";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import TickerCTA from "@/components/TickerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <KPIStrip />
      <Marquee />
      <Services />
      <Process />
      <Works />
      <About />
      <Testimonials />
      <TickerCTA />
      <Footer />
    </main>
  );
}
