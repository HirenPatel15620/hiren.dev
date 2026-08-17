
import { Box, Container, Typography, Grid, Paper, Button, useTheme } from '@mui/material';
import { ACCENT_PRIMARY } from '../theme/theme';

export default function Portfolio() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const projects = [
        {
            title: 'ISCTv9 FX Trading Platform',
            description: 'Enterprise end-to-end FX solution for sales, trading, risk management, and finance accounting.',
            image: '/images/project-trading-app.png',
            tech: ['.NET Core', 'React', 'TypeScript', 'MS SQL', 'xUnit'],
        },
        {
            title: 'Online Record & Geospatial System',
            description: 'Incident record tracking system integrated with interactive Leaflet GIS and SignalR real-time dispatch.',
            image: '/images/project-record-system.png',
            tech: ['.NET Core', 'React', 'Leaflet', 'SignalR'],
        },
        {
            title: 'Multi-Bank Reward Engine',
            description: 'Secure banking customer reward points auditing, anti-spam validation, and multi-tenant portal engine.',
            image: '/images/project-reward-system.png',
            tech: ['.NET Core', 'EF Core', 'React', 'SQL Server'],
        }
    ];

    return (
        <Box
            id="portfolio"
            component="section"
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
                <Box sx={{ textAlign: 'center', marginBottom: { xs: '3rem', md: '4.5rem' } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                            fontWeight: 700,
                            marginBottom: '1rem',
                            letterSpacing: '-0.02em',
                            color: theme.palette.text.primary,
                        }}
                    >
                        My <span className="text-gradient">Portfolio</span>
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: theme.palette.text.secondary }}>
                        Visual showcase of core software solutions and enterprise platforms
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Paper
                                className="cursor-target"
                                elevation={0}
                                sx={{
                                    position: 'relative',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    background: isDark ? 'rgba(20, 20, 20, 0.65)' : 'rgba(255, 255, 255, 0.75)',
                                    backdropFilter: 'blur(12px)',
                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)'}`,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        borderColor: ACCENT_PRIMARY,
                                        boxShadow: '0 15px 35px -10px rgba(102, 126, 234, 0.2)',
                                        '& .portfolio-image img': {
                                            transform: 'scale(1.08)',
                                        },
                                        '& .portfolio-overlay': {
                                            background: isDark
                                                ? 'linear-gradient(to top, rgba(10, 10, 10, 0.98) 0%, rgba(10, 10, 10, 0.7) 100%)'
                                                : 'linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.5) 100%)',
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
                                        backgroundColor: isDark ? '#121212' : '#e8e8e8',
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
                                            background: isDark
                                                ? 'linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, transparent 60%)'
                                                : 'linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, transparent 60%)',
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
                                            color: theme.palette.text.primary,
                                            marginBottom: '0.65rem',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                                        {project.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                                        {project.tech.map((t, i) => (
                                            <Box
                                                key={i}
                                                component="span"
                                                sx={{
                                                    padding: '0.3rem 0.7rem',
                                                    background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                                                    borderRadius: '8px',
                                                    fontSize: '0.78rem',
                                                    fontWeight: 500,
                                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                                                    color: theme.palette.text.primary,
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
                                            color: ACCENT_PRIMARY,
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
