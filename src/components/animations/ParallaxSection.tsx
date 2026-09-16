import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTheme } from '@mui/material';

/**
 * ParallaxSection
 * 
 * Wraps a section with a parallax background image that moves at a slower
 * speed than the foreground content, creating depth.
 * 
 * Uses Motion's useScroll + useTransform (identical to the motion.dev tutorial).
 * 
 * In DARK mode: shows the themed background image with 15% opacity (subtle behind content).
 * In LIGHT mode: uses the same image but with a lighter, desaturated overlay so it 
 * remains beautiful without clashing with bright content.
 */
interface ParallaxSectionProps {
    /** URL of the background image (placed in /public) */
    imageSrc: string;
    /** The child section component */
    children: React.ReactNode;
    /** The speed multiplier. 0.2 = very slow, 0.5 = half speed. Default 0.3 */
    speed?: number;
}

export function ParallaxSection({ imageSrc, children, speed = 0.3 }: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Background moves at 'speed' fraction of scroll — creates depth
    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * -60}%`]);

    // The image container is slightly taller than the section for overflow room
    const bgHeight = '125%';

    return (
        <div ref={ref} style={{ position: 'relative', overflow: 'clip', isolation: 'isolate' }}>
            {/* Parallax Background Layer */}
            <motion.div
                style={{
                    y: imageY,
                    position: 'absolute',
                    inset: 0,
                    height: bgHeight,
                    top: `${-speed * 50}%`,
                    zIndex: 0,
                    willChange: 'transform',
                }}
                aria-hidden="true"
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${imageSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // In dark mode: subtle but visible. In light mode: very faint.
                        opacity: isDark ? 0.35 : 0.25,
                        filter: isDark ? 'saturate(1.2) brightness(0.9)' : 'saturate(0.6) brightness(1.2)',
                        transition: 'opacity 0.6s ease, filter 0.6s ease',
                    }}
                />
                {/* Gradient overlay to blend edges smoothly */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: isDark
                            ? 'linear-gradient(to bottom, rgba(10,10,20,0.7) 0%, transparent 20%, transparent 80%, rgba(10,10,20,0.7) 100%)'
                            : 'linear-gradient(to bottom, rgba(248,250,252,0.8) 0%, transparent 20%, transparent 80%, rgba(248,250,252,0.8) 100%)',
                        transition: 'background 0.6s ease',
                    }}
                />
            </motion.div>

            {/* Foreground Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
}
