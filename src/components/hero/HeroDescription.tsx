import { siteConfig } from "@/constants/site-config";

export default function HeroDescription() {
  return (
    <p
      data-hero="description"
      className="
        mt-8
        max-w-2xl
        text-center
        text-lg
        leading-8
        text-[var(--color-text-muted)]
      "
    >
      {siteConfig.description}
    </p>
  );
}