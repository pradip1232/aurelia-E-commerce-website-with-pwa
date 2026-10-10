import { useEffect } from 'react';


/**
 * Hook to update browser document title dynamically
 */
export function useDocumentTitle(title: string, prefix: string = 'AURELIA ATELIER'): void {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = title ? `${title} | ${prefix}` : prefix;
  }, [title, prefix]);
}

export default useDocumentTitle;
