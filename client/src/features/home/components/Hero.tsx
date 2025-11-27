import React from "react";
import Button from "../../../components/ui/button";
import Stat from "@/components/ui/stat";
import { Code, Radiation, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative text-center h-screen flex justify-center items-center">
      {/* Grid overlay - version améliorée */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Contenu principal */}
      <div className="relative z-10">
        <h1 className="text-8xl leading-tight">Développeur React</h1>
        <h2 className="text-3xl mb-8">
          Spécialisé en React.js, Next.js & E-commerce
        </h2>

        <p className="text-xl text-zinc-100/80">
          Création d&apos;applications web modernes et boutiques en ligne
        </p>

        <div className="flex justify-center gap-4 mt-12">
          <Button variant="primary" className="text-white py-4 px-8">
            Me contacter
          </Button>

          <Button variant="secondary" className="py-4 px-8">
            Voir mes projets
          </Button>
        </div>

        <div className="flex flex-wrap justify-between max-w-sm mx-auto my-20 gap-4">
          <Stat icon={<Zap />} stat="4+ ans" text="D'expérience" />
          <Stat icon={<Code />} stat="50+" text="Projets réalisés" />
          <Stat icon={<Radiation />} stat="15+" text="Technologies" />
        </div>

        <div className="flex justify-center animate-bounce mt-16">
          <div className="w-6 h-10 border border-green-500/30 rounded-full p-2">
            <div className="w-1 h-2 bg-green-500 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
