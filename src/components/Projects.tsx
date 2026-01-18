
import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import SpotlightCard from './animations/SpotlightCard';

export default function Projects() {
    return (
        <Box
            id="projects"
            component="section"
            sx={{
                background: '#0a0a0f', // bg-primary
                position: 'relative',
                padding: '4rem 0',
            }}
        >
            <Container>
                <Box sx={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, marginBottom: '1rem' }}>
                        Key <span className="text-gradient">Projects</span>
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', color: '#b4b4c5' }}>
                        Projects I've worked on during my professional journey
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        paddingLeft: { xs: '2rem', md: '3rem' },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                        }
                    }}
                >
                    {/* ISCTv9 Project */}
                    <Box sx={{ position: 'relative', marginBottom: '4rem' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: '-34px', md: '-42px' },
                                top: 0,
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: '#6366f1',
                                boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)',
                                animation: 'pulse-marker 2s ease-in-out infinite',
                            }}
                        />
                        <SpotlightCard
                            className="cursor-target"
                            sx={{
                                background: 'rgba(26, 26, 46, 0.6)',
                                padding: '3rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: '0.3s ease',
                                '&:hover': {
                                    transform: 'translateX(10px)',
                                    borderColor: 'rgba(99, 102, 241, 0.3)',
                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                                }
                            }}
                        >
                            <Typography variant="h3" sx={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '1rem' }}>
                                ISCTv9
                            </Typography>

                            <Typography sx={{ color: '#b4b4c5', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                <strong style={{ color: '#ffffff' }}>Key Framework & Technologies:</strong> .Net Core API, EF Core, React JS with Typescript, MS SQL, Open-Id principal, SonarQube, xUnit, react testing library
                            </Typography>

                            <Typography sx={{ color: '#b4b4c5', marginBottom: '1rem', lineHeight: 1.8 }}>
                                <strong style={{ color: '#ffffff' }}>Project Brief:</strong> It is a web application that provides a complete FX solution to manage Sales, KYC/Compliance, Trading, Risk, Treasury, and Finance operations. This trading application offers a comprehensive end-to-end solution with the added benefits of a CRM facility running throughout, from the trading operation to the accounting system. The noteworthy features/modules of the system:
                            </Typography>

                            <List sx={{ listStyleType: 'disc', pl: 4, color: '#b4b4c5', mb: 2 }}>
                                {[
                                    'Configure Contacts, Affiliates, Affiliate Queue, Complaints.',
                                    'Back Office management including counterparty, funds-in, funds-out, Sanction Check history, Payment instruction, and payment requests.',
                                    'Maintenance module which handles currency, exchange rates, cash book, fix mapping, and other configurations.',
                                    'CRM to manage pre-trade intervention based on risk, limits, and margin.',
                                    'KPIs to manage the sales and trading trends.',
                                    'Handle funds transfer with creditors and debtors account holder.',
                                    'Handle spot pip precious for all available currency.'
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item', padding: '0 0 0.5rem 0' }}>
                                        <ListItemText primary={item} primaryTypographyProps={{ style: { fontSize: '1rem', lineHeight: 1.6 } }} />
                                    </ListItem>
                                ))}
                            </List>

                            <Typography sx={{ color: '#b4b4c5', lineHeight: 1.8 }}>
                                <strong style={{ color: '#ffffff' }}>Responsibilities:</strong> API implementation & development of core functionality, collaboration with team member, SonarQube implementation, unit & integration testing
                            </Typography>
                        </SpotlightCard>
                    </Box>

                    {/* Online Record System */}
                    <Box sx={{ position: 'relative', marginBottom: '4rem' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: '-34px', md: '-42px' },
                                top: 0,
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: '#6366f1',
                                boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)',
                                animation: 'pulse-marker 2s ease-in-out infinite',
                            }}
                        />
                        <SpotlightCard
                            className="cursor-target"
                            sx={{
                                background: 'rgba(26, 26, 46, 0.6)',
                                padding: '3rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: '0.3s ease',
                                '&:hover': {
                                    transform: 'translateX(10px)',
                                    borderColor: 'rgba(99, 102, 241, 0.3)',
                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                                }
                            }}
                        >
                            <Typography variant="h3" sx={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '1rem' }}>
                                Online Record System
                            </Typography>

                            <Typography sx={{ color: '#b4b4c5', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                <strong style={{ color: '#ffffff' }}>Key Framework & Technologies:</strong> .NET Core API, EF Core, SQL server, Leaflet, SignalR, React JS with Typescript.
                            </Typography>

                            <Typography sx={{ color: '#b4b4c5', marginBottom: '1rem', lineHeight: 1.8 }}>
                                <strong style={{ color: '#ffffff' }}>Project Brief:</strong> This web application is dedicated to the collection, analysis, and maintenance of records related to specific incidents, with a particular focus on wildlife incidents. A noteworthy quality of the application is to provide support and access to community resources through nearby centres.
                            </Typography>

                            <Typography sx={{ color: '#b4b4c5', mt: 2, mb: 1, fontWeight: 600 }}>
                                Following are the major features/modules of the system:
                            </Typography>

                            <List sx={{ listStyleType: 'disc', pl: 4, color: '#b4b4c5', mb: 2 }}>
                                {[
                                    'Configurable permissions control for role determining who can create, view, and modify records.',
                                    'Configuration options for User, Contacts, Incident, and Case management.',
                                    'Display of local service and connected community information, including state and postal code, on maps.',
                                    'Visualization of Geogram and Eco Map based on client\'s worries and strengths.',
                                    'List pages with pagination, sorting, and search functionalities.',
                                    'Audit trail implemented for major tables in project.'
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item', padding: '0 0 0.5rem 0' }}>
                                        <ListItemText primary={item} primaryTypographyProps={{ style: { fontSize: '1rem', lineHeight: 1.6 } }} />
                                    </ListItem>
                                ))}
                            </List>

                            <Typography sx={{ color: '#b4b4c5', lineHeight: 1.8 }}>
                                <strong style={{ color: '#ffffff' }}>Responsibilities:</strong> Maintain code, involved in extensive research.
                            </Typography>
                        </SpotlightCard>
                    </Box>

                    {/* Reward Management System */}
                    <Box sx={{ position: 'relative', marginBottom: '4rem' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: '-34px', md: '-42px' },
                                top: 0,
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: '#6366f1',
                                boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2)',
                                animation: 'pulse-marker 2s ease-in-out infinite',
                            }}
                        />
                        <SpotlightCard
                            className="cursor-target"
                            sx={{
                                background: 'rgba(26, 26, 46, 0.6)',
                                padding: '3rem',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: '0.3s ease',
                                '&:hover': {
                                    transform: 'translateX(10px)',
                                    borderColor: 'rgba(99, 102, 241, 0.3)',
                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                                }
                            }}
                        >
                            <Typography variant="h3" sx={{ color: '#ffffff', fontSize: '1.8rem', marginBottom: '1rem' }}>
                                Reward Management System
                            </Typography>

                            <Typography sx={{ color: '#b4b4c5', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                <strong style={{ color: '#ffffff' }}>Key Framework & Technologies:</strong> .NET Core API, EF Core, SQL Server, React JS with Typescript, Stored Procedure.
                            </Typography>

                            <Typography sx={{ color: '#b4b4c5', marginBottom: '1rem', lineHeight: 1.8 }}>
                                <strong style={{ color: '#ffffff' }}>Project Brief:</strong> The system was designed to manage reward points for banking customers, including accrual, redemption, and transaction tracking in a secure and auditable manner. A quality of the application is to provide support and access to Banks through nearby centres.
                            </Typography>

                            <Typography sx={{ color: '#b4b4c5', mt: 2, mb: 1, fontWeight: 600 }}>
                                The following are the major features/modules of the system:
                            </Typography>

                            <List sx={{ listStyleType: 'disc', pl: 4, color: '#b4b4c5', mb: 2 }}>
                                {[
                                    'Each bank have their own theme based on the bank\'s requirement.',
                                    'Have different portals for end-user, admin, developer and bank employees.',
                                    'Have a report management system to track the reward process.',
                                    'Have the best validation check to detect spam and reward the genuine user.',
                                    'List pages with pagination, sorting, and search functionalities.',
                                    'Audit trail implemented for major tables in the project.'
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item', padding: '0 0 0.5rem 0' }}>
                                        <ListItemText primary={item} primaryTypographyProps={{ style: { fontSize: '1rem', lineHeight: 1.6 } }} />
                                    </ListItem>
                                ))}
                            </List>

                            <Typography sx={{ color: '#b4b4c5', lineHeight: 1.8 }}>
                                <strong style={{ color: '#ffffff' }}>Responsibilities:</strong> Implement the complete setup for new banks, fixed bugs and UI changes, changed qualification and many more checks on needed time.
                            </Typography>
                        </SpotlightCard>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
