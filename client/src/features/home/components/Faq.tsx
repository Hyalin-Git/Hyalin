import MoreQuestions from "@/components/MoreQuestions";
import Dropdown from "@/components/ui/dropdown";
import GridOverlay from "@/components/ui/grid-overlay";

const FAQ = [
  {
    id: 1,
    question: "Quels services proposez-vous ?",
    answer:
      "Oui, je propose plusieurs formules de maintenance : corrections de bugs pendant 30 jours inclus, puis contrats de maintenance mensuelle sur mesure. Cela inclut les mises à jour de sécurité, les optimisations de performance, l'ajout de nouvelles fonctionnalités et le support technique. Je reste disponible pour faire évoluer votre projet sur le long terme.",
  },
  {
    id: 2,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
  {
    id: 3,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
  {
    id: 4,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
  {
    id: 5,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
  {
    id: 6,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
];

export default function Faq() {
  return (
    <div className="relative text-center">
      <GridOverlay size={60} />

      <div className="relative z-10">
        <div className="mb-14">
          <h3 className="text-5xl">Questions Fréquentes</h3>
          <div className="mx-auto my-5 h-px w-24 bg-linear-to-r from-transparent via-green-500 to-transparent"></div>
          <p className="text-zinc-100/80">
            Tout ce que vous devez savoir sur mes services
          </p>
        </div>

        <div className="mt-4 space-y-4 mb-14">
          {FAQ.map((item) => (
            <Dropdown
              key={item.id}
              title={item.question}
              content={item.answer}
            />
          ))}
        </div>

        <MoreQuestions />
      </div>
    </div>
  );
}
