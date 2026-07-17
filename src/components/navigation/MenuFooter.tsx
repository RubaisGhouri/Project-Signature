const socials = ["GitHub", "LinkedIn", "Instagram"];

export default function MenuFooter() {
  return (
    <div
      data-menu="footer"
      className="
        mt-24
        flex
        items-center
        gap-10
        text-sm
        uppercase
        tracking-[0.3em]
        text-white/40
      "
    >
      {socials.map((social) => (
        <button
          key={social}
          className="
            transition-all
            duration-300
            hover:-translate-y-1
            hover:text-cyan-300
          "
        >
          {social}
        </button>
      ))}
    </div>
  );
}