import Card from "@/components/ui/card";
import IconBloc from "@/components/ui/icon-bloc";
import LinearUnderline from "@/components/ui/linear-underline";
import { Award, Briefcase, Code2 } from "lucide-react";

export default function About() {
  return (
    <section>
      <h2 className="text-5xl md:text-6xl mb-4">
        <span className="text-green-500 font-mono">01.</span> À propos
      </h2>
      <LinearUnderline className="max-w-md" />

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-zinc-300">
            Développeur web freelance spécialisé en{" "}
            <span className="text-green-400">React.js</span>, je transforme vos
            idées en applications web modernes, performantes et scalables.
          </p>
          <p className="leading-relaxed text-zinc-300">
            Passionné par le développement front-end, j&apos;ai acquis une
            expertise solide dans l&apos;écosystème React et les technologies
            JavaScript modernes. Mon approche combine créativité et rigueur
            technique pour livrer des solutions adaptées à vos besoins.
          </p>

          <p className="leading-relaxed text-zinc-300">
            Que ce soit pour développer une application web de zéro, migrer un
            projet existant vers React, ou optimiser vos performances, je
            m&apos;engage à fournir un code de qualité et maintenable.
          </p>

          <div className="mt-12">
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-400">
                <IconBloc className="w-10 h-10">
                  <Code2 size={20} className="text-green-500" />
                </IconBloc>
                Code propre et maintenable
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <IconBloc className="w-10 h-10">
                  <Briefcase size={20} className="text-green-500" />
                </IconBloc>
                Gestion de projet agile
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <IconBloc className="w-10 h-10">
                  <Award size={20} className="text-green-500" />
                </IconBloc>
                Respect des délais et du budget
              </li>
            </ul>
          </div>
        </div>
        <Card>
          <span className="text-xs text-green-500 uppercase tracking-widest">
            Domaines d&apos;expertise
          </span>

          <ul>
            <li className="mt-4 text-lg text-zinc-300">• Applications web</li>
            <li className="mt-2 text-lg text-zinc-300">• E-commerce</li>
            <li className="mt-2 text-lg text-zinc-300">• Dashboards</li>
            <li className="mt-2 text-lg text-zinc-300">• PWA</li>
            <li className="mt-2 text-lg text-zinc-300">• Intégrations API</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
