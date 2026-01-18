
import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                background: '#0a0a0f', // bg-primary
                padding: '3rem 0',
                textAlign: 'center',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}
        >
            <Container>
                <Typography sx={{ color: '#b4b4c5', marginBottom: '1rem' }}>
                    &copy; 2023 Hiren Patel. All rights reserved.
                </Typography>
                <Typography sx={{ color: '#7a7a8c', fontStyle: 'italic' }}>
                    "Capable to explore, quickly learn and understand newer business domains and technology"
                </Typography>
            </Container>
        </Box>
    );
}
