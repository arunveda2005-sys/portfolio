import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center lg:text-left">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF] flex items-center justify-center lg:justify-start gap-2">
          <span className="h-px w-6 bg-[#F5A524]" /> {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl text-white">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF]">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
