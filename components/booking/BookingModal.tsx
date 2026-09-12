"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark, FaCheck, FaWhatsapp, FaPhone } from "react-icons/fa6";
import { useBooking } from "@/components/booking/BookingContext";
import { SITE, telLink, whatsappLink } from "@/lib/site-config";
import { SERVICES } from "@/lib/services";
import { useBookingForm, TIME_SLOTS } from "@/lib/useBookingForm";
import { cn } from "@/lib/utils";

export function BookingModal() {
  const { isOpen, presetService, closeBooking } = useBooking();
  const form = useBookingForm(presetService || SERVICES[0].title);

  useEffect(() => {
    if (isOpen) {
      form.reset(presetService || SERVICES[0].title);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, presetService]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeBooking();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeBooking]);

  function resetAndClose() {
    closeBooking();
    setTimeout(() => form.reset(), 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={resetAndClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Форма запису на шиномонтаж"
            className="relative z-10 w-full sm:max-w-[520px] max-h-[92svh] overflow-y-auto bg-[#111111] border border-white/10 border-t-2 sm:border-t border-t-accent-red shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-red font-semibold">
                  {SITE.name}
                </p>
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight mt-1">
                  {form.step === "form" ? "Записатись на сервіс" : "Заявку відправлено"}
                </h2>
              </div>
              <button
                onClick={resetAndClose}
                aria-label="Закрити"
                className="text-white/60 hover:text-white transition-colors p-2 -mr-2 cursor-pointer"
              >
                <FaXmark className="w-5 h-5" />
              </button>
            </div>

            {form.step === "form" ? (
              <form
                onSubmit={form.submit}
                className="px-6 sm:px-8 py-6 flex flex-col gap-4"
              >
                <p className="text-white/50 text-sm leading-relaxed">
                  Залиште контакти — ми зв&apos;яжемось у WhatsApp протягом
                  робочого дня та підтвердимо зручний час.
                </p>

                <Field label="Ваше ім'я">
                  <input
                    value={form.name}
                    onChange={(e) => form.setName(e.target.value)}
                    placeholder="Олександр"
                    className={inputClass}
                    autoComplete="name"
                  />
                </Field>

                <Field label="Телефон">
                  <input
                    value={form.phone}
                    onChange={(e) => form.setPhone(e.target.value)}
                    placeholder="067 898 76 54"
                    type="tel"
                    className={inputClass}
                    autoComplete="tel"
                  />
                </Field>

                <Field label="Послуга">
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
                </Field>

                <Field label="Бажаний час">
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
                </Field>

                <Field label="Коментар (модель авто, розмір шин)">
                  <textarea
                    value={form.comment}
                    onChange={(e) => form.setComment(e.target.value)}
                    placeholder="Наприклад: Toyota RAV4, 235/60 R18"
                    rows={2}
                    className={cn(inputClass, "resize-none")}
                  />
                </Field>

                {form.error && (
                  <p className="text-accent-red text-sm -mt-1">{form.error}</p>
                )}

                <button
                  type="submit"
                  className="mt-2 relative overflow-hidden font-bold uppercase tracking-wider transition-all active:scale-[0.985] -skew-x-[15deg] inline-flex items-center justify-center gap-2 bg-accent-red text-white px-8 py-4 text-sm cursor-pointer hover:bg-accent-redDark"
                >
                  <span className="skew-x-[15deg] inline-flex items-center gap-2">
                    <FaWhatsapp className="w-5 h-5" />
                    Надіслати у WhatsApp
                  </span>
                </button>

                <p className="text-white/30 text-xs text-center">
                  Або зателефонуйте напряму:{" "}
                  <a href={telLink()} className="text-white/60 hover:text-white underline">
                    {SITE.phoneDisplay}
                  </a>
                </p>
              </form>
            ) : (
              <div className="px-6 sm:px-8 py-8 flex flex-col items-center text-center gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-accent-red/15 border border-accent-red flex items-center justify-center"
                >
                  <FaCheck className="w-6 h-6 text-accent-red" />
                </motion.div>
                <p className="text-white/70 leading-relaxed">
                  Ми відкрили WhatsApp з вашим повідомленням. Якщо вікно не
                  з&apos;явилось, скористайтесь кнопками нижче.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
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
                  onClick={resetAndClose}
                  className="text-white/40 hover:text-white text-sm underline underline-offset-4 cursor-pointer mt-1"
                >
                  Закрити
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const inputClass =
  "w-full bg-white/5 border border-white/15 focus:border-accent-red outline-none text-white placeholder:text-white/30 px-4 py-3 text-sm transition-colors";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-wide text-white/40 font-medium">
        {label}
      </span>
      {children}
    </label>
  );
}
