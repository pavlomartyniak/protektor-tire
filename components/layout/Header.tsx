"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { H3, NavLink } from "../ui/Typography";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { BookButton } from "@/components/booking/BookButton";
import { ROUTES } from "@/lib/routes";
import { SITE, telLink, whatsappLink } from "@/lib/site-config";
import { usePathname } from "next/navigation";

const routes = [
  { title: "Головна", route: ROUTES.home },
  { title: "Послуги", route: ROUTES.services },
  { title: "Ціни", route: ROUTES.prices },
  { title: "Про нас", route: ROUTES.about },
  { title: "Контакти", route: ROUTES.contacts },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMobileMenuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] text-text-primary">
      {/* Desktop Header */}
      <div
        className={`hidden lg:flex w-full flex-col pt-6 px-12 transition-colors duration-300 ${
          scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md pb-4" : "pb-0"
        }`}
      >
        {/* Top Row */}
        <div className="flex items-center w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href={ROUTES.home}>
              <H3 className="text-text-primary m-0 leading-none uppercase tracking-wider font-display text-white/90 hover:text-white transition-colors cursor-pointer">
                {SITE.name}
              </H3>
            </Link>
          </div>

          {/* Top Divider Line */}
          <div className="flex-grow border-b border-neutral-gray/40 mx-8 h-px border-white/10" />

          {/* Contacts and Action */}
          <div className="flex-shrink-0 flex items-center gap-8">
            <div className="flex items-center gap-5">
              <a
                href={telLink()}
                className="text-white hover:text-accent-red transition-colors"
                aria-label="Подзвонити"
              >
                <FaPhone className="w-5 h-5" />
              </a>
              <a
                href={whatsappLink(
                  `Вітаю! Маю питання щодо шиномонтажу в ${SITE.name}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-red transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-[22px] h-[22px]" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-red transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-[22px] h-[22px]" />
              </a>
            </div>

            <a
              href={telLink()}
              className="font-medium tracking-wide text-white hover:text-accent-red transition-colors"
            >
              {SITE.phoneDisplay}
            </a>

            <BookButton variant="outline" className="px-8 py-3 text-sm">
              Записатись
            </BookButton>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center w-full mt-6">
          <nav className="flex-shrink-0">
            <ul className="flex items-center gap-10">
              {routes.map((item) => (
                <li key={item.route}>
                  <Link href={`${item.route}`}>
                    <NavLink
                      className={`capitalize tracking-wide ${pathname === item.route ? "text-white" : "text-white/50"}`}
                    >
                      {item.title}
                    </NavLink>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Divider Line */}
          <div className="flex-grow border-b border-neutral-gray/40 ml-10 h-px border-white/10" />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between w-full px-6 py-5 bg-bg/90 backdrop-blur-md border-b border-white/10 relative z-50">
        <Link href={ROUTES.home}>
          <H3 className="text-text-primary m-0 leading-none uppercase tracking-wider font-display text-white/90">
            {SITE.name}
          </H3>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-text-primary p-2 focus:outline-none hover:text-accent-red transition-colors cursor-pointer relative z-50"
          aria-label="Toggle Menu"
          style={{
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {isMobileMenuOpen ? (
            <FaXmark fill="white" className="w-7 h-7 pointer-events-none" />
          ) : (
            <FaBars fill="white" className="w-7 h-7 pointer-events-none" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-0 left-0 z-40 w-full min-h-[100dvh] pt-[100px] pb-8 overflow-y-auto bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col px-6 gap-8 shadow-2xl"
          >
            <nav>
              <ul className="flex flex-col gap-5">
                {routes.map((item) => (
                  <li key={item.route}>
                    <Link
                      href={`${item.route}`}
                      className={`text-xl font-medium text-text-primary hover:text-accent-red transition-colors ${item.route === pathname ? "text-white" : "text-white/50"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="w-full border-b border-white/10 mt-auto" />

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <a
                  href={telLink()}
                  className="text-white hover:text-accent-red transition-colors"
                  aria-label="Подзвонити"
                >
                  <FaPhone className="w-6 h-6" />
                </a>
                <a
                  href={whatsappLink(
                    `Вітаю! Маю питання щодо шиномонтажу в ${SITE.name}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-red transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-[26px] h-[26px]" />
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-red transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-[26px] h-[26px]" />
                </a>
              </div>

              <a
                href={telLink()}
                className="text-[20px] font-bold text-text-primary tracking-wide text-white/90"
              >
                {SITE.phoneDisplay}
              </a>

              <BookButton
                variant="outline"
                className="w-full justify-center py-4 text-base"
              >
                Записатись
              </BookButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
