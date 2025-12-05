export default function Skill({ text }: { text: string }) {
  return (
    <div className="bg-zinc-800/50 px-3 py-1 border w-fit text-xs text-zinc-300 border-zinc-700 hover:border-green-500/50 hover:text-green-400 transition-colors">
      {text}
    </div>
  );
}
