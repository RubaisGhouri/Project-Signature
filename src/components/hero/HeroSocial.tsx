export default function HeroSocial() {
  return (
    <div
      data-hero="socials"
      className="
      absolute
      left-8
      bottom-12
      z-20
      hidden
      lg:flex
      flex-col
      gap-4
      "
    >
      <span className="text-xs tracking-[0.3em] text-white/30 rotate-180 [writing-mode:vertical-rl]">
        SOCIAL
      </span>

      <div className="h-20 w-px bg-white/10" />

      <a href="#" className="text-white/40 hover:text-cyan-400 transition">
        in
      </a>

      <a href="#" className="text-white/40 hover:text-cyan-400 transition">
        Gh
      </a>

      <a href="#" className="text-white/40 hover:text-cyan-400 transition">
        Ig
      </a>
    </div>
  );
}