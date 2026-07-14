export default function Aurora() {
  return (
    <>
      <div
        className="absolute left-[-10%] top-[-20%] h-[900px] w-[900px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,.18) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute right-[-10%] top-[5%] h-[850px] w-[850px] rounded-full blur-[190px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,.16) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-[-35%] left-1/2 h-[950px] w-[950px] -translate-x-1/2 rounded-full blur-[220px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,.08) 0%, transparent 75%)",
        }}
      />
    </>
  );
}