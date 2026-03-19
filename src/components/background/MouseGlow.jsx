import { useEffect, useRef } from "react";

const LIFETIME = 1000; // ms
const INTERACTIVE = ["a", "button", "input", "textarea", "select", "label"];

function isInteractive(el) {
  if (!el || el === document.body) return false;
  const tag = el.tagName.toLowerCase();
  if (INTERACTIVE.includes(tag)) return true;
  if (el.dataset && el.dataset.noGlow !== undefined) return true;
  return isInteractive(el.parentElement);
}

export default function MouseGlow() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const suppressRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      suppressRef.current = isInteractive(e.target);
      if (suppressRef.current) return;

      const now = performance.now();
      for (let i = 0; i < 8; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          size: Math.random() * 2.5 + 1,
          born: now,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = (now) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter(
        (p) => now - p.born < LIFETIME
      );

      for (const p of particles.current) {
        const age = now - p.born;
        const alpha = Math.max(0, 1 - age / LIFETIME);
        p.x += p.vx;
        p.y += p.vy;

        ctx.globalAlpha = alpha;
        ctx.fillStyle = "rgba(255, 120, 0, 1)";
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
