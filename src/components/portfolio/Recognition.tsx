import { Reveal, SectionHeader } from "./Reveal";
import { Award, Trophy, Star } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Smart India Hackathon (SIH)",
    subtitle: "National Level Hackathon Contender",
    description: "Developed applied AI pipelines and scalable architectures tailored for critical problem statements under high-pressure scenarios.",
    color: "text-[#F5A524]",
    bg: "bg-[#F5A524]/10",
  },
  {
    icon: Award,
    title: "Integrated M.Tech Software Engineering",
    subtitle: "VIT Vellore • Top Academic Tier",
    description: "Maintained a strong cumulative grade point average (8.88/10), consistently mastering software construction, deep learning, and robust engineering principles.",
    color: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
  },
  {
    icon: Star,
    title: "Open Source & Research Focus",
    subtitle: "Applied Deep Learning Models",
    description: "Engineered and openly published custom pipelines including Siamese CNNs for biometric verification and highly accurate multi-object football tracking systems.",
    color: "text-neon-purple",
    bg: "bg-neon-purple/10",
  },
];

export function Recognition() {
  return (
    <section id="recognition" className="relative py-28 bg-[#22242C]/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          eyebrow="Recognition & Impact"
          title="Hackathons & Achievements"
          description="Demonstrated technical agility, competitive problem solving, and rigorous engineering standards."
        />
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-[#2E313D] border border-white/5 p-6 transition hover:-translate-y-1 hover:border-[#F5A524]/40 duration-300 shadow-lg flex flex-col justify-between">
                <div>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${it.bg} ${it.color} font-bold`}>
                    <it.icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{it.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-[#F5A524]">{it.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF]">{it.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-[#9CA3AF]">
                  <span className="h-1 w-1 rounded-full bg-[#F5A524]" /> Verified Profile
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
