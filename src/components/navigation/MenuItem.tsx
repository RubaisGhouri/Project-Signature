type Props = {
  title: string;
  number: string;
};

export default function MenuItem({
  title,
  number,
}: Props) {
  return (
    <button
      data-menu-item
      className="
        group
        relative
        flex
        w-full
        items-center
        justify-between
        overflow-hidden
        border-b
        border-white/10
        py-7
        text-left
      "
    >
      {/* Hover Line */}

      <span
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          origin-left
          scale-x-0
          bg-cyan-400
          transition-transform
          duration-700
          group-hover:scale-x-100
        "
      />

      <span
        data-menu-title
        className="
          relative
          text-6xl
          font-semibold
          tracking-[-0.05em]
          text-white
          transition-all
          duration-700
          group-hover:translate-x-5
          group-hover:text-cyan-300
        "
      >
        {title}
      </span>

      <span
        data-menu-number
        className="
          text-sm
          tracking-[0.35em]
          text-white/25
          transition-all
          duration-700
          group-hover:-translate-x-3
          group-hover:text-cyan-400
        "
      >
        {number}
      </span>
    </button>
  );
}