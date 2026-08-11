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
            default: '#000000', // pure pitch black
            paper: '#0c0c10',   // dark pitch paper
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
                    borderRadius: '50px',
                    padding: '0.75rem 1.8rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    letterSpacing: '0.3px',
                    transition: 'all 0.3s ease',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                    color: '#ffffff',
                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(99, 102, 241, 0.55)',
                    },
                },
                outlined: {
                    borderColor: 'rgba(99, 102, 241, 0.4)',
                    color: '#ffffff',
                    background: 'rgba(99, 102, 241, 0.08)',
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                        borderColor: '#6366f1',
                        backgroundColor: 'rgba(99, 102, 241, 0.2)',
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
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
