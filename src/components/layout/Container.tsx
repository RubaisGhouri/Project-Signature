import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1320px] px-6 md:px-8 xl:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}