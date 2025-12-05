import React from "react";

export default function Card({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-fit relative border border-green-500/30 bg-zinc-900/50 p-8 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
