import { Box, Container, Typography, Grid } from '@mui/material';
import StarBorder from './animations/StarBorder';
import SpotlightCard from './animations/SpotlightCard';

const skillsData = [
    {
        category: 'Backend & Framework',
        skills: ['.Net Core', '.Net 6', 'Entity Framework', 'LINQ', 'Web API', 'Microservices'],
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' // gradient-secondary
    },
    {
        category: 'Frontend',
        skills: ['JavaScript', 'HTML', 'CSS', 'React.js (TypeScript)', 'SOLID Principles', 'Open-Id Connect'],
        gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)' // gradient-primary
    },
    {
        category: 'Database & DevOps',
        skills: ['MS SQL', 'PostgreSQL', 'Azure DevOps', 'Version Control Systems'],
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    },
    {
        category: 'Tools & Methodologies',
        skills: ['SonarQube', 'Sentry', 'Jira', 'CI/CD Pipeline', 'SCRUM'],
        gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
    }
];

export default function Skills() {
    return (
        <Box
            id="skills"
            component="section"
            sx={{
                background: '#0a0a0f',
                position: 'relative',
                padding: '4rem 0',
            }}
        >
            <Container>
                <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, marginBottom: '1rem' }}>
                        Technical <span className="text-gradient">Skills</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', color: '#b4b4c5' }}>
                        Technologies I work with
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* First item */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <SpotlightCard>
                            <Box className="cursor-target" sx={{ padding: '3rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '1.5rem',
                                        marginBottom: '2rem',
                                        background: skillsData[0].gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {skillsData[0].category}
                                </Typography>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {skillsData[0].skills.map((skill, skillIndex) => (
                                        <StarBorder key={skillIndex} borderRadius="50px" sx={{ width: 'auto', height: 'auto' }}>
                                            <Box component="span" sx={skillChipStyle}>
                                                {skill}
                                            </Box>
                                        </StarBorder>
                                    ))}
                                </Box>
                            </Box>
                        </SpotlightCard>
                    </Grid>

                    {/* Second item */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <SpotlightCard>
                            <Box className="cursor-target" sx={{ padding: '3rem', height: '100%' }}>
                                <Typography variant="h3" sx={categoryTitleStyle(skillsData[1].gradient)}>
                                    {skillsData[1].category}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {skillsData[1].skills.map((skill, i) => (
                                        <StarBorder key={i} borderRadius="50px" color="#8b5cf6" sx={{ width: 'auto', height: 'auto' }}>
                                            <Box component="span" sx={skillChipStyle}>{skill}</Box>
                                        </StarBorder>
                                    ))}
                                </Box>
                            </Box>
                        </SpotlightCard>
                    </Grid>

                    {/* Third item */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <SpotlightCard>
                            <Box className="cursor-target" sx={{ padding: '3rem', height: '100%' }}>
                                <Typography variant="h3" sx={categoryTitleStyle(skillsData[2].gradient)}>
                                    {skillsData[2].category}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {skillsData[2].skills.map((skill, i) => (
                                        <StarBorder key={i} borderRadius="50px" color="#06b6d4" sx={{ width: 'auto', height: 'auto' }}>
                                            <Box component="span" sx={skillChipStyle}>{skill}</Box>
                                        </StarBorder>
                                    ))}
                                </Box>
                            </Box>
                        </SpotlightCard>
                    </Grid>

                    {/* Fourth item */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <SpotlightCard>
                            <Box className="cursor-target" sx={{ padding: '3rem', height: '100%' }}>
                                <Typography variant="h3" sx={categoryTitleStyle(skillsData[3].gradient)}>
                                    {skillsData[3].category}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {skillsData[3].skills.map((skill, i) => (
                                        <StarBorder key={i} borderRadius="50px" color="#ec4899" sx={{ width: 'auto', height: 'auto' }}>
                                            <Box component="span" sx={skillChipStyle}>{skill}</Box>
                                        </StarBorder>
                                    ))}
                                </Box>
                            </Box>
                        </SpotlightCard>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

// Helper styles to keep JSX clean
const skillChipStyle = {
    padding: '0.6rem 1.2rem',
    background: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '50px',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#ffffff',
    transition: '0.2s ease',
    cursor: 'default',
    '&:hover': {
        background: 'rgba(99, 102, 241, 0.2)',
        borderColor: '#6366f1',
        transform: 'translateY(-2px)',
    }
};

const categoryTitleStyle = (gradient: string) => ({
    fontSize: '1.5rem',
    marginBottom: '2rem',
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
});
