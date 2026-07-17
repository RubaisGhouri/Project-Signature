type Props = {
  number: number;
};

export default function WorkNumber({ number }: Props) {
  return (
    <span
      className="
        text-sm
        tracking-[0.4em]
        text-cyan-300
      "
    >
      {String(number).padStart(2, "0")}
    </span>
  );
}