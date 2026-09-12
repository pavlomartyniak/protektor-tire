"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { H2, P } from "@/components/ui/Typography";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "Чи потрібно записуватись заздалегідь?",
    a: "Бажано — так ви гарантовано потрапите на зручний час без очікування. Але ми також приймаємо клієнтів без запису, якщо на сервісі є вільний підйомник.",
  },
  {
    q: "Скільки часу займає сезонна заміна шин?",
    a: "У середньому 30–40 хвилин на комплект з 4 коліс, включно з балансуванням. Час може збільшитись для позашляховиків або литих дисків складної форми.",
  },
  {
    q: "Чи можна зберегти зняті шини у вас?",
    a: "Так, пропонуємо сезонне зберігання шин у сухому опалюваному приміщенні. Деталі та вартість — на сторінці цін.",
  },
  {
    q: "Що робити, якщо не знаю розмір шин?",
    a: "Не проблема — вкажіть модель авто в коментарі при записі, або просто зателефонуйте, і ми підкажемо параметри за VIN чи маркуванням на старій шині.",
  },
  {
    q: "Чи даєте гарантію на виконані роботи?",
    a: "Так, на всі види робіт — монтаж, балансування, ремонт проколів. Якщо щось не влаштує, повернемось до питання безкоштовно.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#111111] py-20 lg:py-28 px-6 lg:px-12 w-full">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal className="flex flex-col gap-4 mb-12 text-center items-center">
          <H2 className="text-white uppercase font-display">
            Часті запитання
          </H2>
          <P className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
            Не знайшли відповідь? Напишіть нам у WhatsApp — відповідаємо
            протягом робочого дня.
          </P>
        </ScrollReveal>

        <div className="flex flex-col border-t border-white/10">
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "text-base md:text-lg font-medium transition-colors",
                      isOpen ? "text-white" : "text-white/70 group-hover:text-white",
                    )}
                  >
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-accent-red"
                  >
                    <FaPlus className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/55 text-sm leading-relaxed pb-6 pr-8">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
