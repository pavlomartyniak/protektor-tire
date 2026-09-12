import Link from "next/link";
import { H2, P } from "@/components/ui/Typography";
import { BookButton } from "@/components/booking/BookButton";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/services";
import { ROUTES } from "@/lib/routes";

export function ServicesSection() {
  return (
    <section className="bg-[#111111] py-20 lg:py-28 px-6 lg:px-12 w-full">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal className="flex flex-col gap-4 mb-16">
          <H2 className="text-white uppercase font-display max-w-4xl">
            ПОВНИЙ КОМПЛЕКС ШИНОМОНТАЖНИХ РОБІТ
          </H2>
          <P className="text-white/70 max-w-3xl text-sm md:text-base leading-relaxed">
            Надаємо повний спектр шиномонтажних послуг — від сезонної перевзувки
            до ремонту та балансування коліс. Працюємо з будь-якими типами шин
            та дисків, включаючи Run Flat і низькопрофільні.
          </P>
        </ScrollReveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <StaggerItem
              key={service.slug}
              className="bg-[#1a1a1a] flex flex-col group overflow-hidden"
            >
              <Link
                href={`${ROUTES.services}#${service.slug}`}
                className="relative h-[260px] md:h-[300px] w-full bg-zinc-800 overflow-hidden block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white/70 bg-black/50 px-3 py-1.5 border border-white/10">
                  від {service.priceFrom}&nbsp;₴ / {service.unit}
                </span>
              </Link>

              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-4 tracking-wide font-display">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 flex-1">
                  {service.short}
                </p>

                <div className="flex flex-col gap-4 items-start">
                  <BookButton
                    service={service.title}
                    variant="outline"
                    className="py-3 px-8 text-sm md:text-sm !border-white/20 hover:!border-white text-white"
                  >
                    Записатись
                  </BookButton>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
