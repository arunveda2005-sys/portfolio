import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arun Adhithya V — Software Engineer & AI/ML Developer" },
      {
        name: "description",
        content:
          "Portfolio of Arun Adhithya V — Software Engineer specializing in AI/ML, AWS cloud architecture, MERN stack, and computer vision.",
      },
      { property: "og:title", content: "Arun Adhithya V — Software Engineer & AI/ML Developer" },
      { property: "og:description", content: "AI/ML • AWS • MERN • Computer Vision — premium engineering portfolio." },
    ],
  }),
  component: Index,
});

function Index() {
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
