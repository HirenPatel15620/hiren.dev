import { Typography, Box } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import { useState, useEffect } from 'react';

interface TypewriterTextProps extends TypographyProps {
    text: string;
    typingSpeed?: number;
    pauseDuration?: number;
    showCursor?: boolean;
    cursorCharacter?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    typingSpeed = 100,
    pauseDuration = 500,
    showCursor = true,
    cursorCharacter,
    sx,
    ...props
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        // Initial delay
        timeoutId = setTimeout(() => {
            setIsTyping(true);
        }, pauseDuration);

        return () => clearTimeout(timeoutId);
    }, [pauseDuration]);

    useEffect(() => {
        if (!isTyping) return;

        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, typingSpeed);

        return () => clearInterval(intervalId);
    }, [isTyping, text, typingSpeed]);

    return (
        <Typography
            component="span"
            sx={{
                display: 'inline-block',
                position: 'relative',
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
                        verticalAlign: 'middle',
                        animation: 'blink 1s step-end infinite',
                        '@keyframes blink': {
                            '0%, 100%': { opacity: 1 },
                            '50%': { opacity: 0 },
                        },
                        // If cursorCharacter is provided, we just style it as text, otherwise we use the box style
                        ...(cursorCharacter ? {} : {
                            width: '2px', // Thin cursor
                            height: '1em',
                            background: 'currentColor',
                        })
                    }}
                >
                    {cursorCharacter}
                </Box>
            )}
        </Typography>
    );
};

export default TypewriterText;
