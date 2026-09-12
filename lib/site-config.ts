// Єдине місце для реквізитів бізнесу — зміните тут, і оновиться по всьому сайту.
export const SITE = {
  name: "Protektor",
  phoneDisplay: "067 898 76 54",
  phoneE164: "+380678987654",
  whatsapp: "380678987654",
  address: "с. Малехів, вул. Львівська, 2",
  mapEmbedUrl:
    "https://www.google.com/maps?q=%D0%9C%D0%B0%D0%BB%D0%B5%D1%85%D1%96%D0%B2,+%D0%B2%D1%83%D0%BB.+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+2&output=embed",
  mapLink:
    "https://maps.google.com/?q=Малехів,+вул.+Львівська+2",
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
