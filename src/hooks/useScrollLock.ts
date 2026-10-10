import { useEffect } from 'react';

/**
 * Hook to lock window body scrolling when modals/drawers are open
 */
export function useScrollLock(lock: boolean = false): void {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (lock) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [lock]);
}

export default useScrollLock;
