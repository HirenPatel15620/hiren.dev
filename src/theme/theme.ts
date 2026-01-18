import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6366f1', // accent-primary
        },
        secondary: {
            main: '#8b5cf6', // accent-secondary
        },
        background: {
            default: '#0a0a0f', // bg-primary
            paper: '#141420',   // bg-secondary
        },
        text: {
            primary: '#ffffff',
            secondary: '#b4b4c5',
        },
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
                    borderRadius: 0,
                    padding: '0.9rem 2rem',
                    fontSize: '0.75rem',
                },
                containedPrimary: {
                    backgroundColor: '#7cb342',
                    '&:hover': {
                        backgroundColor: '#8bc34a',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(124, 179, 66, 0.4)',
                    },
                },
                outlined: {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
