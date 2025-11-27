"use client";
import { ChevronDown, CircleQuestionMark } from "lucide-react";
import { useState } from "react";

export default function Dropdown({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="border bg-zinc-900/50 border-green-500/40 max-w-4xl mx-auto">
      <div
        className="flex p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-4">
          <div className="w-11 h-11 flex items-center justify-center bg-green-500/10 border border-green-500/50">
            <CircleQuestionMark className="text-green-400" size={22} />
          </div>
          <h4 className="text-lg text-white">{title}</h4>
        </div>
        <div
          className={`ml-auto w-8 h-8 flex items-center justify-center bg-green-500/10 border border-green-500/50 ${
            isOpen ? "rotate-180" : ""
          } transition-transform ease duration-150`}
        >
          <ChevronDown className="text-green-400" size={20} />
        </div>
      </div>

      {isOpen && (
        <div className="ml-20 pr-4">
          <div className="w-full h-px bg-linear-to-r from-green-500/80  to-transparent to-95%"></div>
          <p className="text-zinc-100/80 text-left text-sm leading-6 py-4">
            {content}
          </p>
        </div>
      )}
    </div>
  );
}
