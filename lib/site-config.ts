// Єдине місце для реквізитів бізнесу — зміните тут, і оновиться по всьому сайту.
export const SITE = {
  name: "Protektor",
  phoneDisplay: "067 898 76 54",
  phoneE164: "+380678987654",
  whatsapp: "380678987654",
  instagram: "https://instagram.com/protektor.tire",
  email: "info@protektor-tire.ua",
  address: "м. Київ, вул. Промислова, 12",
  mapEmbedUrl:
    "https://www.google.com/maps?q=%D0%9A%D0%B8%D1%97%D0%B2&output=embed",
  mapLink: "https://maps.google.com/?q=Київ,+вул.+Промислова,+12",
  workingHours: [
    { day: "Понеділок – П'ятниця", hours: "08:00 – 20:00" },
    { day: "Субота", hours: "09:00 – 18:00" },
    { day: "Неділя", hours: "10:00 – 16:00" },
  ],
  // day: 0 = Sunday ... 6 = Saturday
  scheduleByWeekday: [
    { open: 10, close: 16 },
    { open: 8, close: 20 },
    { open: 8, close: 20 },
    { open: 8, close: 20 },
    { open: 8, close: 20 },
    { open: 8, close: 20 },
    { open: 9, close: 18 },
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${SITE.phoneE164}`;
}
