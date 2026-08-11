import { Box, Container, Typography, Grid, Chip, SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';

const DnsRoundedIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
    </SvgIcon>
);

const CodeRoundedIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </SvgIcon>
);

const CloudQueueRoundedIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
    </SvgIcon>
);

const BuildRoundedIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1 0-1.3z" />
    </SvgIcon>
);

const AutoAwesomeIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5 11l-2.5-5.5L3.5 12l5.5-2.5L11.5 4l2.5 5.5 5.5 2.5-5.5 2.5zm7.5-3l1.25-2.75L23 13l-2.75-1.25L19 9l-1.25 2.75L15 13l2.75 1.25z" />
    </SvgIcon>
);

const skillsData = [
    {
        category: 'Backend & Framework',
        subtitle: 'Core Server-side & APIs',
        icon: DnsRoundedIcon,
        accentColor: '#06b6d4',
        accentGlow: 'rgba(6, 182, 212, 0.25)',
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        skills: ['.NET Core', '.NET 6', 'Entity Framework', 'LINQ', 'Web API', 'Microservices']
    },
    {
        category: 'Frontend Development',
        subtitle: 'User Experience & Web UI',
        icon: CodeRoundedIcon,
        accentColor: '#8b5cf6',
        accentGlow: 'rgba(139, 92, 246, 0.25)',
        gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
        skills: ['JavaScript', 'HTML5 & CSS3', 'React.js (TypeScript)', 'SOLID Principles', 'OpenID Connect']
    },
    {
        category: 'Database & DevOps',
        subtitle: 'Cloud & Data Infrastructure',
        icon: CloudQueueRoundedIcon,
        accentColor: '#10b981',
        accentGlow: 'rgba(16, 185, 129, 0.25)',
        gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        skills: ['MS SQL', 'PostgreSQL', 'Azure DevOps', 'Version Control Systems']
    },
    {
        category: 'Tools & Methodologies',
        subtitle: 'Quality & Agile Workflow',
        icon: BuildRoundedIcon,
        accentColor: '#ec4899',
        accentGlow: 'rgba(236, 72, 153, 0.25)',
        gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
        skills: ['SonarQube', 'Sentry', 'Jira', 'CI/CD Pipeline', 'SCRUM']
    }
];

export default function Skills() {
    return (
        <Box
            id="skills"
            component="section"
            sx={{
                background: 'linear-gradient(180deg, #0d0e1d 0%, #080917 100%)',
                position: 'relative',
                padding: { xs: '4rem 0', md: '6rem 0' },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '20%',
                    left: '5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    filter: 'blur(50px)',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    filter: 'blur(50px)',
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', marginBottom: { xs: '3rem', md: '4.5rem' } }}>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 1rem',
                            borderRadius: '50px',
                            background: 'rgba(99, 102, 241, 0.08)',
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                            color: '#8b5cf6',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                        }}
                    >
                        <AutoAwesomeIcon sx={{ fontSize: '1rem', color: '#6366f1' }} />
                        Expertise & Capability
                    </Box>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                            fontWeight: 700,
                            marginBottom: '1rem',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Technical <span className="text-gradient">Skills</span>
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '1rem', md: '1.15rem' },
                            color: '#b4b4c5',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                        }}
                    >
                        A comprehensive stack of frameworks, databases, and DevOps tools engineered for scalable web applications.
                    </Typography>
                </Box>

                {/* Symmetrical 2x2 Bento Grid */}
                <Grid container spacing={{ xs: 3, md: 4 }}>
                    {skillsData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <Grid key={index} size={{ xs: 12, md: 6 }}>
                                <SpotlightCard
                                    spotlightColor={item.accentGlow}
                                    sx={{
                                        height: '100%',
                                        background: 'rgba(18, 18, 32, 0.65)',
                                        backdropFilter: 'blur(12px)',
                                        borderRadius: '20px',
                                        border: '1px solid rgba(255, 255, 255, 0.07)',
                                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            borderColor: item.accentColor,
                                            boxShadow: `0 12px 30px -10px ${item.accentGlow}`,
                                        }
                                    }}
                                >
                                    <Box
                                        className="cursor-target"
                                        sx={{
                                            padding: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                        }}
                                    >
                                        {/* Card Header: Icon + Category + Count Badge */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: '1.75rem',
                                                gap: '1rem',
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                                <Box
                                                    sx={{
                                                        width: '52px',
                                                        height: '52px',
                                                        borderRadius: '14px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        background: `radial-gradient(circle at top left, ${item.accentGlow}, transparent)`,
                                                        border: `1px solid ${item.accentColor}40`,
                                                        color: item.accentColor,
                                                        boxShadow: `0 4px 15px ${item.accentGlow}`,
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    <IconComponent sx={{ fontSize: '1.75rem' }} />
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="h3"
                                                        sx={{
                                                            fontSize: { xs: '1.25rem', sm: '1.4rem' },
                                                            fontWeight: 700,
                                                            lineHeight: 1.2,
                                                            marginBottom: '0.25rem',
                                                            background: item.gradient,
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            backgroundClip: 'text',
                                                        }}
                                                    >
                                                        {item.category}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontSize: '0.85rem',
                                                            color: '#8b8ba7',
                                                            fontWeight: 400,
                                                        }}
                                                    >
                                                        {item.subtitle}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Chip
                                                label={`${item.skills.length} Techs`}
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                                    color: '#a0a0be',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    height: '26px',
                                                    alignSelf: 'flex-start',
                                                    display: { xs: 'none', sm: 'inline-flex' },
                                                }}
                                            />
                                        </Box>

                                        {/* Skill Chips */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: { xs: '0.6rem', sm: '0.75rem' },
                                                marginTop: 'auto',
                                            }}
                                        >
                                            {item.skills.map((skill, skillIndex) => (
                                                <Box
                                                    key={skillIndex}
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '0.4rem',
                                                        padding: { xs: '0.5rem 0.9rem', sm: '0.55rem 1.1rem' },
                                                        background: 'rgba(255, 255, 255, 0.03)',
                                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                                        borderRadius: '12px',
                                                        fontSize: { xs: '0.82rem', sm: '0.88rem' },
                                                        fontWeight: 500,
                                                        color: '#e2e8f0',
                                                        transition: 'all 0.25s ease',
                                                        cursor: 'default',
                                                        '&:hover': {
                                                            background: `rgba(${parseInt(item.accentColor.slice(1, 3), 16)}, ${parseInt(item.accentColor.slice(3, 5), 16)}, ${parseInt(item.accentColor.slice(5, 7), 16)}, 0.12)`,
                                                            borderColor: item.accentColor,
                                                            color: '#ffffff',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: `0 4px 12px ${item.accentGlow}`,
                                                            '& .skill-dot': {
                                                                backgroundColor: item.accentColor,
                                                                boxShadow: `0 0 8px ${item.accentColor}`,
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <Box
                                                        className="skill-dot"
                                                        sx={{
                                                            width: '6px',
                                                            height: '6px',
                                                            borderRadius: '50%',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                                            transition: 'all 0.25s ease',
                                                        }}
                                                    />
                                                    {skill}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                </SpotlightCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

