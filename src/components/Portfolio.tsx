
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';

export default function Portfolio() {
    const projects = [
        {
            title: 'ISCTv9 FX Trading Platform',
            description: 'Enterprise end-to-end FX solution for sales, trading, risk management, and finance accounting.',
            image: '/images/project-trading-app.png',
            tech: ['.NET Core', 'React', 'TypeScript', 'MS SQL', 'xUnit'],
            accent: '#6366f1'
        },
        {
            title: 'Online Record & Geospatial System',
            description: 'Incident record tracking system integrated with interactive Leaflet GIS and SignalR real-time dispatch.',
            image: '/images/project-record-system.png',
            tech: ['.NET Core', 'React', 'Leaflet', 'SignalR'],
            accent: '#06b6d4'
        },
        {
            title: 'Multi-Bank Reward Engine',
            description: 'Secure banking customer reward points auditing, anti-spam validation, and multi-tenant portal engine.',
            image: '/images/project-reward-system.png',
            tech: ['.NET Core', 'EF Core', 'React', 'SQL Server'],
            accent: '#10b981'
        }
    ];

    return (
        <Box
            id="portfolio"
            component="section"
            sx={{
                background: '#0a0a0f',
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
                        My <span className="text-gradient">Portfolio</span>
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: '#b4b4c5' }}>
                        Visual showcase of core software solutions and enterprise platforms
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Paper
                                className="cursor-target"
                                elevation={0}
                                sx={{
                                    position: 'relative',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    background: 'rgba(18, 18, 32, 0.65)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255, 255, 255, 0.07)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        borderColor: project.accent,
                                        boxShadow: `0 15px 35px -10px ${project.accent}40`,
                                        '& .portfolio-image img': {
                                            transform: 'scale(1.08)',
                                        },
                                        '& .portfolio-overlay': {
                                            background: 'linear-gradient(to top, rgba(10, 10, 15, 0.98) 0%, rgba(10, 10, 15, 0.7) 100%)',
                                        }
                                    }
                                }}
                            >
                                <Box
                                    className="portfolio-image"
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        aspectRatio: '16/10',
                                        backgroundColor: '#12121e',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={project.image}
                                        alt={project.title}
                                        onError={(e: any) => {
                                            e.target.style.display = 'none';
                                        }}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease',
                                            display: 'block',
                                        }}
                                    />
                                    <Box
                                        className="portfolio-overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(to top, rgba(10, 10, 15, 0.9) 0%, transparent 60%)',
                                            transition: 'all 0.3s ease',
                                        }}
                                    />
                                </Box>

                                <Box sx={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                            marginBottom: '0.65rem',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography sx={{ color: '#a0a0be', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                                        {project.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                                        {project.tech.map((t, i) => (
                                            <Box
                                                key={i}
                                                component="span"
                                                sx={{
                                                    padding: '0.3rem 0.7rem',
                                                    background: 'rgba(255, 255, 255, 0.03)',
                                                    borderRadius: '8px',
                                                    fontSize: '0.78rem',
                                                    fontWeight: 500,
                                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                                    color: '#e2e8f0',
                                                }}
                                            >
                                                {t}
                                            </Box>
                                        ))}
                                    </Box>

                                    <Button
                                        component="a"
                                        href="#projects"
                                        size="small"
                                        sx={{
                                            alignSelf: 'flex-start',
                                            color: project.accent,
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                            padding: 0,
                                            textTransform: 'none',
                                            '&:hover': {
                                                background: 'transparent',
                                                textDecoration: 'underline',
                                            }
                                        }}
                                    >
                                        View Architecture Details →
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

