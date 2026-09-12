import type { Metadata } from "next";
import {
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaLocationDot,
  FaEnvelope,
} from "react-icons/fa6";
import { PageHero } from "@/components/layout/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/booking/ContactForm";
import { OpenStatus } from "@/components/ui/OpenStatus";
import { SITE, telLink, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Контакти шиномонтажу Protektor: адреса, телефон, графік роботи та онлайн-заявка на запис.",
};

export default function ContactsPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <PageHero
        eyebrow="Контакти"
        title="Ми поруч і завжди на зв'язку"
        description="Телефонуйте, пишіть у WhatsApp або залиште заявку — оберіть зручний для вас спосіб."
        crumb="Контакти"
      />

      <section className="py-14 md:py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <ScrollReveal direction="left" className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <ContactRow
                icon={FaPhone}
                label="Телефон"
                value={SITE.phoneDisplay}
                href={telLink()}
              />
              <ContactRow
                icon={FaWhatsapp}
                label="WhatsApp"
                value="Написати нам"
                href={whatsappLink(
                  `Вітаю! Маю питання щодо шиномонтажу в ${SITE.name}`,
                )}
                external
              />
              <ContactRow
                icon={FaEnvelope}
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactRow
                icon={FaLocationDot}
                label="Адреса"
                value={SITE.address}
                href={SITE.mapLink}
                external
              />
              <ContactRow
                icon={FaInstagram}
                label="Instagram"
                value="@protektor.tire"
                href={SITE.instagram}
                external
              />
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 font-semibold">
                  Графік роботи
                </h3>
                <OpenStatus />
              </div>
              <ul className="flex flex-col gap-2.5">
                {SITE.workingHours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between gap-4 text-sm text-white/70"
                  >
                    <span>{row.day}</span>
                    <span className="text-white/90 font-medium">
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 h-[220px] overflow-hidden">
              <iframe
                src={SITE.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) grayscale(1)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта розташування СТО"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 group"
    >
      <span className="w-11 h-11 flex-shrink-0 flex items-center justify-center border border-white/15 text-accent-red group-hover:border-accent-red transition-colors">
        <Icon className="w-4.5 h-4.5" />
      </span>
      <span className="flex flex-col">
        <span className="text-white/40 text-xs uppercase tracking-wide">
          {label}
        </span>
        <span className="text-white text-base font-medium group-hover:text-accent-red transition-colors">
          {value}
        </span>
      </span>
    </a>
  );
}
