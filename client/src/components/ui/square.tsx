export default function Square({ className = "" }: { className: string }) {
  return (
    <div
      className={`absolute border border-green-500/20 -z-10 ${className}`}
    ></div>
  );
}
