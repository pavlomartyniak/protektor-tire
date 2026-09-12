import { FaRegCheckCircle } from "react-icons/fa";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { HeroContent } from "@/components/sections/HeroContent";

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

        <HeroContent />

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
      <WhyUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
