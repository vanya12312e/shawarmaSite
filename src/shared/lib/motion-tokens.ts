/**
 * Motion tokens — single source of truth for durations / easings / distances.
 * Per motion-patterns rules: no raw numbers in components, import from here.
 */

export const motionTokens = {
  duration: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.55,
  },
  easing: {
    smooth: [0.22, 1, 0.36, 1] as const,
  },
  distance: {
    sm: 12,
    md: 24,
    lg: 32,
    xl: 48,
  },
  scale: {
    subtle: 0.98,
    press: 0.96,
    pop: 1.03,
  },
} as const;

export const springs = {
  snappy: { type: "spring", stiffness: 400, damping: 30 } as const,
  gentle: { type: "spring", stiffness: 120, damping: 20 } as const,
} as const;
