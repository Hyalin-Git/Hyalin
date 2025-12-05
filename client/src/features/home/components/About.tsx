import Card from "@/components/ui/card";
import Corner from "@/components/ui/corner";
import IconBloc from "@/components/ui/icon-bloc";
import LinearUnderline from "@/components/ui/linear-underline";
import Square from "@/components/ui/square";
import { Award, Briefcase, Code2 } from "lucide-react";

const expertises = [
  {
    id: 1,
    title: "Application web",
    description: "SaaS · Dashboards · Plateformes",
  },
  {
    id: 4,
    title: "E-commerce",
    description: "Medusa.js · Solutions Headless",
  },
  {
    id: 2,
    title: "Sites vitrines",
    description: "Corporate · Portfolios · Landing Pages",
  },
  {
    id: 3,
    title: "CMS Headless",
    description: "WordPress · Payload · Node.js",
  },
];

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
        <div className="relative z-0">
          <Card className="group relative z-10 border border-green-500/30 bg-zinc-900/50 p-8 backdrop-blur-sm">
            <Corner position="top-left" />
            <Corner position="bottom-right" />
            <span className="text-xs text-green-500 uppercase tracking-widest font-mono">
              Domaines d&apos;expertise
            </span>

            <div className="mt-4 text-lg text-zinc-300">
              {expertises.map((exp) => {
                return (
                  <div
                    key={exp?.id}
                    className="group/item flex py-4 border-b-green-500/10 border-b hover:border-b-green-500/30 transition-colors"
                  >
                    <span className="text-green-500 font-mono text-xs mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity">
                      01
                    </span>
                    <div className="ml-3 flex-1">
                      <h3 className="text-[16px] text-zinc-200 mb-1 group-hover/item:text-green-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Square className="-top-4 -right-4  w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
          <Square className="-bottom-6 md:bottom-24 lg:bottom-2 -left-4  w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32" />
        </div>
      </div>
    </section>
  );
}
