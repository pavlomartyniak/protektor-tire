"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumb: string;
}) {
  return (
    <div className="bg-[#0a0a0a] border-b border-white/10 pt-[130px] md:pt-[160px] pb-12 md:pb-16 px-5 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[1400px] mx-auto flex flex-col gap-4"
      >
        <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest">
          <Link href={ROUTES.home} className="hover:text-white transition-colors">
            Головна
          </Link>
          <span>/</span>
          <span className="text-white/70">{crumb}</span>
        </div>
        {eyebrow && (
          <span className="text-accent-red text-xs uppercase tracking-[0.2em] font-semibold">
            {eyebrow}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
