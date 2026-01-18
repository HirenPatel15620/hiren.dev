
import { Box, Container, Typography } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';

export default function Experience() {
    return (
        <Box
            id="experience"
            component="section"
            sx={{
                background: '#141420', // bg-secondary
                position: 'relative',
                padding: '4rem 0',
            }}
        >
            <Container>
                <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, marginBottom: '1rem' }}>
                        Professional <span className="text-gradient">Experience</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', color: '#b4b4c5' }}>
                        My career journey
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        paddingLeft: { xs: '2rem', md: '3rem' },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)', // gradient-primary
                        }
                    }}
                >
                    {/* Software Engineer */}
                    <Box sx={{ position: 'relative', marginBottom: '4rem' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: '-34px', md: '-42px' },
                                top: 0,
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: '#6366f1', // accent-primary
                                boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)',
                                animation: 'pulse-marker 2s ease-in-out infinite',
                            }}
                        />
                        <SpotlightCard
                            className="cursor-target"
                            sx={{
                                background: 'rgba(26, 26, 46, 0.6)',
                                padding: '3rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: '0.3s ease',
                                '&:hover': {
                                    transform: 'translateX(10px)',
                                    borderColor: 'rgba(99, 102, 241, 0.3)',
                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                                }
                            }}
                        >
                            <Typography sx={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                1st Jul 2023 – PRESENT (2+ YEARS)
                            </Typography>
                            <Typography variant="h3" sx={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '1rem' }}>
                                Software Engineer
                            </Typography>
                            <Typography variant="h4" sx={{ color: '#b4b4c5', fontSize: '1.2rem' }}>
                                Tatasoft, Ahmedabad, Gujarat, India
                            </Typography>
                        </SpotlightCard>
                    </Box>

                    {/* Trainee */}
                    <Box sx={{ position: 'relative', marginBottom: '4rem' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: '-34px', md: '-42px' },
                                top: 0,
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: '#6366f1',
                                boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)',
                                animation: 'pulse-marker 2s ease-in-out infinite',
                            }}
                        />
                        <SpotlightCard
                            className="cursor-target"
                            sx={{
                                background: 'rgba(26, 26, 46, 0.6)',
                                padding: '3rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: '0.3s ease',
                                '&:hover': {
                                    transform: 'translateX(10px)',
                                    borderColor: 'rgba(99, 102, 241, 0.3)',
                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                                }
                            }}
                        >
                            <Typography sx={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                25th Jan 2023 - 30th Jun 2023 (6 MONTHS)
                            </Typography>
                            <Typography variant="h3" sx={{ color: '#ec4899', fontSize: '1.8rem', marginBottom: '1rem' }}>
                                Trainee (Internship)
                            </Typography>
                            <Typography variant="h4" sx={{ color: '#b4b4c5', fontSize: '1.2rem' }}>
                                Tatasoft, Ahmedabad, Gujarat, India
                            </Typography>
                        </SpotlightCard>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
