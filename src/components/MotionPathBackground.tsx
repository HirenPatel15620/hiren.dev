import { useTheme } from '@mui/material';

/**
 * MotionPathBackground
 * 
 * A fixed, full-screen SVG animation layer that renders multiple
 * glowing orbs traveling along a flowing bezier path. The entire
 * layer is heavily blurred to create ambient atmospheric movement
 * behind all page content. Adapts to dark/light theme.
 */
export default function MotionPathBackground() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    // The main flowing path — a large, organic circuit-flow shape
    // that spans across the viewport
    const mainPath = "M-100,300 C100,100 300,500 500,250 S700,50 900,300 S1100,550 1300,200 S1500,50 1700,350 S1900,500 2100,200";
    const secondPath = "M-50,600 C150,400 350,800 550,500 S750,200 950,550 S1150,800 1350,400 S1550,150 1750,500 S1950,750 2150,350";
    const thirdPath = "M0,150 C200,350 400,50 600,400 S800,650 1000,200 S1200,50 1400,450 S1600,700 1800,250 S2000,100 2200,500";

    // Theme-adaptive orb configurations
    const orbs = isDark
        ? [
            // Dark mode: vibrant purple, indigo, cyan, pink tones
            { path: mainPath, color: '#667eea', size: 80, duration: 18, delay: 0, opacity: 0.35 },
            { path: mainPath, color: '#764ba2', size: 60, duration: 22, delay: 4, opacity: 0.25 },
            { path: secondPath, color: '#6366f1', size: 100, duration: 25, delay: 2, opacity: 0.2 },
            { path: secondPath, color: '#8b5cf6', size: 50, duration: 16, delay: 6, opacity: 0.3 },
            { path: thirdPath, color: '#06b6d4', size: 70, duration: 20, delay: 1, opacity: 0.15 },
            { path: thirdPath, color: '#ec4899', size: 55, duration: 28, delay: 8, opacity: 0.18 },
            { path: mainPath, color: '#a78bfa', size: 90, duration: 30, delay: 10, opacity: 0.12 },
        ]
        : [
            // Light mode: softer lavender, periwinkle, sky, rose tones
            { path: mainPath, color: '#818cf8', size: 90, duration: 18, delay: 0, opacity: 0.18 },
            { path: mainPath, color: '#a78bfa', size: 65, duration: 22, delay: 4, opacity: 0.15 },
            { path: secondPath, color: '#93c5fd', size: 110, duration: 25, delay: 2, opacity: 0.12 },
            { path: secondPath, color: '#c4b5fd', size: 55, duration: 16, delay: 6, opacity: 0.2 },
            { path: thirdPath, color: '#7dd3fc', size: 75, duration: 20, delay: 1, opacity: 0.1 },
            { path: thirdPath, color: '#f9a8d4', size: 60, duration: 28, delay: 8, opacity: 0.12 },
            { path: mainPath, color: '#c7d2fe', size: 100, duration: 30, delay: 10, opacity: 0.08 },
        ];

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                filter: 'blur(50px)',
                transition: 'opacity 0.6s ease',
            }}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 1920 900"
                preserveAspectRatio="xMidYMid slice"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                <defs>
                    {/* Define the motion paths */}
                    <path id="motionPath1" d={mainPath} fill="none" />
                    <path id="motionPath2" d={secondPath} fill="none" />
                    <path id="motionPath3" d={thirdPath} fill="none" />
                </defs>

                {/* Render orbs with CSS offset-path animations */}
                {orbs.map((orb, index) => {
                    const pathId = orb.path === mainPath ? 'motionPath1' : orb.path === secondPath ? 'motionPath2' : 'motionPath3';
                    return (
                        <circle
                            key={index}
                            r={orb.size}
                            fill={orb.color}
                            opacity={orb.opacity}
                        >
                            <animateMotion
                                dur={`${orb.duration}s`}
                                begin={`${orb.delay}s`}
                                repeatCount="indefinite"
                                calcMode="spline"
                                keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                                keyTimes="0;0.2;0.4;0.6;0.8;1"
                            >
                                <mpath href={`#${pathId}`} />
                            </animateMotion>
                        </circle>
                    );
                })}

                {/* Additional subtle grid-pulse lines for depth */}
                <line
                    x1="0" y1="450" x2="1920" y2="450"
                    stroke={isDark ? 'rgba(102, 126, 234, 0.03)' : 'rgba(102, 126, 234, 0.02)'}
                    strokeWidth="1"
                >
                    <animate attributeName="y1" values="450;440;460;450" dur="8s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="450;460;440;450" dur="8s" repeatCount="indefinite" />
                </line>
                <line
                    x1="960" y1="0" x2="960" y2="900"
                    stroke={isDark ? 'rgba(118, 75, 162, 0.02)' : 'rgba(118, 75, 162, 0.015)'}
                    strokeWidth="1"
                >
                    <animate attributeName="x1" values="960;950;970;960" dur="10s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="960;970;950;960" dur="10s" repeatCount="indefinite" />
                </line>
            </svg>

            {/* Subtle radial gradient overlay for depth */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: isDark
                        ? 'radial-gradient(ellipse at 30% 40%, rgba(102, 126, 234, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(118, 75, 162, 0.05) 0%, transparent 60%)'
                        : 'radial-gradient(ellipse at 30% 40%, rgba(129, 140, 248, 0.04) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(167, 139, 250, 0.03) 0%, transparent 60%)',
                    transition: 'background 0.6s ease',
                }}
            />
        </div>
    );
}
