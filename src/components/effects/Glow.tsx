export default function Glow() {
  return (
    <>
      {/* Left Glow */}

      <div
        className="
        absolute
        left-[-200px]
        top-1/2
        h-[500px]
        w-[500px]
        -translate-y-1/2
        rounded-full
        bg-cyan-500/15
        blur-[180px]
      "
      />

      {/* Right Glow */}

      <div
        className="
        absolute
        right-[-200px]
        top-1/2
        h-[500px]
        w-[500px]
        -translate-y-1/2
        rounded-full
        bg-blue-500/10
        blur-[180px]
      "
      />
    </>
  );
}