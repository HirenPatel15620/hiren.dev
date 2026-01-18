import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
    <MUIGlobalStyles
    styles= {{
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        html: {
            scrollBehavior: 'smooth',
            overflowX: 'hidden',
        },
        body: {
            backgroundColor: '#0a0a0f',
            color: '#ffffff',
            lineHeight: 1.6,
            overflowX: 'hidden',
            cursor: 'none',
            '@media (max-width: 640px)': {
                cursor: 'auto',
            },
            '@media (hover: none) and (pointer: coarse)': {
                cursor: 'auto',
            },
        },
        '::selection': {
            backgroundColor: 'rgba(99, 102, 241, 0.3)',
            color: '#ffffff',
        },
        '::-webkit-scrollbar': {
            width: '8px',
        },
        '::-webkit-scrollbar-track': {
            background: '#0a0a0f',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#1a1a2e',
            borderRadius: '4px',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#6366f1',
        },
        '@keyframes fadeInUp': {
            from: {
                opacity: 0,
                transform: 'translateY(30px)',
            },
            to: {
                opacity: 1,
                transform: 'translateY(0)',
            },
        },
        '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
        '@keyframes bounce': {
            '0%, 100%': {
                transform: 'translateX(-50%) translateY(0)',
            },
            '50%': {
                transform: 'translateX(-50%) translateY(10px)',
            },
        },
        '@keyframes pulse-marker': {
            '0%, 100%': {
                boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)',
            },
            '50%': {
                boxShadow: '0 0 0 8px rgba(99, 102, 241, 0.1)',
            },
        },
        '.text-gradient': {
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        },
        '.cursor-dot': {
            width: '8px',
            height: '8px',
            background: '#06b6d4',
            boxShadow: '0 0 20px #06b6d4',
            pointerEvents: 'none',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            zIndex: 10000,
            mixBlendMode: 'difference',
        },
        '.cursor-outline': {
            width: '40px',
            height: '40px',
            border: '2px solid rgba(99, 102, 241, 0.5)',
            pointerEvents: 'none',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            zIndex: 10000,
            mixBlendMode: 'difference',
            transition: 'all 0.15s ease-out',
        },
        section: {
            padding: '4rem 0',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.8s ease',
            '&.visible': {
                opacity: 1,
                transform: 'translateY(0)',
            },
        },
    }}
  />
);
