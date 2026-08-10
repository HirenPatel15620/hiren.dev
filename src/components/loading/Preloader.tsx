import React, { useEffect, useState, useRef } from 'react';
import './Preloader.css';

interface PreloaderProps {
  onComplete: () => void;
}

const CRITICAL_IMAGES = [
  '/images/hero-profile.png',
  '/images/avatar-fallback.png',
  '/images/project-trading-app.png',
  '/images/project-record-system.png',
  '/images/project-reward-system.png',
  '/favicon.svg'
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [displayProgress, setDisplayProgress] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const targetProgressRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let loadedCount = 0;
    let fontsDone = false;
    const totalItems = CRITICAL_IMAGES.length + 1; // +1 for fonts

    const updateTargetProgress = () => {
      const currentLoaded = loadedCount + (fontsDone ? 1 : 0);
      const calculated = Math.min(100, Math.round((currentLoaded / totalItems) * 100));
      if (calculated > targetProgressRef.current) {
        targetProgressRef.current = calculated;
      }
    };

    // Preload images
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        updateTargetProgress();
      };
      img.onerror = () => {
        // Handle error gracefully so loader never hangs
        loadedCount++;
        updateTargetProgress();
      };
    });

    // Check font loading state
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        fontsDone = true;
        updateTargetProgress();
      }).catch(() => {
        fontsDone = true;
        updateTargetProgress();
      });
    } else {
      fontsDone = true;
      updateTargetProgress();
    }

    // Safety fallback: Ensure target reaches 100% within 5 seconds max
    const maxTimeout = setTimeout(() => {
      targetProgressRef.current = 100;
    }, 10000);

    return () => clearTimeout(maxTimeout);
  }, []);

  // Smooth animation loop for the percentage counter
  useEffect(() => {
    let lastTime = performance.now();

    const animateCounter = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      setDisplayProgress((prev) => {
        if (prev < targetProgressRef.current) {
          // Calculate step size for smooth increment
          const diff = targetProgressRef.current - prev;
          const step = Math.max(1, Math.ceil(diff * (delta / 120)));
          const next = Math.min(targetProgressRef.current, prev + step);
          return next;
        }
        return prev;
      });

      animFrameRef.current = requestAnimationFrame(animateCounter);
    };

    animFrameRef.current = requestAnimationFrame(animateCounter);

    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const startTimeRef = useRef<number>(Date.now());

  // Trigger completion when displayProgress reaches 100% & monogram has had time to complete drawing
  useEffect(() => {
    if (displayProgress >= 100) {
      const MIN_MONOGRAM_DURATION = 2400; // Minimum ms to wait for monogram draw animation
      const elapsed = Date.now() - startTimeRef.current;
      const waitTime = Math.max(0, MIN_MONOGRAM_DURATION - elapsed);

      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, waitTime);

      const doneTimer = setTimeout(() => {
        onComplete();
      }, waitTime + 800);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [displayProgress, onComplete]);

  // Monogram SVG path string for background & glowing dot path
  const monogramPath =
    "M 20,78 " +
    "C 35,80 48,78 60,74 " +
    "C 70,68 80,40 86,16 " +
    "C 89,8 79,9 74,22 " +
    "C 70,35 67,58 66,80 " +
    "C 69,66 75,54 84,54 " +
    "C 91,54 94,68 95,78 " +
    "C 97,84 106,70 115,55 " +
    "C 120,44 128,45 124,57 " +
    "C 118,70 108,100 98,126 " +
    "C 97,126 102,106 108,86 " +
    "C 113,72 122,58 134,60 " +
    "C 146,62 144,80 131,81 " +
    "C 142,81 162,77 185,76";

  return (
    <div className={`preloader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      {/* Top Header */}
      <div className="preloader-header">
        <div className="preloader-name">HIREN PATEL</div>
        <div className="preloader-role">
          SOFTWARE ENGINEER THAT<br />CREATES DELIGHTFUL EXPERIENCES
        </div>
      </div>

      {/* Center Animated Monogram Signature */}
      <div className="preloader-center">
        <svg
          className="monogram-svg"
          viewBox="0 0 210 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Static background outline */}
          <path
            className="monogram-bg-path"
            d={monogramPath}
          />
          {/* Animated line stroke */}
          <path
            className="monogram-draw-path"
            d={monogramPath}
          />
          {/* Signature Dot at the end */}
          <circle
            cx="190"
            cy="75.5"
            r="1.8"
            className="monogram-dot-static"
          />
          {/* Glowing yellow particle looping continuously along path */}
          <circle className="glowing-dot" r="3.5">
            <animateMotion
              path={monogramPath}
              dur="1s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </circle>
        </svg>
      </div>

      {/* Bottom Status Bar */}
      <div className="preloader-footer">
        <div className="preloader-bottom-content">
          <div className="preloader-copyright">©2026</div>
          <div className="preloader-status">LOADING...</div>
          <div className="preloader-percentage">{displayProgress}%</div>
        </div>
        <div className="preloader-baseline">
          <div className="baseline-progress-line" style={{ width: `${displayProgress}%` }} />
          <span className="baseline-dot left"></span>
          <span className="baseline-dot right"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
