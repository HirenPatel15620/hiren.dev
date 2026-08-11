
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

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
                background: scrolled ? 'rgba(0, 0, 0, 0.92)' : 'rgba(0, 0, 0, 0.4)',
                backdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.04)',
                transition: 'all 0.35s ease-in-out',
                transform: 'translateY(0)',
                opacity: 1,
                pointerEvents: 'auto',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.8)' : 'none',
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
                                color: '#ffffff',
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
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
                                                    color: isActive ? '#ffffff' : '#a0a0be',
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
                                                        background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                                                        transition: 'width 0.3s ease',
                                                    },
                                                    '&:hover': {
                                                        color: '#ffffff',
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
                                    color: '#ffffff',
                                    borderColor: 'rgba(99, 102, 241, 0.4)',
                                    background: 'rgba(99, 102, 241, 0.08)',
                                    backdropFilter: 'blur(8px)',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: '#6366f1',
                                        background: 'rgba(99, 102, 241, 0.2)',
                                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                                        transform: 'translateY(-2px)',
                                    }
                                }}
                            >
                                Contact Me
                            </Button>
                        </Box>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="Open navigation menu"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className="hamburger"
                        >
                            <MenuIcon sx={{ fontSize: '2rem' }} />
                        </IconButton>
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
                        background: 'rgba(10, 10, 15, 0.96)',
                        backdropFilter: 'blur(24px)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                    },
                }}
            >
                <Box sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                            Menu
                        </Typography>
                        <IconButton onClick={handleDrawerToggle} aria-label="Close navigation menu" sx={{ color: 'white' }}>
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
                                        color: activeSection === item.href.substring(1) ? '#6366f1' : '#b4b4c5',
                                        fontWeight: activeSection === item.href.substring(1) ? 700 : 500,
                                        textDecoration: 'none',
                                        background: activeSection === item.href.substring(1) ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
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
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
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

