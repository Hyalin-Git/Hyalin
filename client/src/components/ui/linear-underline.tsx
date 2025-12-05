export default function LinearUnderline({ className }: { className?: string }) {
  return (
    <div
      className={`w-full h-px bg-linear-to-r from-green-500/50 to-transparent ${className}`}
    ></div>
  );
}
