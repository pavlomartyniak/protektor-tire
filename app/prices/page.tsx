import type { Metadata } from "next";
import { FaCircleInfo } from "react-icons/fa6";
import { PageHero } from "@/components/layout/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { ADDITIONAL_SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Ціни",
  description:
    "Прозорі ціни на шиномонтаж: заміна, балансування та ремонт шин залежно від діаметра диска. Без прихованих доплат.",
};

const DIAMETER_TIERS = ["R13–R15", "R16–R17", "R18–R19", "R20+"];

const PRICE_ROWS = [
  { title: "Демонтаж / монтаж шини", prices: [180, 220, 280, 350] },
  { title: "Балансування колеса", prices: [130, 150, 190, 230] },
  {
    title: "Комплексна заміна (демонтаж + монтаж + балансування)",
    prices: [280, 340, 420, 520],
    highlight: true,
  },
  { title: "Ремонт проколу (джгут)", prices: [150, 170, 190, 220] },
  { title: "Ремонт грибком-латкою", prices: [220, 250, 280, 320] },
];

export default function PricesPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <PageHero
        eyebrow="Ціни"
        title="Чесні ціни без доплат в останній момент"
        description="Фінальна вартість залежить від діаметра диска, типу шини та складності робіт. Точну суму назвемо після огляду на місці."
        crumb="Ціни"
      />

      <section className="py-14 md:py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal className="overflow-x-auto border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[#141414] text-left">
                  <th className="px-5 py-4 text-white/50 uppercase text-xs tracking-widest font-semibold">
                    Послуга
                  </th>
                  {DIAMETER_TIERS.map((tier) => (
                    <th
                      key={tier}
                      className="px-5 py-4 text-white/50 uppercase text-xs tracking-widest font-semibold text-right whitespace-nowrap"
                    >
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((row) => (
                  <tr
                    key={row.title}
                    className={`border-t border-white/10 ${row.highlight ? "bg-accent-red/5" : ""}`}
                  >
                    <td className="px-5 py-4 text-white/90 font-medium">
                      {row.title}
                      {row.highlight && (
                        <span className="ml-2 inline-block text-[10px] uppercase tracking-wide bg-accent-red text-white px-2 py-0.5 align-middle">
                          Вигідно
                        </span>
                      )}
                    </td>
                    {row.prices.map((price, i) => (
                      <td
                        key={i}
                        className="px-5 py-4 text-right text-white font-semibold whitespace-nowrap"
                      >
                        {price} ₴
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex items-start gap-3 mt-6 text-white/40 text-xs md:text-sm max-w-2xl">
            <FaCircleInfo className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              Ціни вказані за одне колесо та є орієнтовними. Точна вартість
              залежить від стану диска, типу гуми (Run Flat, низькопрофільна)
              та складності робіт — узгоджується до початку монтажу.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-20 px-5 sm:px-8 lg:px-12 bg-[#111111]">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal className="flex flex-col gap-3 mb-10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase text-white tracking-tight">
              Додаткові послуги
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {ADDITIONAL_SERVICES.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 py-4 border-b border-white/10"
              >
                <span className="text-white/80 text-sm md:text-base">
                  {item.title}
                </span>
                <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
                  від {item.priceFrom} ₴
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
