import { createTheme } from '@mui/material/styles';

// The single accent gradient used throughout
export const ACCENT_GRADIENT = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
export const ACCENT_PRIMARY = '#667eea';
export const ACCENT_SECONDARY = '#764ba2';

export function getTheme(mode: 'dark' | 'light') {
    const isDark = mode === 'dark';

    return createTheme({
        palette: {
            mode,
            primary: {
                main: ACCENT_PRIMARY,
            },
            secondary: {
                main: ACCENT_SECONDARY,
            },
            background: {
                default: isDark ? '#000000' : '#f5f5f7',
                paper: isDark ? '#0a0a0f' : '#ffffff',
            },
            text: {
                primary: isDark ? '#ffffff' : '#111111',
                secondary: isDark ? '#a0a0a0' : '#555555',
            },
            divider: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        },
        typography: {
            fontFamily: "'Inter', sans-serif",
            h1: {
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
            },
            h2: {
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
            },
            h3: {
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
            },
            h4: {
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
            },
            button: {
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '50px',
                        padding: '0.75rem 1.8rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        letterSpacing: '0.3px',
                        transition: 'all 0.3s ease',
                    },
                    containedPrimary: {
                        background: ACCENT_GRADIENT,
                        color: '#ffffff',
                        boxShadow: `0 4px 20px rgba(102, 126, 234, 0.35)`,
                        '&:hover': {
                            background: ACCENT_GRADIENT,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 25px rgba(102, 126, 234, 0.55)`,
                        },
                    },
                    outlined: {
                        borderColor: isDark ? 'rgba(102, 126, 234, 0.4)' : 'rgba(102, 126, 234, 0.5)',
                        color: isDark ? '#ffffff' : '#111111',
                        background: isDark ? 'rgba(102, 126, 234, 0.08)' : 'rgba(102, 126, 234, 0.06)',
                        backdropFilter: 'blur(8px)',
                        '&:hover': {
                            borderColor: ACCENT_PRIMARY,
                            backgroundColor: isDark ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.12)',
                            boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)',
                            transform: 'translateY(-2px)',
                        },
                    },
                },
            },
            MuiContainer: {
                styleOverrides: {
                    root: {
                        maxWidth: '1200px !important',
                        padding: '0 2rem',
                    },
                },
            },
        },
    });
}
