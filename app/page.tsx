import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Work from "@/components/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}
