export default function Corner({
  position = "top-left",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const positions = {
    "top-left": "top-0 left-0 border-t border-l",
    "top-right": "top-0 right-0 border-t border-r",
    "bottom-left": "bottom-0 left-0 border-b border-l",
    "bottom-right": "bottom-0 right-0 border-b border-r",
  };

  return (
    <div
      className={`absolute z-10 w-3 h-3 border-transparent group-hover:border-green-500/50 transition-colors ease ${positions[position]}`}
    ></div>
  );
}
