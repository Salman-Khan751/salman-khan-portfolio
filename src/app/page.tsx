import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Skills } from "@/components/sections/Skills";

// Static page, regenerated at most once an hour (keeps the GitHub section fresh).
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
