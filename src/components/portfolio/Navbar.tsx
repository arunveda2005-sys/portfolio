import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services", active: true },
  { href: "#projects", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-8">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand Text */}
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-white hover:text-[#F5A524] transition">
          Arun
        </a>

        {/* Desktop Minimalist Links mirroring Template layout */}
        <ul className="hidden md:flex items-center gap-8 font-display text-base font-medium text-[#9CA3AF]">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                className={`transition hover:text-white ${l.active ? "text-white font-semibold" : ""}`}
              >
                {l.label}
              </a>
              {/* Template's subtle amber dot directly beneath the active element */}
              {l.active && (
                <span className="absolute left-1/2 -bottom-2.5 h-1 w-1 -translate-x-1/2 rounded-full bg-[#F5A524]" />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-[#9CA3AF] hover:text-white md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#22242C]/95 backdrop-blur-md p-6 border-b border-white/5 md:hidden animate-fade-up">
          <ul className="flex flex-col gap-4 font-display text-lg">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block transition hover:text-[#F5A524] ${l.active ? "text-[#F5A524] font-semibold" : "text-[#9CA3AF]"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
