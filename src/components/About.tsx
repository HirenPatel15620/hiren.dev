
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';

export default function About() {
    return (
        <Box
            id="about"
            component="section"
            sx={{
                background: '#141420', // bg-secondary
                position: 'relative',
            }}
        >
            <Container>
                <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, marginBottom: '1rem' }}>
                        About <span className="text-gradient">Me</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', color: '#b4b4c5' }}>
                        Get to know me better
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {/* About Info */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SpotlightCard
                            className="cursor-target"
                            sx={{
                                background: 'rgba(26, 26, 46, 0.6)',
                                padding: '3rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: '0.3s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: 'rgba(99, 102, 241, 0.3)',
                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                                }
                            }}
                        >
                            <Typography variant="h3" sx={{ fontSize: '1.8rem', marginBottom: '1.5rem' }} className="text-gradient">
                                Professional Background
                            </Typography>
                            <Typography sx={{ color: '#b4b4c5', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                I am a dedicated Software Engineer with over 2.5 years of experience in developing robust and scalable
                                web applications. My expertise lies in .NET Core, Entity Framework, React with TypeScript, and modern
                                web technologies.
                            </Typography>
                            <Typography sx={{ color: '#b4b4c5', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                I demonstrate the ability to fix bugs as well as maintain code, and I'm capable of exploring, quickly
                                learning, and understanding newer business domains and technology.
                            </Typography>

                            <Box sx={{ marginTop: '2rem' }}>
                                {[
                                    { label: 'Location:', value: 'Ahmedabad, Gujarat, India' },
                                    { label: 'Email:', value: 'hirenpatel.ict19@gmail.com' },
                                    { label: 'LinkedIn:', value: '@hiren-patel', href: 'https://hirenwork.lovable.app/' }
                                ].map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            gap: '1rem',
                                            marginBottom: '1rem',
                                            padding: '1rem',
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 600, color: '#6366f1', minWidth: '100px' }}>
                                            {item.label}
                                        </Typography>
                                        <Typography sx={{ color: '#ffffff' }}>
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

                    {/* Education */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SpotlightCard
                            className="cursor-target"
                            sx={{
                                background: 'rgba(26, 26, 46, 0.6)',
                                padding: '3rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: '0.3s ease',
                                height: '100%',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: 'rgba(99, 102, 241, 0.3)',
                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                                }
                            }}
                        >
                            <Typography variant="h3" sx={{ fontSize: '1.8rem', marginBottom: '1.5rem' }} className="text-gradient">
                                Education
                            </Typography>

                            <Box
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    padding: '2rem',
                                    borderRadius: '12px',
                                    marginBottom: '2rem',
                                    borderLeft: '4px solid #6366f1',
                                }}
                            >
                                <Typography variant="h4" sx={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                    B.E (Information Communication Technology) Eng. / (CGPA: 8.4)
                                </Typography>
                                <Typography sx={{ color: '#06b6d4', fontWeight: 600, marginBottom: '0.5rem' }}>
                                    Adani Institute of Infrastructure Engineering, Gujarat Technological University
                                </Typography>
                                <Typography sx={{ color: '#7a7a8c', fontSize: '0.95rem' }}>
                                    Ahmedabad, Gujarat, India
                                </Typography>
                                <Typography sx={{ color: '#7a7a8c', fontSize: '0.95rem' }}>
                                    JULY 2019 - MAY 2023
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    padding: '2rem',
                                    borderRadius: '12px',
                                }}
                            >
                                <Typography variant="h4" sx={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                                    Personal Details
                                </Typography>
                                {[
                                    { label: 'Date of Birth:', value: '15-June-2002' },
                                    { label: 'Languages:', value: 'English, Hindi, and Gujarati' },
                                    { label: 'Interests:', value: 'Sports, Traveling and Quality family time' },
                                    { label: 'Blood Group:', value: 'O+' }
                                ].map((item, index) => (
                                    <Typography key={index} sx={{ color: '#b4b4c5', marginBottom: '1rem', lineHeight: 1.8 }}>
                                        <strong style={{ color: '#ffffff' }}>{item.label}</strong> {item.value}
                                    </Typography>
                                ))}
                            </Box>
                        </SpotlightCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
