import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

export interface TextTypeProps extends TypographyProps {
    text?: string | string[];
    texts?: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    showCursor?: boolean;
    cursorCharacter?: string;
    cursorBlinkDuration?: number;
    variableSpeedEnabled?: boolean;
    variableSpeedMin?: number;
    variableSpeedMax?: number;
}

export const TextType: React.FC<TextTypeProps> = ({
    text,
    texts,
    typingSpeed = 105,
    deletingSpeed = 50,
    pauseDuration = 1900,
    showCursor = true,
    cursorCharacter = '▎',
    cursorBlinkDuration = 0.8,
    variableSpeedEnabled = false,
    variableSpeedMin = 60,
    variableSpeedMax = 120,
    sx,
    ...props
}) => {
    // Normalize input into an array of strings
    const stringArray = useMemo(() => {
        if (Array.isArray(text) && text.length > 0) return text;
        if (Array.isArray(texts) && texts.length > 0) return texts;
        if (typeof text === 'string' && text.length > 0) return [text];
        return ['Web Developer', 'Front-End Developer', 'Back-End Developer', 'Full-Stack Developer'];
    }, [text, texts]);

    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = stringArray[textIndex % stringArray.length];

        let speed = isDeleting ? deletingSpeed : typingSpeed;
        if (variableSpeedEnabled && !isDeleting) {
            speed = Math.floor(Math.random() * (variableSpeedMax - variableSpeedMin + 1)) + variableSpeedMin;
        }

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < currentFullText.length) {
                    setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
                } else {
                    // Finished typing full word, pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
                } else {
                    // Finished deleting, move to next word
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % stringArray.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [
        displayedText,
        isDeleting,
        textIndex,
        stringArray,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        variableSpeedEnabled,
        variableSpeedMin,
        variableSpeedMax
    ]);

    return (
        <Typography
            component="span"
            sx={{
                display: 'inline-block',
                position: 'relative',
                fontSize: { xs: '18px', sm: '20px', md: '22px' },
                ...sx
            }}
            {...props}
        >
            {displayedText}
            {showCursor && (
                <Box
                    component="span"
                    sx={{
                        display: 'inline-block',
                        marginLeft: '4px',
                        verticalAlign: 'baseline',
                        animation: `blink ${cursorBlinkDuration}s step-end infinite`,
                        '@keyframes blink': {
                            '0%, 100%': { opacity: 1 },
                            '50%': { opacity: 0 },
                        },
                    }}
                >
                    {cursorCharacter}
                </Box>
            )}
        </Typography>
    );
};

export default TextType;
