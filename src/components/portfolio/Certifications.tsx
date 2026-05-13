import { Reveal, SectionHeader } from "./Reveal";
import { Award, ShieldCheck, ExternalLink } from "lucide-react";

const certs = [
  {
    icon: ShieldCheck,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    color: "from-neon-cyan to-neon-blue",
    href: "https://drive.google.com/file/d/1utE5y2HONDvUlY5WciPcYb8NKuEf7zRo/view?usp=sharing",
  },
  {
    icon: Award,
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    color: "from-neon-purple to-neon-pink",
    href: "https://drive.google.com/file/d/1DgzXGKvb099toBP-AKmj41vcsONJBeFd/view?usp=sharing",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Certifications" title="Verified Expertise" />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass group relative h-full flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 border border-white/5 hover:border-[#F5A524]/40 duration-300">
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl transition group-hover:opacity-40`} />
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-neon text-primary-foreground shadow-[0_0_20px_color-mix(in_oklab,var(--neon-purple)_50%,transparent)]">
                    <c.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neon-cyan">Certified</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-white group-hover:text-[#F5A524] transition-colors">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                </div>
                {c.href && (
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-end">
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5A524] hover:underline"
                    >
                      View Credential <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
