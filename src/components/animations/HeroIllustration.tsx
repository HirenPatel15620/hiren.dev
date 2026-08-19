
import { Box, useTheme } from '@mui/material';
import { ACCENT_PRIMARY } from '../../theme/theme';

const HeroIllustration = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    
    const strokeColor = theme.palette.text.primary;
    const secondaryColor = theme.palette.text.secondary;
    const accent = ACCENT_PRIMARY;

    return (
        <Box 
            sx={{ 
                width: '100%', 
                height: '100%', 
                maxWidth: '650px', 
                margin: '0 auto', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                filter: isDark ? 'drop-shadow(0 0 40px rgba(102, 126, 234, 0.15))' : 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))'
            }}
        >
            <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <style>
                    {`
                        @keyframes float-slow {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-15px); }
                        }
                        @keyframes float-fast {
                            0%, 100% { transform: translateY(0px) rotate(0deg); }
                            50% { transform: translateY(-25px) rotate(5deg); }
                        }
                        @keyframes pulse-node {
                            0%, 100% { opacity: 0.4; r: 6; }
                            50% { opacity: 1; r: 10; }
                        }
                        @keyframes draw-line {
                            0% { stroke-dashoffset: 1000; }
                            100% { stroke-dashoffset: 0; }
                        }
                        .floating-laptop { animation: float-slow 6s ease-in-out infinite; }
                        .floating-element-1 { animation: float-fast 7s ease-in-out infinite; transform-origin: center; }
                        .floating-element-2 { animation: float-fast 5s ease-in-out infinite reverse; transform-origin: center; }
                        .animated-node { animation: pulse-node 4s infinite; }
                        .animated-path { stroke-dasharray: 1000; animation: draw-line 20s linear infinite; }
                    `}
                </style>
                
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="20" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="screen-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={isDark ? '#1a1a24' : '#f8f8fb'} />
                        <stop offset="100%" stopColor={isDark ? '#0a0a0f' : '#e8e8f0'} />
                    </linearGradient>
                </defs>

                {/* Soft glowing background orb */}
                <circle cx="300" cy="300" r="220" fill={accent} opacity={isDark ? "0.08" : "0.04"} filter="url(#glow)" />

                {/* Background Grid / Network */}
                <g opacity={isDark ? "0.15" : "0.2"}>
                    <path d="M100 200 L500 200 M100 300 L500 300 M100 400 L500 400" stroke={secondaryColor} strokeWidth="1" strokeDasharray="4 8" />
                    <path d="M200 100 L200 500 M300 100 L300 500 M400 100 L400 500" stroke={secondaryColor} strokeWidth="1" strokeDasharray="4 8" />
                </g>

                {/* Network Connections */}
                <path d="M150 200 L250 120 L400 150 L500 250" stroke={accent} strokeWidth="2" strokeDasharray="6 6" opacity="0.5" className="animated-path" />
                <path d="M100 400 L200 450 L350 420 L450 350" stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

                {/* Nodes */}
                <circle cx="150" cy="200" r="6" fill={accent} className="animated-node" />
                <circle cx="250" cy="120" r="10" fill={strokeColor} opacity="0.8" />
                <circle cx="400" cy="150" r="6" fill={accent} className="animated-node" style={{ animationDelay: '1s' }} />
                <circle cx="500" cy="250" r="12" fill={strokeColor} opacity="0.6" />

                <g className="floating-laptop">
                    {/* Laptop Screen Frame */}
                    <rect x="140" y="220" width="320" height="200" rx="16" fill={isDark ? '#000000' : '#ffffff'} stroke={strokeColor} strokeWidth="6" />
                    
                    {/* Laptop Screen Content */}
                    <rect x="156" y="236" width="288" height="150" rx="6" fill="url(#screen-grad)" />
                    
                    {/* Code Lines on Screen */}
                    <g opacity="0.8">
                        <path d="M180 260 H240" stroke={accent} strokeWidth="6" strokeLinecap="round" />
                        <path d="M180 285 H320" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                        <path d="M180 310 H280" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                        <path d="M180 335 H360" stroke={accent} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                        <path d="M180 360 H220" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                        
                        {/* Floating React/Code symbol on screen */}
                        <circle cx="380" cy="300" r="20" stroke={accent} strokeWidth="3" opacity="0.3" />
                        <ellipse cx="380" cy="300" rx="8" ry="24" stroke={accent} strokeWidth="2" transform="rotate(45 380 300)" />
                        <ellipse cx="380" cy="300" rx="8" ry="24" stroke={accent} strokeWidth="2" transform="rotate(-45 380 300)" />
                        <circle cx="380" cy="300" r="3" fill={accent} />
                    </g>
                    
                    {/* Laptop Base */}
                    <path d="M90 420 H510 C526.569 420 540 433.431 540 450 V455 C540 460.523 535.523 465 530 465 H70 C64.4772 465 60 460.523 60 455 V450 C60 433.431 73.4315 420 90 420 Z" fill={strokeColor} />
                    {/* Trackpad indentation */}
                    <rect x="260" y="425" width="80" height="12" rx="4" fill={isDark ? '#222' : '#ddd'} />
                    {/* Base shadow/edge */}
                    <path d="M70 460 H530 C535.523 460 540 464.477 540 470 V470 C540 475.523 535.523 480 530 480 H70 C64.4772 480 60 475.523 60 470 V470 C60 464.477 64.4772 460 70 460 Z" fill={isDark ? '#333' : '#bbb'} />
                </g>

                {/* Floating Tech Elements (Isometric Cubes & Symbols) */}
                <g className="floating-element-1" transform="translate(60, 240) scale(0.6)">
                    {/* Isometric Cube */}
                    <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill={isDark ? '#1a1a24' : '#ffffff'} stroke={strokeColor} strokeWidth="4" strokeLinejoin="round" />
                    <path d="M50 0 L50 50 L100 75 M0 75 L50 50" fill="none" stroke={strokeColor} strokeWidth="4" strokeLinejoin="round" />
                </g>
                
                <g className="floating-element-2" transform="translate(460, 280) scale(0.7)">
                    {/* Accent Isometric Cube */}
                    <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill={accent} opacity="0.15" stroke={accent} strokeWidth="5" strokeLinejoin="round" />
                    <path d="M50 0 L50 50 L100 75 M0 75 L50 50" fill="none" stroke={accent} strokeWidth="5" strokeLinejoin="round" />
                </g>

                <g className="floating-element-1" transform="translate(400, 70) scale(0.8)">
                    {/* Code Brackets */}
                    <text x="0" y="50" fill={strokeColor} fontSize="60" fontWeight="bold" fontFamily="monospace" opacity="0.4">{'< >'}</text>
                </g>
                
                <g className="floating-element-2" transform="translate(80, 100) scale(0.8)">
                    <text x="0" y="50" fill={accent} fontSize="60" fontWeight="bold" fontFamily="monospace" opacity="0.6">{'{ }'}</text>
                </g>
                
                <g className="floating-element-1" transform="translate(450, 420) scale(0.6)">
                    <text x="0" y="50" fill={secondaryColor} fontSize="70" fontWeight="bold" fontFamily="monospace" opacity="0.5">{'/'}</text>
                </g>
            </svg>
        </Box>
    );
};

export default HeroIllustration;
