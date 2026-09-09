import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

/**
 * ScrollProgressBar
 *
 * Pixel-accurate recreation of the era-residence.com right-side scrollbar:
 *
 * Layout (top → bottom, fixed on right edge):
 *  1. Circular HP badge  — rotating "HIREN PATEL · PORTFOLIO ·" text + HP monogram center
 *  2. 1px vertical line  — the spine. Top half is accent-filled (progress), bottom half is muted.
 *  3. Scroll number      — floats to the LEFT of the line, tracks scroll position down the line
 *  4. "SCROLL" + arrow   — compact unit at the bottom of the line
 */
export function ScrollProgressBar() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 28,
        restDelta: 0.001,
    });

    // Fill scaleY: grows from top downward
    const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

    // Number position: floats down the track as you scroll
    // The track runs between fixed y offsets — we'll compute in CSS via %
    // Number tracks from 0% to 100% of track height
    const numberTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
    // Shift the pill so at 0% it sits at the top edge, at 100% it sits at the bottom edge
    const numberTranslateY = useTransform(smoothProgress, [0, 1], ['0%', '-100%']);

    // Live integer percentage
    const [percent, setPercent] = useState(0);
    useEffect(() => {
        return smoothProgress.on('change', (v) => setPercent(Math.round(v * 100)));
    }, [smoothProgress]);

    // ── Color tokens ──────────────────────────────────────────────
    const lineTrack = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)';
    const lineFill = 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)';
    const glow = isDark ? 'rgba(102,126,234,0.5)' : 'rgba(102,126,234,0.25)';
    const textMuted = isDark ? 'rgba(255,255,255,0.42)' : 'rgba(0,0,0,0.32)';
    const numColor = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.55)';
    const ringColor = isDark ? 'rgba(102,126,234,0.28)' : 'rgba(0,0,0,0.14)';
    const innerBg = isDark ? 'rgba(8,8,16,0.92)' : 'rgba(255,255,255,0.94)';

    return (
        <>
            {/* ── Keyframes injected once ── */}
            <style>{`
                @keyframes spb-spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @media (max-width: 900px) {
                    .spb-root { display: none !important; }
                }
            `}</style>

            <div
                className="spb-root"
                aria-hidden="true"
                style={{
                    position: 'fixed',
                    right: '50px',
                    top: '75px',
                    bottom: '0px',
                    width: '50px',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* ═══════════════════════════════════════
                    1. CIRCULAR HP LOGO BADGE
                ═══════════════════════════════════════ */}
                <div
                    style={{
                        marginTop: '28px',
                        width: '110px',
                        height: '110px',
                        position: 'relative',
                        flexShrink: 0,
                    }}
                >
                    {/* Spinning text ring */}
                    <svg
                        viewBox="0 0 80 80"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            animation: 'spb-spin 24s linear infinite',
                            overflow: 'visible',
                        }}
                    >
                        <defs>
                            <path
                                id="spb-arc"
                                d="M 40,40 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                            />
                        </defs>
                        {/* Ring border */}
                        <circle cx="40" cy="40" r="38" fill="none" stroke={ringColor} strokeWidth="0.8" />
                        {/* Rotating label */}
                        <text
                            fontSize="7"
                            fontFamily="'Inter', sans-serif"
                            fontWeight="600"
                            letterSpacing="3.5"
                            fill={textMuted}
                            textAnchor="start"
                        >
                            <textPath href="#spb-arc" startOffset="0%">
                                HIREN PATEL · Developer ·
                            </textPath>
                        </text>
                    </svg>

                    {/* Inner HP monogram disc */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '63px',
                            height: '63px',
                            borderRadius: '50%',
                            background: innerBg,
                            border: `0.75px solid ${ringColor}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <svg viewBox="0 0 100 100" width="48" height="48">
                            {/* Left Pillar */}
                            <path d="M 30 32 L 42 20 L 42 70 L 30 82 Z" fill={isDark ? '#ffffff' : '#111111'} />
                            {/* Right Pillar */}
                            <path d="M 58 32 L 70 20 L 70 70 L 58 82 Z" fill={isDark ? '#ffffff' : '#111111'} />
                            {/* Swooping Crossbar */}
                            <path d="M 42 45 C 48 45, 52 55, 58 55 L 58 67 C 52 67, 48 57, 42 57 Z" fill={isDark ? '#ffffff' : '#111111'} />
                        </svg>
                    </div>
                </div>

                {/* ═══════════════════════════════════════
                    2. TRACK LINE + FILL + FLOATING NUMBER
                ═══════════════════════════════════════ */}
                <div
                    style={{
                        flex: 1,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        /* small gaps above/below */
                        marginTop: '24px',
                        paddingTop: '0px',
                        paddingBottom: '32px',
                    }}
                >
                    {/* The track line */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '0px',
                            bottom: '60px', // Increased bottom offset so it doesn't overlap the SCROLL word at 100%
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '3px',
                            background: lineTrack,
                            overflow: 'visible',
                        }}
                    >
                        {/* Filled portion (grows from top) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                originY: 0,
                                scaleY,
                                background: lineFill,
                                boxShadow: `0 0 5px ${glow}, 0 0 10px ${glow}`,
                                willChange: 'transform',
                            }}
                        />

                        {/* Combined Tracker: Dot + Number Pill in perfect sync */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: numberTop,
                                y: numberTranslateY,
                                left: '50%',
                                x: '-50%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                zIndex: 2,
                                pointerEvents: 'none',
                            }}
                        >

                            {/* Transparent Number (Hangs directly below the dot) */}
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '20px', // Places it cleanly below the dot
                                    fontSize: '22px',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 800,
                                    color: numColor,
                                    letterSpacing: '0.5px',
                                    lineHeight: 1,
                                    userSelect: 'none',
                                    whiteSpace: 'nowrap',
                                    textAlign: 'center',
                                    textShadow: isDark ? '0 2px 4px rgba(0,0,0,0.8)' : '0 2px 4px rgba(255,255,255,0.8)',
                                }}
                            >
                                {String(percent).padStart(2, '0')}
                            </span>
                        </motion.div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════
                    3. BOTTOM: "SCROLL" + arrow
                ═══════════════════════════════════════ */}
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        if (percent === 100) {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
                            // Fallback: ensure we reach absolute top
                            setTimeout(() => {
                                if (window.scrollY > 0) {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }, 800);
                        }
                    }}
                    style={{
                        marginBottom: '24px',
                        display: 'flex',
                        flexDirection: percent === 100 ? 'column-reverse' : 'column',
                        alignItems: 'center',
                        gap: '10px',
                        flexShrink: 0,
                        cursor: percent === 100 ? 'pointer' : 'default',
                        pointerEvents: percent === 100 ? 'auto' : 'none',
                    }}
                >
                    {/* "SCROLL" — vertical, reads bottom-to-top (matching reference) */}
                    <span
                        style={{
                            fontSize: '13px',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700,
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                            color: textMuted,
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            userSelect: 'none',
                            lineHeight: 1,
                        }}
                    >
                        {percent === 100 ? 'TO TOP' : 'SCROLL'}
                    </span>

                    {/* Animated arrow — explicit upward/downward paths, no rotation */}
                    {percent === 100 ? (
                        <motion.svg
                            key="arrow-up"
                            viewBox="0 0 8 14"
                            width="14"
                            height="24"
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                                duration: 1.8,
                                ease: 'easeInOut',
                                repeat: Infinity,
                            }}
                            style={{ display: 'block' }}
                        >
                            <line x1="4" y1="14" x2="4" y2="4" stroke={textMuted} strokeWidth="1.1" strokeLinecap="round" />
                            <polyline
                                points="1.5,7 4,3 6.5,7"
                                fill="none"
                                stroke={textMuted}
                                strokeWidth="1.1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="arrow-down"
                            viewBox="0 0 8 14"
                            width="14"
                            height="24"
                            animate={{ y: [0, 4, 0] }}
                            transition={{
                                duration: 1.8,
                                ease: 'easeInOut',
                                repeat: Infinity,
                            }}
                            style={{ display: 'block' }}
                        >
                            <line x1="4" y1="0" x2="4" y2="10" stroke={textMuted} strokeWidth="1.1" strokeLinecap="round" />
                            <polyline
                                points="1.5,7 4,11 6.5,7"
                                fill="none"
                                stroke={textMuted}
                                strokeWidth="1.1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </motion.svg>
                    )}
                </div>
            </div>
        </>
    );
}
