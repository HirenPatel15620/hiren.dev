
import React, { useRef, useState } from 'react';
import { Button, Box, useTheme } from '@mui/material';
import type { ButtonProps } from '@mui/material';

interface SpotlightButtonProps extends ButtonProps {
    children: React.ReactNode;
    target?: string;
    href?: string;
    component?: any;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({ children, sx, ...props }) => {
    const divRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
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
        <Button
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                transition: '0.2s ease',
                background: isDark ? '#1a1a1a' : '#f0f0f2',
                color: theme.palette.text.primary,
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                ...sx,
                '&:hover': {
                    background: (sx as any)?.background || (isDark ? '#1a1a1a' : '#f0f0f2'),
                    ...((sx as any)?.['&:hover'] || {}),
                }
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
                    transition: 'opacity 0.2s',
                    zIndex: 0,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(102, 126, 234, 0.25), transparent 60%)`,
                }}
            />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                {children}
            </Box>
        </Button>
    );
};

export default SpotlightButton;
