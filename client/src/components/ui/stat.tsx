export default function Stat({
  icon,
  stat,
  text,
}: {
  icon: React.ReactNode;
  stat: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-green-600 mb-4">{icon}</div>
      <div className="text-3xl text-green-400 mb-2">{stat}</div>
      <div className="text-sm text-zinc-300/90">{text}</div>
    </div>
  );
}
