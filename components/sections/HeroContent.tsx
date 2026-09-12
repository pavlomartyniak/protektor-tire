"use client";

import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { H1, P } from "@/components/ui/Typography";
import { BookButton } from "@/components/booking/BookButton";
import { telLink } from "@/lib/site-config";

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 max-w-[1000px] flex flex-col gap-5 md:gap-8 mb-10 md:mb-16 lg:mb-24 mt-auto"
    >
      <H1 className="uppercase font-display text-white !text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl !leading-[1.15] md:!leading-[1.05]">
        PROTEKTOR —{" "}
        <span className="text-white/50 block mt-2 lg:inline lg:mt-0">
          ШИНОМОНТАЖ ПОВНОГО ЦИКЛУ ДЛЯ ТИХ, ХТО ЦІНУЄ СВОЄ АВТО
        </span>
      </H1>

      <P className="text-white/80 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
        Професійний шиномонтаж для легкових автомобілів та позашляховиків.
        Виконуємо заміну, балансування та ремонт шин на сучасному обладнанні.
        Гарантуємо надійне прилягання, ідеальне балансування та тривалий
        термін експлуатації коліс.
      </P>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-2 md:mt-4">
        <BookButton
          variant="primary"
          className="bg-white text-red-800 hover:bg-red-800 hover:text-white w-full sm:w-auto"
        >
          Записатись онлайн
        </BookButton>
        <a
          href={telLink()}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 -skew-x-[15deg] border border-neutral-gray text-white hover:border-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
        >
          <span className="skew-x-[15deg] inline-flex items-center gap-2">
            <FaPhone className="w-4 h-4" />
            Подзвонити
          </span>
        </a>
      </div>
    </motion.div>
  );
}
