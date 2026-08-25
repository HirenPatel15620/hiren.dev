import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/all';

gsap.registerPlugin(Observer);

// Recreating the flair confetti animation without premium plugins
const IMAGES = [
    "https://assets.codepen.io/16327/3D-combo.png",
    "https://assets.codepen.io/16327/3D-cone.png",
    "https://assets.codepen.io/16327/3D-hoop.png",
    "https://assets.codepen.io/16327/3D-keyframe.png",
    "https://assets.codepen.io/16327/3D-semi.png",
    "https://assets.codepen.io/16327/3D-spiral.png",
    "https://assets.codepen.io/16327/3D-squish.png",
    "https://assets.codepen.io/16327/3D-triangle.png",
    "https://assets.codepen.io/16327/3D-tunnel.png",
    "https://assets.codepen.io/16327/3D-poly.png",
];

const EXPLOSION_IMAGES = [
    "https://assets.codepen.io/16327/2D-circles.png",
    "https://assets.codepen.io/16327/2D-keyframe.png",
    "https://assets.codepen.io/16327/2D-lightning.png",
    "https://assets.codepen.io/16327/2D-star.png",
    "https://assets.codepen.io/16327/2D-flower.png",
    "https://assets.codepen.io/16327/3D-cone.png",
    "https://assets.codepen.io/16327/3D-spiral.png",
    "https://assets.codepen.io/16327/3D-tunnel.png",
    "https://assets.codepen.io/16327/3D-hoop.png",
    "https://assets.codepen.io/16327/3D-semi.png"
];

