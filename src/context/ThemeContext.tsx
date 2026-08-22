import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';

type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
    isTransitioning: boolean;
    completeTransition: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-theme';

function getInitialMode(): ThemeMode {
    // Check localStorage first
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;

    return 'light'; // Default to white/light mode
}

export function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>(getInitialMode);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, mode);
        // Update the HTML data attribute for any CSS that needs it
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);

    const toggleTheme = () => {
        setIsTransitioning(true);
        // Add a tiny delay so the loader can fade in before the heavy re-render
        setTimeout(() => {
            setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
            // The loader (Preloader) will call completeTransition when it finishes its animation
        }, 150);
    };

    const completeTransition = () => setIsTransitioning(false);

    const value = useMemo(() => ({ mode, toggleTheme, isTransitioning, completeTransition }), [mode, isTransitioning]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeMode() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeMode must be used within a ThemeContextProvider');
    }
    return context;
}
