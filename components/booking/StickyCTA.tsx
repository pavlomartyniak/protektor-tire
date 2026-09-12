"use client";

import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { useBooking } from "@/components/booking/BookingContext";
import { telLink } from "@/lib/site-config";

export function StickyCTA() {
  const { isOpen, openBooking } = useBooking();

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isOpen ? 100 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky-cta fixed bottom-0 left-0 right-0 z-[150] lg:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 px-4 pt-3 flex items-center gap-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={telLink()}
        className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-white/20 text-white active:scale-95 transition-transform"
        aria-label="Подзвонити"
      >
        <FaPhone className="w-5 h-5" />
      </a>
      <button
        onClick={() => openBooking()}
        className="flex-1 h-12 flex items-center justify-center gap-2 bg-accent-red text-white font-bold uppercase tracking-wider text-sm active:scale-[0.98] transition-transform cursor-pointer"
      >
        <FaWhatsapp className="w-5 h-5" />
        Записатись
      </button>
    </motion.div>
  );
}
