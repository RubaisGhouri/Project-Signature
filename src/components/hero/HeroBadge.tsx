export default function HeroBadge() {
  return (
    <div
      data-hero="badge"
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/5
        px-4
        py-2
        text-xs
        font-medium
        uppercase
        tracking-[0.35em]
        text-cyan-300
        backdrop-blur-xl
      "
    >
      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

      Project Signature
    </div>
  );
}