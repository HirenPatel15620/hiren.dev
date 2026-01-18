

import { useCustomCursor } from '../hooks/useCustomCursor';

export default function CustomCursor() {
    const { cursorDotRef, cursorOutlineRef } = useCustomCursor();

    return (
        <>
            <div className="cursor-dot" ref={cursorDotRef}></div>
            <div className="cursor-outline" ref={cursorOutlineRef}></div>
        </>
    );
}
