import { useEffect, useState, useCallback, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import { getTheme, ACCENT_PRIMARY } from './theme/theme';
import { GlobalStyles } from './theme/globalStyles';
import { ThemeContextProvider, useThemeMode } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TargetCursor from './components/TargetCursor';
import Preloader from './components/loading/Preloader';

function AppContent() {
  const { mode, isTransitioning, completeTransition } = useThemeMode();
  const theme = useMemo(() => getTheme(mode), [mode]);

  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
    setShowPreloader(false);
  }, []);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.setAttribute('data-visible', 'true');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      
      {showPreloader && (
        <Preloader onComplete={handlePreloaderComplete} themeMode={mode} />
      )}

      {/* Theme Transition Loader Overlay */}
      {isTransitioning && (
        <Preloader onComplete={completeTransition} themeMode={mode} isThemeTransition={true} />
      )}

      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      <Navigation />

      <main style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
