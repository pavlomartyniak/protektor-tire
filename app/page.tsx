import { H1, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { FaRegCheckCircle } from "react-icons/fa";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <div
        className="min-h-[100svh] bg-cover bg-center bg-no-repeat relative flex flex-col justify-end pt-[120px] md:pt-[150px] pb-8 md:pb-12 px-5 sm:px-8 lg:px-12"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/80 pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-10 max-w-[1000px] flex flex-col gap-5 md:gap-8 mb-10 md:mb-16 lg:mb-24 mt-auto">
          <H1 className="uppercase font-display text-white !text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl !leading-[1.15] md:!leading-[1.05]">
            PROTEKTOR —{" "}
            <span className="text-white/50 block mt-2 lg:inline lg:mt-0">
              ШИНОМОНТАЖ ПОВНОГО ЦИКЛУ ДЛЯ ТИХ, ХТО ЦІНУЄ СВОЄ АВТО
            </span>
          </H1>

          <P className="text-white/80 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
            Професійний шиномонтаж для легкових автомобілів та позашляховиків.
            Виконуємо заміну, балансування та ремонт шин на сучасному
            обладнанні. Гарантуємо надійне прилягання, ідеальне балансування та
            тривалий термін експлуатації коліс.
          </P>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-2 md:mt-4">
            <Button
              href="tel:+380678987654"
              variant="primary"
              className="bg-white text-red-800 hover:bg-red-800 hover:text-white w-full sm:w-auto"
            >
              Розрахувати вартість
            </Button>
            <Button
              href="tel:+380678987654"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Записатись
            </Button>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="relative z-10 w-full mt-6 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pt-6 md:pt-0 border-t border-white/10 md:border-transparent">
            {[
              "Точне комп'ютерне балансування",
              "Відновлення геометрії дисків",
              "Швидке обслуговування та гарантія якості",
              "Працюємо з усіма брендами",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start sm:items-center gap-3 text-white"
              >
                <FaRegCheckCircle className="text-white w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-sm sm:text-base md:text-lg font-medium leading-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ServicesSection />
    </main>
  );
}
