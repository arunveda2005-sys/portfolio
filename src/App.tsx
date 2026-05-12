import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function App() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
