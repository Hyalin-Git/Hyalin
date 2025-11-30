import Button from "./ui/button";

export default function MoreQuestions() {
  return (
    <div className="text-center">
      <h3 className="text-2xl mb-4 text-white">
        Vous avez d&apos;autres questions ?
      </h3>
      <p className="text-zinc-100/80 mb-6">
        N&apos;hésitez pas à me contacter pour toute question supplémentaire
      </p>

      <Button variant="primary" className="mt-4 mx-auto w-fit">
        Envoyer un message
      </Button>
    </div>
  );
}
