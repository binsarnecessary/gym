export const site = {
  name: "Forge Fitness",
  logo: "⚡",
  whatsapp: "6287830377139", // TODO: ganti nomor asli
  waGreeting: "Halo Forge Fitness! Saya mau klaim free trial.",
  address: "Jl. Tempa Besi No. 45, Senopati, Jakarta Selatan",
  hours: "Setiap hari, 06.00 – 23.00 WIB",
};

export const waLink = (t: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t)}`;

export const nav = {
  links: [
    { href: "#program", label: "Program" },
    { href: "#fasilitas", label: "Fasilitas" },
    { href: "#gallery", label: "Gallery" },
    { href: "#membership", label: "Membership" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#kontak", label: "Free Trial" },
};

export const footer = {
  about:
    "Gym modern dengan alat lengkap, group class, dan personal trainer bersertifikat. Tempa versi terkuatmu.",
  columns: [
    {
      title: "Menu",
      links: [
        { href: "#program", label: "Program" },
        { href: "#membership", label: "Membership" },
        { href: "#fasilitas", label: "Fasilitas" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    {
      title: "Hubungi",
      links: [
        { href: "https://wa.me/6287830377139", label: "WhatsApp" },
        { href: "#", label: "Instagram" },
        { href: "#", label: "Google Maps" },
      ],
    },
  ],
};

export type Field = { id: string; label: string; placeholder: string; textarea?: boolean };

export const form = {
  fields: [
    { id: "nama", label: "Nama", placeholder: "Nama Anda" },
    { id: "tujuan", label: "Goal Latihan", placeholder: "cth: turun berat badan, muscle gain" },
    { id: "pesan", label: "Pesan", placeholder: "Jadwal trial yang diinginkan...", textarea: true },
  ] as Field[],
  cta: "Klaim Free Trial",
  buildMessage: (v: Record<string, string>) =>
    `Halo Forge Fitness! Saya ${v.nama ?? ""}, mau klaim free trial. Goal saya: ${v.tujuan ?? ""}. ${v.pesan ?? ""}`,
};
