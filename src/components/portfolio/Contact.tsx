import { useState, useRef } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

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
      className="rounded-md p-1.5 text-[#9CA3AF] transition hover:bg-white/5 hover:text-[#F5A524]"
      aria-label="Copy"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_o9y4xoq",    // Your configured Gmail Personal Service ID
          "YOUR_TEMPLATE_ID",   // Replace with your EmailJS Template ID (e.g. template_xyz)
          formRef.current,
          "YOUR_PUBLIC_KEY"     // Replace with your EmailJS Account Public Key
        )
        .then(
          () => {
            setLoading(false);
            setStatus("success");
            formRef.current?.reset();
            setTimeout(() => setStatus("idle"), 5000);
          },
          (error) => {
            console.error("EmailJS Submission Error:", error);
            setLoading(false);
            setStatus("error");
          }
        );
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#22242C]">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Something"
          description="Open to strategic roles, specialized cloud architectures, and deep learning integrations."
        />
        <div className="mx-auto grid max-w-5xl gap-8 mt-12 md:grid-cols-[1fr_1.3fr]">
          {/* Left Metadata Panel */}
          <Reveal>
            <div className="bg-[#2E313D] border border-white/5 h-full rounded-2xl p-8 shadow-lg">
              <ul className="space-y-6">
                {info.map((it) => (
                  <li key={it.label} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F5A524] text-[#1B1C22] font-bold shadow-md">
                      <it.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono uppercase tracking-widest text-[#F5A524]">{it.label}</p>
                      <div className="mt-1 flex items-center gap-2">
                        {it.href ? (
                          <a href={it.href} className="text-sm font-medium text-white hover:text-[#F5A524] transition truncate">
                            {it.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-white truncate">{it.value}</span>
                        )}
                        <CopyField value={it.value} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-6 border-t border-white/5 flex gap-3">
                <a href="https://github.com/arunveda2005-sys" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-[#22242C] border border-white/5 text-[#9CA3AF] hover:text-[#F5A524] hover:border-[#F5A524]/40 transition duration-200">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/arun-adhithya-v-528953312" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-[#22242C] border border-white/5 text-[#9CA3AF] hover:text-[#F5A524] hover:border-[#F5A524]/40 transition duration-200">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Live Submission Form */}
          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-[#2E313D] border border-white/5 space-y-5 rounded-2xl p-8 shadow-lg"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* EmailJS matching variables via standard name attributes */}
                <FloatingInput label="Your Name" name="user_name" type="text" required />
                <FloatingInput label="Your Email" name="user_email" type="email" required />
              </div>
              <FloatingInput label="Subject" name="subject" type="text" />
              <FloatingTextarea label="Message" name="message" required />
              
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#F5A524] px-7 py-3.5 text-sm font-bold text-[#1B1C22] shadow-md transition hover:bg-[#F5A524]/90 disabled:opacity-50 duration-200"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <Check size={16} /> Message Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message <Send size={14} className="transition group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-xs text-red-400 mt-2">
                  Failed to send message. Please verify your EmailJS configuration keys.
                </p>
              )}
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
        className="peer w-full rounded-xl border border-white/5 bg-[#22242C] px-4 pb-2 pt-6 text-sm text-white outline-none transition focus:border-[#F5A524]/50 focus:bg-[#22242C]/80"
      />
      <span className="pointer-events-none absolute left-4 top-4 text-xs text-[#9CA3AF] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#F5A524]">
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
        className="peer w-full resize-none rounded-xl border border-white/5 bg-[#22242C] px-4 pb-2 pt-6 text-sm text-white outline-none transition focus:border-[#F5A524]/50 focus:bg-[#22242C]/80"
      />
      <span className="pointer-events-none absolute left-4 top-4 text-xs text-[#9CA3AF] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#F5A524]">
        {label}
      </span>
    </label>
  );
}
