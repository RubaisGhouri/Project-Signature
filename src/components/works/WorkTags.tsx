type Props = {
  tags: string[];
};

export default function WorkTags({ tags }: Props) {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-3
      "
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/5
            px-4
            py-2
            text-xs
            uppercase
            tracking-[0.25em]
            text-cyan-300
          "
        >
          {tag}
        </span>
      ))}
    </div>
  );
}