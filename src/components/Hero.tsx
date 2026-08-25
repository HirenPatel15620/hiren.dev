import { Box, Typography, useTheme } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import TextType from './animations/TextType';
import TextReveal from './animations/TextReveal';
import SpotlightButton from './animations/SpotlightButton';
import ConfettiBackground from './animations/ConfettiBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { ACCENT_GRADIENT, ACCENT_PRIMARY } from '../theme/theme';

export default function Hero() {
    const [backgroundY, setBackgroundY] = useState(0);
    const [imgError, setImgError] = useState(false);
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setBackgroundY(window.scrollY * 0.5);
        };
        window.addEventListener('scroll', handleScroll);
        
        // Disintegration/Dissolve effect on scroll for Hero image
        if (imageRef.current && imageContainerRef.current) {
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: imageContainerRef.current,
                    start: "top 30%",
                    end: "bottom top",
                    scrub: 1, // Smooth scrubbing
                },
                y: 100,
                scale: 0.85,
                opacity: 0,
                filter: "blur(20px)",
                rotation: 2,
                ease: "power2.inOut"
            });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
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
                background: theme.palette.background.default,
                padding: { xs: '6rem 0 3rem 0', md: 0 },
                transition: 'background 0.4s ease',
            }}
        >

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
            >
                <ConfettiBackground />
            </Box>

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
                    className="hero-text animate-fade-in-up"
                    sx={{
                        paddingLeft: { xs: '1.5rem', sm: '2.5rem', md: '8%' },
                        paddingRight: { xs: '1.5rem', sm: '2.5rem', md: 0 },
                        paddingTop: { xs: '1.5rem', md: 0 },
                        paddingBottom: { xs: '2rem', md: 0 },
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
                            background: isDark ? 'rgba(102, 126, 234, 0.08)' : 'rgba(102, 126, 234, 0.06)',
                            border: `1px solid ${isDark ? 'rgba(102, 126, 234, 0.25)' : 'rgba(102, 126, 234, 0.3)'}`,
                            color: isDark ? '#a5b4fc' : ACCENT_PRIMARY,
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            marginBottom: '1.75rem',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.1)',
                        }}
                    >
                        <Box
                            sx={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: isDark ? '#a0a0a0' : '#666',
                                boxShadow: isDark ? '0 0 10px rgba(160,160,160,0.5)' : '0 0 10px rgba(100,100,100,0.3)',
                                animation: 'pulse-marker 2s ease-in-out infinite',
                            }}
                        />
                        Available for Software Engineering Roles
                    </Box>

                    <TextReveal
                        as={Typography}
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.6rem' },
                            fontWeight: 300,
                            lineHeight: 1.25,
                            marginBottom: '1rem',
                            color: theme.palette.text.primary,
                            letterSpacing: '-0.5px',
                        }}
                    >
                        Hi, I am <Box component="span" className="text-gradient" sx={{ fontWeight: 800 }}>Hiren Patel</Box>.
                    </TextReveal>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '1.9rem', md: '2.1rem' },
                            color: theme.palette.text.secondary,
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
                            spotlightColor="rgba(236, 72, 153, 0.45)"
                            sx={{
                                background: ACCENT_GRADIENT,
                                padding: '0.85rem 2rem',
                                color: '#ffffff',
                                fontWeight: 700,
                                border: 'none',
                                boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
                                width: { xs: '100%', sm: 'auto' },
                                textAlign: 'center',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.6)',
                                }
                            }}
                        >
                            EXPLORE PROJECTS
                        </SpotlightButton>
                        <SpotlightButton
                            className="cursor-target"
                            href="#about"
                            spotlightColor="rgba(16, 185, 129, 0.45)"
                            sx={{
                                padding: '0.85rem 1.8rem',
                                background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
                                color: theme.palette.text.primary,
                                fontWeight: 600,
                                width: { xs: '100%', sm: 'auto' },
                                textAlign: 'center',
                                '&:hover': {
                                    borderColor: ACCENT_PRIMARY,
                                    background: 'rgba(102, 126, 234, 0.1)',
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
                            spotlightColor="rgba(245, 158, 11, 0.45)"
                            sx={{
                                padding: '0.85rem 1.8rem',
                                border: `1px solid ${isDark ? 'rgba(160, 160, 160, 0.3)' : 'rgba(100, 100, 100, 0.3)'}`,
                                background: isDark ? 'rgba(160, 160, 160, 0.05)' : 'rgba(100, 100, 100, 0.05)',
                                color: theme.palette.text.secondary,
                                fontWeight: 600,
                                width: { xs: '100%', sm: 'auto' },
                                textAlign: 'center',
                                '&:hover': {
                                    borderColor: theme.palette.text.primary,
                                    background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                                    boxShadow: isDark ? '0 0 15px rgba(255,255,255,0.1)' : '0 0 15px rgba(0,0,0,0.08)',
                                }
                            }}
                        >
                            📄 RESUME
                        </SpotlightButton>
                    </Box>
                </Box>

                <Box
                    ref={imageContainerRef}
                    className="hero-image animate-fade-in"
                    sx={{
                        position: { xs: 'relative', md: 'absolute' },
                        right: { xs: 0, md: '2%' },
                        bottom: 0,
                        width: { xs: '100%', md: '48%' },
                        height: { xs: '450px', sm: '550px', md: '92vh' },
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        order: { xs: 1, md: 2 },
                        zIndex: 2,
                    }}
                >
                    <Box
                        ref={imageRef}
                        component="img"
                        src={imgError ? "/images/avatar-fallback.png" : "/images/hero-profile-transparent.png"}
                        onError={() => setImgError(true)}
                        alt="Hiren Patel - Software Engineer"
                        sx={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            objectPosition: 'center bottom',
                            padding: 0,
                            filter: isDark ? 'drop-shadow(0 0 30px rgba(102, 126, 234, 0.15))' : 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))',
                            transformOrigin: 'bottom center',
                        }}
                    />
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
                        color: ACCENT_PRIMARY,
                        zIndex: 3,
                        cursor: 'pointer',
                        animation: 'bounce 2s ease-in-out infinite',
                        '&:hover': {
                            color: theme.palette.text.primary,
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
