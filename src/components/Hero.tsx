
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import TypewriterText from './animations/TypewriterText';
import SpotlightButton from './animations/SpotlightButton';

export default function Hero() {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [backgroundY, setBackgroundY] = useState(0);
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setBackgroundY(window.scrollY * 0.5);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            id="home"
            component="section"
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#000000',
                padding: 0,
            }}
        >
            {/* Parallax Background */}
            <Box
                className="hero-background"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: '#000000',
                    zIndex: 1,
                    transform: `translateY(${backgroundY}px)`,
                    // Dynamic gradient handled via global styles/CSS or specific component if needed
                }}
            />

            <Box
                className="hero-content-wrapper"
                sx={{
                    width: '100%',
                    height: '100vh',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '40% 60%' },
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Box
                    className="hero-text"
                    sx={{
                        paddingLeft: { xs: '2rem', md: '8%' },
                        paddingRight: { xs: '2rem', md: 0 },
                        paddingTop: { xs: '2rem', md: 0 },
                        animation: 'fadeInUp 1s ease',
                        zIndex: 3,
                        order: { xs: 2, md: 1 },
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                            fontWeight: 300,
                            lineHeight: 1.3,
                            marginBottom: '1rem',
                            color: '#ffffff',
                            letterSpacing: '-0.5px',
                        }}
                    >
                        Hi, I am <Box component="span" className="text-gradient" sx={{ fontWeight: 800 }}>Hiren Patel</Box>.
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '0.9rem', md: '1.1rem' },
                            color: 'rgba(255, 255, 255, 0.6)',
                            marginBottom: '3rem',
                            fontWeight: 400,
                            letterSpacing: '0.5px',
                        }}
                    >
                        <TypewriterText text="Software Engineer" typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <SpotlightButton
                            className="cursor-target"
                            href="#portfolio"
                            sx={{
                                padding: '0.9rem 2rem',
                                '&:hover': {
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                }
                            }}
                        >
                            SHOW PROFILE
                        </SpotlightButton>
                        <SpotlightButton
                            className="cursor-target"
                            href="#about"
                            sx={{
                                background: '#7cb342',
                                '&:hover': {
                                    background: '#8bc34a',
                                }
                            }}
                        >
                            KNOW MORE
                        </SpotlightButton>
                        <SpotlightButton
                            component="a"
                            href="/Hiren Patel.pdf"
                            className="cursor-target"
                            sx={{
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            📥 DOWNLOAD RESUME
                        </SpotlightButton>
                    </Box>
                </Box>

                <Box
                    className="hero-image"
                    sx={{
                        position: { xs: 'relative', md: 'absolute' },
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: { xs: '100%', md: '60%' },
                        height: { xs: '50vh', md: '100%' },
                        animation: 'fadeIn 1.2s ease',
                        order: { xs: 1, md: 2 },
                    }}
                >
                    <Box
                        className="image-wrapper"
                        sx={{
                            position: 'relative',
                            height: '100%',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={imgError ? "/images/avatar-fallback.png" : "/images/hero-profile.png"}
                            onError={() => setImgError(true)}
                            alt="Hiren Patel - Software Engineer"
                            sx={{
                                width: '114%',
                                height: '109%',
                                objectFit: imgError ? 'contain' : 'cover',
                                objectPosition: 'center',
                                padding: imgError ? '2rem' : 0,
                                background: imgError ? '#000000' : 'transparent',
                            }}
                        />
                        <Box
                            className="image-overlay"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: {
                                    xs: 'linear-gradient(to bottom, transparent 0%, #000000 100%)',
                                    md: 'linear-gradient(to right, #000000 0%, transparent 40%)',
                                },
                                zIndex: 1,
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    component="a"
                    href="#about"
                    className="scroll-indicator cursor-target"
                    sx={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: '#6366f1',
                        zIndex: 3,
                        cursor: 'pointer',
                        animation: 'bounce 2s ease-in-out infinite',
                        '&:hover': {
                            color: '#8b5cf6',
                            transform: 'translateX(-50%) scale(1.1)',
                        },
                        display: { xs: 'none', md: 'block' } // Usually hidden on very small screens if content overlaps, but keeping it per design
                    }}
                >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L20 24L28 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
        </Box>
    );
}
