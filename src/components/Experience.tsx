import { Box, Container, Typography, Chip, useTheme } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';
import TextReveal from './animations/TextReveal';
import { getExperienceYears } from '../utils/experience';
import { ACCENT_PRIMARY } from '../theme/theme';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
    {
        role: 'Software Engineer',
        company: 'Tatasoft',
        location: 'Ahmedabad, India',
        period: `1st Jul 2023 – PRESENT (${getExperienceYears('2023-07-01')}+ YEARS)`,
        highlights: [
            'Architected and implemented high-throughput REST APIs in .NET Core for enterprise FX trading & risk management.',
            'Engineered complex SQL stored procedures, Entity Framework LINQ queries, and optimized database indexing.',
            'Integrated SonarQube static code analysis, Sentry error tracking, and automated xUnit unit test coverage.',
            'Collaborated across cross-functional teams in SCRUM Agile sprints to deliver production features on schedule.'
        ],
        techStack: ['.NET Core API', 'Entity Framework Core', 'React.js', 'TypeScript', 'MS SQL', 'SonarQube', 'xUnit']
    },
    {
        role: 'Software Engineer Trainee',
        company: 'Tatasoft',
        location: 'Ahmedabad, India',
        period: '25th Jan 2023 – 30th Jun 2023 (6 MONTHS)',
        highlights: [
            'Completed intensive full-stack development training on C#, ASP.NET Core Web APIs, and React fundamentals.',
            'Assisted senior engineers in bug fixes, code refactoring, and database schema updates.',
            'Developed key CRUD modules and learned enterprise design patterns (Repository Pattern, Dependency Injection).'
        ],
        techStack: ['C#', '.NET Core', 'SQL Server', 'JavaScript', 'HTML5 & CSS3', 'Git']
    }
];

