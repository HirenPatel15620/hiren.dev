
import { useState, useEffect } from 'react';
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    Link,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Button,
    useMediaQuery,
    useTheme,
    SvgIcon
} from '@mui/material';
import { useThemeMode } from '../context/ThemeContext';
import { ACCENT_GRADIENT, ACCENT_PRIMARY } from '../theme/theme';

const MenuIcon = (props: any) => (
    <SvgIcon {...props}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </SvgIcon>
);

const CloseIcon = (props: any) => (
    <SvgIcon {...props}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </SvgIcon>
);

// Sun icon for light mode
const SunIcon = (props: any) => (
    <SvgIcon {...props}>
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
    </SvgIcon>
);

// Moon icon for dark mode
const MoonIcon = (props: any) => (
    <SvgIcon {...props}>
        <path d="M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z" />
    </SvgIcon>
);

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { mode, toggleTheme } = useThemeMode();
    const isDark = mode === 'dark';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = navItems.map(item => item.href.substring(1));
            let current = '';

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 180) {
                        current = sectionId;
                    }
                }
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setActiveSection(targetId);
            setMobileOpen(false);
        }
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: scrolled
                    ? (isDark ? 'rgba(0, 0, 0, 0.92)' : 'rgba(245, 245, 247, 0.92)')
                    : (isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(245, 245, 247, 0.4)'),
                backdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
                borderBottom: scrolled
                    ? `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`
                    : `1px solid ${isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)'}`,
                transition: 'all 0.35s ease-in-out',
                transform: 'translateY(0)',
                opacity: 1,
                pointerEvents: 'auto',
                boxShadow: scrolled
                    ? (isDark ? '0 10px 30px -10px rgba(0, 0, 0, 0.8)' : '0 10px 30px -10px rgba(0, 0, 0, 0.08)')
                    : 'none',
                padding: scrolled ? '0.5rem 0' : '0.8rem 0',
                zIndex: 1100,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Brand */}
                    <Box
                        component="a"
                        href="#home"
                        onClick={(e: any) => handleNavClick(e, '#home')}
                        className="nav-brand cursor-target"
                        sx={{ textDecoration: 'none' }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '1.4rem', sm: '1.7rem' },
                                fontWeight: 800,
                                color: theme.palette.text.primary,
                                letterSpacing: '-0.5px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.2rem',
                            }}
                        >
                            Hiren <span className="text-gradient">Patel</span>
                        </Typography>
                    </Box>

                    {/* Desktop Navigation Links */}
                    {!isMobile ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <Box component="ul" sx={{ display: 'flex', gap: '1.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href.substring(1);
                                    return (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                onClick={(e) => handleNavClick(e, item.href)}
                                                className="cursor-target"
                                                sx={{
                                                    position: 'relative',
                                                    fontWeight: isActive ? 600 : 500,
                                                    fontSize: '0.92rem',
                                                    padding: '0.5rem 0',
                                                    color: isActive
                                                        ? theme.palette.text.primary
                                                        : theme.palette.text.secondary,
                                                    textDecoration: 'none',
                                                    transition: 'all 0.25s ease',
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: 0,
                                                        width: isActive ? '100%' : '0',
                                                        height: '2px',
                                                        borderRadius: '2px',
                                                        background: ACCENT_GRADIENT,
                                                        transition: 'width 0.3s ease',
                                                    },
                                                    '&:hover': {
                                                        color: theme.palette.text.primary,
                                                        '&::after': {
                                                            width: '100%',
                                                        }
                                                    }
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </Box>

                            {/* Theme Toggle Button */}
                            <IconButton
                                onClick={toggleTheme}
                                className="cursor-target"
                                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                                sx={{
                                    color: theme.palette.text.secondary,
                                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'}`,
                                    borderRadius: '12px',
                                    width: '40px',
                                    height: '40px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: ACCENT_PRIMARY,
                                        borderColor: ACCENT_PRIMARY,
                                        background: isDark ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.08)',
                                        transform: 'rotate(20deg)',
                                    }
                                }}
                            >
                                {isDark ? <SunIcon sx={{ fontSize: '1.2rem' }} /> : <MoonIcon sx={{ fontSize: '1.2rem' }} />}
                            </IconButton>

                            <Button
                                component="a"
                                href="#contact"
                                onClick={(e: any) => handleNavClick(e, '#contact')}
                                className="cursor-target"
                                variant="outlined"
                                size="small"
                                sx={{
                                    borderRadius: '50px',
                                    padding: '0.45rem 1.25rem',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    borderColor: isDark ? 'rgba(102, 126, 234, 0.4)' : 'rgba(102, 126, 234, 0.5)',
                                    background: isDark ? 'rgba(102, 126, 234, 0.08)' : 'rgba(102, 126, 234, 0.06)',
                                    backdropFilter: 'blur(8px)',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: ACCENT_PRIMARY,
                                        background: isDark ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.12)',
                                        boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)',
                                        transform: 'translateY(-2px)',
                                    }
                                }}
                            >
                                Contact Me
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {/* Mobile theme toggle */}
                            <IconButton
                                onClick={toggleTheme}
                                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                                sx={{
                                    color: theme.palette.text.secondary,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {isDark ? <SunIcon sx={{ fontSize: '1.3rem' }} /> : <MoonIcon sx={{ fontSize: '1.3rem' }} />}
                            </IconButton>
                            <IconButton
                                color="inherit"
                                aria-label="Open navigation menu"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className="hamburger"
                                sx={{ color: theme.palette.text.primary }}
                            >
                                <MenuIcon sx={{ fontSize: '2rem' }} />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '280px',
                        background: isDark ? 'rgba(10, 10, 15, 0.96)' : 'rgba(245, 245, 247, 0.96)',
                        backdropFilter: 'blur(24px)',
                        borderLeft: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
                    },
                }}
            >
                <Box sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                            Menu
                        </Typography>
                        <IconButton onClick={handleDrawerToggle} aria-label="Close navigation menu" sx={{ color: theme.palette.text.primary }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    sx={{
                                        width: '100%',
                                        padding: '0.85rem 1rem',
                                        borderRadius: '8px',
                                        fontSize: '1.05rem',
                                        color: activeSection === item.href.substring(1) ? ACCENT_PRIMARY : theme.palette.text.secondary,
                                        fontWeight: activeSection === item.href.substring(1) ? 700 : 500,
                                        textDecoration: 'none',
                                        background: activeSection === item.href.substring(1)
                                            ? 'rgba(102, 126, 234, 0.1)'
                                            : 'transparent',
                                        display: 'block',
                                    }}
                                >
                                    <ListItemText primary={item.label} />
                                </Link>
                            </ListItem>
                        ))}
                    </List>

                    <Button
                        component="a"
                        href="#contact"
                        onClick={(e: any) => handleNavClick(e, '#contact')}
                        fullWidth
                        variant="contained"
                        sx={{
                            marginTop: '2rem',
                            borderRadius: '50px',
                            padding: '0.75rem',
                            background: ACCENT_GRADIENT,
                            fontWeight: 600,
                            textTransform: 'none',
                        }}
                    >
                        Get In Touch
                    </Button>
                </Box>
            </Drawer>
        </AppBar>
    );
}
