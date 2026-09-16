import { Box, Container, Link, Typography, useTheme } from "@mui/material";
import { ACCENT_PRIMARY } from '../theme/theme';
import { scrollToSection } from '../utils/scrollTo';


export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';


  return (
    <Box
      component="footer"
      sx={{
        background: isDark ? "#050505" : "#f0f0f2",
        padding: { xs: "3rem 0 2rem 0", md: "4rem 0 2.5rem 0" },
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)'}`,
        position: "relative",
        transition: 'background 0.4s ease',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand Logo */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.6rem",
                fontWeight: 800,
                color: theme.palette.text.primary,
                marginBottom: "0.25rem",
              }}
            >
              Hiren <span className="text-gradient">Patel</span>
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.88rem" }}>
              Software Engineer — .NET Core & React.js Specialist
            </Typography>
          </Box>

          {/* Quick Nav Links */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: "1.25rem", sm: "2rem" },
            }}
          >
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Skills', href: '#skills' },
              { label: 'Experience', href: '#experience' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
                className="cursor-target"
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    color: ACCENT_PRIMARY,
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
            paddingTop: "1.75rem",
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.85rem", marginBottom: "0.5rem", opacity: 0.7 }}>
            &copy; 2026 Hiren Patel. All rights reserved.
          </Typography>
          <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.82rem", fontStyle: "italic", opacity: 0.5 }}>
            "Capable to explore, quickly learn, and master newer business domains and technology."
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
