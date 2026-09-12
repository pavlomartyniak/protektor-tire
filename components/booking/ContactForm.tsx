"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaWhatsapp, FaPhone } from "react-icons/fa6";
import { useBookingForm, TIME_SLOTS } from "@/lib/useBookingForm";
import { SERVICES } from "@/lib/services";
import { SITE, telLink, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full bg-white/5 border border-white/15 focus:border-accent-red outline-none text-white placeholder:text-white/30 px-4 py-3 text-sm transition-colors";

export function ContactForm() {
  const form = useBookingForm(SERVICES[0].title);

  return (
    <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {form.step === "form" ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={form.submit}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-white uppercase tracking-wide font-display mb-1">
              Залишити заявку
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wide text-white/40 font-medium">
                  Ваше ім&apos;я
                </span>
                <input
                  value={form.name}
                  onChange={(e) => form.setName(e.target.value)}
                  placeholder="Олександр"
                  className={inputClass}
                  autoComplete="name"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-wide text-white/40 font-medium">
                  Телефон
                </span>
                <input
                  value={form.phone}
                  onChange={(e) => form.setPhone(e.target.value)}
                  placeholder="067 898 76 54"
                  type="tel"
                  className={inputClass}
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs uppercase tracking-wide text-white/40 font-medium">
                Послуга
              </span>
              <select
                value={form.service}
                onChange={(e) => form.setService(e.target.value)}
                className={cn(inputClass, "appearance-none cursor-pointer")}
              >
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Потрібна консультація">
                  Потрібна консультація
                </option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs uppercase tracking-wide text-white/40 font-medium">
                Бажаний час
              </span>
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => form.setTime(slot)}
                    className={cn(
                      "text-xs sm:text-sm px-3 py-2.5 border text-left transition-colors cursor-pointer",
                      form.time === slot
                        ? "border-accent-red bg-accent-red/10 text-white"
                        : "border-white/15 text-white/60 hover:border-white/40",
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs uppercase tracking-wide text-white/40 font-medium">
                Коментар (модель авто, розмір шин)
              </span>
              <textarea
                value={form.comment}
                onChange={(e) => form.setComment(e.target.value)}
                placeholder="Наприклад: Toyota RAV4, 235/60 R18"
                rows={3}
                className={cn(inputClass, "resize-none")}
              />
            </label>

            {form.error && (
              <p className="text-accent-red text-sm -mt-1">{form.error}</p>
            )}

            <button
              type="submit"
              className="mt-1 relative overflow-hidden font-bold uppercase tracking-wider transition-all active:scale-[0.985] -skew-x-[15deg] inline-flex items-center justify-center gap-2 bg-accent-red text-white px-8 py-4 text-sm cursor-pointer hover:bg-accent-redDark"
            >
              <span className="skew-x-[15deg] inline-flex items-center gap-2">
                <FaWhatsapp className="w-5 h-5" />
                Надіслати у WhatsApp
              </span>
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center gap-5 py-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-16 h-16 rounded-full bg-accent-red/15 border border-accent-red flex items-center justify-center"
            >
              <FaCheck className="w-6 h-6 text-accent-red" />
            </motion.div>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Ми відкрили WhatsApp з вашим повідомленням. Якщо вікно не
              з&apos;явилось, скористайтесь кнопками нижче.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
              <a
                href={form.sentLink || whatsappLink("Запис на СТО " + SITE.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 -skew-x-[15deg] inline-flex items-center justify-center gap-2 bg-accent-red text-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-accent-redDark transition-colors"
              >
                <span className="skew-x-[15deg] inline-flex items-center gap-2">
                  <FaWhatsapp className="w-4 h-4" /> WhatsApp
                </span>
              </a>
              <a
                href={telLink()}
                className="flex-1 -skew-x-[15deg] inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:border-white transition-colors"
              >
                <span className="skew-x-[15deg] inline-flex items-center gap-2">
                  <FaPhone className="w-4 h-4" /> Подзвонити
                </span>
              </a>
            </div>
            <button
              onClick={() => form.reset()}
              className="text-white/40 hover:text-white text-sm underline underline-offset-4 cursor-pointer"
            >
              Заповнити ще раз
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
