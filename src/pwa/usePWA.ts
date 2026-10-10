import { useState, useEffect, useCallback } from 'react';

// Extend window for BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface Window {
    deferredPwaPrompt?: BeforeInstallPromptEvent | null;
  }
  interface Navigator {
    standalone?: boolean;
  }
}

const DISMISS_KEY = 'aurelia_pwa_install_dismissed_until';

export function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [wasOffline, setWasOffline] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  // Check standalone / installed mode
  const checkIsInstalled = useCallback(() => {
    if (typeof window === 'undefined') return false;
    const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = window.navigator.standalone === true;
    const isTwa = document.referrer.includes('android-app://');
    return isStandaloneMode || isIOSStandalone || isTwa;
  }, []);

  // Check if installation prompt is currently dismissed by user
  const isPromptDismissed = useCallback(() => {
    try {
      const dismissedUntil = localStorage.getItem(DISMISS_KEY);
      if (!dismissedUntil) return false;
      return Date.now() < parseInt(dismissedUntil, 10);
    } catch {
      return false;
    }
  }, []);

  // Dismiss installation prompt for N days
  const dismissInstallPrompt = useCallback((days = 7) => {
    try {
      const until = Date.now() + days * 24 * 60 * 60 * 1000;
      localStorage.setItem(DISMISS_KEY, until.toString());
      setIsInstallable(false);
    } catch (e) {
      console.warn('[PWA] Storage error:', e);
    }
  }, []);

  // Trigger Native Install Prompt
  const promptInstall = useCallback(async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    const promptEvent = deferredPrompt || window.deferredPwaPrompt;
    if (!promptEvent) {
      console.log('[PWA] No active install prompt event found.');
      return;
    }

    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      console.log('[PWA] User choice outcome:', choice.outcome);

      if (choice.outcome === 'accepted') {
        setIsInstalled(true);
        setIsInstallable(false);
      } else {
        dismissInstallPrompt(3);
      }
      setDeferredPrompt(null);
      window.deferredPwaPrompt = null;
    } catch (err) {
      console.warn('[PWA] Install prompt error:', err);
    }
  }, [deferredPrompt, isIOS, dismissInstallPrompt]);

  // Update activation (Skip Waiting)
  const applyUpdate = useCallback(() => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  }, [waitingWorker]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIOS(isAppleDevice);

    const installed = checkIsInstalled();
    setIsInstalled(installed);

    // 1. Service Worker Registration
    if ('serviceWorker' in navigator && (typeof process === 'undefined' || process.env?.NODE_ENV !== 'test')) {
      const registerServiceWorker = () => {
        navigator.serviceWorker
          .register('/sw.js', { scope: '/' })
          .then((registration) => {
            console.log('[PWA] Service Worker registered with scope:', registration.scope);

            // Check for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    console.log('[PWA] New version ready for activation.');
                    setUpdateAvailable(true);
                    setWaitingWorker(newWorker);
                  }
                });
              }
            });

            // If a worker is already waiting
            if (registration.waiting) {
              setUpdateAvailable(true);
              setWaitingWorker(registration.waiting);
            }
          })
          .catch((err) => {
            console.warn('[PWA] Service Worker registration failed:', err);
          });

        // Ensure refresh on controller change
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!refreshing) {
            refreshing = true;
            window.location.reload();
          }
        });
      };

      if (document.readyState === 'complete') {
        registerServiceWorker();
      } else {
        window.addEventListener('load', registerServiceWorker);
      }
    }

    // 2. Handle beforeinstallprompt Event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const pwaEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(pwaEvent);
      window.deferredPwaPrompt = pwaEvent;

      if (!installed && !isPromptDismissed()) {
        setIsInstallable(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 3. Handle appinstalled Event
    const handleAppInstalled = () => {
      console.log('[PWA] Aurelia Atelier successfully installed.');
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      window.deferredPwaPrompt = null;
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    // 4. Online / Offline Status
    const handleOnline = () => {
      setIsOnline(true);
      setWasOffline(true);
      setTimeout(() => setWasOffline(false), 4000);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [checkIsInstalled, isPromptDismissed]);

  return {
    isInstallable,
    isInstalled,
    isIOS,
    showIOSGuide,
    setShowIOSGuide,
    promptInstall,
    dismissInstallPrompt,
    isOnline,
    wasOffline,
    updateAvailable,
    applyUpdate
  };
}
