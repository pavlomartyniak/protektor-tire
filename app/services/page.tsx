import type { Metadata } from "next";
import { FaClock, FaCircleCheck, FaHandshake } from "react-icons/fa6";
import { PageHero } from "@/components/layout/PageHero";
import { BookButton } from "@/components/booking/BookButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SERVICES, ADDITIONAL_SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Послуги",
  description:
    "Повний перелік послуг шиномонтажу Protektor: сезонна заміна, балансування, ремонт проколів, монтаж Run Flat та низькопрофільної гуми.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <PageHero
        eyebrow="Послуги"
        title="Повний цикл шиномонтажних робіт"
        description="Від сезонної перевзувки до складного ремонту — працюємо з будь-якими шинами та дисками на професійному обладнанні."
        crumb="Послуги"
      />

      <section className="py-16 md:py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-24">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.slug}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                id={service.slug}
                className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-[280px] md:h-[380px] w-full bg-zinc-900 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>

                <div className="flex flex-col gap-5">
                  <span className="text-accent-red text-xs uppercase tracking-[0.2em] font-semibold">
                    Послуга {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 py-2">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <FaClock className="w-4 h-4 text-accent-red" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <FaHandshake className="w-4 h-4 text-accent-red" />
                      Гарантія на роботи
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-2xl md:text-3xl font-display font-bold text-white">
                      від {service.priceFrom} ₴
                      <span className="text-white/40 text-sm font-sans font-normal ml-1">
                        / {service.unit}
                      </span>
                    </span>
                  </div>

                  <BookButton
                    service={service.title}
                    variant="primary"
                    className="bg-accent-red text-white hover:bg-accent-redDark w-full sm:w-fit"
                  >
                    Записатись на цю послугу
                  </BookButton>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 bg-[#111111]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="flex flex-col gap-3 mb-10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase text-white tracking-tight">
              Додаткові послуги
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Все, що потрібно колесам поза сезонною перевзувкою.
            </p>
          </ScrollReveal>

          <div className="flex flex-col border-t border-white/10">
            {ADDITIONAL_SERVICES.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 py-5 border-b border-white/10"
              >
                <div className="flex items-center gap-3">
                  <FaCircleCheck className="w-4 h-4 text-accent-red flex-shrink-0" />
                  <span className="text-white/80 text-sm md:text-base">
                    {item.title}
                  </span>
                </div>
                <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
                  від {item.priceFrom} ₴{" "}
                  <span className="text-white/40 font-normal">
                    / {item.unit}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </main>
  );
}
