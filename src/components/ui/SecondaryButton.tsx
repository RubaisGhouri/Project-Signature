type SecondaryButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function SecondaryButton({
  children,
  href = "#",
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        px-7
        py-3
        text-sm
        font-medium
        text-white/80
        transition-all
        duration-300
        hover:border-white/30
        hover:text-white
      "
    >
      {children}
    </a>
  );
}