import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ACCENT_PRIMARY, ACCENT_SECONDARY } from '../../theme/theme';

export interface HeroCardData {
    badge?: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    href?: string;
    stats?: { label: string; value: string }[];
    actionText?: string;
}

export interface FeatureCardData {
    value: string;
    title: string;
    subtitle?: string;
    techStack: string[];
    modules: string[];
    responsibilities: string;
    icon?: React.ElementType;
    badge?: string;
    accentColor?: string;
    rotateDeg?: number;
}

interface StackedFeatureCardsProps {
    heroCard: HeroCardData;
    featureCards: FeatureCardData[];
    sectionTitle?: string;
    sectionSubtitle?: string;
}

export const StackedFeatureCards: React.FC<StackedFeatureCardsProps> = ({
    heroCard,
    featureCards,
    sectionTitle = 'Selected Projects',
    sectionSubtitle = 'Production software systems and enterprise applications engineered for real-world impact',
}) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    // Spring animations for interactive elements
    const springConfig = { stiffness: 300, damping: 28 };
    const heroCardScale = useSpring(1, springConfig);
    const heroCardY = useSpring(0, springConfig);

    const [isHeroHovered, setIsHeroHovered] = useState(false);

    return (
        <Box sx={{ width: '100%', position: 'relative' }}>
            {/* Eyebrow / Section Title Header */}
            <Box
                sx={{
                    textAlign: 'center',
                    marginBottom: { xs: '3rem', md: '4.5rem' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                        fontWeight: 800,
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                        color: theme.palette.text.primary,
                    }}
                >
                    {sectionTitle.includes('Projects') ? (
                        <>
                            Selected <span className="text-gradient">Projects</span>
                        </>
                    ) : (
                        sectionTitle
                    )}
                </Typography>
                {sectionSubtitle && (
                    <Typography
                        sx={{
                            fontSize: { xs: '1rem', md: '1.15rem' },
                            color: theme.palette.text.secondary,
                            maxWidth: '750px',
                            margin: '0 auto',
                        }}
                    >
                        {sectionSubtitle}
                    </Typography>
                )}
            </Box>

            {/* Two-Column Grid: Sticky Hero on Left, Stack of Feature Cards on Right */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', lg: '5fr 7fr' },
                    gap: { xs: '2.5rem', lg: '3.5rem' },
                    alignItems: 'start',
                    position: 'relative',
                }}
            >
                {/* LEFT COLUMN: Sticky Hero Card */}
                <Box
                    sx={{
                        position: { xs: 'relative', lg: 'sticky' },
                        top: { lg: '100px' },
                        zIndex: 10,
                    }}
                >
                    <motion.div
                        style={{
                            scale: heroCardScale,
                            y: heroCardY,
                        }}
                        onMouseEnter={() => {
                            setIsHeroHovered(true);
                            heroCardScale.set(1.015);
                            heroCardY.set(-4);
                        }}
                        onMouseLeave={() => {
                            setIsHeroHovered(false);
                            heroCardScale.set(1);
                            heroCardY.set(0);
                        }}
                    >
                        <Box
                            component="a"
                            href={heroCard.href || '#projects'}
                            sx={{
                                display: 'block',
                                textDecoration: 'none',
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '28px',
                                background: isDark
                                    ? 'linear-gradient(145deg, rgba(22, 22, 28, 0.85) 0%, rgba(14, 14, 18, 0.95) 100%)'
                                    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(246, 248, 252, 0.9) 100%)',
                                backdropFilter: 'blur(20px)',
                                border: `1px solid ${
                                    isDark
                                        ? isHeroHovered
                                            ? 'rgba(102, 126, 234, 0.45)'
                                            : 'rgba(255, 255, 255, 0.08)'
                                        : isHeroHovered
                                        ? 'rgba(102, 126, 234, 0.5)'
                                        : 'rgba(0, 0, 0, 0.08)'
                                }`,
                                boxShadow: isDark
                                    ? isHeroHovered
                                        ? '0 25px 50px -12px rgba(102, 126, 234, 0.25), 0 0 30px rgba(102, 126, 234, 0.15)'
                                        : '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
                                    : isHeroHovered
                                    ? '0 25px 50px -12px rgba(102, 126, 234, 0.22), 0 10px 20px -5px rgba(0, 0, 0, 0.04)'
                                    : '0 15px 35px -10px rgba(0, 0, 0, 0.07)',
                                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                padding: { xs: '1.75rem', sm: '2.25rem' },
                            }}
                        >
                            {/* Ambient background glow inside hero */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-15%',
                                    right: '-15%',
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '50%',
                                    background: isDark
                                        ? 'radial-gradient(circle, rgba(102, 126, 234, 0.18) 0%, transparent 70%)'
                                        : 'radial-gradient(circle, rgba(102, 126, 234, 0.14) 0%, transparent 70%)',
                                    filter: 'blur(30px)',
                                    pointerEvents: 'none',
                                }}
                            />

                            {/* Top Badge & Arrow CTA Button */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1.5rem',
                                    position: 'relative',
                                    zIndex: 2,
                                }}
                            >
                                {heroCard.badge && (
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.45rem',
                                            padding: '0.35rem 0.85rem',
                                            borderRadius: '9999px',
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.04em',
                                            textTransform: 'uppercase',
                                            background: isDark
                                                ? 'rgba(102, 126, 234, 0.15)'
                                                : 'rgba(102, 126, 234, 0.12)',
                                            color: ACCENT_PRIMARY,
                                            border: `1px solid ${ACCENT_PRIMARY}40`,
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                width: '7px',
                                                height: '7px',
                                                borderRadius: '50%',
                                                backgroundColor: ACCENT_PRIMARY,
                                                boxShadow: `0 0 8px ${ACCENT_PRIMARY}`,
                                                animation: 'pulse 2s infinite',
                                                '@keyframes pulse': {
                                                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                                                    '50%': { opacity: 0.5, transform: 'scale(0.85)' },
                                                },
                                            }}
                                        />
                                        {heroCard.badge}
                                    </Box>
                                )}

                                {/* Animated overlapping Arrow Button */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: isDark
                                            ? 'rgba(255, 255, 255, 0.08)'
                                            : 'rgba(0, 0, 0, 0.05)',
                                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        color: isDark ? '#ffffff' : '#111111',
                                        transition: 'background 0.3s ease, border-color 0.3s ease',
                                    }}
                                >
                                    {/* Arrow 1: leaves towards top-right */}
                                    <motion.div
                                        animate={{
                                            x: isHeroHovered ? 24 : 0,
                                            y: isHeroHovered ? -24 : 0,
                                            opacity: isHeroHovered ? 0 : 1,
                                        }}
                                        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                                        style={{ position: 'absolute', display: 'flex' }}
                                    >
                                        <ArrowUpRight size={18} />
                                    </motion.div>

                                    {/* Arrow 2: enters from bottom-left */}
                                    <motion.div
                                        initial={{ x: -24, y: 24, opacity: 0 }}
                                        animate={{
                                            x: isHeroHovered ? 0 : -24,
                                            y: isHeroHovered ? 0 : 24,
                                            opacity: isHeroHovered ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                                        style={{
                                            position: 'absolute',
                                            display: 'flex',
                                            color: ACCENT_PRIMARY,
                                        }}
                                    >
                                        <ArrowUpRight size={18} />
                                    </motion.div>
                                </Box>
                            </Box>

                            {/* Floating Project Showcase Preview Image */}
                            {heroCard.imageSrc && (
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        height: { xs: '190px', sm: '220px' },
                                        borderRadius: '18px',
                                        overflow: 'hidden',
                                        marginBottom: '1.75rem',
                                        background: isDark ? '#0e0e12' : '#e6e8ee',
                                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={heroCard.imageSrc}
                                        alt={heroCard.imageAlt || heroCard.title}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                            transform: isHeroHovered ? 'scale(1.06)' : 'scale(1)',
                                        }}
                                    />
                                    {/* Bottom smooth gradient blend */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '70%',
                                            background: isDark
                                                ? 'linear-gradient(to top, rgba(14, 14, 18, 0.95) 0%, transparent 100%)'
                                                : 'linear-gradient(to top, rgba(255, 255, 255, 0.92) 0%, transparent 100%)',
                                            pointerEvents: 'none',
                                        }}
                                    />
                                </Box>
                            )}

                            {/* Hero Card Text Content */}
                            <Box sx={{ position: 'relative', zIndex: 2 }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: { xs: '1.45rem', sm: '1.75rem' },
                                        fontWeight: 800,
                                        color: theme.palette.text.primary,
                                        marginBottom: '0.6rem',
                                        lineHeight: 1.25,
                                        letterSpacing: '-0.015em',
                                    }}
                                >
                                    {heroCard.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: ACCENT_PRIMARY,
                                        fontSize: '0.92rem',
                                        fontWeight: 600,
                                        marginBottom: '0.85rem',
                                    }}
                                >
                                    {heroCard.subtitle}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: '0.9rem',
                                        lineHeight: 1.6,
                                        marginBottom: '1.5rem',
                                    }}
                                >
                                    {heroCard.description}
                                </Typography>

                                {/* Stats Bar if available */}
                                {heroCard.stats && (
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: `repeat(${heroCard.stats.length}, 1fr)`,
                                            gap: '0.75rem',
                                            paddingTop: '1.25rem',
                                            borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                                        }}
                                    >
                                        {heroCard.stats.map((stat, idx) => (
                                            <Box key={idx}>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1.25rem',
                                                        fontWeight: 800,
                                                        color: theme.palette.text.primary,
                                                        letterSpacing: '-0.02em',
                                                    }}
                                                >
                                                    {stat.value}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: '0.75rem',
                                                        color: theme.palette.text.secondary,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.04em',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {stat.label}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </Box>

                            {/* Wave SVG footer blending seamlessly with theme background */}
                            <Box
                                sx={{
                                    marginTop: '1.5rem',
                                    position: 'relative',
                                    height: '32px',
                                    width: '100%',
                                    overflow: 'hidden',
                                    opacity: isDark ? 0.35 : 0.45,
                                }}
                            >
                                <svg
                                    viewBox="0 0 1200 120"
                                    preserveAspectRatio="none"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <path
                                        d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
                                        fill={ACCENT_PRIMARY}
                                    />
                                </svg>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>

                {/* RIGHT COLUMN: Stack of Sticky / Overlapping Feature Cards */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: '2rem', lg: '3rem' },
                        position: 'relative',
                        paddingBottom: { xs: '2rem', lg: '4rem' },
                    }}
                >
                    {featureCards.map((card, index) => {
                        const topOffset = 80 + index * 24; // Fans out gracefully: 80px, 104px, 128px...
                        const rotateDeg = card.rotateDeg ?? (index % 2 === 0 ? -1.2 : 1.1);

                        return (
                            <FeatureCardItem
                                key={card.value}
                                card={card}
                                index={index}
                                topOffset={topOffset}
                                rotateDeg={rotateDeg}
                                isDark={isDark}
                            />
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

// Subcomponent for each animated feature card
interface FeatureCardItemProps {
    card: FeatureCardData;
    index: number;
    topOffset: number;
    rotateDeg: number;
    isDark: boolean;
}

const FeatureCardItem: React.FC<FeatureCardItemProps> = ({
    card,
    index,
    topOffset,
    rotateDeg,
    isDark,
}) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    // Spring animations for card interactive hover
    const springConfig = { stiffness: 320, damping: 26 };
    const cardY = useSpring(0, springConfig);
    const cardScale = useSpring(1, springConfig);

    // Dynamic accent color or default
    const accent = card.accentColor || (index === 0 ? '#10b981' : index === 1 ? '#6366f1' : '#f59e0b');

    return (
        <Box
            sx={{
                position: { xs: 'relative', lg: 'sticky' },
                top: { lg: `${topOffset}px` },
                zIndex: index + 1,
                transform: {
                    xs: 'none',
                    lg: `rotate(${isHovered ? 0 : rotateDeg}deg)`,
                },
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            <motion.div
                style={{
                    y: cardY,
                    scale: cardScale,
                }}
                onMouseEnter={() => {
                    setIsHovered(true);
                    cardY.set(-6);
                    cardScale.set(1.015);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    cardY.set(0);
                    cardScale.set(1);
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        borderRadius: '26px',
                        overflow: 'hidden',
                        padding: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                        background: isDark
                            ? 'linear-gradient(145deg, rgba(20, 20, 26, 0.9) 0%, rgba(13, 13, 17, 0.96) 100%)'
                            : 'linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 249, 253, 0.92) 100%)',
                        backdropFilter: 'blur(16px)',
                        border: `1px solid ${
                            isDark
                                ? isHovered
                                    ? `${accent}60`
                                    : 'rgba(255, 255, 255, 0.08)'
                                : isHovered
                                ? `${accent}60`
                                : 'rgba(0, 0, 0, 0.07)'
                        }`,
                        boxShadow: isDark
                            ? isHovered
                                ? `0 25px 45px -12px ${accent}25, 0 10px 25px rgba(0, 0, 0, 0.6)`
                                : '0 15px 35px -10px rgba(0, 0, 0, 0.55)'
                            : isHovered
                            ? `0 25px 45px -12px ${accent}25, 0 10px 20px rgba(0, 0, 0, 0.06)`
                            : '0 12px 30px -8px rgba(0, 0, 0, 0.06)',
                        transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
                    }}
                >
                    {/* Top subtle color strip */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: `linear-gradient(90deg, ${accent} 0%, ${ACCENT_SECONDARY} 100%)`,
                            opacity: isHovered ? 1 : 0.6,
                            transition: 'opacity 0.3s ease',
                        }}
                    />

                    {/* Header: Monospace Counter, Title & Icon */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '1.25rem',
                            gap: '1rem',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            {/* Monospace Counter Value badge (e.g. 01, 02, 03) */}
                            <Box
                                sx={{
                                    fontFamily: 'monospace',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    padding: '0.35rem 0.75rem',
                                    borderRadius: '10px',
                                    background: isDark ? `${accent}18` : `${accent}14`,
                                    color: accent,
                                    border: `1px solid ${accent}35`,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {card.value}
                            </Box>

                            {card.badge && (
                                <Box
                                    sx={{
                                        fontSize: '0.78rem',
                                        fontWeight: 600,
                                        padding: '0.3rem 0.7rem',
                                        borderRadius: '8px',
                                        background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                                        color: theme.palette.text.secondary,
                                    }}
                                >
                                    {card.badge}
                                </Box>
                            )}
                        </Box>

                        {/* Top-Right Icon / Indicator */}
                        {card.icon && (
                            <Box
                                sx={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '12px',
                                    background: isDark ? `${accent}18` : `${accent}14`,
                                    color: accent,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: `1px solid ${accent}30`,
                                }}
                            >
                                <card.icon size={20} />
                            </Box>
                        )}
                    </Box>

                    {/* Card Title & Subtitle */}
                    <Box sx={{ marginBottom: '1.5rem' }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: '1.35rem', sm: '1.65rem' },
                                fontWeight: 800,
                                color: theme.palette.text.primary,
                                marginBottom: '0.5rem',
                                letterSpacing: '-0.015em',
                            }}
                        >
                            {card.title}
                        </Typography>
                        {card.subtitle && (
                            <Typography
                                sx={{
                                    color: theme.palette.text.secondary,
                                    fontSize: { xs: '0.9rem', sm: '0.98rem' },
                                    lineHeight: 1.6,
                                }}
                            >
                                {card.subtitle}
                            </Typography>
                        )}
                    </Box>

                    {/* Tech Badges */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                        {card.techStack.map((tech, tIdx) => (
                            <Box
                                key={tIdx}
                                component="span"
                                sx={{
                                    padding: '0.35rem 0.8rem',
                                    background: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.07)'}`,
                                    borderRadius: '8px',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                {tech}
                            </Box>
                        ))}
                    </Box>

                    {/* Key Modules Grid */}
                    <Box sx={{ marginBottom: '1.75rem' }}>
                        <Typography
                            sx={{
                                color: theme.palette.text.primary,
                                fontSize: '0.86rem',
                                fontWeight: 700,
                                marginBottom: '0.85rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                            }}
                        >
                            Key Modules & Core Architecture:
                        </Typography>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                gap: '0.85rem',
                            }}
                        >
                            {card.modules.map((mod, mIdx) => {
                                const [modTitle, modDesc] = mod.split(': ');
                                return (
                                    <Box
                                        key={mIdx}
                                        sx={{
                                            background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                                            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                                            borderRadius: '12px',
                                            padding: '0.85rem 1rem',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: accent,
                                                fontWeight: 700,
                                                fontSize: '0.85rem',
                                                marginBottom: '0.2rem',
                                            }}
                                        >
                                            ❖ {modTitle}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                fontSize: '0.82rem',
                                                lineHeight: 1.45,
                                            }}
                                        >
                                            {modDesc || mod}
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>

                    {/* Contributions / Role Banner */}
                    <Box
                        sx={{
                            padding: '0.85rem 1.15rem',
                            background: isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.02)',
                            borderRadius: '12px',
                            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                            borderLeft: `4px solid ${accent}`,
                        }}
                    >
                        <Typography
                            sx={{
                                color: theme.palette.text.primary,
                                fontSize: '0.85rem',
                                fontWeight: 600,
                            }}
                        >
                            My Role & Key Contributions:{' '}
                            <span style={{ color: theme.palette.text.secondary, fontWeight: 400 }}>
                                {card.responsibilities}
                            </span>
                        </Typography>
                    </Box>
                </Box>
            </motion.div>
        </Box>
    );
};

export default StackedFeatureCards;
