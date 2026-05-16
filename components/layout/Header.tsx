"use client";

import { useState } from "react";
import { H3, NavLink, P } from "../ui/Typography";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { Button } from "../ui/Button";
import { ROUTES } from "@/lib/routes";
import { usePathname } from "next/navigation";

const routes = [
  {
    title: "Головна",
    route: ROUTES.home,
  },
  {
    title: "Послуги",
    route: ROUTES.services,
  },
  {
    title: "Ціни",
    route: ROUTES.prices,
  },
  {
    title: "Про нас",
    route: ROUTES.about,
  },
  {
    title: "Контакти",
    route: ROUTES.contacts,
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full z-[100] text-text-primary">
      {/* Desktop Header */}
      <div className="hidden lg:flex w-full flex-col pt-8 px-12">
        {/* Top Row */}
        <div className="flex items-center w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href={ROUTES.home}>
              <H3 className="text-text-primary m-0 leading-none uppercase tracking-wider font-display text-white/90 hover:text-white transition-colors cursor-pointer">
                Protektor
              </H3>
            </Link>
          </div>

          {/* Top Divider Line */}
          <div className="flex-grow border-b border-neutral-gray/40 mx-8 h-px border-white/10" />

          {/* Contacts and Action */}
          <div className="flex-shrink-0 flex items-center gap-8">
            <div className="flex items-center gap-5">
              <Link
                href="#"
                className="text-white hover:text-red-800 transition-colors"
                aria-label="Phone"
              >
                <FaPhone className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-red-800 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-[22px] h-[22px]" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-red-800 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-[22px] h-[22px]" />
              </Link>
            </div>

            <P className="font-medium tracking-wide text-white">
              0 67 898 76 54
            </P>

            <Button
              href="tel:+380678987654"
              variant="outline"
              className="px-8 py-3 text-sm"
            >
              Записатись
            </Button>
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
            Protektor
          </H3>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-text-primary p-2 focus:outline-none hover:text-accent transition-colors cursor-pointer relative z-50"
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
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 z-40 w-full min-h-[100dvh] pt-[100px] pb-8 overflow-y-auto bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col px-6 gap-8 shadow-2xl">
          <nav>
            <ul className="flex flex-col gap-5">
              {routes.map((item) => (
                <li key={item.route}>
                  <Link
                    href={`${item.route}`}
                    className={`text-xl font-medium text-text-primary hover:text-accent transition-colors ${item.route === pathname ? "text-white" : "text-white/50"}`}
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
              <Link
                href="#"
                className="text-white hover:text-red-800 transition-colors"
                aria-label="Phone"
              >
                <FaPhone className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-red-800 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-[26px] h-[26px]" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-red-800 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-[26px] h-[26px]" />
              </Link>
            </div>

            <div className="text-[20px] font-bold text-text-primary tracking-wide text-white/90">
              0 67 898 76 54
            </div>

            <Button
              href="tel:+380678987654"
              variant="outline"
              className="w-full justify-center py-4 text-base"
            >
              Записатись
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
