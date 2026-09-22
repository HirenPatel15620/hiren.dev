/**
 * Scrolls to a section by ID.
 *
 * Uses `behavior: 'instant'` for ALL navigation — smooth scroll was being
 * cancelled mid-way by GSAP ScrollTrigger `scrub:1` animations that run
 * reactively on scroll events, competing with window.scrollTo. Instant jump
 * is reliable and deterministic. Visual richness is retained through the
 * section entrance animations (opacity/transform) that play after scroll.
 *
 * @param sectionId - The DOM element ID (without '#')
 */
export function scrollToSection(sectionId: string, _offset?: number): void {
  if (sectionId === 'home' || sectionId === '') {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    return;
  }

  const el = document.getElementById(sectionId);
  if (!el) return;

  const navbarOffset = 80; // matches scroll-margin-top in globalStyles
  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navbarOffset);
  window.scrollTo({ top, behavior: 'instant' as ScrollBehavior });
}

