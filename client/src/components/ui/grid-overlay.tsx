export default function GridOverlay({ size = 80 }: { size?: number }) {
  return (
    <div
      className={`absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:${size}px_${size}px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]`}
    />
  );
}
