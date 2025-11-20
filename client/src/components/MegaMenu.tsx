export default function MegaMenu({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <div className="absolute z-20 p-4 bg-black  left-1/2 top-8 -translate-x-1/2">
      MegaMenu
    </div>
  );
}
