export type Work = {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  live: string;
  description: string;
  tech: string[];
};

export const works: Work[] = [
  {
    id: 1,
    title: "Visvadi",
    category: "Corporate Website",
    year: "2025",
    image: "/works/placeholder.webp",
    live: "https://visvadi.com/",
    description:
      "Modern React-based corporate website focused on performance, responsive layouts and a premium user experience.",
    tech: ["React", "JavaScript", "CSS"],
  },

  {
    id: 2,
    title: "DevSpark Creations",
    category: "Digital Agency",
    year: "2025",
    image: "/works/placeholder.webp",
    live: "https://devsparkcreations.com/",
    description:
      "Digital agency website built with Divi and Divi Flash, featuring custom layouts and business-focused presentation.",
    tech: ["WordPress", "Divi", "Divi Flash"],
  },

  {
    id: 3,
    title: "AJ Digital Craft",
    category: "Creative Agency",
    year: "2025",
    image: "/works/placeholder.webp",
    live: "https://ajdigitalcraft.com/",
    description:
      "Creative agency website with premium visuals, modern UI and Divi-powered custom sections.",
    tech: ["WordPress", "Divi", "Divi Flash"],
  },

  {
    id: 4,
    title: "Netradyne",
    category: "Enterprise Website",
    year: "2025",
    image: "/works/placeholder.webp",
    live: "https://www.netradyne.com/",
    description:
      "Enterprise-scale website focused on clean information architecture and responsive business presentation.",
    tech: ["WordPress", "Divi", "Divi Flash", "Enterprise"],
  },

  {
    id: 5,
    title: "Al Nisa Flowers",
    category: "Floral Business",
    year: "2025",
    image: "/works/placeholder.webp",
    live: "https://alnisaflowers.com/",
    description:
      "Elegant floral business website designed for showcasing products with a premium shopping experience.",
    tech: ["WordPress", "Divi", "Divi Flash"],
  },

  {
    id: 6,
    title: "Rosa Law APC",
    category: "Law Firm",
    year: "2025",
    image: "/works/placeholder.webp",
    live: "https://rosalawapc.com/",
    description:
      "Professional law firm website emphasizing credibility, trust and clean content hierarchy.",
    tech: ["WordPress", "Divi", "Divi Flash"],
  },

  {
    id: 7,
    title: "Ninja Tech HB",
    category: "Technology",
    year: "2025",
    image: "/works/placeholder.webp",
    live: "https://ninjatechhb.com/",
    description:
      "Technology company website with modern layouts, responsive design and optimized performance.",
    tech: ["WordPress", "Divi", "Divi Flash"],
  },

  {
    id: 8,
    title: "Drywall Patch Guys",
    category: "Home Services",
    year: "2025",
    image: "/works/placeholder.webp",
    live: "https://drywallpatchguys.com/",
    description:
      "Service-based business website built to maximize lead generation and customer trust.",
    tech: ["WordPress", "Divi", "Divi Flash"],
  },
];