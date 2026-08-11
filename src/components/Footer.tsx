import { Box, Container, Typography, Link, IconButton, SvgIcon } from "@mui/material";

const ArrowUpIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
  </SvgIcon>
);

export default function Footer() {
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
        background: "#07070b",
        padding: { xs: "3rem 0 2rem 0", md: "4rem 0 2.5rem 0" },
        borderTop: "1px solid rgba(255, 255, 255, 0.07)",
        position: "relative",
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
                color: "#ffffff",
                marginBottom: "0.25rem",
              }}
            >
              Hiren <span className="text-gradient">Patel</span>
            </Typography>
            <Typography sx={{ color: "#8b8ba7", fontSize: "0.88rem" }}>
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
                  color: "#a0a0be",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    color: "#6366f1",
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
              background: "rgba(99, 102, 241, 0.1)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              color: "#6366f1",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "#6366f1",
                color: "#ffffff",
                transform: "translateY(-4px)",
                boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
              }
            }}
          >
            <ArrowUpIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "1.75rem",
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "#7a7a8c", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
            &copy; 2026 Hiren Patel. All rights reserved.
          </Typography>
          <Typography sx={{ color: "#5a5a6c", fontSize: "0.82rem", fontStyle: "italic" }}>
            "Capable to explore, quickly learn, and master newer business domains and technology."
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

