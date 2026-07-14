"use client";

import { navigation } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 z-50 w-full px-6">

      <div  className="
    mx-auto
    flex
    h-16
    max-w-[1320px]
    items-center
    justify-between
    rounded-full
    border
    border-white/10
    bg-white/5
    px-8
    backdrop-blur-xl
    shadow-[0_0_40px_rgba(0,255,255,.05)]
  ">

        {/* Logo */}

        <div className="text-xl font-bold tracking-widest text-white">
          RG
        </div>

        {/* Navigation */}

        <nav className="hidden gap-10 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
              text-sm
              tracking-wide
              text-white/70
              transition
              duration-300
              hover:text-cyan-400
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}

        <button
          className="
          rounded-full
          border
          border-white/15
          px-5
          py-2.5
          text-sm
          transition
          hover:border-cyan-400
          hover:text-cyan-400
          "
        >
          {"Let's Talk →"}
        </button>

      </div>
    </header>
  );
}