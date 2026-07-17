export default function ScrollIndicator() {
  return (
    <div
      data-hero="scroll"
      className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      z-20
      flex
      flex-col
      items-center
      gap-3
      "
    >
      <span className="text-[11px] uppercase tracking-[0.35em] text-white/40">
        Scroll
      </span>

      <div className="h-12 w-px bg-white/20" />
    </div>
  );
}