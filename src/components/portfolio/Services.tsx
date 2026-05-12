import { Reveal, SectionHeader } from "./Reveal";
import { Code2, Boxes, Cloud, Plug, Brain, Rocket } from "lucide-react";

const services = [
  { icon: Code2, title: "Full Stack Web Development", desc: "End-to-end web apps with modern, accessible UIs." },
  { icon: Boxes, title: "MERN Stack Applications", desc: "Robust products built with MongoDB, Express, React, Node." },
  { icon: Cloud, title: "Cloud Deployment & AWS", desc: "Architecting scalable, cost-aware AWS infrastructure." },
  { icon: Plug, title: "API Development", desc: "Designing fast, secure REST APIs with great DX." },
  { icon: Brain, title: "AI/ML Integration", desc: "Embedding intelligence into products with practical ML." },
  { icon: Rocket, title: "Deployment & Optimization", desc: "Shipping, monitoring, and tuning for performance." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Services" title="What I Build" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-neon opacity-0 blur-2xl transition group-hover:opacity-30" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-neon-cyan transition group-hover:bg-gradient-neon group-hover:text-primary-foreground">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
