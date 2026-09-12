import { FaPhone } from "react-icons/fa6";
import { H2 } from "@/components/ui/Typography";
import { BookButton } from "@/components/booking/BookButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE, telLink } from "@/lib/site-config";
import { OpenStatus } from "@/components/ui/OpenStatus";

export function CTASection() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 px-6 lg:px-12 w-full border-t border-white/5">
      <ScrollReveal className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-6">
        <OpenStatus />
        <H2 className="text-white uppercase font-display max-w-2xl">
          Готові подбати про свої колеса?
        </H2>
        <p className="text-white/60 max-w-xl text-sm md:text-base leading-relaxed">
          Запис займає менше хвилини. Оберіть зручний час — ми підтвердимо
          деталі у WhatsApp і чекатимемо на вас без черги.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <BookButton
            variant="primary"
            size="lg"
            className="bg-accent-red text-white hover:bg-accent-redDark"
          >
            Записатись онлайн
          </BookButton>
          <a
            href={telLink()}
            className="inline-flex items-center justify-center gap-2 -skew-x-[15deg] border border-white/20 text-white px-10 py-5 text-base font-bold uppercase tracking-wider hover:border-white transition-colors"
          >
            <span className="skew-x-[15deg] inline-flex items-center gap-2">
              <FaPhone className="w-4 h-4" />
              {SITE.phoneDisplay}
            </span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
