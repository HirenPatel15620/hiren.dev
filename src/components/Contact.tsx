
import { Box, Container, Typography, Grid, Button, Link, SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';

const LocationIcon = (props: SvgIconProps) => (
    <SvgIcon viewBox="0 0 24 24" {...props}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </SvgIcon>
);

const LinkedInIcon = (props: SvgIconProps) => (
    <SvgIcon viewBox="0 0 24 24" {...props}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </SvgIcon>
);

const SendIcon = (props: SvgIconProps) => (
    <SvgIcon viewBox="0 0 24 24" {...props}>
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </SvgIcon>
);

export default function Contact() {
    return (
        <Box
            id="contact"
            component="section"
            sx={{
                background: 'linear-gradient(180deg, #0b0a1a 0%, #110e28 100%)',
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

                <Grid container spacing={3} alignItems="stretch">
                    {/* Location Card */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpotlightCard
                            className="cursor-target"
                            spotlightColor="rgba(99, 102, 241, 0.2)"
                            sx={{
                                background: 'rgba(18, 18, 32, 0.65)',
                                padding: { xs: '2rem 1.5rem', sm: '2.5rem 1.75rem' },
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
                                    borderColor: '#6366f1',
                                    boxShadow: '0 12px 30px -10px rgba(99, 102, 241, 0.4)',
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'radial-gradient(circle at top left, rgba(99, 102, 241, 0.25), transparent)',
                                    border: '1px solid rgba(99, 102, 241, 0.4)',
                                    color: '#6366f1',
                                    marginBottom: '1.25rem',
                                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.2)',
                                    flexShrink: 0,
                                }}
                            >
                                <LocationIcon sx={{ fontSize: '1.8rem', display: 'block' }} />
                            </Box>
                            <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem', color: '#ffffff' }}>
                                Location
                            </Typography>
                            <Typography sx={{ color: '#a0a0be', fontSize: '0.92rem' }}>
                                Ahmedabad, India
                            </Typography>
                        </SpotlightCard>
                    </Grid>

                    {/* LinkedIn Card */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpotlightCard
                            className="cursor-target"
                            spotlightColor="rgba(139, 92, 246, 0.2)"
                            sx={{
                                background: 'rgba(18, 18, 32, 0.65)',
                                padding: { xs: '2rem 1.5rem', sm: '2.5rem 1.75rem' },
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
                                    borderColor: '#8b5cf6',
                                    boxShadow: '0 12px 30px -10px rgba(139, 92, 246, 0.4)',
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'radial-gradient(circle at top left, rgba(139, 92, 246, 0.25), transparent)',
                                    border: '1px solid rgba(139, 92, 246, 0.4)',
                                    color: '#8b5cf6',
                                    marginBottom: '1.25rem',
                                    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.2)',
                                    flexShrink: 0,
                                }}
                            >
                                <LinkedInIcon sx={{ fontSize: '1.8rem', display: 'block' }} />
                            </Box>
                            <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem', color: '#ffffff' }}>
                                LinkedIn
                            </Typography>
                            <Typography sx={{ color: '#a0a0be', fontSize: '0.92rem' }}>
                                <Link
                                    href="https://www.linkedin.com/in/hiren-patel-388a83236"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Hiren Patel LinkedIn Profile"
                                    sx={{
                                        color: '#06b6d4',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    @hiren-patel
                                </Link>
                            </Typography>
                        </SpotlightCard>
                    </Grid>

                    {/* Work Together CTA Card */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <SpotlightCard
                            spotlightColor="rgba(6, 182, 212, 0.2)"
                            sx={{
                                background: 'rgba(18, 18, 32, 0.65)',
                                padding: { xs: '2rem 1.5rem', sm: '2.5rem 1.75rem' },
                                borderRadius: '20px',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                height: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'radial-gradient(circle at top left, rgba(6, 182, 212, 0.25), transparent)',
                                    border: '1px solid rgba(6, 182, 212, 0.4)',
                                    color: '#06b6d4',
                                    marginBottom: '1.25rem',
                                    boxShadow: '0 4px 15px rgba(6, 182, 212, 0.2)',
                                    flexShrink: 0,
                                }}
                            >
                                <SendIcon sx={{ fontSize: '1.8rem', display: 'block' }} />
                            </Box>
                            <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem', color: '#ffffff' }}>
                                Ready to work together?
                            </Typography>
                            <Button
                                variant="contained"
                                href="mailto:hirenpatel.ict19@gmail.com"
                                aria-label="Send an email to Hiren Patel"
                                className="cursor-target"
                                sx={{
                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                                    borderRadius: '50px',
                                    padding: '0.6rem 1.4rem',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    textTransform: 'none',
                                    marginTop: '0.4rem',
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

