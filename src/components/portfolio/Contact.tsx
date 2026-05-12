import { useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "arunveda2005@gmail.com", href: "mailto:arunveda2005@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9894157164", href: "tel:+919894157164" },
  { icon: MapPin, label: "Location", value: "Trichy, Tamil Nadu, India" },
];

function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="rounded-md p-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-neon-cyan"
      aria-label="Copy"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Something"
          description="Open to internships, full-time roles, and freelance collaborations."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="glass h-full rounded-2xl p-6">
              <ul className="space-y-5">
                {info.map((it) => (
                  <li key={it.label} className="flex items-start gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-neon text-primary-foreground">
                      <it.icon size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</p>
                      <div className="mt-0.5 flex items-center gap-2">
                        {it.href ? (
                          <a href={it.href} className="text-sm hover:text-neon-cyan">
                            {it.value}
                          </a>
                        ) : (
                          <span className="text-sm">{it.value}</span>
                        )}
                        <CopyField value={it.value} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2">
                <a href="https://github.com/arunveda2005-sys" target="_blank" rel="noreferrer" className="glass grid h-10 w-10 place-items-center rounded-xl hover:text-neon-cyan">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com/in/arun-adhithya-v-528953312" target="_blank" rel="noreferrer" className="glass grid h-10 w-10 place-items-center rounded-xl hover:text-neon-cyan">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 2500);
                (e.target as HTMLFormElement).reset();
              }}
              className="glass space-y-4 rounded-2xl p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FloatingInput label="Your Name" type="text" required />
                <FloatingInput label="Your Email" type="email" required />
              </div>
              <FloatingInput label="Subject" type="text" />
              <FloatingTextarea label="Message" required />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-neon px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--neon-purple)_50%,transparent)] transition hover:scale-[1.02]"
              >
                {sent ? (
                  <>
                    <Check size={16} /> Sent
                  </>
                ) : (
                  <>
                    Send Message <Send size={14} className="transition group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="group relative block">
      <input
        {...props}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pb-2 pt-5 text-sm outline-none transition focus:border-neon-cyan focus:bg-white/10"
      />
      <span className="pointer-events-none absolute left-4 top-3.5 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neon-cyan">
        {label}
      </span>
    </label>
  );
}

function FloatingTextarea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="group relative block">
      <textarea
        {...props}
        rows={5}
        placeholder=" "
        className="peer w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 pb-2 pt-5 text-sm outline-none transition focus:border-neon-cyan focus:bg-white/10"
      />
      <span className="pointer-events-none absolute left-4 top-3.5 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neon-cyan">
        {label}
      </span>
    </label>
  );
}
