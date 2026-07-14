export default function Grid() {
  return (
    <div
      className="absolute inset-0 opacity-100"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
      }}
    />
  );
}