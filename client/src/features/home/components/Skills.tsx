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
    skills: [
      { name: "HTML", url: "https://developer.mozilla.org/fr/docs/Web/HTML" },
      { name: "CSS", url: "https://developer.mozilla.org/fr/docs/Web/CSS" },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
      },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    ],
  },

  {
    id: 2,
    title: "Frameworks & Libraries",
    description:
      "Développement d'applications SPA, SSR/SSG avec Next.js, et gestion d'état complexe",
    skills: [
      { name: "React.js", url: "https://react.dev/" },
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Redux.js", url: "https://redux.js.org/" },
      { name: "Sass", url: "https://sass-lang.com/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
    ],
  },
  {
    id: 3,
    title: "Backend & Databases",
    description:
      "APIs REST performantes et bases de données SQL/NoSQL pour applications full-stack",
    skills: [
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Express.js", url: "https://expressjs.com/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/" },
      { name: "MySQL", url: "https://www.mysql.com/" },
    ],
  },
  {
    id: 4,
    title: "CMS & E-commerce",
    description:
      "Solutions e-commerce avec Medusa.js, CMS headless avec Payload et WordPress personnalisés",
    skills: [
      { name: "Medusa.js", url: "https://medusajs.com/" },
      { name: "Payload", url: "https://payloadcms.com/" },
      { name: "WordPress", url: "https://wordpress.org/" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="mx-auto">
      <h2 className="text-5xl md:text-6xl mb-4">
        <span className="text-green-500 font-mono">02.</span> Compétences
      </h2>
      <LinearUnderline className="max-w-md" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards?.map((card) => {
          return (
            <Card
              key={card.id}
              className={`relative group hover:border-green-500/40 h-full transition-colors overflow-hidden ${
                card.id === 1 ? "md:col-span-2 lg:col-span-3" : ""
              } ${card.id === 4 ? "md:col-span-2 lg:col-span-3" : ""} ${
                card.id === 2 || card.id === 3 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Appear when hovered */}
              <Corner position="top-left" />
              <Corner position="top-right" />
              <Corner position="bottom-left" />
              <Corner position="bottom-right" />
              <div className="flex">
                <span className="block relative top-1 mr-2 text-xs text-green-500 font-mono">
                  {card.id.toString().padStart(2, "0")}
                </span>
                <h3 className="text-xl text-green-400">{card.title}</h3>
              </div>
              <p className="mt-4 text-sm">{card.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {card.skills.map((skill, idx) => (
                  <Skill key={idx} text={skill.name} url={skill.url} />
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
