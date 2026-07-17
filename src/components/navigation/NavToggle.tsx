"use client";

import { useNavigationContext } from "@/providers/navigation/NavigationProvider";
import NavIcon from "./NavIcon";
import Magnetic from "@/components/magnetic/Magnetic";

export default function NavToggle() {
  const { isOpen, toggle } = useNavigationContext();

  return (
   <Magnetic strength={0.25}>
    <button
      onClick={toggle}
      data-nav-toggle
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
      className="
        group
        relative
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-xl
        px-3
        py-2
        transition-all
        duration-500
      "
    >
      <NavIcon />

      <div
        className="
          relative
          h-4
          overflow-hidden
        "
      >
        <span
          data-nav-text
          className="
            block
            text-xs
            font-medium
            uppercase
            tracking-[0.35em]
            text-white/90
            will-change-transform
          "
        >
          {isOpen ? "CLOSE" : "MENU"}
        </span>
      </div>
    </button>
  </Magnetic>
  );
}