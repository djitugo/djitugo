import Hero from "@/components/Hero";
import KPIStrip from "@/components/KPIStrip";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Works from "@/components/Works";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import TickerCTA from "@/components/TickerCTA";
import HomeLoader from "@/components/HomeLoader";

export default function Home() {
  return (
    <>
      <HomeLoader />
      <Hero />
      <KPIStrip />
      <Marquee />
      <Services />
      <Process />
      <Works />
      <About />
      <Testimonials />
      <TickerCTA />
    </>
  );
}
