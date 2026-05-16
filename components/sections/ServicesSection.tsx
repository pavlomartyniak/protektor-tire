import { H2, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "СЕЗОННА ЗАМІНА ШИН",
    description:
      "Швидка та акуратна перевзувка шин з перевіркою тиску та стану протектора",
    image: "/services/change-tire.webp",
  },
  {
    title: "БАЛАНСУВАННЯ КОЛІС",
    description:
      "Використовуємо цифрове обладнання для точного розподілу ваги та усунення вібрацій",
    image: "/services/balance-wheel.png",
  },
  {
    title: "МОНТАЖ ТА ДЕМОНТАЖ ШИН",
    description:
      "Проводимо установку та зняття шин без пошкодження дисків, включаючи Run Flat і низькопрофільні шини",
    image: "/services/montage-tire.webp",
  },
  {
    title: "РЕМОНТ ПРОКОЛІВ ТА ПОРІЗІВ",
    description:
      "Відновлюємо герметичність та структуру шини з гарантією надійності та безпеки",
    image: "/services/repair-tire.webp",
  },
  {
    title: "ЗАМІНА ВЕНТИЛІВ ТА ГЕРМЕТИЗАЦІЯ",
    description:
      "Оновлюємо вентилі та ущільнення, забезпечуючи герметичність і стабільний тиск у шинах",
    image: "/services/germetic-tire.webp",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#111111] py-20 lg:py-28 px-6 lg:px-12 w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <H2 className="text-white uppercase font-display max-w-4xl">
            ПОВНИЙ КОМПЛЕКС ШИНОМОНТАЖНИХ РОБІТ
          </H2>
          <P className="text-white/70 max-w-3xl text-sm md:text-base leading-relaxed">
            Надаємо повний спектр шиномонтажних послуг — від сезонної перевзувки
            до ремонту та балансування коліс. Працюємо з будь-якими типами шин
            та дисків, включаючи Run Flat і низькопрофільні.
          </P>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] flex flex-col group overflow-hidden"
            >
              <div className="relative h-[300px] w-full bg-zinc-800 overflow-hidden">
                {/* Image Placeholder */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-4 tracking-wide font-display">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 flex-1">
                  {service.description}
                </p>

                <div className="flex flex-col gap-4 items-start">
                  <Button
                    variant="outline"
                    className="py-3 px-8 text-sm md:text-sm !border-white/20 hover:!border-white text-white"
                  >
                    Записатись
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
