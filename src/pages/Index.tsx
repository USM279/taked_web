import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { useLanguageFromPath } from "@/hooks/useLanguageFromPath";

const Index = () => {
  useLanguageFromPath();

  return (
    <main className="bg-white min-h-screen font-body pt-20">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Index;
