import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import * as opentype from 'opentype.js';
import { Box, useTheme } from '@mui/material';

interface SignatureProps {
  text: string;
  color?: string;
  fontSize?: number;
  duration?: number;
  delay?: number;
}

const Signature: React.FC<SignatureProps> = ({
  text,
  color,
  fontSize = 64, // Increased size
  duration = 2.5,
  delay = 0.5,
}) => {
  const [svgPath, setSvgPath] = useState<string>('');
  const theme = useTheme();
  
  const textColor = color || (theme.palette.mode === 'dark' ? '#fff' : '#000');

  useEffect(() => {
    let mounted = true;

    // We assume the font is in the public directory
    opentype.load('/LastoriaBoldRegular.otf', (err: any, font: any) => {
      if (err || !font) {
        console.error('Could not load font:', err);
        return;
      }
      
      // Draw at x=10, y=70 (baseline) so it fits inside the SVG safely
      const path = font.getPath(text, 10, 70, fontSize);
      
      if (mounted) {
        setSvgPath(path.toPathData(2));
      }
    });

    return () => { mounted = false; };
  }, [text, fontSize]);

  if (!svgPath) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 40 },
        left: { xs: 20, md: 40 },
        zIndex: 9999,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="400"
        height="100"
        viewBox="0 0 400 100"
        style={{ overflow: 'visible' }}
      >
        <motion.path
          d={svgPath}
          fill="none"
          stroke={textColor}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration,
            delay,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 1,
          }}
        />
      </svg>
    </Box>
  );
};

export default Signature;
