import { useEffect, useRef, useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { GraduationCap, Brain, Cloud, Code2 } from "lucide-react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const dur = 1400;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setVal(Math.floor(end * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Brain, label: "AI Projects", value: 8, suffix: "+" },
  { icon: Cloud, label: "AWS Certifications", value: 2 },
  { icon: Code2, label: "Technologies", value: 25, suffix: "+" },
  { icon: GraduationCap, label: "CGPA", value: 8.88, suffix: "/10", custom: true },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="About Me" title="Engineer. Builder. Learner." />
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-2xl bg-[#2E313D] p-8 border border-white/5 shadow-xl">
                <p className="text-xl font-display font-medium leading-relaxed text-white">
                  "Engineering systems that blend practical machine learning with clean, robust cloud native architectures."
                </p>
                <p className="mt-6 text-sm leading-relaxed text-[#9CA3AF]">
                  I'm a passionate and ambitious fresher pursuing an{" "}
                  <span className="text-white font-medium">Integrated M.Tech in Software Engineering</span>{" "}
                  at <span className="text-white font-medium">VIT Vellore</span> with a proven academic foundation.
                </p>
                <ul className="mt-6 space-y-3 text-xs text-[#9CA3AF]">
                  {[
                    "Solving real-world engineering problems with intelligent pipelines",
                    "Hands-on deep learning and custom object tracking experience",
                    "Building resilient cloud infrastructures backed by certified AWS expertise",
                    "Continuous craft focus — prioritizing performance and high code quality",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-[#F5A524]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="border-l-2 border-[#F5A524] pl-4 py-2 flex flex-col justify-center">
                  <div className="font-display text-4xl sm:text-5xl font-bold text-[#F5A524]">
                    {s.custom ? `${s.value}${s.suffix}` : <><Counter end={s.value} suffix={s.suffix ?? ""} /></>}
                  </div>
                  <div className="mt-2 text-xs font-medium tracking-wide text-[#9CA3AF]">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
