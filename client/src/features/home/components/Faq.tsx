import Dropdown from "@/components/ui/dropdown";

const FAQ = [
  {
    id: 1,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
  {
    id: 1,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
  {
    id: 1,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
  {
    id: 1,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
  {
    id: 1,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
  {
    id: 1,
    question: "Quels services proposez-vous ?",
    answer:
      "Je propose une gamme complète de services de développement web, y compris la conception de sites web, le développement front-end et back-end, l'optimisation SEO, et la maintenance continue.",
  },
];

export default function Faq() {
  return (
    <div className="text-center">
      <h3 className="text-5xl">Questions Fréquentes</h3>
      <div className="mx-auto my-4 h-px w-24 bg-linear-to-r from-transparent via-green-500 to-transparent"></div>
      <p className="text-zinc-100/80">
        Tout ce que vous devez savoir sur mes services
      </p>

      <div className="mt-4 space-y-4">
        {FAQ.map((item) => (
          <Dropdown key={item.id} title={item.question} content={item.answer} />
        ))}
      </div>
    </div>
  );
}
