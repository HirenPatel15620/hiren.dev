
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import TextType from './animations/TextType';
import SpotlightButton from './animations/SpotlightButton';

export default function Hero() {
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
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#000000',
                padding: { xs: '6rem 0 3rem 0', md: 0 },
            }}
        >
            {/* Ambient Radial Glows */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: '450px',
                    height: '450px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '15%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />

            {/* Parallax Background */}
            <Box
                className="hero-background"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'transparent',
                    zIndex: 1,
                    transform: `translateY(${backgroundY}px)`,
                }}
            />

            <Box
                className="hero-content-wrapper"
                sx={{
                    width: '100%',
                    height: { xs: 'auto', md: '100vh' },
                    minHeight: { xs: 'auto', md: '100vh' },
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '45% 55%' },
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Box
                    className="hero-text"
                    sx={{
                        paddingLeft: { xs: '1.5rem', sm: '2.5rem', md: '8%' },
                        paddingRight: { xs: '1.5rem', sm: '2.5rem', md: 0 },
                        paddingTop: { xs: '1.5rem', md: 0 },
                        paddingBottom: { xs: '2rem', md: 0 },
                        animation: 'fadeInUp 1s ease',
                        zIndex: 3,
                        order: { xs: 2, md: 1 },
                    }}
                >
                    {/* Availability Badge */}
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.45rem 1.1rem',
                            borderRadius: '50px',
                            background: 'rgba(99, 102, 241, 0.08)',
                            border: '1px solid rgba(99, 102, 241, 0.25)',
                            color: '#a5b4fc',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            marginBottom: '1.75rem',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.1)',
                        }}
                    >
                        <Box
                            sx={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#10b981',
                                boxShadow: '0 0 10px #10b981',
                                animation: 'pulse-marker 2s ease-in-out infinite',
                            }}
                        />
                        Available for Software Engineering Roles
                    </Box>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.6rem' },
                            fontWeight: 300,
                            lineHeight: 1.25,
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
                            fontSize: { xs: '1.5rem', sm: '1.9rem', md: '2.1rem' },
                            color: 'rgba(255, 255, 255, 0.7)',
                            marginBottom: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 400,
                            letterSpacing: '0.5px',
                            height: '2.5rem',
                        }}
                    >
                        <TextType
                            text={['Software Engineer', '.NET & React Specialist', 'Full-Stack Web Developer', 'Backend & API Engineer']}
                            typingSpeed={95}
                            pauseDuration={2000}
                            showCursor
                            cursorCharacter="▎"
                            deletingSpeed={45}
                            variableSpeedEnabled={false}
                            cursorBlinkDuration={0.8}
                        />
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: '1rem', sm: '1.2rem' },
                            flexWrap: 'wrap',
                            flexDirection: { xs: 'column', sm: 'row' },
                            width: { xs: '100%', sm: 'auto' },
                        }}
                    >
                        <SpotlightButton
                            className="cursor-target"
                            href="#portfolio"
                            sx={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                                padding: '0.85rem 2rem',
                                color: '#ffffff',
                                fontWeight: 700,
                                border: 'none',
                                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                                width: { xs: '100%', sm: 'auto' },
                                textAlign: 'center',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.6)',
                                }
                            }}
                        >
                            EXPLORE PROJECTS
                        </SpotlightButton>
                        <SpotlightButton
                            className="cursor-target"
                            href="#about"
                            sx={{
                                padding: '0.85rem 1.8rem',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                color: '#e2e8f0',
                                fontWeight: 600,
                                width: { xs: '100%', sm: 'auto' },
                                textAlign: 'center',
                                '&:hover': {
                                    borderColor: '#6366f1',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                }
                            }}
                        >
                            KNOW MORE
                        </SpotlightButton>
                        <SpotlightButton
                            component="a"
                            href="/Hiren Patel.pdf"
                            target="_blank"
                            className="cursor-target"
                            sx={{
                                padding: '0.85rem 1.8rem',
                                border: '1px solid rgba(6, 182, 212, 0.3)',
                                background: 'rgba(6, 182, 212, 0.05)',
                                color: '#06b6d4',
                                fontWeight: 600,
                                width: { xs: '100%', sm: 'auto' },
                                textAlign: 'center',
                                '&:hover': {
                                    borderColor: '#06b6d4',
                                    background: 'rgba(6, 182, 212, 0.15)',
                                    boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)',
                                }
                            }}
                        >
                            📄 RESUME
                        </SpotlightButton>
                    </Box>
                </Box>

                <Box
                    className="hero-image"
                    sx={{
                        position: { xs: 'relative', md: 'absolute' },
                        right: { xs: 0, md: '3%' },
                        top: 0,
                        bottom: 0,
                        width: { xs: '100%', md: '50%' },
                        height: { xs: '380px', sm: '460px', md: '100vh' },
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        animation: 'fadeIn 1.2s ease',
                        order: { xs: 1, md: 2 },
                        zIndex: 2,
                    }}
                >
                    <Box
                        className="image-wrapper"
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={imgError ? "/images/avatar-fallback.png" : "/images/hero-profile.png"}
                            onError={() => setImgError(true)}
                            alt="Hiren Patel - Software Engineer"
                            sx={{
                                maxHeight: { xs: '100%', md: '100vh' },
                                maxWidth: '100%',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                                objectPosition: 'center bottom',
                                padding: 0,
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
                                pointerEvents: 'none',
                                background: {
                                    xs: 'linear-gradient(to bottom, transparent 40%, #000000 100%)',
                                    md: 'linear-gradient(to right, #000000 0%, transparent 25%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(to top, #000000 0%, transparent 20%)',
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
                        bottom: '30px',
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
                        display: { xs: 'none', md: 'block' }
                    }}
                >
                    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L20 24L28 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
        </Box>
    );
}

