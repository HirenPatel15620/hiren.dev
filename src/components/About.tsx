import { Box, Container, Typography, Grid, Link, useTheme } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';
import TextReveal from './animations/TextReveal';
import { getExperienceYears } from '../utils/experience';
import { ACCENT_PRIMARY, ACCENT_GRADIENT } from '../theme/theme';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
    { value: `${getExperienceYears('2023-01-25')}+`, label: 'Years Experience' },
    { value: '3+', label: 'Enterprise Apps' },
    { value: '8.4', suffix: ' (out of 10)', label: 'B.E. Degree CGPA' },
    { value: '100%', label: 'Quality & Clean Code' }
];

export default function About() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement[]>([]);
    const contentRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        gsap.fromTo(headerRef.current, 
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.45, ease: 'power3.out',
                scrollTrigger: { toggleActions: 'play reverse play reverse', trigger: headerRef.current, start: 'top 85%' }
            }
        );

        gsap.fromTo(statsRef.current,
            { y: 30, opacity: 0, scale: 0.9 },
            {
                y: 0, opacity: 1, scale: 1, duration: 0.35, stagger: 0.06, ease: 'back.out(1.5)',
                scrollTrigger: { toggleActions: 'play reverse play reverse', trigger: statsRef.current[0], start: 'top 85%' }
            }
        );

        contentRef.current.forEach((card) => {
            if (card) {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.45, ease: 'power3.out',
                        scrollTrigger: { toggleActions: 'play reverse play reverse', trigger: card, start: 'top 85%' }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const statSpotlightColors = [
        'rgba(236, 72, 153, 0.15)',
        'rgba(16, 185, 129, 0.15)',
        'rgba(245, 158, 11, 0.15)',
        'rgba(59, 130, 246, 0.15)'
    ];

    return (
        <Box
            id="about"
            component="section"
            ref={sectionRef}
            sx={{
                background: isDark
                    ? 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)'
                    : 'linear-gradient(180deg, #f5f5f7 0%, #efefef 100%)',
                position: 'relative',
                padding: { xs: '4rem 0', md: '6rem 0' },
                transition: 'background 0.4s ease',
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box ref={headerRef} sx={{ width: '100%', marginBottom: { xs: '3rem', md: '4rem' } }}>
                    <TextReveal
                        as={Typography}
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                            fontWeight: 700,
                            marginBottom: '1rem',
                            letterSpacing: '-0.02em',
                            color: theme.palette.text.primary,
                        }}
                    >
                        About <span className="text-gradient">Me</span>
                    </TextReveal>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: theme.palette.text.secondary }}>
                        Passionate Software Engineer bridging enterprise backend logic with responsive frontend UIs
                    </Typography>
                </Box>

                {/* Key Stat Cards Grid */}
                <Grid container spacing={3} sx={{ marginBottom: { xs: '3rem', md: '4rem' } }}>
                    {statsData.map((stat, idx) => (
                        <Grid key={idx} size={{ xs: 6, sm: 3 }} ref={(el) => { if(el) statsRef.current[idx] = el; }}>
                            <SpotlightCard
                                className="cursor-target"
                                spotlightColor={statSpotlightColors[idx % statSpotlightColors.length]}
                                sx={{
                                    background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}`,
                                    borderRadius: '16px',
                                    padding: { xs: '1.25rem 1rem', sm: '1.75rem 1.25rem' },
                                    textAlign: 'center',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        borderColor: ACCENT_PRIMARY,
                                        boxShadow: `0 8px 25px -5px rgba(102, 126, 234, 0.2)`,
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginBottom: '0.25rem' }}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: { xs: '2rem', sm: '2.5rem' },
                                            fontWeight: 800,
                                            background: ACCENT_GRADIENT,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    {stat.suffix && (
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                                fontWeight: 600,
                                                color: theme.palette.text.secondary,
                                                marginLeft: '6px',
                                            }}
                                        >
                                            {stat.suffix}
                                        </Typography>
                                    )}
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                        color: theme.palette.text.secondary,
                                        fontWeight: 500,
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                            </SpotlightCard>
                        </Grid>
                    ))}
                </Grid>

                {/* Main Content Grid */}
                <Grid container spacing={4}>
                    {/* Professional Background */}
                    <Grid size={{ xs: 12, md: 6 }} ref={(el: any) => { if(el) contentRef.current[0] = el; }}>
                        <SpotlightCard
                            className="cursor-target"
                            spotlightColor="rgba(236, 72, 153, 0.15)"
                            sx={{
                                background: isDark ? 'rgba(20, 20, 20, 0.65)' : 'rgba(255, 255, 255, 0.75)',
                                padding: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                                borderRadius: '20px',
                                backdropFilter: 'blur(12px)',
                                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)'}`,
                                transition: '0.35s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: ACCENT_PRIMARY,
                                    boxShadow: '0 12px 30px rgba(102, 126, 234, 0.15)',
                                }
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: '1.4rem', sm: '1.6rem' },
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                }}
                                className="text-gradient"
                            >
                                Professional Background
                            </Typography>
                            <Typography sx={{ color: theme.palette.text.secondary, marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '0.98rem' }}>
                                I am a dedicated Software Engineer with over {getExperienceYears('2023-01-25')} years of experience in developing robust and scalable enterprise web applications. My expertise spans .NET Core, Entity Framework, C#, and React with TypeScript.
                            </Typography>
                            <Typography sx={{ color: theme.palette.text.secondary, marginBottom: '2rem', lineHeight: 1.8, fontSize: '0.98rem' }}>
                                I specialize in building high-throughput RESTful Web APIs, optimizing database queries, implementing automated unit testing (xUnit / SonarQube), and creating responsive frontend dashboards.
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                {[
                                    { label: 'Location', value: 'Ahmedabad, India', href: undefined },
                                    { label: 'LinkedIn', value: '@hiren-patel', href: 'https://www.linkedin.com/in/hiren-patel-388a83236' }
                                ].map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '0.85rem 1.25rem',
                                            background: isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.025)',
                                            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                            borderRadius: '12px',
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 600, color: ACCENT_PRIMARY, fontSize: '0.9rem' }}>
                                            {item.label}
                                        </Typography>
                                        <Typography sx={{ color: theme.palette.text.primary, fontSize: '0.9rem', wordBreak: 'break-all' }}>
                                            {item.href ? (
                                                <Link href={item.href} target="_blank" sx={{ color: ACCENT_PRIMARY, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                                    {item.value}
                                                </Link>
                                            ) : item.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </SpotlightCard>
                    </Grid>

                    {/* Education & Personal Details */}
                    <Grid size={{ xs: 12, md: 6 }} ref={(el: any) => { if(el) contentRef.current[1] = el; }}>
                        <SpotlightCard
                            className="cursor-target"
                            spotlightColor="rgba(16, 185, 129, 0.15)"
                            sx={{
                                background: isDark ? 'rgba(20, 20, 20, 0.65)' : 'rgba(255, 255, 255, 0.75)',
                                padding: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                                borderRadius: '20px',
                                backdropFilter: 'blur(12px)',
                                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)'}`,
                                transition: '0.35s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: ACCENT_PRIMARY,
                                    boxShadow: '0 12px 30px rgba(102, 126, 234, 0.15)',
                                }
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: '1.4rem', sm: '1.6rem' },
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                }}
                                className="text-gradient"
                            >
                                Education & Profile
                            </Typography>

                            <Box
                                sx={{
                                    background: isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.02)',
                                    padding: '1.5rem',
                                    borderRadius: '14px',
                                    marginBottom: '1.5rem',
                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    borderLeft: `4px solid ${ACCENT_PRIMARY}`,
                                    borderLeftWidth: '4px',
                                }}
                            >
                                <Typography variant="h4" sx={{ color: theme.palette.text.primary, fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                                    B.E. in Information & Communication Tech (ICT)
                                </Typography>
                                <Typography sx={{ color: ACCENT_PRIMARY, fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                                    Adani Institute of Infrastructure Engineering (GTU)
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: theme.palette.text.secondary, fontSize: '0.85rem' }}>
                                    <span>JULY 2019 – MAY 2023</span>
                                    <span style={{ color: isDark ? '#c0c0c0' : '#333', fontWeight: 600 }}>
                                        CGPA: 8.4 <span style={{ fontSize: '0.75rem', fontWeight: 500, color: theme.palette.text.secondary }}>(out of 10)</span>
                                    </span>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    background: isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.02)',
                                    padding: '1.5rem',
                                    borderRadius: '14px',
                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                }}
                            >
                                <Typography variant="h4" sx={{ color: theme.palette.text.primary, fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
                                    Quick Details
                                </Typography>
                                {[
                                    { label: 'Date of Birth', value: '15-June-2002' },
                                    { label: 'Languages', value: 'English, Hindi, Gujarati' },
                                    { label: 'Interests', value: 'Sports, Tech Exploring, Travel' },
                                    { label: 'Blood Group', value: 'O+' }
                                ].map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '0.65rem',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <Typography component="span" sx={{ color: theme.palette.text.secondary, fontWeight: 500, minWidth: '110px' }}>
                                            {item.label}:
                                        </Typography>
                                        <Typography component="span" sx={{ color: theme.palette.text.primary, fontWeight: 500, textAlign: 'right' }}>
                                            {item.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </SpotlightCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
