import Card from "@/components/ui/card";
import Corner from "@/components/ui/corner";
import LinearUnderline from "@/components/ui/linear-underline";
import Skill from "@/components/ui/skill";

const cards = [
  {
    id: 1,
    title: "Languages",
    description:
      "Fondations solides pour créer des interfaces web modernes, accessibles et performantes",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },

  {
    id: 2,
    title: "Frameworks & Bibliothèques",
    description:
      "Développement d'applications SPA, SSR/SSG avec Next.js, et gestion d'état complexe",
    skills: [
      "React.js",
      "Next.js",
      "Redux.js",
      "Sass",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    id: 3,
    title: "Backend & Databases",
    description:
      "APIs REST performantes et bases de données SQL/NoSQL pour applications full-stack",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    id: 4,
    title: "CMS & E-commerce",
    description:
      "Solutions e-commerce avec Medusa.js, CMS headless avec Payload et WordPress personnalisés",
    skills: ["Medusa.js", "Payload", "WordPress"],
  },
];

export default function Skills() {
  return (
    <section className="py-38 mx-auto">
      <h2 className="text-5xl md:text-6xl mb-4">
        <span className="text-green-500 font-mono">02.</span> Compétences
      </h2>
      <LinearUnderline className="max-w-md" />

      <div className="mt-16 grid grid-cols-3 gap-6">
        {cards?.map((card) => {
          return (
            <Card
              key={card.id}
              className="relative group hover:border-green-500/40 transition-colors overflow-hidden"
            >
              {/* Appear when hovered */}
              <Corner position="top-left" />
              <Corner position="top-right" />
              <Corner position="bottom-left" />
              <Corner position="bottom-right" />
              <div className="flex">
                <span className="relative top-1 mr-2 text-xs text-green-500">
                  {card.id.toString().padStart(2, "0")}
                </span>
                <h3 className="text-xl text-green-400">{card.title}</h3>
              </div>
              <p className="mt-4 text-sm">{card.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {card.skills.map((skill, idx) => (
                  <Skill key={idx} text={skill} />
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 border-l-green-500/50 border-l-2 pl-6">
        <p className="text-lg italic">
          Spécialisé en développement React.js pour des applications web
          modernes et performantes
        </p>
      </div>
    </section>
  );
}
