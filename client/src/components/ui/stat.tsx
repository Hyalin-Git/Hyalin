"use client";

import CountUp from "../CountUp";

export default function Stat({
  icon,
  stat = 0,
  text,
}: {
  icon: React.ReactNode;
  stat: number;
  text: string;
}) {
  // mount-only

  return (
    <div className="flex flex-col items-center">
      <div className="text-green-600 mb-4">{icon}</div>
      <div className="mb-2 h-9 text-3xl text-green-400">
        <CountUp to={stat} />+{text && stat === 4 ? " ans" : ""}
      </div>
      <div className="text-sm text-zinc-400">{text}</div>
    </div>
  );
}
