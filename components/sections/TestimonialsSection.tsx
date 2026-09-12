import { FaStar } from "react-icons/fa6";
import { H2, P } from "@/components/ui/Typography";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ui/ScrollReveal";

const REVIEWS = [
  {
    name: "Андрій К.",
    car: "Toyota RAV4",
    text: "Записався ввечері у WhatsApp, наступного ранку вже перевзувся без черги. Колеса після балансування — жодної вібрації навіть на трасі.",
  },
  {
    name: "Марина С.",
    car: "Škoda Octavia",
    text: "Приємно, що чесно сказали — прокол можна відремонтувати, міняти шину не треба. В інших сервісах одразу пропонували купувати нову.",
  },
  {
    name: "Дмитро П.",
    car: "BMW X5, R20",
    text: "Низькопрофільна гума на литих дисках — боявся за диски. Зробили акуратно, жодної подряпини. Тепер їжджу тільки сюди.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 px-6 lg:px-12 w-full">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal className="flex flex-col gap-4 mb-14 max-w-2xl">
          <H2 className="text-white uppercase font-display">
            Що кажуть клієнти
          </H2>
          <P className="text-white/60 text-sm md:text-base leading-relaxed">
            Реальні відгуки водіїв, які довірили нам свої колеса.
          </P>
        </ScrollReveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <StaggerItem
              key={review.name}
              className="bg-[#141414] border border-white/5 p-7 md:p-8 flex flex-col gap-5"
            >
              <div className="flex gap-1 text-accent-red">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                “{review.text}”
              </p>
              <div className="flex flex-col pt-4 border-t border-white/5">
                <span className="text-white font-semibold text-sm">
                  {review.name}
                </span>
                <span className="text-white/40 text-xs">{review.car}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
