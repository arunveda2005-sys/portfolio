import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            <span className="text-gradient">Arun</span>.dev
          </p>
          <p className="mt-3 max-w-xs text-sm italic text-muted-foreground">
            "Engineering is the art of turning curiosity into systems that scale."
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Navigate</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-neon-cyan">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Connect</p>
          <div className="mt-3 flex gap-2">
            {[
              { icon: Github, href: "https://github.com/arunveda2005-sys" },
              { icon: Linkedin, href: "https://linkedin.com/in/arun-adhithya-v-528953312" },
              { icon: Mail, href: "mailto:arunveda2005@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass grid h-10 w-10 place-items-center rounded-xl transition hover:text-neon-cyan"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-white/5 px-6 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Arun Adhithya V. Crafted with care.
      </div>
    </footer>
  );
}
