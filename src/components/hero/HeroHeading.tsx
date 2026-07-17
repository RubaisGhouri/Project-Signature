import { siteConfig } from "@/constants/site-config";

export default function HeroHeading() {
  const words = siteConfig.name.split(" ");

  return (
    <h1
      data-hero="title"
      className="
        mt-8
        text-center
        font-heading
        text-6xl
        font-black
        leading-none
        tracking-tight
        text-white
        md:text-8xl
        xl:text-[8rem]
      "
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block mr-5"
          data-word
        >
          {word}
        </span>
      ))}
    </h1>
  );
}