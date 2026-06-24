import Hero from "./Hero/Hero.tsx";
import Marquee from "../../components/Marquee/Marquee.tsx";
import Services from "./Services/Services.tsx";
import Process from "./Process/Process.tsx";
import Work from "./Work/Work.tsx";
import About from "./About/About.tsx";
import Contact from "./Contact/Contact.tsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
