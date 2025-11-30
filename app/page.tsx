import Hero from './_components/sections/Hero';
import Services from './_components/sections/Service';
import CaseStudies from './_components/sections/CaseStudies';
import About from './_components/sections/About';
import Contact from './_components/sections/Contact';
import Chatbot from './_components/sections/Chatbot';
import FeaturedProjectSection from './_components/sections/ZeroStudy';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjectSection />
      <Services />
      <CaseStudies />
      <About />
      <Chatbot />
      <Contact />
      {/* Other sections will go here */}
    </>
  );
}
