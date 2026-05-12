import { Reveal, SectionHeader } from "./Reveal";
import { GraduationCap } from "lucide-react";

const items = [
  {
    title: "Integrated M.Tech in Software Engineering",
    place: "Vellore Institute of Technology, Vellore",
    period: "2022 – Present",
    score: "CGPA: 8.88/10",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    place: "Sri Chaitanya Techno School, Chennai",
    period: "2020 – 2022",
    score: "Score: 88.2%",
  },
  {
    title: "Secondary School Certificate (SSLC) / 10th",
    place: "Mahatma Gandhi Centenary Vidyalaya",
    period: "2020",
    score: "Score: 86.2%",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28 bg-[#22242C]">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader eyebrow="Education" title="Academic Journey" description="Foundational paths in technical logic, computational science, and advanced engineering systems." />
        <div className="relative mx-auto max-w-4xl mt-12">
          {/* Vertical Timeline Center Guide Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#F5A524] via-[#F5A524]/40 to-transparent md:left-1/2" />
          
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div
                className={`relative mb-10 flex items-start md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline Node Marker */}
                <div className={`absolute top-6 grid h-8 w-8 place-items-center rounded-full bg-[#F5A524] text-[#1B1C22] shadow-md z-10 ${
                  i % 2 === 0 
                    ? "left-4 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2" 
                    : "left-4 -translate-x-1/2 md:left-0 md:-translate-x-1/2"
                }`}>
                  <GraduationCap size={16} />
                </div>

                {/* Timeline Content Card */}
                <div className="ml-12 w-full rounded-2xl bg-[#2E313D] border border-white/5 p-6 transition hover:-translate-y-1 hover:border-[#F5A524]/40 duration-300 shadow-lg md:ml-0">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#F5A524]">{it.period}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">{it.title}</h3>
                  <p className="mt-1 text-sm text-[#9CA3AF]">{it.place}</p>
                  <p className="mt-3 inline-block rounded-full bg-[#22242C] border border-white/5 px-3 py-1 text-xs font-mono text-[#F3F4F6]">
                    {it.score}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
