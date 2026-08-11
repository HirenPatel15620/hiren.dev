
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';
import { getExperienceYears } from '../utils/experience';

const statsData = [
    { value: `${getExperienceYears('2023-01-25')}+`, label: 'Years Experience', accent: '#6366f1' },
    { value: '3+', label: 'Enterprise Apps', accent: '#06b6d4' },
    { value: '8.4', label: 'B.E. Degree CGPA', accent: '#8b5cf6' },
    { value: '100%', label: 'Quality & Clean Code', accent: '#10b981' }
];

export default function About() {
    return (
        <Box
            id="about"
            component="section"
            sx={{
                background: 'linear-gradient(180deg, #0b0c16 0%, #0d0e1d 100%)',
                position: 'relative',
                padding: { xs: '4rem 0', md: '6rem 0' },
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: 'center', marginBottom: { xs: '3rem', md: '4rem' } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                            fontWeight: 700,
                            marginBottom: '1rem',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        About <span className="text-gradient">Me</span>
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: '#b4b4c5' }}>
                        Passionate Software Engineer bridging enterprise backend logic with responsive frontend UIs
                    </Typography>
                </Box>

                {/* Key Stat Cards Grid */}
                <Grid container spacing={3} sx={{ marginBottom: { xs: '3rem', md: '4rem' } }}>
                    {statsData.map((stat, idx) => (
                        <Grid key={idx} size={{ xs: 6, sm: 3 }}>
                            <Box
                                className="cursor-target"
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                    borderRadius: '16px',
                                    padding: { xs: '1.25rem 1rem', sm: '1.75rem 1.25rem' },
                                    textAlign: 'center',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        borderColor: stat.accent,
                                        boxShadow: `0 8px 25px -5px ${stat.accent}33`,
                                    }
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: { xs: '2rem', sm: '2.5rem' },
                                        fontWeight: 800,
                                        color: stat.accent,
                                        marginBottom: '0.25rem',
                                    }}
                                >
                                    {stat.value}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                        color: '#a0a0be',
                                        fontWeight: 500,
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Main Content Grid */}
                <Grid container spacing={4}>
                    {/* Professional Background */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SpotlightCard
                            className="cursor-target"
                            spotlightColor="rgba(99, 102, 241, 0.15)"
                            sx={{
                                background: 'rgba(18, 18, 32, 0.65)',
                                padding: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                                borderRadius: '20px',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.07)',
                                transition: '0.35s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: 'rgba(99, 102, 241, 0.4)',
                                    boxShadow: '0 12px 30px rgba(99, 102, 241, 0.25)',
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
                            <Typography sx={{ color: '#c4c4d5', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '0.98rem' }}>
                                I am a dedicated Software Engineer with over {getExperienceYears('2023-01-25')} years of experience in developing robust and scalable enterprise web applications. My expertise spans .NET Core, Entity Framework, C#, and React with TypeScript.
                            </Typography>
                            <Typography sx={{ color: '#c4c4d5', marginBottom: '2rem', lineHeight: 1.8, fontSize: '0.98rem' }}>
                                I specialize in building high-throughput RESTful Web APIs, optimizing database queries, implementing automated unit testing (xUnit / SonarQube), and creating responsive frontend dashboards.
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                {[
                                    { label: 'Location', value: 'Ahmedabad, India', color: '#6366f1' },
                                    { label: 'LinkedIn', value: '@hiren-patel', href: 'https://www.linkedin.com/in/hiren-patel-388a83236', color: '#06b6d4' }
                                ].map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '0.85rem 1.25rem',
                                            background: 'rgba(255, 255, 255, 0.025)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '12px',
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 600, color: item.color, fontSize: '0.9rem' }}>
                                            {item.label}
                                        </Typography>
                                        <Typography sx={{ color: '#ffffff', fontSize: '0.9rem', wordBreak: 'break-all' }}>
                                            {item.href ? (
                                                <Link href={item.href} target="_blank" sx={{ color: '#06b6d4', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
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
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SpotlightCard
                            className="cursor-target"
                            spotlightColor="rgba(6, 182, 212, 0.15)"
                            sx={{
                                background: 'rgba(18, 18, 32, 0.65)',
                                padding: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                                borderRadius: '20px',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.07)',
                                transition: '0.35s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: 'rgba(6, 182, 212, 0.4)',
                                    boxShadow: '0 12px 30px rgba(6, 182, 212, 0.25)',
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
                                    background: 'rgba(255, 255, 255, 0.025)',
                                    padding: '1.5rem',
                                    borderRadius: '14px',
                                    marginBottom: '1.5rem',
                                    borderLeft: '4px solid #6366f1',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderLeftWidth: '4px',
                                }}
                            >
                                <Typography variant="h4" sx={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                                    B.E. in Information & Communication Tech (ICT)
                                </Typography>
                                <Typography sx={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                                    Adani Institute of Infrastructure Engineering (GTU)
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#a0a0be', fontSize: '0.85rem' }}>
                                    <span>JULY 2019 – MAY 2023</span>
                                    <span style={{ color: '#10b981', fontWeight: 600 }}>CGPA: 8.4</span>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.025)',
                                    padding: '1.5rem',
                                    borderRadius: '14px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                }}
                            >
                                <Typography variant="h4" sx={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
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
                                        <Typography component="span" sx={{ color: '#a0a0be', fontWeight: 500, minWidth: '110px' }}>
                                            {item.label}:
                                        </Typography>
                                        <Typography component="span" sx={{ color: '#ffffff', fontWeight: 500, textAlign: 'right' }}>
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

