import { useScrollToTop } from "./hooks/useScrollToTop";
import Lanyard from "./components/Lanyard";
import cardFront from "./assets/card-front.jpg";
import cardBack from "./assets/card-back.jpg";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const showScrollTop = useScrollToTop();

  return (
    <div className="relative min-h-screen text-black">
      {/* Page background: the hero's gradient + grid, fixed so every section shares it */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* ID card lanyard, hanging at the top right beside the content column (wide screens only,
          so it never covers the text). The container is fixed to the whole screen so the card is
          never clipped, and scrollWithPage makes it scroll away with the page like normal content.
          - anchor={0.82}: strap hangs 82% of the way across the page
          - cardHeight={360}: CARD SCALE, card is always 360px tall regardless of window size
          - finish="satin": less glare than the default "glossy" */}
      <div className="hidden xl:block fixed inset-0 z-20">
        <Lanyard frontImage={cardFront} backImage={cardBack} anchor={0.82} cardHeight={360} finish="satin" scrollWithPage />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 pt-24 pb-12 sm:pt-36 sm:pb-24 flex flex-col gap-14">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  );
};

export default App;
