import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookingProvider } from "@/components/booking/BookingContext";
import { BookingModal } from "@/components/booking/BookingModal";
import { StickyCTA } from "@/components/booking/StickyCTA";
import { SITE } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Шиномонтаж повного циклу`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Професійний шиномонтаж для легкових авто та позашляховиків: сезонна заміна, балансування, ремонт проколів. Запис онлайн у WhatsApp за хвилину.",
  keywords: [
    "шиномонтаж",
    "заміна шин",
    "балансування коліс",
    "ремонт шин",
    "СТО",
    "Protektor",
  ],
  openGraph: {
    title: `${SITE.name} — Шиномонтаж повного циклу`,
    description:
      "Точне балансування, акуратний монтаж і чесні ціни. Запишіться на зручний час онлайн.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: SITE.name,
              telephone: SITE.phoneE164,
              address: SITE.address,
              openingHours: SITE.workingHours.map(
                (w) => `${w.day} ${w.hours}`,
              ),
            }),
          }}
        />
        <BookingProvider>
          <Header />
          <div className="flex-1 pb-[76px] lg:pb-0">{children}</div>
          <Footer />
          <BookingModal />
          <StickyCTA />
        </BookingProvider>
      </body>
    </html>
  );
}
