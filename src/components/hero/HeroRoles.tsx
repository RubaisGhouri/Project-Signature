"use client";

const roles = [
  "Creative Frontend Engineer",
  "WordPress Web Specialist",
  "Next.js Developer",
  "UI Motion Designer",
  "Creative Technologist",
];

export default function HeroRoles() {
  return (
    <div
      data-hero="roles"
      className="
        mt-6
        h-10
        overflow-hidden
        text-center
      "
    >
      <span
        data-role
        className="
          block
          text-xl
          font-medium
          tracking-wide
          text-cyan-300
        "
      >
        {roles[0]}
      </span>
    </div>
  );
}