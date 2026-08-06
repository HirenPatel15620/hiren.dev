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
  '/favicon.png'
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

  // Trigger completion when displayProgress reaches 100%
  useEffect(() => {
    if (displayProgress >= 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 300);

      const doneTimer = setTimeout(() => {
        onComplete();
      }, 1100);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [displayProgress, onComplete]);

  // Monogram SVG path string for background & glowing dot path
  const monogramPath = "M 30,70 C 15,30 50,20 65,45 C 80,70 45,95 30,70 C 15,45 65,15 105,45 C 135,67.5 110,135 110,60 C 110,10 160,20 145,65 C 135,95 105,75 145,45";

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
          viewBox="0 0 180 140"
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
          {/* Glowing yellow particle moving continuously along path */}
          <circle className="glowing-dot" r="3.5">
            <animateMotion
              path={monogramPath}
              dur="4s"
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
