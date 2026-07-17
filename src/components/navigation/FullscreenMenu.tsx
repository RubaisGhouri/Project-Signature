"use client";

import { useEffect, useRef } from "react";

import MenuBackground from "./MenuBackground";
import MenuFooter from "./MenuFooter";
import MenuItem from "./MenuItem";

import { useNavigationContext } from "@/providers/navigation/NavigationProvider";
import { createMenuTimeline } from "@/animations/menuTimeline";
import { animateHeroMenu } from "@/animations/heroMenuTimeline";

const menu = [
  ["HOME", "01"],
  ["ABOUT", "02"],
  ["WORK", "03"],
  ["PROCESS", "04"],
  ["CONTACT", "05"],
];

export default function FullscreenMenu() {
  const { isOpen } = useNavigationContext();

  const menuRef = useRef<HTMLElement>(null);

  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    timelineRef.current = createMenuTimeline(menuRef.current);

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;

    animateHeroMenu(isOpen);

    if (isOpen) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <aside
      ref={menuRef}
      className="
        fixed
        inset-0
        z-[90]
        opacity-0
        pointer-events-none
        bg-[#05070d]/95
      "
    >
      <MenuBackground />

      <div
        className="
          mx-auto
          flex
          h-full
          max-w-7xl
          flex-col
          justify-center
          px-10
        "
      >
        <div className="space-y-8">
          {menu.map(([title, number]) => (
            <MenuItem
              key={title}
              title={title}
              number={number}
            />
          ))}
        </div>

        <MenuFooter />
      </div>
    </aside>
  );
}