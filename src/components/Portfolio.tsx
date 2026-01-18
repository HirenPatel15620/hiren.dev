
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

export default function Portfolio() {
    const projects = [
        {
            title: 'ISCTv9 Trading Platform',
            description: 'Complete FX solution for managing trading operations',
            image: '/images/project-trading-app.png',
            tech: ['.NET Core', 'React', 'TypeScript', 'MS SQL']
        },
        {
            title: 'Online Record System',
            description: 'Web application for managing incident records with geospatial features',
            image: '/images/project-record-system.png',
            tech: ['.NET Core', 'React', 'Leaflet', 'SignalR']
        },
        {
            title: 'Reward Management System',
            description: 'Secure banking customer reward auditing and management system',
            image: '/images/project-reward-system.png',
            tech: ['.NET Core', 'EF Core', 'React', 'SQL Server']
        }
    ];

    return (
        <Box
            id="portfolio"
            component="section"
            sx={{
                background: '#0a0a0f', // bg-primary
                position: 'relative',
                padding: '4rem 0',
            }}
        >
            <Container>
                <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, marginBottom: '1rem' }}>
                        My <span className="text-gradient">Portfolio</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', color: '#b4b4c5' }}>
                        Recent projects I've worked on
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: '0.3s ease',
                                    background: 'transparent',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        '& .portfolio-image img': {
                                            transform: 'scale(1.1)',
                                        },
                                        '& .portfolio-overlay': {
                                            transform: 'translateY(0)',
                                        }
                                    }
                                }}
                            >
                                <Box
                                    className="portfolio-image"
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: '16px',
                                        aspectRatio: '16/10',
                                        backgroundColor: '#1a1a23', // Fallback background
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={project.image}
                                        alt={project.title}
                                        onError={(e: any) => {
                                            e.target.style.display = 'none';
                                            // The parent Box background will show through
                                        }}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: '0.5s ease',
                                            display: 'block',
                                        }}
                                    />
                                    <Box
                                        className="portfolio-overlay"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, transparent 100%)',
                                            padding: '3rem',
                                            transform: 'translateY(60%)',
                                            transition: '0.3s ease',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            height: '100%',
                                        }}
                                    >
                                        <Typography variant="h3" sx={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: "'Outfit', sans-serif" }}>
                                            {project.title}
                                        </Typography>
                                        <Typography sx={{ color: '#b4b4c5', marginBottom: '1.5rem' }}>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {project.tech.map((t, i) => (
                                                <Box
                                                    key={i}
                                                    component="span"
                                                    sx={{
                                                        padding: '0.4rem 0.8rem',
                                                        background: 'rgba(99, 102, 241, 0.2)',
                                                        borderRadius: '50px',
                                                        fontSize: '0.85rem',
                                                        border: '1px solid rgba(99, 102, 241, 0.4)',
                                                        color: '#ffffff',
                                                    }}
                                                >
                                                    {t}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
