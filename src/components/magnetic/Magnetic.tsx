"use client";

import { ReactNode, useRef } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type Props = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useMagnetic(ref, strength);

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
}