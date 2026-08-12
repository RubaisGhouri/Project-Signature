"use client";

const socialLinks = [
  {
    label: "LI",
    name: "LinkedIn",
    href: "#",
  },
  {
    label: "GH",
    name: "GitHub",
    href: "#",
  },
  {
    label: "IG",
    name: "Instagram",
    href: "#",
  },
  {
    label: "BE",
    name: "Behance",
    href: "#",
  },
];

export default function HeroSocial() {
  return (
    <div
      data-hero="social"
      className="
        absolute
        bottom-10
        left-6
        z-30
        hidden
        flex-col
        items-center
        lg:flex
      "
    >
      {/* Social Label */}

      <span
        className="
          mb-6
          [writing-mode:vertical-rl]
          rotate-180
          text-[10px]
          font-medium
          uppercase
          tracking-[0.4em]
          text-white/40
        "
      >
        Social
      </span>

      {/* Vertical Line */}

      <span
        className="
          mb-7
          h-20
          w-px
          bg-white/20
        "
      />

      {/* Social Links */}

      <div className="flex flex-col items-center gap-5">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            title={social.name}
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-white/45
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:text-cyan-300
            "
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
}