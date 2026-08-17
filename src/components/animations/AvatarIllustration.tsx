import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ACCENT_PRIMARY } from '../../theme/theme';

const AvatarIllustration = () => {
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
                maxWidth: '550px', 
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
                            50% { transform: translateY(-20px) rotate(5deg); }
                        }
                        @keyframes pulse-node {
                            0%, 100% { opacity: 0.5; r: 5; }
                            50% { opacity: 1; r: 8; }
                        }
                        .floating-avatar { animation: float-slow 6s ease-in-out infinite; }
                        .floating-element { animation: float-fast 7s ease-in-out infinite; transform-origin: center; }
                        .animated-node { animation: pulse-node 4s infinite; }
                    `}
                </style>
                
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="25" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="avatar-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={isDark ? '#1a1a24' : '#f0f0f5'} />
                        <stop offset="100%" stopColor={isDark ? '#0a0a0f' : '#e0e0e5'} />
                    </linearGradient>
                </defs>

                {/* Soft glowing background orb */}
                <circle cx="300" cy="300" r="220" fill={accent} opacity={isDark ? "0.08" : "0.04"} filter="url(#glow)" />

                {/* Background Tech Rings */}
                <circle cx="300" cy="300" r="260" stroke={secondaryColor} strokeWidth="1" strokeDasharray="4 12" opacity="0.3" />
                <circle cx="300" cy="300" r="180" stroke={accent} strokeWidth="1" strokeDasharray="10 20" opacity="0.4" className="floating-element" style={{ animationDuration: '20s' }} />

                {/* Floating Tech Elements */}
                <g className="floating-element" transform="translate(100, 150)">
                    <rect x="0" y="0" width="40" height="40" rx="8" fill="none" stroke={strokeColor} strokeWidth="3" opacity="0.5" />
                    <circle cx="20" cy="20" r="6" fill={accent} />
                </g>
                
                <g className="floating-element" transform="translate(450, 180)" style={{ animationDelay: '1s' }}>
                    <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke={accent} strokeWidth="3" opacity="0.8" />
                    <circle cx="20" cy="20" r="4" fill={strokeColor} />
                </g>

                <g className="floating-element" transform="translate(120, 400)" style={{ animationDelay: '2s' }}>
                    <text x="0" y="30" fill={strokeColor} fontSize="40" fontWeight="bold" fontFamily="monospace" opacity="0.4">{'</>'}</text>
                </g>

                <g className="floating-element" transform="translate(420, 380)" style={{ animationDelay: '0.5s' }}>
                    <text x="0" y="30" fill={accent} fontSize="50" fontWeight="bold" fontFamily="monospace" opacity="0.5">{'{ }'}</text>
                </g>

                {/* Main Avatar / Developer Figure */}
                <g className="floating-avatar">
                    {/* Body / Shoulders */}
                    <path d="M180 480 C180 380 220 330 300 330 C380 330 420 380 420 480" fill="url(#avatar-grad)" stroke={strokeColor} strokeWidth="6" strokeLinecap="round" />
                    
                    {/* Neck / Collar */}
                    <path d="M260 330 L260 350 C260 370 340 370 340 350 L340 330" fill="none" stroke={accent} strokeWidth="4" />
                    
                    {/* Head */}
                    <circle cx="300" cy="240" r="70" fill={isDark ? '#111' : '#fff'} stroke={strokeColor} strokeWidth="6" />
                    
                    {/* Headset / Tech Wearable */}
                    <path d="M215 240 C215 190 250 155 300 155 C350 155 385 190 385 240" fill="none" stroke={accent} strokeWidth="8" strokeLinecap="round" />
                    <rect x="210" y="230" width="15" height="40" rx="6" fill={strokeColor} />
                    <rect x="375" y="230" width="15" height="40" rx="6" fill={strokeColor} />
                    <path d="M380 260 L410 280" fill="none" stroke={strokeColor} strokeWidth="5" strokeLinecap="round" />
                    <circle cx="410" cy="280" r="6" fill={accent} />

                    {/* Visor / Glasses */}
                    <rect x="250" y="210" width="100" height="36" rx="18" fill={accent} opacity="0.2" />
                    <rect x="250" y="210" width="100" height="36" rx="18" fill="none" stroke={accent} strokeWidth="4" />
                    
                    {/* Glowing nodes on body */}
                    <circle cx="300" cy="400" r="16" fill={isDark ? '#000' : '#fff'} stroke={accent} strokeWidth="4" />
                    <circle cx="300" cy="400" r="6" fill={accent} className="animated-node" />
                    <path d="M300 416 L300 480" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
                </g>

                {/* Front Tech Console/Keyboard Outline */}
                <path d="M120 520 L480 520 L450 580 L150 580 Z" fill={isDark ? '#111' : '#eee'} stroke={strokeColor} strokeWidth="4" strokeLinejoin="round" />
                <path d="M160 540 L440 540" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                <path d="M200 560 L400 560" fill="none" stroke={secondaryColor} strokeWidth="4" strokeLinecap="round" opacity="0.6" />

            </svg>
        </Box>
    );
};

export default AvatarIllustration;
