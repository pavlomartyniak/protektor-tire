import { H2, P } from "@/components/ui/Typography";
import { BookButton } from "@/components/booking/BookButton";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    n: "01",
    title: "Обираєте послугу і час",
    text: "Тиснете «Записатись», обираєте зручний часовий проміжок і залишаєте номер телефону — займає менше хвилини.",
  },
  {
    n: "02",
    title: "Підтверджуємо у WhatsApp",
    text: "Ми пишемо або телефонуємо, щоб узгодити точний час, уточнити розмір шин і відповісти на запитання.",
  },
  {
    n: "03",
    title: "Приїжджаєте день в день",
    text: "Зустрічаємо вас у призначений час — без черги. Поки чекаєте, можна випити каву в зоні очікування.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#111111] py-20 lg:py-28 px-6 lg:px-12 w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <ScrollReveal className="flex flex-col gap-4 max-w-2xl">
            <H2 className="text-white uppercase font-display">
              Запис онлайн за 3 кроки
            </H2>
            <P className="text-white/60 text-sm md:text-base leading-relaxed">
              Жодних довгих анкет чи дзвінків у чергу — уся комунікація
              відбувається у звичному WhatsApp.
            </P>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <BookButton variant="primary" className="bg-accent-red text-white whitespace-nowrap">
              Записатись зараз
            </BookButton>
          </ScrollReveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((step) => (
            <StaggerItem
              key={step.n}
              className="relative border-t-2 border-accent-red pt-6"
            >
              <span className="block text-5xl md:text-6xl font-display font-bold text-white/10 mb-2">
                {step.n}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide font-display mb-3">
                {step.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {step.text}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