export default function ConfettiBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const handRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLImageElement>(null);
    const rockRef = useRef<HTMLImageElement>(null);
    const handleRef = useRef<HTMLImageElement>(null);
    const instructionsRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<SVGSVGElement>(null);
    const proxyRef = useRef<HTMLDivElement>(null);
    
    // State references for the drag interaction
    const state = useRef({
        isDrawing: false,
        startX: 0,
        startY: 0,
        lastDistance: 0,
        currentLine: null as SVGLineElement | null,
        startImage: null as SVGImageElement | null,
        circle: null as SVGCircleElement | null
    });

    useEffect(() => {
        if (!containerRef.current || !handRef.current || !canvasRef.current || !proxyRef.current) return;
        
        const animationIsOk = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
        if (!animationIsOk) return;

        const el = {
            hand: handRef.current,
            drag: dragRef.current!,
            rock: rockRef.current!,
            handle: handleRef.current!,
            instructions: instructionsRef.current!,
            canvas: canvasRef.current,
            proxy: proxyRef.current
        };

        const xSetter = gsap.quickTo(el.hand, "x", { duration: 0.1 });
        const ySetter = gsap.quickTo(el.hand, "y", { duration: 0.1 });
        const clamper = gsap.utils.clamp(1, 100);

        gsap.set(el.hand, { xPercent: -50, yPercent: -50 });
        
        const createExplosion = (x: number, y: number, distance: number = 100) => {
            const count = Math.round(gsap.utils.clamp(3, 100, distance / 20));
            const angleSpread = Math.PI * 2;
            const explosion = gsap.timeline();
            const speed = gsap.utils.mapRange(0, 500, 0.3, 1.5, distance);
            const sizeRange = gsap.utils.mapRange(0, 500, 20, 60, distance);

            for (let i = 0; i < count; i++) {
                const src = gsap.utils.random(EXPLOSION_IMAGES);
                const img = document.createElement('img');
                
                img.src = src;
                img.style.position = "absolute";
                img.style.pointerEvents = "none";
                img.style.height = `${gsap.utils.random(20, sizeRange)}px`;
                img.style.left = `${x}px`;
                img.style.top = `${y}px`;
                img.style.zIndex = "4";
                
                containerRef.current!.appendChild(img);

                const angle = Math.random() * angleSpread;
                const velocity = gsap.utils.random(500, 1500) * speed;
                
                // Simulate Physics2DPlugin with standard math
                const vX = Math.cos(angle) * velocity;
                const vY = Math.sin(angle) * velocity;
                
                const duration = 1 + Math.random();
                
                // Move in direction
                explosion.to(img, {
                    x: `+=${vX}`,
                    rotation: gsap.utils.random(-180, 180),
                    duration: duration,
                    ease: "power2.out"
                }, 0);
                
                // Blast up then fall (gravity simulation)
                explosion.to(img, {
                    y: `+=${vY - 400}`, // initial blast upwards/outwards
                    duration: duration * 0.4,
                    ease: "power2.out"
                }, 0);
                
                explosion.to(img, {
                    y: `+=${vY + 1500}`, // fall down
                    duration: duration * 0.6,
                    ease: "power2.in"
                }, duration * 0.4);
                
                // Fade out
                explosion.to(img, {
                    opacity: 0,
                    duration: 0.2,
                    ease: "power1.out",
                    onComplete: () => img.remove()
                }, duration - 0.2);
            }
        };

        const startDrawing = (e: any) => {
            state.current.isDrawing = true;
            gsap.set(el.instructions, { opacity: 0 });

            // Need to account for scrolling
            const rect = containerRef.current!.getBoundingClientRect();
            state.current.startX = e.x - rect.left;
            state.current.startY = e.y - rect.top;

            const ns = "http://www.w3.org/2000/svg";
            
            const line = document.createElementNS(ns, "line");
            line.setAttribute("x1", String(state.current.startX));
            line.setAttribute("y1", String(state.current.startY));
            line.setAttribute("x2", String(state.current.startX));
            line.setAttribute("y2", String(state.current.startY));
            line.setAttribute("stroke", "#fffce1");
            line.setAttribute("stroke-width", "2");
            line.setAttribute("stroke-dasharray", "4");
            state.current.currentLine = line;

            const circle = document.createElementNS(ns, "circle");
            circle.setAttribute("cx", String(state.current.startX));
            circle.setAttribute("cy", String(state.current.startY));
            circle.setAttribute("r", "30");
            circle.setAttribute("fill", "#0e100f");
            state.current.circle = circle;

            const originalSrc = gsap.utils.random(IMAGES);
            const image = document.createElementNS(ns, "image");
            image.setAttribute("x", String(state.current.startX - 25));
            image.setAttribute("y", String(state.current.startY - 25));
            image.setAttribute("width", "50");
            image.setAttribute("height", "50");
            image.setAttributeNS("http://www.w3.org/1999/xlink", "href", originalSrc);
            state.current.startImage = image;

            el.canvas.appendChild(line);
            el.canvas.appendChild(circle);
            el.canvas.appendChild(image);

            gsap.set(el.drag, { opacity: 1 });
            gsap.set(el.handle, { opacity: 1 });
            gsap.set(el.rock, { opacity: 0 });
        };

        const updateDrawing = (e: any) => {
            if (!state.current.currentLine || !state.current.startImage) return;

            const rect = containerRef.current!.getBoundingClientRect();
            const cursorX = e.x - rect.left;
            const cursorY = e.y - rect.top;

            const dx = cursorX - state.current.startX;
            const dy = cursorY - state.current.startY;

            const distance = Math.sqrt(dx * dx + dy * dy);
            const shrink = distance === 0 ? 0 : (distance - 30) / distance;

            let x2 = state.current.startX + dx * shrink;
            let y2 = state.current.startY + dy * shrink;

            if (distance < 30) {
                x2 = state.current.startX;
                y2 = state.current.startY;
            }

            const angle = Math.atan2(dy, dx) * (180 / Math.PI);

            gsap.to(state.current.currentLine, {
                attr: { x2, y2 },
                duration: 0.1,
                ease: "none"
            });

            const raw = distance / 100;
            const eased = Math.pow(raw, 0.5);
            const clamped = clamper(eased);

            gsap.set([state.current.startImage, state.current.circle], {
                scale: clamped,
                rotation: `${angle + -45}_short`,
                transformOrigin: "center center"
            });

            gsap.to(el.hand, {
                rotation: `${angle + -90}_short`,
                duration: 0.1,
                ease: "none"
            });

            state.current.lastDistance = distance;
        };

        const clearDrawing = () => {
            if (!state.current.isDrawing) return;
            
            createExplosion(state.current.startX, state.current.startY, state.current.lastDistance);

            gsap.set(el.drag, { opacity: 0 });
            gsap.set(el.handle, { opacity: 0 });
            gsap.set(el.rock, { opacity: 1 });

            // Simulate CustomWiggle with a small timeline
            const wiggleTl = gsap.timeline({
                onComplete: () => {
                    gsap.set(el.rock, { opacity: 0 });
                    gsap.set(el.hand, { rotation: 0, overwrite: "auto" });
                    gsap.to(el.instructions, { opacity: 1 });
                    gsap.set(el.drag, { opacity: 1 });
                }
            });
            
            wiggleTl.to(el.rock, { rotation: "+=15", duration: 0.05 })
                   .to(el.rock, { rotation: "-=30", duration: 0.1 })
                   .to(el.rock, { rotation: "+=30", duration: 0.1 })
                   .to(el.rock, { rotation: "-=15", duration: 0.05 })
                   .to(el.rock, { rotation: "+=10", duration: 0.05 })
                   .to(el.rock, { rotation: "-=10", duration: 0.05 });

            state.current.isDrawing = false;
            el.canvas.innerHTML = "";
            state.current.currentLine = null;
            state.current.startImage = null;
        };

        const observer = Observer.create({
            target: el.proxy,
            type: "pointer,touch",
            onPress: (e) => startDrawing(e),
            onDrag: (e) => state.current.isDrawing && updateDrawing(e),
            onDragEnd: () => clearDrawing(),
            onRelease: () => clearDrawing(),
            onMove: (e) => {
                // Ensure hand follows pointer even if not dragging
                gsap.set(el.hand, { opacity: 1 });
                const rect = containerRef.current!.getBoundingClientRect();
                xSetter((e.x || 0) - rect.left);
                ySetter((e.y || 0) - rect.top);
            }
        });

        const handleMouseLeave = () => {
            gsap.set(el.hand, { opacity: 0 });
        };
        
        containerRef.current.addEventListener('mouseleave', handleMouseLeave);
        
        // Initial random explosion to show off the effect
        setTimeout(() => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                createExplosion(rect.width / 2, rect.height / 2, 600);
            }
        }, 1000);

        return () => {
            observer.kill();
            if (containerRef.current) {
                containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div ref={containerRef} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
            pointerEvents: 'none' // Don't block background
        }}>
            <div ref={handRef} style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '30px',
                opacity: 0,
                zIndex: 4,
                pointerEvents: 'none'
            }}>
                <img ref={dragRef} src="https://assets.codepen.io/16327/hand-drag.png" alt="" style={{ position: 'absolute', width: '131%', maxWidth: '141%', right: '1px', top: '-22px', zIndex: 4 }} />
                <img ref={rockRef} src="https://assets.codepen.io/16327/hand-rock.png" alt="" style={{ position: 'absolute', width: '131%', maxWidth: '141%', right: '1px', top: '-22px', zIndex: 4, opacity: 0 }} />
                <img ref={handleRef} src="https://assets.codepen.io/16327/2D-circle.png" alt="" style={{ position: 'absolute', width: '100%', left: 0, right: 0, top: '-40px', opacity: 0 }} />
                <small ref={instructionsRef} style={{ position: 'absolute', left: '-60%', top: '20px', width: '200%', color: 'white', background: 'rgba(0,0,0,0.5)', padding: '2px 4px', borderRadius: '4px', fontSize: '10px' }}>drag me</small>
            </div>
            
            <svg ref={canvasRef} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
            }} />
            
            {/* The proxy acts as the interaction layer */}
            <div ref={proxyRef} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 2,
                pointerEvents: 'auto', // Must receive events
                cursor: 'none'
            }} />
        </div>
    );
}
