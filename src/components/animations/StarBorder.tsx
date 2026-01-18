import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import React from 'react';

interface StarBorderProps extends BoxProps {
    children: React.ReactNode;
    color?: string;
    speed?: string;
    borderRadius?: string;
}

const StarBorder: React.FC<StarBorderProps> = ({
    children,
    color = '#6366f1',
    speed = '4s',
    borderRadius = '16px',
    sx,
    ...props
}) => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'inline-block',
                padding: '1px',
                borderRadius: borderRadius,
                overflow: 'hidden',
                ...sx
            }}
            {...props}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '300%', // Increased to cover rotation for oblong shapes
                    height: '300%',
                    background: `conic-gradient(transparent, transparent, transparent, ${color})`,
                    animation: `star-border-rotate ${speed} linear infinite`,
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    background: '#0a0a0f',
                    borderRadius: borderRadius, // Match parent radius
                    height: '100%',
                    width: '100%',
                    backdropFilter: 'blur(10px)',
                    display: 'flex', // Ensure children fill it if needed
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default StarBorder;
