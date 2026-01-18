
import React, { useRef, useState } from 'react';
import { Button, Box } from '@mui/material';
import type { ButtonProps } from '@mui/material';

interface SpotlightButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({ children, sx, ...props }) => {
    const divRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

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
                background: '#1a1a1a', // Default dark bg
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                ...sx,
                '&:hover': {
                    // Standard hover effect is handled by spotlight, so we can mute this or keep it subtle
                    background: '#1a1a1a',
                    ...sx && (sx as any)['&:hover'],
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
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.25), transparent 60%)`, // Spotlight color
                }}
            />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                {children}
            </Box>
        </Button>
    );
};

export default SpotlightButton;
