
import { Box, Container, Typography, Chip } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';
import { getExperienceYears } from '../utils/experience';

const experienceData = [
    {
        role: 'Software Engineer',
        company: 'Tatasoft',
        location: 'Ahmedabad, India',
        period: `1st Jul 2023 – PRESENT (${getExperienceYears('2023-07-01')}+ YEARS)`,
        accent: '#6366f1',
        glowColor: 'rgba(99, 102, 241, 0.25)',
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
        accent: '#ec4899',
        glowColor: 'rgba(236, 72, 153, 0.25)',
        highlights: [
            'Completed intensive full-stack development training on C#, ASP.NET Core Web APIs, and React fundamentals.',
            'Assisted senior engineers in bug fixes, code refactoring, and database schema updates.',
            'Developed key CRUD modules and learned enterprise design patterns (Repository Pattern, Dependency Injection).'
        ],
        techStack: ['C#', '.NET Core', 'SQL Server', 'JavaScript', 'HTML5 & CSS3', 'Git']
    }
];

export default function Experience() {
    return (
        <Box
            id="experience"
            component="section"
            sx={{
                background: 'linear-gradient(180deg, #070815 0%, #0a0b1d 100%)',
                position: 'relative',
                padding: { xs: '4rem 0', md: '6rem 0' },
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: 'center', marginBottom: { xs: '3rem', md: '4.5rem' } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                            fontWeight: 700,
                            marginBottom: '1rem',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Professional <span className="text-gradient">Experience</span>
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: '#b4b4c5' }}>
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
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '10px',
                            bottom: '10px',
                            width: '3px',
                            borderRadius: '3px',
                            background: 'linear-gradient(180deg, #6366f1 0%, #06b6d4 50%, #ec4899 100%)',
                            boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)',
                        }
                    }}
                >
                    {experienceData.map((item, index) => (
                        <Box key={index} sx={{ position: 'relative', marginBottom: { xs: '3rem', md: '4rem' } }}>
                            {/* Pulse Timeline Marker */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: '-36px', sm: '-48px', md: '-56px' },
                                    top: '28px',
                                    width: '18px',
                                    height: '18px',
                                    borderRadius: '50%',
                                    background: item.accent,
                                    boxShadow: `0 0 0 4px ${item.glowColor}`,
                                    animation: 'pulse-marker 2s ease-in-out infinite',
                                    zIndex: 2,
                                }}
                            />

                            <SpotlightCard
                                className="cursor-target"
                                spotlightColor={item.glowColor}
                                sx={{
                                    background: 'rgba(18, 18, 32, 0.65)',
                                    padding: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                                    borderRadius: '20px',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255, 255, 255, 0.07)',
                                    transition: 'all 0.35s ease',
                                    '&:hover': {
                                        transform: 'translateX(8px)',
                                        borderColor: item.accent,
                                        boxShadow: `0 12px 30px -10px ${item.glowColor}`,
                                    }
                                }}
                            >
                                {/* Role Header */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', mb: 2 }}>
                                    <Box>
                                        <Typography variant="h3" sx={{ color: '#ffffff', fontSize: { xs: '1.35rem', sm: '1.6rem' }, fontWeight: 700, mb: 0.5 }}>
                                            {item.role}
                                        </Typography>
                                        <Typography variant="h4" sx={{ color: '#06b6d4', fontSize: '1.05rem', fontWeight: 600 }}>
                                            {item.company} <span style={{ color: '#a0a0be', fontWeight: 400 }}>— {item.location}</span>
                                        </Typography>
                                    </Box>

                                    <Chip
                                        label={item.period}
                                        size="small"
                                        sx={{
                                            backgroundColor: `rgba(${parseInt(item.accent.slice(1, 3), 16)}, ${parseInt(item.accent.slice(3, 5), 16)}, ${parseInt(item.accent.slice(5, 7), 16)}, 0.12)`,
                                            border: `1px solid ${item.accent}40`,
                                            color: item.accent,
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
                                                color: '#c4c4d5',
                                                fontSize: '0.94rem',
                                                lineHeight: 1.7,
                                                marginBottom: '0.65rem',
                                            }}
                                        >
                                            <Box
                                                component="span"
                                                sx={{
                                                    color: item.accent,
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
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                borderRadius: '8px',
                                                fontSize: '0.8rem',
                                                fontWeight: 500,
                                                color: '#e2e8f0',
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

