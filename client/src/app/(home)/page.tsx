import About from "@/features/home/components/About";
import Faq from "@/features/home/components/Faq";
import Hero from "@/features/home/components/Hero";
import Skills from "@/features/home/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Faq />
    </>
  );
}
