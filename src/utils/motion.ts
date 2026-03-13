export const smoothTransition = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1],
} as const;

export const softSpringTransition = {
  type: 'spring',
  stiffness: 280,
  damping: 30,
  mass: 0.8,
} as const;

export const dropdownMotionProps = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] },
} as const;

export const overlayFadeProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
} as const;

export const drawerMotionProps = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: softSpringTransition,
} as const;

export const accordionMotionProps = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: smoothTransition,
} as const;