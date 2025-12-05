import React from "react";

export default function IconBloc({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-green-500/5 border border-green-500/50 ${className}`}
    >
      {children}
    </div>
  );
}