export default function Experience() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const spotlightColors = [
        'rgba(16, 185, 129, 0.15)',
        'rgba(59, 130, 246, 0.15)'
    ];

    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Header
        gsap.fromTo(headerRef.current,
            { y: 80, opacity: 0, scale: 0.9 },
            {
                y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { toggleActions: 'play reverse play reverse', trigger: section, start: 'top 75%' }
            }
        );

        // Timeline Line
        gsap.fromTo(lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1, transformOrigin: 'top', ease: 'none',
                scrollTrigger: { toggleActions: 'play reverse play reverse',
                    trigger: section,
                    start: 'top 50%',
                    end: 'bottom 80%',
                    scrub: 0.5
                }
            }
        );

        // Cards
        cardsRef.current.forEach((card, i) => {
            if (card) {
                gsap.fromTo(card,
                    { x: i % 2 === 0 ? -150 : 150, opacity: 0, scale: 0.8, rotationY: i % 2 === 0 ? -15 : 15 },
                    {
                        x: 0, opacity: 1, scale: 1, rotationY: 0, duration: 1.2, ease: 'back.out(1.2)',
                        scrollTrigger: { toggleActions: 'play reverse play reverse',
                            trigger: card,
                            start: 'top 85%'
                        }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <Box
            id="experience"
            component="section"
            ref={sectionRef}
            sx={{
                background: isDark
                    ? 'linear-gradient(180deg, #050505 0%, #080808 100%)'
                    : 'linear-gradient(180deg, #f5f5f7 0%, #efefef 100%)',
                position: 'relative',
                padding: { xs: '4rem 0', md: '6rem 0' },
                transition: 'background 0.4s ease',
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box ref={headerRef} sx={{ textAlign: 'center', marginBottom: { xs: '3rem', md: '5rem' } }}>
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
                        Professional <span className="text-gradient">Experience</span>
                    </TextReveal>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: theme.palette.text.secondary }}>
                        My career path and key contributions in software engineering
                    </Typography>
                </Box>

                {/* Timeline Container */}
                <Box
                    sx={{
                        position: 'relative',
                        paddingLeft: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                        maxWidth: '900px',
                        margin: '0 auto',
                    }}
                >
                    <Box 
                        ref={lineRef}
                        sx={{
                            position: 'absolute',
                            left: 0,
                            top: '10px',
                            bottom: '10px',
                            width: '3px',
                            borderRadius: '3px',
                            background: `linear-gradient(180deg, ${ACCENT_PRIMARY}, #9333ea)`,
                            boxShadow: '0 0 12px rgba(102, 126, 234, 0.3)',
                            zIndex: 1
                        }} 
                    />
                    {experienceData.map((item, index) => (
                        <Box key={index} ref={(el: any) => { if(el) cardsRef.current[index] = el; }} sx={{ position: 'relative', marginBottom: { xs: '3rem', md: '4rem' } }}>
                            {/* Pulse Timeline Marker */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: '-36px', sm: '-48px', md: '-56px' },
                                    top: '28px',
                                    width: '18px',
                                    height: '18px',
                                    borderRadius: '50%',
                                    background: ACCENT_PRIMARY,
                                    boxShadow: `0 0 0 4px rgba(102, 126, 234, 0.25)`,
                                    animation: 'pulse-marker 2s ease-in-out infinite',
                                    zIndex: 2,
                                }}
                            />

                            <SpotlightCard
                                className="cursor-target"
                                spotlightColor={spotlightColors[index % spotlightColors.length]}
                                sx={{
                                    background: isDark ? 'rgba(20, 20, 20, 0.65)' : 'rgba(255, 255, 255, 0.75)',
                                    padding: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                                    borderRadius: '20px',
                                    backdropFilter: 'blur(12px)',
                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)'}`,
                                    transition: 'all 0.35s ease',
                                    '&:hover': {
                                        transform: 'translateX(8px)',
                                        borderColor: ACCENT_PRIMARY,
                                        boxShadow: '0 12px 30px -10px rgba(102, 126, 234, 0.2)',
                                    }
                                }}
                            >
                                {/* Role Header */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', mb: 2 }}>
                                    <Box>
                                        <Typography variant="h3" sx={{ color: theme.palette.text.primary, fontSize: { xs: '1.35rem', sm: '1.6rem' }, fontWeight: 700, mb: 0.5 }}>
                                            {item.role}
                                        </Typography>
                                        <Typography variant="h4" sx={{ color: ACCENT_PRIMARY, fontSize: '1.05rem', fontWeight: 600 }}>
                                            {item.company} <span style={{ color: theme.palette.text.secondary, fontWeight: 400 }}>— {item.location}</span>
                                        </Typography>
                                    </Box>

                                    <Chip
                                        label={item.period}
                                        size="small"
                                        sx={{
                                            backgroundColor: 'rgba(102, 126, 234, 0.1)',
                                            border: `1px solid ${ACCENT_PRIMARY}40`,
                                            color: ACCENT_PRIMARY,
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            padding: '0.3rem 0.5rem',
                                            height: 'auto',
                                        }}
                                    />
                                </Box>

                                {/* Highlights List */}
                                <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                                    {item.highlights.map((highlight, hIdx) => (
                                        <Box
                                            component="li"
                                            key={hIdx}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '0.75rem',
                                                color: theme.palette.text.secondary,
                                                fontSize: '0.94rem',
                                                lineHeight: 1.7,
                                                marginBottom: '0.65rem',
                                            }}
                                        >
                                            <Box
                                                component="span"
                                                sx={{
                                                    color: ACCENT_PRIMARY,
                                                    fontWeight: 700,
                                                    lineHeight: 1.5,
                                                    fontSize: '1rem',
                                                }}
                                            >
                                                ⚡
                                            </Box>
                                            {highlight}
                                        </Box>
                                    ))}
                                </Box>

                                {/* Tech Stack Chips */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {item.techStack.map((tech, tIdx) => (
                                        <Box
                                            key={tIdx}
                                            component="span"
                                            sx={{
                                                padding: '0.35rem 0.8rem',
                                                background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                                                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                                                borderRadius: '8px',
                                                fontSize: '0.8rem',
                                                fontWeight: 500,
                                                color: theme.palette.text.primary,
                                            }}
                                        >
                                            {tech}
                                        </Box>
                                    ))}
                                </Box>
                            </SpotlightCard>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
