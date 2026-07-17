import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

const programs = [
  { ic: "🏋️", t: "Strength Training", d: "Area free weight lengkap: rack, barbell, dumbbell sampai 50kg." },
  { ic: "🔥", t: "HIIT Class", d: "Kelas intensitas tinggi 45 menit, bakar kalori maksimal." },
  { ic: "🥊", t: "Boxing & Muay Thai", d: "Kelas striking bersama pelatih bersertifikat nasional." },
  { ic: "🧘", t: "Yoga & Mobility", d: "Recovery, fleksibilitas, dan keseimbangan untuk semua level." },
  { ic: "🎯", t: "Personal Training", d: "Program 1-on-1 custom: latihan, nutrisi, dan progress tracking." },
  { ic: "👥", t: "Group Class", d: "20+ kelas per minggu: spinning, pump, functional, zumba." },
];

const facilities = [
  { ic: "🕕", t: "Buka 06.00–23.00", d: "Latihan pagi sebelum kerja atau malam setelah pulang." },
  { ic: "🚿", t: "Shower & Locker", d: "Locker aman, shower bersih, handuk disediakan." },
  { ic: "❄️", t: "Full AC & Musik", d: "Ruangan sejuk dengan sound system yang bikin semangat." },
  { ic: "🥤", t: "Juice Bar", d: "Protein shake dan jus segar setelah latihan." },
];

const gallery = [
  { emoji: "🏋️", bg: "from-[#2a3020] to-[#101208]" },
  { emoji: "🤸", bg: "from-[#3a4222] to-[#181c12]" },
  { emoji: "🥊", bg: "from-[#20260f] to-[#0d0f08]" },
  { emoji: "🏃", bg: "from-[#333d1c] to-[#141709]" },
  { emoji: "🧘", bg: "from-[#252c14] to-[#101208]" },
  { emoji: "💪", bg: "from-[#404a26] to-[#181c12]" },
];

const plans = [
  { name: "Monthly", price: "Rp350rb", unit: "/bulan", featured: false, items: ["Akses semua alat gym", "2 group class / minggu", "Locker & shower", "Tanpa kontrak"] },
  { name: "6 Bulan", price: "Rp275rb", unit: "/bulan", featured: true, items: ["Semua benefit Monthly", "Group class unlimited", "1x body assessment / bulan", "Bawa teman gratis 2x"] },
  { name: "PT Package", price: "Rp600rb", unit: "/4 sesi", featured: false, items: ["Personal trainer 1-on-1", "Program latihan custom", "Panduan nutrisi", "Progress tracking app"] },
];

const testimonials = [
  { text: "Turun 12kg dalam 5 bulan bareng PT di sini. Programnya jelas, tiap minggu ada evaluasi. Worth every rupiah.", name: "Dimas Prakoso", role: "Member sejak 2025" },
  { text: "Kelasnya banyak banget dan jadwalnya fleksibel. HIIT jam 6 pagi jadi rutinitas sebelum ngantor.", name: "Karina Salsabila", role: "Member 6 Bulan" },
  { text: "Alatnya lengkap dan nggak pernah antre lama walau peak hour. AC-nya kencang, nyaman buat latihan lama.", name: "Reza Fahlevi", role: "Member Monthly" },
];

