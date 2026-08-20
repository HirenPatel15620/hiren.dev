
import { Box, Container, Typography, useTheme } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';
import { ACCENT_PRIMARY } from '../theme/theme';

const projectsData = [
    {
        id: 'isctv9',
        title: 'ISCTv9 — Enterprise FX Trading & Banking Platform',
        subtitle: 'Comprehensive foreign exchange (FX) solution managing Sales, KYC/Compliance, Trading, Risk, Treasury & Finance.',
        techStack: ['.NET Core API', 'Entity Framework Core', 'React.js', 'TypeScript', 'MS SQL', 'OpenID Principal', 'SonarQube', 'xUnit', 'React Testing Library'],
        modules: [
            'CRM & Pre-Trade Intervention: Manages real-time limits, margins, pre-trade risks, and affiliate queues.',
            'Back Office & Compliance: Counterparty management, Sanction Check history, funds-in/out instructions, and payment requests.',
            'Treasury & Finance Maintenance: Currency exchange rates, cash book ledgers, FIX protocol mapping, and spot pip pricing.',
            'Sales & KPI Analytics: Interactive dashboards tracking trading trends, affiliate complaints, and creditor/debtor transfers.'
        ],
        responsibilities: 'Core REST API development, SonarQube quality integration, automated xUnit & React Testing Library test suites.'
    },
    {
        id: 'online-record-system',
        title: 'Online Incident & Geospatial Record System',
        subtitle: 'Real-time incident record collection, wildlife tracking, geospatial Leaflet mapping, and community resource dispatch.',
        techStack: ['.NET Core API', 'Entity Framework Core', 'SQL Server', 'Leaflet GIS', 'SignalR Real-time', 'React.js', 'TypeScript'],
        modules: [
            'Role-Based Granular Access Control: Configurable permissions dictating record creation, audit visibility, and modification rights.',
            'Interactive Leaflet & Eco Maps: Visualized Geograms and Eco Maps mapping local community centers, postal codes, and incident hotspots.',
            'High-Performance Paginated Lists: Paginated data tables with multi-field search, instant filter, and server-side sorting.',
            'Table Audit Trail Engine: Automatic audit logging for major transactional entities guaranteeing data integrity.'
        ],
        responsibilities: 'Code maintenance, SignalR real-time event streaming research & backend optimization.'
    },
    {
        id: 'reward-management-system',
        title: 'Multi-Bank Customer Reward & Audit System',
        subtitle: 'Secure customer reward points accrual, redemption, anti-spam validation, and multi-portal banking engine.',
        techStack: ['.NET Core API', 'Entity Framework Core', 'SQL Server Stored Procedures', 'React.js', 'TypeScript'],
        modules: [
            'White-Label Bank Branding: Customizable UI themes tailored to individual banking clients and corporate partners.',
            'Multi-Role Portal Hierarchy: Dedicated isolated portals for End-Users, Admins, Developers, and Bank Employees.',
            'Anti-Spam Audit Engine: Strict validation algorithms detecting fake reward claims while prioritizing genuine user redemptions.',
            'Financial Reporting & Analytics: Exportable audit logs and transactional reports for bank reward accounting.'
        ],
        responsibilities: 'Onboarding new bank setups, stored procedure optimizations, UI bug fixes, and qualification rules implementation.'
    }
];

export default function Projects() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const spotlightColors = [
        'rgba(236, 72, 153, 0.15)',
        'rgba(16, 185, 129, 0.15)',
        'rgba(245, 158, 11, 0.15)'
    ];

    return (
        <Box
            id="projects"
            component="section"
            sx={{
                background: isDark
                    ? 'linear-gradient(180deg, #080808 0%, #0a0a0a 100%)'
                    : 'linear-gradient(180deg, #efefef 0%, #f5f5f7 100%)',
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
                        Key <span className="text-gradient">Projects</span>
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: theme.palette.text.secondary }}>
                        Production software systems and enterprise applications engineered for real-world impact
                    </Typography>
                </Box>

                {/* Project Stack Cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '2.5rem', md: '3.5rem' } }}>
                    {projectsData.map((project, index) => (
                        <SpotlightCard
                            key={index}
                            className="cursor-target"
                            spotlightColor={spotlightColors[index % spotlightColors.length]}
                            sx={{
                                background: isDark ? 'rgba(20, 20, 20, 0.65)' : 'rgba(255, 255, 255, 0.75)',
                                padding: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                                borderRadius: '24px',
                                backdropFilter: 'blur(12px)',
                                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)'}`,
                                transition: 'all 0.35s ease',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    borderColor: ACCENT_PRIMARY,
                                    boxShadow: '0 15px 35px -10px rgba(102, 126, 234, 0.2)',
                                }
                            }}
                        >
                            {/* Card Header: Title & Subtitle */}
                            <Box sx={{ marginBottom: '1.75rem' }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: { xs: '1.4rem', sm: '1.75rem' },
                                        fontWeight: 700,
                                        color: theme.palette.text.primary,
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Typography sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.92rem', sm: '1.02rem' }, lineHeight: 1.6 }}>
                                    {project.subtitle}
                                </Typography>
                            </Box>

                            {/* Tech Badges */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginBottom: '2rem' }}>
                                {project.techStack.map((tech, tIdx) => (
                                    <Box
                                        key={tIdx}
                                        component="span"
                                        sx={{
                                            padding: '0.4rem 0.85rem',
                                            background: 'rgba(102, 126, 234, 0.08)',
                                            border: `1px solid ${ACCENT_PRIMARY}30`,
                                            borderRadius: '8px',
                                            fontSize: '0.82rem',
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                        }}
                                    >
                                        {tech}
                                    </Box>
                                ))}
                            </Box>

                            {/* Key Modules Grid */}
                            <Box sx={{ marginBottom: '2rem' }}>
                                <Typography sx={{ color: theme.palette.text.primary, fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    Key Modules & Core Architecture:
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                        gap: '1rem',
                                    }}
                                >
                                    {project.modules.map((mod, mIdx) => {
                                        const [modTitle, modDesc] = mod.split(': ');
                                        return (
                                            <Box
                                                key={mIdx}
                                                sx={{
                                                    background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                                    borderRadius: '12px',
                                                    padding: '1rem 1.25rem',
                                                }}
                                            >
                                                <Typography sx={{ color: ACCENT_PRIMARY, fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                                    ❖ {modTitle}
                                                </Typography>
                                                <Typography sx={{ color: theme.palette.text.secondary, fontSize: '0.88rem', lineHeight: 1.5 }}>
                                                    {modDesc}
                                                </Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Box>

                            {/* Responsibilities Banner */}
                            <Box
                                sx={{
                                    padding: '1rem 1.25rem',
                                    background: isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.02)',
                                    borderRadius: '12px',
                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    borderLeft: `4px solid ${ACCENT_PRIMARY}`,
                                    borderLeftWidth: '4px',
                                }}
                            >
                                <Typography sx={{ color: theme.palette.text.primary, fontSize: '0.9rem', fontWeight: 600 }}>
                                    My Role & Key Contributions: <span style={{ color: theme.palette.text.secondary, fontWeight: 400 }}>{project.responsibilities}</span>
                                </Typography>
                            </Box>
                        </SpotlightCard>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
