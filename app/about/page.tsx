import type { Metadata } from "next";
import {
  FaScrewdriverWrench,
  FaUserGroup,
  FaAward,
  FaLeaf,
} from "react-icons/fa6";
import { PageHero } from "@/components/layout/PageHero";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/ui/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

export const metadata: Metadata = {
  title: "Про нас",
  description:
    "Protektor — шиномонтаж повного циклу в Києві. Сучасне обладнання, досвідчена команда та чесний підхід до кожного клієнта.",
};

const VALUES = [
  {
    icon: FaScrewdriverWrench,
    title: "Сучасне обладнання",
    text: "Безінерційні шиномонтажні верстати та цифрові балансувальні стенди — оновлюємо парк обладнання щороку.",
  },
  {
    icon: FaUserGroup,
    title: "Досвідчена команда",
    text: "Майстри з профільною підготовкою та багаторічним досвідом роботи з легковими авто й позашляховиками.",
  },
  {
    icon: FaAward,
    title: "Гарантія та відповідальність",
    text: "Даємо гарантію на всі виконані роботи та несемо відповідальність за якість монтажу.",
  },
  {
    icon: FaLeaf,
    title: "Дбаємо про диски",
    text: "Технології монтажу без пошкодження литих дисків, навіть з низькопрофільною гумою.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <PageHero
        eyebrow="Про нас"
        title="Шиномонтаж, якому довіряють колеса"
        description="Ми почали з простого переконання: сервіс для авто має бути таким же точним, як і саме авто. Це переконання досі визначає, як ми працюємо."
        crumb="Про нас"
      />

      <section className="py-16 md:py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
          <ScrollReveal>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              <span className="text-white font-semibold">Protektor</span> —
              це шиномонтаж повного циклу для тих, хто не хоче ризикувати
              станом своїх коліс. За роки роботи ми обслужили тисячі
              автомобілів — від міських хетчбеків до важких позашляховиків —
              і в кожному випадку підходимо до роботи однаково уважно.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              Ми свідомо не женемось за найнижчою ціною на ринку — натомість
              інвестуємо в обладнання, яке не пошкоджує диски, та в майстрів,
              які пояснюють, що і навіщо роблять з вашим авто. Саме тому
              більшість клієнтів повертаються до нас щосезону.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 px-5 sm:px-8 lg:px-12 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="mb-12 max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-white tracking-tight">
              На чому тримається наш сервіс
            </h2>
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <StaggerItem
                key={value.title}
                className="flex flex-col gap-4 p-6 md:p-8 bg-[#1a1a1a] border border-white/5"
              >
                <value.icon className="w-7 h-7 text-accent-red" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-display">
                  {value.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {value.text}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <WhyUsSection />
      <CTASection />
    </main>
  );
}
