
import { Box, Container, Typography } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';

const projectsData = [
    {
        id: 'isctv9',
        title: 'ISCTv9 — Enterprise FX Trading & Banking Platform',
        subtitle: 'Comprehensive foreign exchange (FX) solution managing Sales, KYC/Compliance, Trading, Risk, Treasury & Finance.',
        accent: '#6366f1',
        glowColor: 'rgba(99, 102, 241, 0.25)',
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
        accent: '#06b6d4',
        glowColor: 'rgba(6, 182, 212, 0.25)',
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
        accent: '#10b981',
        glowColor: 'rgba(16, 185, 129, 0.25)',
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
    return (
        <Box
            id="projects"
            component="section"
            sx={{
                background: 'linear-gradient(180deg, #080718 0%, #0a0920 100%)',
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
                        Key <span className="text-gradient">Projects</span>
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, color: '#b4b4c5' }}>
                        Production software systems and enterprise applications engineered for real-world impact
                    </Typography>
                </Box>

                {/* Project Stack Cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '2.5rem', md: '3.5rem' } }}>
                    {projectsData.map((project, index) => (
                        <SpotlightCard
                            key={index}
                            className="cursor-target"
                            spotlightColor={project.glowColor}
                            sx={{
                                background: 'rgba(18, 18, 32, 0.65)',
                                padding: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                                borderRadius: '24px',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.07)',
                                transition: 'all 0.35s ease',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    borderColor: project.accent,
                                    boxShadow: `0 15px 35px -10px ${project.glowColor}`,
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
                                        color: '#ffffff',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Typography sx={{ color: '#a0a0be', fontSize: { xs: '0.92rem', sm: '1.02rem' }, lineHeight: 1.6 }}>
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
                                            background: `rgba(${parseInt(project.accent.slice(1, 3), 16)}, ${parseInt(project.accent.slice(3, 5), 16)}, ${parseInt(project.accent.slice(5, 7), 16)}, 0.1)`,
                                            border: `1px solid ${project.accent}35`,
                                            borderRadius: '8px',
                                            fontSize: '0.82rem',
                                            fontWeight: 600,
                                            color: '#ffffff',
                                        }}
                                    >
                                        {tech}
                                    </Box>
                                ))}
                            </Box>

                            {/* Key Modules Grid */}
                            <Box sx={{ marginBottom: '2rem' }}>
                                <Typography sx={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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
                                                    background: 'rgba(255, 255, 255, 0.02)',
                                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                                    borderRadius: '12px',
                                                    padding: '1rem 1.25rem',
                                                }}
                                            >
                                                <Typography sx={{ color: project.accent, fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                                    ❖ {modTitle}
                                                </Typography>
                                                <Typography sx={{ color: '#c4c4d5', fontSize: '0.88rem', lineHeight: 1.5 }}>
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
                                    background: 'rgba(255, 255, 255, 0.025)',
                                    borderRadius: '12px',
                                    borderLeft: `4px solid ${project.accent}`,
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderLeftWidth: '4px',
                                }}
                            >
                                <Typography sx={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600 }}>
                                    My Role & Key Contributions: <span style={{ color: '#c4c4d5', fontWeight: 400 }}>{project.responsibilities}</span>
                                </Typography>
                            </Box>
                        </SpotlightCard>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

