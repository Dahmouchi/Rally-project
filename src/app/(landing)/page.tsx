import { Hero } from "@/app/_components/landing/Hero";
import Quotes from "../_components/landing/Quotes";
import Services from "../_components/landing/Services";
import About from "../_components/landing/About";
import Gallery from "../_components/landing/Gallery";
import Join from "../_components/landing/Join";
import Testimonials from "../_components/landing/Testimonials";
import Contact from "../_components/landing/Contact";
import Faq from "../_components/landing/Faq";
import Footer from "../_components/landing/Footer";
import Veuccul from "../_components/landing/Veuccul";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <Quotes />
      <Join />
      <Services />
      <About />
      <Veuccul />
      <Gallery />
      
      <Testimonials />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}
