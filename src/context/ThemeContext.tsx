import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';

type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
    isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-theme';

function getInitialMode(): ThemeMode {
    // Check localStorage first
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;

    // Fall back to system preference
    if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
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
            // Keep loader for a brief moment after switch
            setTimeout(() => {
                setIsTransitioning(false);
            }, 500);
        }, 150);
    };

    const value = useMemo(() => ({ mode, toggleTheme, isTransitioning }), [mode, isTransitioning]);

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
