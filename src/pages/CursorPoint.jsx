import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/UseMobile";

export default function CursorPoint() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Cursor dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_3px_rgba(34,211,238,0.6)] animate-pulse transition-transform duration-100"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
      />

      {/* Cursor ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 border border-cyan-300 rounded-full opacity-60 blur-sm transition-transform duration-300"
        style={{
          transform: `translate3d(${mousePosition.x - 20}px, ${mousePosition.y - 20}px, 0)`,
        }}
      />
    </>
  );
}