const faqs = [
  { q: "Bagaimana cara klaim free trial?", a: "Isi form di bawah atau chat WhatsApp kami. Trial berlaku 1 hari penuh termasuk 1 group class, gratis tanpa syarat." },
  { q: "Apakah ada biaya pendaftaran?", a: "Ada biaya aktivasi Rp100rb sekali bayar, sudah termasuk kartu member dan body assessment pertama. Sering ada promo gratis aktivasi." },
  { q: "Apakah cocok untuk pemula?", a: "Sangat cocok. Trainer lantai siap membantu penggunaan alat, dan ada kelas khusus beginner setiap minggu." },
  { q: "Bisakah membership di-pause?", a: "Bisa. Paket 6 bulan bisa di-pause hingga 30 hari, misalnya saat dinas luar kota atau sakit." },
  { q: "Apakah tersedia trainer perempuan?", a: "Ada. Kami memiliki 4 trainer perempuan bersertifikat untuk personal training maupun group class." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-accent">{children}</p>;
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <span aria-hidden className="absolute -right-16 top-6 text-[280px] opacity-[0.05]">⚡</span>
        <div className="relative mx-auto max-w-6xl px-5">
          <Eyebrow>⚡ Gym · Group Class · Personal Training</Eyebrow>
          <h1 className="max-w-3xl text-4xl uppercase leading-tight md:text-6xl">
            Tempa Versi <span className="text-accent">Terkuatmu</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Alat lengkap, 20+ kelas per minggu, dan trainer bersertifikat.
            Mulai dari free trial — rasakan bedanya sendiri.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a href="#kontak" className="rounded-full bg-accent px-8 py-3.5 font-bold text-accent-contrast transition-all hover:-translate-y-0.5 hover:opacity-90">
              Free Trial 1 Hari
            </a>
            <a href="#membership" className="rounded-full border-2 border-line px-8 py-3.5 font-bold text-heading transition-colors hover:border-accent">
              Lihat Membership
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-9">
            {[["1.200+", "Member Aktif"], ["15", "Trainer Bersertifikat"], ["20+", "Kelas / Minggu"]].map(([n, l]) => (
              <div key={l}>
                <strong className="block font-heading text-3xl text-accent">{n}</strong>
                <span className="text-sm text-muted">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="program" className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Program</Eyebrow>
          <h2 className="text-3xl uppercase md:text-4xl">Latihan Sesuai Goal-mu</h2>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <div key={p.t} className="rounded-2xl border border-line bg-card p-7 transition-colors hover:border-accent">
                <div className="text-3xl">{p.ic}</div>
                <h3 className="mt-4 text-lg font-bold uppercase text-heading">{p.t}</h3>
                <p className="mt-2 text-sm text-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="fasilitas" className="py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Fasilitas</Eyebrow>
          <h2 className="text-3xl uppercase md:text-4xl">Semua yang Kamu Butuhkan</h2>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f) => (
              <div key={f.t} className="rounded-2xl bg-card p-7">
                <div className="text-3xl">{f.ic}</div>
                <h3 className="mt-4 font-bold text-heading">{f.t}</h3>
                <p className="mt-2 text-sm text-muted">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="text-3xl uppercase md:text-4xl">Suasana di Forge</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g, i) => (
              <div key={i} className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br text-5xl transition-transform hover:scale-[1.03] ${g.bg}`}>
                {g.emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Membership</Eyebrow>
          <h2 className="text-3xl uppercase md:text-4xl">Investasi Buat Dirimu</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-2xl p-8 text-left ${p.featured ? "bg-accent" : "border border-line bg-card"}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-heading px-3.5 py-1 text-[11px] font-bold tracking-wider text-accent">PALING HEMAT</span>
                )}
                <h3 className={`text-xl font-bold uppercase ${p.featured ? "text-accent-contrast" : "text-heading"}`}>{p.name}</h3>
                <div className={`my-4 font-heading text-3xl ${p.featured ? "text-accent-contrast" : "text-accent"}`}>
                  {p.price}<span className="text-sm">{p.unit}</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className={p.featured ? "text-[#3a4222]" : "text-muted"}>
                      <span className="mr-2 font-bold">✓</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Testimonial</Eyebrow>
          <h2 className="text-3xl uppercase md:text-4xl">Hasil Bicara</h2>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card p-7">
                <div className="mb-3.5 tracking-[3px] text-accent">★★★★★</div>
                <blockquote className="text-sm">“{t.text}”</blockquote>
                <figcaption className="mt-4">
                  <strong className="block text-sm text-heading">{t.name}</strong>
                  <span className="text-xs text-muted">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl uppercase md:text-4xl">Sering Ditanyakan</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-line bg-card p-6 open:border-accent">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-heading">
                  {f.q}
                  <span className="text-xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3.5 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontak" className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <Eyebrow>Free Trial</Eyebrow>
            <h2 className="text-3xl uppercase md:text-4xl">Mulai Hari Ini</h2>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              {[
                ["📍", "Lokasi", site.address],
                ["⏰", "Jam Buka", site.hours],
                ["💬", "WhatsApp", "+62 878-3037-7139"],
                ["🎁", "Promo", "Free trial 1 hari + gratis body assessment"],
              ].map(([ic, t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card text-xl">{ic}</div>
                  <div>
                    <strong className="block text-sm text-heading">{t}</strong>
                    <span className="text-sm text-muted">{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
