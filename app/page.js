import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Marquee from '../src/components/Marquee';
import About from '../src/components/About';
import Process from '../src/components/Process';
import Services from '../src/components/Services';
import Portfolio from '../src/components/Portfolio';
import Testimonials from '../src/components/Testimonials';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Process />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}