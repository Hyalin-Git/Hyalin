interface SkillProps {
  text: string;
  url?: string;
}

export default function Skill({ text, url }: SkillProps) {
  const baseClasses =
    "bg-zinc-800/50 px-3 py-1 border w-fit text-xs text-zinc-300 border-zinc-700 hover:border-green-500/50 hover:text-green-400 transition-colors";

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} inline-block cursor-pointer`}
        aria-label={`En savoir plus sur ${text}`}
      >
        {text}
      </a>
    );
  }

  return <div className={baseClasses}>{text}</div>;
}
