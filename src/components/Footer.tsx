import { Box, Container, Typography, Link, IconButton, SvgIcon, useTheme } from "@mui/material";
import { ACCENT_PRIMARY } from '../theme/theme';

const ArrowUpIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
  </SvgIcon>
);

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

          {/* Back to Top */}
          <IconButton
            onClick={scrollToTop}
            className="cursor-target"
            aria-label="scroll to top"
            sx={{
              background: "rgba(102, 126, 234, 0.1)",
              border: `1px solid ${ACCENT_PRIMARY}50`,
              color: ACCENT_PRIMARY,
              transition: "all 0.3s ease",
              "&:hover": {
                background: ACCENT_PRIMARY,
                color: "#ffffff",
                transform: "translateY(-4px)",
                boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
              }
            }}
          >
            <ArrowUpIcon />
          </IconButton>
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
