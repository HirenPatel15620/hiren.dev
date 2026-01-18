
import { Box, Container, Typography, Grid, Button, Link } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';

export default function Contact() {
    return (
        <Box
            id="contact"
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
                        Get In <span className="text-gradient">Touch</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', color: '#b4b4c5' }}>
                        Let's discuss your next project
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '2rem'
                            }}
                        >
                            {[
                                { icon: '📍', title: 'Location', value: 'Ahmedabad, Gujarat, India' },
                                { icon: '📧', title: 'Email', value: 'hirenpatel.ict19@gmail.com', href: 'mailto:hirenpatel.ict19@gmail.com' },
                                { icon: '💼', title: 'LinkedIn', value: '@hiren-patel', href: 'https://hirenwork.lovable.app/' }
                            ].map((item, index) => (
                                <SpotlightCard
                                    key={index}
                                    className="cursor-target"
                                    sx={{
                                        background: 'rgba(26, 26, 46, 0.6)',
                                        padding: '3rem 2rem', // increased padding to match visual weight
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        transition: '0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            borderColor: 'rgba(99, 102, 241, 0.3)',
                                            boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                                        }
                                    }}
                                >
                                    <Typography sx={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                                        {item.icon}
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontSize: '1.3rem', marginBottom: '1rem' }} className="text-gradient">
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ color: '#b4b4c5', fontSize: '0.95rem', wordBreak: 'break-word' }}>
                                        {item.href ? (
                                            <Link href={item.href} target={item.title === 'LinkedIn' ? '_blank' : undefined} sx={{ color: '#06b6d4', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                                {item.value}
                                            </Link>
                                        ) : item.value}
                                    </Typography>
                                </SpotlightCard>
                            ))}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <SpotlightCard
                            sx={{
                                background: 'rgba(26, 26, 46, 0.6)',
                                padding: '3rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'center',
                                height: '100%',
                            }}
                        >
                            <Typography variant="h3" sx={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>
                                Ready to work together?
                            </Typography>
                            <Typography sx={{ color: '#b4b4c5', marginBottom: '2rem', lineHeight: 1.8 }}>
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </Typography>
                            <Button
                                variant="contained"
                                href="mailto:hirenpatel.ict19@gmail.com"
                                className="cursor-target"
                                sx={{
                                    background: '#7cb342', // btn-primary
                                    boxShadow: 'none',
                                    '&:hover': {
                                        background: '#8bc34a',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(124, 179, 66, 0.4)',
                                    }
                                }}
                            >
                                Send Me a Message
                            </Button>
                        </SpotlightCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
