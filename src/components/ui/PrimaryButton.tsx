type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function PrimaryButton({
  children,
  href = "#",
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className="
        group
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400/30
        bg-cyan-400/10
        px-7
        py-3
        text-sm
        font-medium
        text-white
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-400/20
        hover:shadow-[0_0_40px_rgba(34,211,238,.20)]
      "
    >
      {children}

      <span
        className="
          ml-2
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        →
      </span>
    </a>
  );
}