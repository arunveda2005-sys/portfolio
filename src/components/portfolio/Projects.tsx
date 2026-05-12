import { useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { Github, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  tagline: string;
  category: "AI/ML" | "Cloud" | "Computer Vision";
  tech: string[];
  highlights: string[];
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Football Player Tracking & Motion Analysis",
    tagline: "Real-time multi-object tracking with team classification at 30 FPS.",
    category: "Computer Vision",
    tech: ["Python", "YOLOv5", "OpenCV", "K-Means"],
    highlights: [
      "Real-time football player and ball tracking on dynamic frames",
      "Optical flow & perspective transformation for spatial mapping",
      "Speed and distance estimation with >90% accuracy",
      "Team classification via K-Means clustering",
      "Pipeline runs at a steady 30 FPS",
    ],
    gradient: "from-neon-cyan/30 to-neon-blue/30",
  },
  {
    title: "Bookie – AI-Powered Video Analysis",
    tagline: "Speech-to-search platform with cloud-native deployment.",
    category: "AI/ML",
    tech: ["Whisper", "BART", "FastAPI", "AWS S3", "AWS EC2"],
    highlights: [
      "Real-time transcription with timestamp alignment (Whisper)",
      "Semantic NLP search & intelligent retrieval",
      "Automated long-form summarization with BART",
      "Cloud deployment on AWS S3 + EC2",
      "Full-stack architecture with scalable APIs",
    ],
    gradient: "from-neon-purple/30 to-neon-pink/30",
  },
  {
    title: "Fingerprint Detection & Classification",
    tagline: "Biometric pipeline with 97% accuracy and ROC-AUC of 1.00.",
    category: "AI/ML",
    tech: ["Python", "OpenCV", "Keras"],
    highlights: [
      "Trained on 49,000+ fingerprint images",
      "Siamese CNN architecture, 97% accuracy",
      "ROC-AUC score of 1.00 on validation",
      "Advanced biometric verification pipeline",
    ],
    gradient: "from-neon-blue/30 to-neon-purple/30",
  },
];

const filters = ["All", "AI/ML", "Computer Vision", "Cloud"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Featured Work"
          description="Selected projects spanning computer vision, applied AI, and cloud-native systems."
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-xs font-medium transition ${
                  filter === f
                    ? "bg-[#F5A524] text-[#1B1C22] font-bold shadow-md"
                    : "bg-[#2E313D] text-[#9CA3AF] hover:text-white border border-white/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <button
                onClick={() => setActive(p)}
                className="group relative h-full w-full overflow-hidden rounded-2xl bg-[#2A2C36] p-6 text-left border border-white/5 transition hover:-translate-y-1 hover:border-[#F5A524]/40 duration-300"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F5A524]/20 group-hover:bg-[#F5A524] transition-colors" />
                <div className="relative pl-2">
                  <span className="rounded-md bg-[#F5A524]/10 px-2 py-0.5 text-[10px] font-mono tracking-widest text-[#F5A524]">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white group-hover:text-[#F5A524] transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-[#1B1C22]/50 px-2 py-0.5 text-[11px] font-mono text-[#9CA3AF]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#F5A524]">
                    <span>View details</span> <ExternalLink size={12} />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-background/70 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-8"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 rounded-full bg-white/5 p-2 hover:bg-white/10"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-widest text-neon-cyan">
                {active.category}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-gradient">{active.title}</h3>
              <p className="mt-2 text-muted-foreground">{active.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {active.tech.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {active.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-neon" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/arunveda2005-sys"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-neon px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  <Github size={14} /> View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
