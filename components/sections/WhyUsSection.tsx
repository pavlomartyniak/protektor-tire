import {
  FaGaugeHigh,
  FaShieldHalved,
  FaClock,
  FaMedal,
} from "react-icons/fa6";
import { H2, P } from "@/components/ui/Typography";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ui/ScrollReveal";

const STATS = [
  { value: "10+", label: "років досвіду команди" },
  { value: "5000+", label: "виконаних заїздів" },
  { value: "30 хв", label: "середній час перевзування" },
  { value: "100%", label: "гарантія на роботи" },
];

const REASONS = [
  {
    icon: FaGaugeHigh,
    title: "Цифрова точність",
    text: "Балансувальні стенди та шиномонтажні верстати нового покоління — без сколів дисків і залишкової вібрації.",
  },
  {
    icon: FaShieldHalved,
    title: "Гарантія на роботи",
    text: "Якщо щось не влаштує після виїзду — повернемось до питання безкоштовно. Чесно і без застережень дрібним шрифтом.",
  },
  {
    icon: FaClock,
    title: "Без довгого очікування",
    text: "Записуєтесь на конкретний час — не сидите в черзі. Більшість заїздів завершуємо менш ніж за годину.",
  },
  {
    icon: FaMedal,
    title: "Працюємо з будь-якими шинами",
    text: "Легкові, кросовери, позашляховики, низькопрофільна та Run Flat гума — обладнання розраховане на складні випадки.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 px-6 lg:px-12 w-full">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal className="flex flex-col gap-4 mb-14 max-w-3xl">
          <H2 className="text-white uppercase font-display">
            Чому обирають Protektor
          </H2>
          <P className="text-white/60 text-sm md:text-base leading-relaxed">
            Ми не намагаємось бути найдешевшими — ми намагаємось бути
            сервісом, до якого хочеться повертатись щосезону.
          </P>
        </ScrollReveal>

        <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {STATS.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="border border-white/10 px-5 py-6 md:p-8 flex flex-col gap-2"
            >
              <span className="text-3xl md:text-5xl font-display font-bold text-accent-red tracking-tight">
                {stat.value}
              </span>
              <span className="text-white/50 text-xs md:text-sm leading-snug">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {REASONS.map((reason) => (
            <StaggerItem
              key={reason.title}
              className="flex gap-5 p-6 md:p-8 bg-[#111111] border border-white/5"
            >
              <reason.icon className="w-7 h-7 text-accent-red flex-shrink-0 mt-1" />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide font-display">
                  {reason.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
