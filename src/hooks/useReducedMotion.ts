import { useMediaQuery } from './useMediaQuery';

/**
 * Hook to detect if the user has requested reduced motion in their OS
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

export default useReducedMotion;
