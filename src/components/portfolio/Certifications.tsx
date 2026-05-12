import { Reveal, SectionHeader } from "./Reveal";
import { Award, ShieldCheck } from "lucide-react";

const certs = [
  {
    icon: ShieldCheck,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    color: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Award,
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    color: "from-neon-purple to-neon-pink",
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
              <div className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1">
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl transition group-hover:opacity-40`} />
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-neon text-primary-foreground shadow-[0_0_20px_color-mix(in_oklab,var(--neon-purple)_50%,transparent)]">
                    <c.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neon-cyan">Certified</p>
                    <h3 className="mt-1 font-display text-lg font-semibold">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
