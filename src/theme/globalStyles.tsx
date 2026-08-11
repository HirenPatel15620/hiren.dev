import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
    <MUIGlobalStyles
        styles={{
            '*': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
            '*:focus-visible': {
                outline: '2px solid #ffffff !important',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.85) !important',
                outlineOffset: '3px !important',
                borderRadius: '4px',
            },
            html: {
                scrollBehavior: 'smooth',
                overflowX: 'hidden',
                backgroundColor: '#000000',
            },
            body: {
                backgroundColor: '#000000 !important',
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
                backgroundColor: 'rgba(99, 102, 241, 0.4)',
                color: '#ffffff',
            },
            '::-webkit-scrollbar': {
                width: '8px',
            },
            '::-webkit-scrollbar-track': {
                background: '#000000',
            },
            '::-webkit-scrollbar-thumb': {
                background: '#181824',
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
                    boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.3)',
                },
                '50%': {
                    boxShadow: '0 0 0 8px rgba(99, 102, 241, 0.1)',
                },
            },
            '@keyframes meshFloat1': {
                '0%, 100%': {
                    transform: 'translate(0px, 0px) scale(1)',
                },
                '33%': {
                    transform: 'translate(40px, -60px) scale(1.12)',
                },
                '66%': {
                    transform: 'translate(-30px, 30px) scale(0.92)',
                },
            },
            '@keyframes meshFloat2': {
                '0%, 100%': {
                    transform: 'translate(0px, 0px) scale(1)',
                },
                '33%': {
                    transform: 'translate(-50px, 40px) scale(0.9)',
                },
                '66%': {
                    transform: 'translate(35px, -35px) scale(1.15)',
                },
            },
            '.text-gradient': {
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            },
            '.text-gradient-cyan': {
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            },
            '.text-gradient-amber': {
                background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            },
            '.glass-card': {
                background: 'rgba(12, 12, 18, 0.75)',
                backdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
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
