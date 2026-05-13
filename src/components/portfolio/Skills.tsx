import { Reveal, SectionHeader } from "./Reveal";
import { Code, Brain, Globe, Cloud, Database, Shield, Terminal } from "lucide-react";

const groups = [
  {
    icon: Brain,
    title: "Core AI / ML & Vision",
    skills: ["Python", "OpenCV", "YOLOv5", "Keras", "Whisper", "Sentence Transformers", "BART", "Scikit-Learn"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Git", "GitHub"],
  },
  {
    icon: Globe,
    title: "Full-Stack & Backend",
    skills: ["React", "Node.js", "Express.js", "FastAPI", "REST APIs", "MongoDB", "MySQL", "JavaScript/TypeScript"],
  },
  {
    icon: Shield,
    title: "Security & Systems",
    skills: ["Agentic Middleware", "Blockchain Auditing", "Kali Linux", "Metasploit", "Nmap", "Wireshark", "OWASP ZAP", "Burp Suite"],
  },
];

const marquee = [
  "Python", "React", "AWS", "Docker", "MongoDB", "OpenCV", "FastAPI",
  "Node.js", "Kubernetes", "YOLOv5", "Keras", "Java", "TypeScript", "MySQL",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[#22242C]">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Skills & Capabilities"
          description="A scannable, core toolkit spanning intelligent systems, cloud-native engineering, full-stack web, and offensive security."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-[#2E313D] border border-white/5 p-6 transition hover:-translate-y-1 hover:border-[#F5A524]/40 duration-300 shadow-lg">
                <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100 duration-500"
                  style={{ background: "radial-gradient(400px circle at 50% 0%, rgba(245,165,36,0.08), transparent 70%)" }}
                />
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#F5A524] text-[#1B1C22] font-bold shadow-md">
                  <g.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/5 bg-[#22242C] px-3 py-1 text-xs text-[#9CA3AF] font-medium transition hover:border-[#F5A524]/50 hover:text-white duration-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
            style={{ background: "linear-gradient(to right, #22242C, transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
            style={{ background: "linear-gradient(to left, #22242C, transparent)" }}
          />
          <div className="flex w-max animate-marquee gap-4">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="rounded-full bg-[#2E313D] border border-white/5 px-5 py-2 font-mono text-sm text-[#9CA3AF] hover:text-white hover:border-[#F5A524]/50 transition duration-200"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
