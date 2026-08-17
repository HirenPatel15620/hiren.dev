
import React, { useRef, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import type { BoxProps } from '@mui/material';

interface SpotlightCardProps extends BoxProps {
    children: React.ReactNode;
    spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    spotlightColor,
    sx,
    ...props
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const defaultSpotlight = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)';
    const color = spotlightColor || defaultSpotlight;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <Box
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                background: isDark ? 'rgba(20, 20, 20, 0.6)' : 'rgba(255, 255, 255, 0.7)',
                transition: '0.3s ease',
                ...sx,
            }}
            {...props}
        >
            <Box
                sx={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: opacity,
                    transition: 'opacity 0.3s',
                    zIndex: 1,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`,
                }}
            />
            <Box sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
                {children}
            </Box>
        </Box>
    );
};

export default SpotlightCard;
