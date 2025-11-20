export default function Button({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const variantClasses = {
    primary: "bg-green-500 text-black hover:bg-green-400",
    secondary:
      "relative bg-transparent text-white border-2 border-green-800 before:absolute before:-z-10 before:left-0 before:top-0 before:w-0 before:h-full before:bg-green-500/50 before:transition-all before:duration-300 hover:before:w-full overflow-hidden",
  };

  return (
    <div
      className={`${
        variant && variantClasses[variant]
      } ${className} flex items-center gap-2 py-3 px-7 cursor-pointer transition-colors duration-300`}
    >
      {children}
    </div>
  );
}
