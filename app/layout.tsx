import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const h = Archivo_Black({ subsets: ["latin"], variable: "--font-h", weight: "400" });
const b = Inter({ subsets: ["latin"], variable: "--font-b" });

export const metadata: Metadata = {
  title: "Forge Fitness \u2014 Gym & Personal Training | Jakarta",
  description: "Forge Fitness adalah gym modern dengan alat lengkap, kelas group training, dan personal trainer bersertifikat. Free trial 1 hari untuk member baru.",
  openGraph: {
    title: "Forge Fitness \u2014 Tempa Versi Terkuatmu",
    description: "Forge Fitness adalah gym modern dengan alat lengkap, kelas group training, dan personal trainer bersertifikat. Free trial 1 hari untuk member baru.",
    type: "website",
    locale: "id_ID",
  },
};

const jsonLd = {"@context": "https://schema.org", "@type": "ExerciseGym", "name": "Forge Fitness", "description": "Gym modern dengan personal trainer bersertifikat", "priceRange": "Rp250.000 - Rp600.000/bulan"};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${h.variable} ${b.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
