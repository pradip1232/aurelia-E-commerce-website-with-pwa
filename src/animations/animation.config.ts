// Shared animation timing, curves, and defaults
export const ANIMATION_CONFIG = {
  durations: {
    fast: 220,
    normal: 450,
    smooth: 650,
    slow: 900,
  },
  easings: {
    luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
    smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
    snappy: 'cubic-bezier(0.2, 0, 0.2, 1)',
    gentle: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
  thresholds: {
    subtle: 0.1,
    standard: 0.18,
    pronounced: 0.3,
  },
} as const;

export default ANIMATION_CONFIG;
