import React from 'react';
import { usePWA } from '../../usePWA';
import { Share, PlusSquare, X } from 'lucide-react';
import './index.scss';

export const IOSInstallGuide: React.FC = () => {
  const { showIOSGuide, setShowIOSGuide } = usePWA();

  if (!showIOSGuide) {
    return null;
  }

  return (
    <div className="ios-guide-backdrop" onClick={() => setShowIOSGuide(false)}>
      <div className="ios-guide-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle" />

        <div className="guide-head">
          <div>
            <span className="brand-badge">APPLE SAFARI INSTALLATION</span>
            <h3>Add to Home Screen</h3>
          </div>
          <button
            type="button"
            className="btn-close-sheet"
            onClick={() => setShowIOSGuide(false)}
            aria-label="Close guide"
          >
            <X size={18} />
          </button>
        </div>

        <div className="guide-steps">
          <div className="step-row">
            <span className="step-num">1</span>
            <div className="step-content">
              Tap the <strong>Share</strong> button <Share size={16} className="inline-icon" /> at the bottom of your Safari toolbar.
            </div>
          </div>

          <div className="step-row">
            <span className="step-num">2</span>
            <div className="step-content">
              Scroll down and select <strong>Add to Home Screen</strong> <PlusSquare size={16} className="inline-icon" />.
            </div>
          </div>

          <div className="step-row">
            <span className="step-num">3</span>
            <div className="step-content">
              Tap <strong>Add</strong> in the top-right corner to place Aurelia Atelier on your device.
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn-done-guide"
          onClick={() => setShowIOSGuide(false)}
        >
          Understood
        </button>
      </div>
    </div>
  );
};

export default IOSInstallGuide;
