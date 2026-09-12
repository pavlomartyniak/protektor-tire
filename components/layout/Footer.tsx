import Link from "next/link";
import { FaWhatsapp, FaPhone, FaLocationDot } from "react-icons/fa6";
import { ROUTES } from "@/lib/routes";
import { SITE, telLink, whatsappLink } from "@/lib/site-config";
import { OpenStatus } from "@/components/ui/OpenStatus";

const routes = [
  { title: "Головна", route: ROUTES.home },
  { title: "Послуги", route: ROUTES.services },
  { title: "Ціни", route: ROUTES.prices },
  { title: "Про нас", route: ROUTES.about },
  { title: "Контакти", route: ROUTES.contacts },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <Link href={ROUTES.home}>
            <span className="text-2xl font-display font-bold uppercase tracking-wider text-white">
              {SITE.name}
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Шиномонтаж повного циклу для тих, хто цінує своє авто. Точне
            обладнання, чесні ціни, гарантія на роботи.
          </p>
          <OpenStatus className="mt-1" />
          <div className="flex items-center gap-5 mt-2">
            <a
              href={telLink()}
              className="text-white/60 hover:text-accent-red transition-colors"
              aria-label="Подзвонити"
            >
              <FaPhone className="w-5 h-5" />
            </a>
            <a
              href={whatsappLink(`Вітаю! Маю питання щодо шиномонтажу в ${SITE.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent-red transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-[22px] h-[22px]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 font-semibold">
            Навігація
          </h3>
          <ul className="flex flex-col gap-3">
            {routes.map((item) => (
              <li key={item.route}>
                <Link
                  href={item.route}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 font-semibold">
            Контакти
          </h3>
          <a
            href={telLink()}
            className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
          >
            <FaPhone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-red" />
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
          >
            <FaLocationDot className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-red" />
            {SITE.address}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.15em] text-white/40 font-semibold">
            Графік роботи
          </h3>
          <ul className="flex flex-col gap-2.5">
            {SITE.workingHours.map((row) => (
              <li
                key={row.day}
                className="flex items-center justify-between gap-4 text-sm text-white/70"
              >
                <span>{row.day}</span>
                <span className="text-white/90 font-medium">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <span>
            © {new Date().getFullYear()} {SITE.name}. Усі права захищено.
          </span>
          <span>Шиномонтаж, який тримає слово.</span>
        </div>
      </div>
    </footer>
  );
}
