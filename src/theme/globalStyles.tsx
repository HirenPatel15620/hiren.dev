import { GlobalStyles as MUIGlobalStyles, useTheme } from '@mui/material';
import { ACCENT_GRADIENT, ACCENT_PRIMARY } from './theme';

export const GlobalStyles = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <MUIGlobalStyles
            styles={{
                '*': {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
                '*:focus-visible': {
                    outline: `2px solid ${isDark ? '#ffffff' : '#111111'} !important`,
                    boxShadow: `0 0 15px rgba(102, 126, 234, 0.85) !important`,
                    outlineOffset: '3px !important',
                    borderRadius: '4px',
                },
                html: {
                    overflowX: 'hidden',
                    backgroundColor: theme.palette.background.default,
                    transition: 'background-color 0.4s ease',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                },
                body: {
                    backgroundColor: `${theme.palette.background.default} !important`,
                    color: theme.palette.text.primary,
                    lineHeight: 1.6,
                    overflowX: 'hidden',
                    cursor: 'none',
                    transition: 'background-color 0.4s ease, color 0.4s ease',
                    '@media (max-width: 640px)': {
                        cursor: 'auto',
                    },
                    '@media (hover: none) and (pointer: coarse)': {
                        cursor: 'auto',
                    },
                },
                '::selection': {
                    backgroundColor: 'rgba(102, 126, 234, 0.4)',
                    color: '#ffffff',
                },
                // ─── Hide default native scrollbar ───
                '::-webkit-scrollbar': {
                    display: 'none',
                    width: 0,
                    height: 0,
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
                        boxShadow: `0 0 0 4px rgba(102, 126, 234, 0.3)`,
                    },
                    '50%': {
                        boxShadow: `0 0 0 8px rgba(102, 126, 234, 0.1)`,
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
                // ─── ScrollProgressBar section nav dots & labels ───
                '.scroll-nav-dot[data-active="true"]': {
                    width: '6px !important',
                    height: '6px !important',
                    background: `${ACCENT_PRIMARY} !important`,
                    boxShadow: `0 0 8px rgba(102,126,234,0.7), 0 0 16px rgba(102,126,234,0.4)`,
                },
                'a:hover .scroll-nav-label': {
                    opacity: '1 !important',
                    transform: 'translateX(0) !important',
                },
                'a:hover .scroll-nav-dot': {
                    background: `${ACCENT_PRIMARY} !important`,
                    boxShadow: `0 0 8px rgba(102,126,234,0.5)`,
                    transform: 'scale(1.5)',
                },
                '.text-gradient': {
                    background: ACCENT_GRADIENT,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.text-gradient .char': {
                    background: ACCENT_GRADIENT,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.text-gradient-cyan': {
                    background: ACCENT_GRADIENT,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.text-gradient-cyan .char': {
                    background: ACCENT_GRADIENT,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.text-gradient-amber': {
                    background: ACCENT_GRADIENT,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.text-gradient-amber .char': {
                    background: ACCENT_GRADIENT,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.glass-card': {
                    background: isDark ? 'rgba(12, 12, 18, 0.75)' : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: isDark
                        ? '0 20px 50px rgba(0, 0, 0, 0.9), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)'
                        : '0 20px 50px rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)',
                },
                '.cursor-dot': {
                    width: '8px',
                    height: '8px',
                    background: ACCENT_PRIMARY,
                    boxShadow: `0 0 20px ${ACCENT_PRIMARY}`,
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
                    border: `2px solid rgba(102, 126, 234, 0.5)`,
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
                        scrollMarginTop: '80px',
                        opacity: 0,
                        transform: 'translateY(30px)',
                        transition: 'all 0.8s ease',
                        '&.visible, &[data-visible="true"]': {
                            opacity: 1,
                            transform: 'translateY(0)',
                        },
                    },
            }}
        />
    );
};
