import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Brain, Cloud, Code2 } from "lucide-react";
import profile from "@/assets/profile.png";
import { ParticleBackground } from "./Background";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-16 bg-[#22242C] text-[#F3F4F6] flex flex-col justify-between">
      <ParticleBackground />
      
      {/* Main Upper Content Layout mapping the Carlos Mendoza preview */}
      <div className="container relative mx-auto px-6 flex-1 flex flex-col justify-center">
        
        {/* Editorial grid layout aligning Name and adjacent character portrait seamlessly */}
        <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10 pt-12">
          
          {/* Left Side Group: Tightly couples the Name headline and the adjacent Character Portrait */}
          <div className="lg:col-span-8 relative flex flex-col lg:flex-row lg:items-end justify-start z-30">
            
            {/* Title & Underline segment */}
            <div className="relative z-30 shrink-0">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95]"
              >
                Arun<br />Adhithya V
              </motion.h1>
              
              {/* Prominent Template Signature Amber underline directly below the title */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 85 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-5 h-2.5 bg-[#F5A524] rounded-full shadow-[0_0_15px_rgba(245,165,36,0.3)]"
              />
              
              {/* Minimal Social Links row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-10 flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-[#9CA3AF]"
              >
                <a href="https://github.com/arunveda2005-sys" target="_blank" rel="noreferrer" className="hover:text-[#F5A524] transition flex items-center gap-1.5">
                  <Github size={14} /> gh
                </a>
                <a href="https://linkedin.com/in/arun-adhithya-v-528953312" target="_blank" rel="noreferrer" className="hover:text-[#F5A524] transition flex items-center gap-1.5">
                  <Linkedin size={14} /> in
                </a>
                <a href="mailto:arunveda2005@gmail.com" className="hover:text-[#F5A524] transition flex items-center gap-1.5">
                  <Mail size={14} /> mail
                </a>
              </motion.div>
            </div>

            {/* Character Portrait positioned tightly flush against the Name letters mapping the Carlos layout */}
            <div className="relative mt-8 lg:mt-0 lg:-ml-6 z-20 pointer-events-none flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[480px] lg:-mb-12"
              >
                {/* Sleek shadow base overlay to ground the portrait */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#22242C] via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={profile}
                  alt="Arun Adhithya V"
                  className="w-full h-full object-cover object-top pointer-events-auto"
                  style={{
                    /* Grounding mask to seamlessly blend the bottom edge of the transparent cutout into the section floor */
                    maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
                  }}
                />
              </motion.div>
            </div>

          </div>

          {/* Right Block: Introduction Section lined up on the far right */}
          <div className="lg:col-span-4 relative z-30 pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:pl-6"
            >
              <p className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF] flex items-center gap-2">
                <span className="h-px w-6 bg-[#F5A524]" /> Introduction
              </p>
              
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-bold italic leading-snug text-white tracking-wide">
                <span className="text-[#F5A524] text-4xl leading-none not-italic">"</span>
                I build intelligent, scalable systems that turn complex data into production-ready AI solutions.
                <span className="text-[#F5A524] text-4xl leading-none not-italic">"</span>
              </h2>
              
              <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF]">
                Software Engineer and AI Developer specializing in computer vision, autonomous threat detection, and resilient AWS infrastructures. Focused on bridging advanced machine learning models with high-availability, full-stack systems.
              </p>
              
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#F5A524] hover:underline underline-offset-4"
                >
                  My story <ArrowRight size={14} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1VaQNRv_pEnuV-asPPTfHc450tkZBaFbk/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 hover:border-[#F5A524]/40 transition duration-200"
                >
                  View Resume
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Layout Row: High-Contrast Solid Feature Blocks matching template screenshot */}
      <div className="container relative mx-auto px-6 mt-16 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl"
        >
          {/* Feature Card 1: Solid Primary Yellow/Amber block */}
          <div className="rounded-xl bg-[#F5A524] p-8 text-[#1B1C22] shadow-xl flex flex-col justify-between transition hover:-translate-y-1 duration-300">
            <Brain size={28} className="text-[#1B1C22]" />
            <div className="mt-12">
              <h3 className="font-display text-xl font-bold">AI / ML<br />Developer.</h3>
              <p className="mt-1 text-xs font-semibold opacity-80">8+ Deep Learning Projects</p>
            </div>
          </div>

          {/* Feature Card 2: Solid Primary Yellow/Amber block */}
          <div className="rounded-xl bg-[#F5A524] p-8 text-[#1B1C22] shadow-xl flex flex-col justify-between transition hover:-translate-y-1 duration-300">
            <Cloud size={28} className="text-[#1B1C22]" />
            <div className="mt-12">
              <h3 className="font-display text-xl font-bold">AWS Cloud<br />Architect.</h3>
              <p className="mt-1 text-xs font-semibold opacity-80">2 Certified Tracks</p>
            </div>
          </div>

          {/* Feature Card 3: Solid Primary Yellow/Amber block */}
          <div className="rounded-xl bg-[#F5A524] p-8 text-[#1B1C22] shadow-xl flex flex-col justify-between transition hover:-translate-y-1 duration-300 sm:col-span-2 lg:col-span-1">
            <Code2 size={28} className="text-[#1B1C22]" />
            <div className="mt-12">
              <h3 className="font-display text-xl font-bold">Full Stack<br />Engineer.</h3>
              <p className="mt-1 text-xs font-semibold opacity-80">MERN & Full-Stack Apps</p>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
