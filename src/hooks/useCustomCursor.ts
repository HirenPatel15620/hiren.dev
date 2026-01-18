
import { useEffect, useRef } from 'react';

export const useCustomCursor = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        if (!cursorDot || !cursorOutline) return;

        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Update dot position immediately
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        };

        const animateCursor = () => {
            const distX = mouseX - outlineX;
            const distY = mouseY - outlineY;

            outlineX += distX * 0.1;
            outlineY += distY * 0.1;

            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;

            requestAnimationFrame(animateCursor);
        };

        // Mobile check
        const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isMobile) {
            cursorDot.style.display = 'none';
            cursorOutline.style.display = 'none';
            return;
        }

        document.addEventListener('mousemove', onMouseMove);
        const animationId = requestAnimationFrame(animateCursor);

        // Hover effects
        const handleMouseEnter = () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.borderColor = 'rgba(99, 102, 241, 0.8)';
        };

        const handleMouseLeave = () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = 'rgba(99, 102, 241, 0.5)';
        };

        const interactiveElements = document.querySelectorAll('a, button, .MuiButton-root, .MuiPaper-root, .MuiLink-root');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // We might need a MutationObserver to attach listeners to new elements, 
        // but for now let's just attach to existing ones. 
        // In a real React app, hover logic is often better handled via context or onMouseEnter props,
        // but to strictly match the "global script" behavior this works efficiently.

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationId);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return { cursorDotRef, cursorOutlineRef };
};
