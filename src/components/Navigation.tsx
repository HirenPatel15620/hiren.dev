
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
    useMediaQuery,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
            // Navbar visibility logic 
            const heroThreshold = window.innerHeight * 0.5;
            if (window.scrollY > heroThreshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Active section logic
            const sections = navItems.map(item => item.href.substring(1));
            let current = '';

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 200) {
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
                background: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0,0,0,0.8)', // Always keep it visible for now, or use original logic
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                transform: scrolled ? 'translateY(0)' : 'translateY(-100%)', // Use original logic
                opacity: scrolled ? 1 : 0,
                boxShadow: scrolled ? '0 4px 16px rgba(0, 0, 0, 0.4)' : 'none',
                padding: scrolled ? '1rem 0' : '1.5rem 0',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box className="nav-brand">
                        <Typography variant="h2" sx={{ fontSize: '1.8rem', fontWeight: 800 }}>
                            Hiren<span className="text-gradient">Patel</span>
                        </Typography>
                    </Box>

                    {!isMobile ? (
                        <Box component="ul" sx={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="cursor-target"
                                        sx={{
                                            position: 'relative',
                                            fontWeight: 500,
                                            padding: '0.5rem 0',
                                            color: activeSection === item.href.substring(1) ? '#6366f1' : 'inherit',
                                            textDecoration: 'none',
                                            transition: '0.2s ease',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: activeSection === item.href.substring(1) ? '100%' : '0',
                                                height: '2px',
                                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                                                transition: 'width 0.3s ease',
                                            },
                                            '&:hover': {
                                                color: '#6366f1',
                                                '&::after': {
                                                    width: '100%',
                                                }
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </Box>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className="hamburger"
                        >
                            <MenuIcon sx={{ fontSize: '2rem' }} />
                        </IconButton>
                    )}
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '100%',
                        background: 'rgba(10, 10, 15, 0.95)',
                        backdropFilter: 'blur(20px)',
                    },
                }}
            >
                <Box sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
                        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                            <CloseIcon fontSize="large" />
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
                                        padding: '1rem',
                                        textAlign: 'center',
                                        fontSize: '1.2rem',
                                        color: 'white',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <ListItemText primary={item.label} />
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}
