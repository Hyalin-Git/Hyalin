"use client";
import { ChevronDown, CircleQuestionMark } from "lucide-react";
import { useState } from "react";
import Corner from "./corner";
import LinearUnderline from "./linear-underline";
import IconBloc from "./icon-bloc";

export default function Dropdown({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="group relative border bg-zinc-900/70 border-green-500/30 max-w-4xl mx-auto hover:border-green-500/50 transition-colors ease">
      {/* Appear when hovered */}
      <Corner position="top-left" />
      <Corner position="top-right" />
      <Corner position="bottom-left" />
      <Corner position="bottom-right" />
      <div
        className="flex p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-4">
          <IconBloc className="w-11 h-11 group-hover:bg-green-500/10 transition-colors ease">
            <CircleQuestionMark className="text-green-500" size={22} />
          </IconBloc>
          <h4 className="text-lg text-white group-hover:text-green-400 transition-colors ease">
            {title}
          </h4>
        </div>
        <IconBloc
          className={`ml-auto w-8 h-8 ${
            isOpen ? "rotate-180" : ""
          } transition-transform ease duration-150`}
        >
          <ChevronDown size={20} className="text-green-500" />
        </IconBloc>
      </div>

      <div
        className={`ml-20 pr-4 overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        } transition-all ease duration-200`}
      >
        <div
          className={`${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in duration-150`}
        >
          <LinearUnderline />
          <p className="text-left text-sm leading-6 py-4 ">{content}</p>
        </div>
      </div>
    </div>
  );
}
