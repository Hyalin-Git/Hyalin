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
      {/* <div className="text-3xl text-green-400 mb-2">{stat}</div> */}
      <div className="mb-2 h-9">
        <CountUp to={stat} className="text-3xl text-green-400" />
      </div>
      <div className="text-sm text-zinc-300/90">{text}</div>
    </div>
  );
}
