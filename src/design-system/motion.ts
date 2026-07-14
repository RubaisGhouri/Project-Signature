export const motion = {
  duration: {
    instant: 0.12,
    fast: 0.25,
    normal: 0.45,
    slow: 0.7,
    cinematic: 1.2,
  },

  stagger: {
    xs: 0.03,
    sm: 0.06,
    md: 0.1,
    lg: 0.15,
  },

  ease: {
    primary: "power3.out",
    smooth: "power2.out",
    dramatic: "power4.out",
    bounce: "back.out(1.7)",
  },
} as const;