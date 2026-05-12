export function ParticleBackground() {
  const dots = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      {dots.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i % 7) * 0.6;
        const size = 2 + (i % 4);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-neon-cyan/60 animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 12px var(--neon-cyan)",
            }}
          />
        );
      })}
      <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-neon-purple/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-neon-blue/20 blur-[120px]" />
    </div>
  );
}
