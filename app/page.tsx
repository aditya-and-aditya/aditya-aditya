import Hero from './_components/sections/Hero';
import CaseStudies from './_components/sections/CaseStudies';
import About from './_components/sections/About';
import Contact from './_components/sections/Contact';
import Chatbot from './_components/sections/Chatbot';
import ClientingTeaser from './_components/sections/Hexadon';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientingTeaser />
      <CaseStudies />
      <About />
      <Chatbot />
      <Contact />
      {/* Other sections will go here */}
    </>
  );
}
