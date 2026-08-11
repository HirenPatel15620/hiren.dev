
import { Box, Container, Typography, Grid, Button, Link, SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';

const LocationIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </SvgIcon>
);

const LinkedInIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </SvgIcon>
);

const contactItems = [
    {
        icon: LocationIcon,
        title: 'Location',
        value: 'Ahmedabad, India',
        accent: '#6366f1'
    },
    {
        icon: LinkedInIcon,
        title: 'LinkedIn',
        value: '@hiren-patel',
        href: 'https://hirenwork.lovable.app/',
        accent: '#8b5cf6'
    }
];

export default function Contact() {
    return (
        <Box
            id="contact"
            component="section"
            sx={{
                background: '#0e0e17',
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
                        Get In <span className="text-gradient">Touch</span>
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: '#b4b4c5' }}>
                        Interested in collaborating or discussing new software projects? Let's connect!
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Grid container spacing={3}>
                            {contactItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <Grid key={index} size={{ xs: 12, sm: 6 }}>
                                        <SpotlightCard
                                            className="cursor-target"
                                            spotlightColor={`rgba(${parseInt(item.accent.slice(1, 3), 16)}, ${parseInt(item.accent.slice(3, 5), 16)}, ${parseInt(item.accent.slice(5, 7), 16)}, 0.2)`}
                                            sx={{
                                                background: 'rgba(18, 18, 32, 0.65)',
                                                padding: { xs: '1.75rem', sm: '2rem 1.5rem' },
                                                borderRadius: '20px',
                                                textAlign: 'center',
                                                backdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.07)',
                                                transition: 'all 0.35s ease',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                '&:hover': {
                                                    transform: 'translateY(-6px)',
                                                    borderColor: item.accent,
                                                    boxShadow: `0 12px 30px -10px ${item.accent}40`,
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '56px',
                                                    height: '56px',
                                                    borderRadius: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: `radial-gradient(circle at top left, ${item.accent}25, transparent)`,
                                                    border: `1px solid ${item.accent}40`,
                                                    color: item.accent,
                                                    marginBottom: '1.25rem',
                                                    boxShadow: `0 4px 15px ${item.accent}20`,
                                                }}
                                            >
                                                <IconComponent sx={{ fontSize: '1.8rem' }} />
                                            </Box>
                                            <Typography variant="h3" sx={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                                                {item.title}
                                            </Typography>
                                            <Typography sx={{ color: '#a0a0be', fontSize: '0.88rem', wordBreak: 'break-word' }}>
                                                {item.href ? (
                                                    <Link href={item.href} target={item.title === 'LinkedIn' ? '_blank' : undefined} sx={{ color: item.accent, textDecoration: 'none', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}>
                                                        {item.value}
                                                    </Link>
                                                ) : item.value}
                                            </Typography>
                                        </SpotlightCard>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <SpotlightCard
                            spotlightColor="rgba(99, 102, 241, 0.25)"
                            sx={{
                                background: 'rgba(18, 18, 32, 0.65)',
                                padding: { xs: '2rem', sm: '2.5rem' },
                                borderRadius: '20px',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'center',
                                height: '100%',
                            }}
                        >
                            <Typography variant="h3" sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
                                Ready to work together?
                            </Typography>
                            <Typography sx={{ color: '#a0a0be', fontSize: '0.92rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                                I'm always open to discussing new projects, technical challenges, or full-stack software opportunities.
                            </Typography>
                            <Button
                                variant="contained"
                                href="mailto:hirenpatel.ict19@gmail.com"
                                className="cursor-target"
                                sx={{
                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                                    borderRadius: '50px',
                                    padding: '0.85rem 1.75rem',
                                    fontWeight: 700,
                                    fontSize: '0.92rem',
                                    textTransform: 'none',
                                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(99, 102, 241, 0.6)',
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

