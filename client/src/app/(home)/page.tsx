import Button from "@/components/ui/button";
import About from "@/features/about/components/About";
import Faq from "@/features/home/components/Faq";
import Hero from "@/features/home/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Faq />

      <div>
        <h3>Vous avez d&apos;autres questions ?</h3>
        <p>
          N&apos;hésitez pas à me contacter pour en discuter de votre projet
        </p>

        <Button variant="primary" className="mt-4 w-fit">
          Envoyer un message
        </Button>
      </div>
    </>
  );
}
