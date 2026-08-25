import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
    children: React.ReactNode;
    as?: any;
    [key: string]: any;
}

export default function TextReveal({ children, as: Component = 'span', ...rest }: TextRevealProps) {
    const containerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        // Apply SplitType to this specific container
        const text = new SplitType(containerRef.current, { types: 'chars' });

        if (text.chars && text.chars.length > 0) {
            // Fix gradients for characters if parent has background-clip: text
            text.chars.forEach(char => {
                const parent = char.parentElement;
                if (parent) {
                    const parentStyle = window.getComputedStyle(parent);
                    if (parentStyle.webkitTextFillColor === 'transparent' || parentStyle.backgroundClip === 'text') {
                        char.style.background = parentStyle.background;
                        char.style.backgroundImage = parentStyle.backgroundImage;
                        char.style.webkitBackgroundClip = 'text';
                        char.style.webkitTextFillColor = 'transparent';
                        char.style.backgroundClip = 'text';
                    }
                }
            });

            // Apply GSAP animation to the characters
            gsap.from(text.chars, {
                y: 40,
                opacity: 0,
                rotationX: -40,
                stagger: 0.01,
                duration: 0.3,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 90%',
                    toggleActions: 'play reverse play reverse'
                }
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => {
                if (t.vars.trigger === containerRef.current) {
                    t.kill();
                }
            });
            text.revert();
        };
    }, [children]);

    return (
        <Component ref={containerRef} {...rest}>
            {children}
        </Component>
    );
}
