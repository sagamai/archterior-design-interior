'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';
import {
  ABOUT_HERO_IMAGE,
  ABOUT_PHILOSOPHY_IMAGE,
  HERO_BG_IMAGE,
  TEAM_MEMBERS,
} from '@/lib/studio-data';

interface AboutUsPageProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: (preset?: string) => void;
}

const STUDIO_PILLARS = [
  {
    code: '01 / OUR MISSION',
    description:
      'Menghadirkan perencanaan ruang yang presisi dan transparan dari tahap konsep hingga gambar kerja teknis, sehingga setiap keputusan desain memiliki dasar fungsi dan teknis yang kuat.',
  },
  {
    code: '02 / OUR GOALS',
    description:
      'Memaksimalkan fungsi dan estetika setiap sudut ruang melalui tata letak ergonomis serta kurasi material berkualitas yang selaras dengan kebutuhan penghuni maupun karakter brand.',
  },
  {
    code: '03 / WHY US?',
    description:
      'Didukung tim berpengalaman dengan rincian Rencana Anggaran Biaya (RAB) yang jelas, objektif, dan transparan—memberikan dokumen perencanaan siap eksekusi tanpa biaya tersembunyi.',
  },
];

export default function AboutUsPage({
  onNavigate,
  onOpenConsultation,
}: AboutUsPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#F9F2E4] text-[#4A3A34]"
    >
      {/* ====================================================================
          1. ASYMMETRIC EDITORIAL HERO & PHILOSOPHY GRID
      ==================================================================== */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-12">
        {/* Top Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2.5 font-sans text-[12px] uppercase tracking-[0.18em] text-[#A8836C]"
        >
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="cursor-pointer transition-colors duration-200 hover:text-[#4A3A34] focus-visible:outline-none focus-visible:underline"
          >
            Home
          </button>
          <span aria-hidden="true" className="text-[#D0AE92]">
            /
          </span>
          <span className="text-[#4A3A34]">About Us</span>
        </nav>

        {/* 12-Column Asymmetric Magazine Grid */}
        <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left & Center Hero Block (lg:col-span-8) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <p className="mb-3 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#A8836C]">
              TENTANG ARCHTERIOR
            </p>
            <h1 className="mb-8 font-serif text-[40px] leading-[1.1] tracking-[-0.01em] text-[#4A3A34] text-balance sm:text-[48px] xl:text-[56px]">
              Memadukan Presisi Arsitektur dengan Kenyamanan Interior Modern
            </h1>

            {/* Split Sub-Row */}
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
              {/* Left Text Column */}
              <div className="md:col-span-5">
                <p className="mb-4 border-b border-[#D0AE92]/50 pb-3 font-sans text-[13px] font-medium leading-snug text-[#4A3A34]">
                  Studio Perencanaan Ruang &amp; Visualisasi 3D — Surakarta
                </p>
                <p className="font-sans text-[14.5px] leading-relaxed text-[#77574A]">
                  Archterior adalah studio desain interior dan arsitektur di
                  Surakarta yang berfokus pada perencanaan ruang fungsional,
                  visualisasi 3D fotorealistis, serta penyusunan Rencana
                  Anggaran Biaya (RAB) yang transparan. Kami menjembatani
                  gagasan estetika dengan kesiapan dokumen teknis agar setiap
                  proyek terukur sejak tahap awal.
                </p>
              </div>

              {/* Center Wide Rounded Photo */}
              <div className="md:col-span-7">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[28px] bg-[#EBD7BE]/50 shadow-sm">
                  <Image
                    src={HERO_BG_IMAGE}
                    alt="Interior ruang keluarga modern dengan jendela kaca tinggi dan palet hangat rancangan ARCHTERIOR"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 520px"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Philosophy Column (lg:col-span-4 lg:mt-16) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.52,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-4 lg:mt-16"
          >
            {/* Secondary Rounded Interior Vignette */}
            <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-[#EBD7BE]/50">
              <Image
                src={ABOUT_PHILOSOPHY_IMAGE}
                alt="Detail pintu kayu ek dan tekstur dinding hangat bergaya minimalis kontemporer"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                referrerPolicy="no-referrer"
                className="object-cover object-center"
              />
            </div>

            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#A8836C]">
              01. FILOSOFI KAMI
            </p>
            <h2 className="mt-1 mb-3 font-serif text-[28px] leading-tight text-[#4A3A34] sm:text-[32px]">
              Merancang Ruang yang Bercerita dan Bernilai Jangka Panjang
            </h2>
            <p className="font-sans text-[14.5px] leading-relaxed text-[#77574A]">
              Setiap ruang dirancang untuk mencerminkan karakter penghuninya
              sekaligus mendukung aktivitas harian secara optimal melalui tata
              cahaya, sirkulasi udara, dan kurasi material yang tepat. Bagi
              kami, desain yang matang selalu mengutamakan kenyamanan jangka
              panjang di atas tren sesaat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          2. SEKSI 01B: PILAR & NILAI UTAMA STUDIO (Clean Editorial Stacked List)
      ==================================================================== */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-10 border-t border-[#D0AE92]/40 py-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.2em] text-[#A8836C]">
              PRINSIP KERJA STUDIO
            </p>
            <h2 className="mt-2 mb-4 font-serif text-[32px] leading-tight text-[#4A3A34] sm:text-[36px]">
              Tiga Pilar Perencanaan Archterior
            </h2>
            <p className="font-sans text-[14.5px] leading-relaxed text-[#77574A]">
              Standar kerja yang kami terapkan pada setiap proyek hunian maupun
              komersial untuk menjamin akurasi desain dan kejelasan biaya.
            </p>
          </div>

          {/* Right Column: Stacked Divider Rows */}
          <div className="divide-y divide-[#D0AE92]/50 lg:col-span-8">
            {STUDIO_PILLARS.map((pillar) => (
              <div
                key={pillar.code}
                className="py-6 first:pt-0 last:pb-0 sm:py-7"
              >
                <h3 className="font-sans text-[15px] font-semibold uppercase tracking-[0.06em] text-[#4A3A34]">
                  {pillar.code}
                </h3>
                <p className="mt-2.5 font-sans text-[15px] leading-relaxed text-[#77574A]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. SEKSI 02: TIM INTI STUDIO ("MEET THE PRINCIPALS" Rounded Card)
      ==================================================================== */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="my-12 rounded-[32px] border border-[#D0AE92]/30 bg-[#EBD7BE]/45 p-8 md:p-14">
          {/* Top Centered Header & Cutout Pill Visual Strip */}
          <div className="text-center">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#A8836C]">
              02. TIM KAMI
            </p>
            <h2 className="mx-auto mt-2 mb-5 max-w-2xl font-serif text-[34px] leading-[1.12] text-[#4A3A34] text-balance sm:text-[44px]">
              Dibalik Setiap Konsep Ruang Archterior
            </h2>

            {/* Signature Center Cutout Pill Photo Strip */}
            <div className="relative mx-auto mb-5 h-16 max-w-md overflow-hidden rounded-full border border-[#D0AE92]/40 bg-[#4A3A34]/10">
              <Image
                src={ABOUT_HERO_IMAGE}
                alt="Suasana kerja dan diskusi konsep desain di studio ARCHTERIOR"
                fill
                sizes="448px"
                referrerPolicy="no-referrer"
                className="object-cover object-[50%_58%]"
              />
            </div>

            <p className="mx-auto mb-12 max-w-xl font-sans text-[14.5px] leading-relaxed text-[#77574A]">
              Kolaborasi lintas disiplin antara arsitek, desainer interior, dan
              spesialis visualisasi 3D yang berdedikasi menerjemahkan visi ruang
              Anda menjadi rancangan presisi.
            </p>
          </div>

          {/* 3-Column Team Portraits */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.id} className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] bg-[#D0AE92]/25">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-serif text-[22px] leading-snug text-[#4A3A34]">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#77574A]">
                    {member.role}
                  </p>
                  <p className="mt-2 font-sans text-[13.5px] leading-relaxed text-[#77574A]/90">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. SEKSI 03: BANNER AJAKAN KONSULTASI (Dark Editorial CTA Card)
      ==================================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12">
        <div className="relative overflow-hidden rounded-[32px] bg-[#4A3A34] p-8 text-[#F9F2E4] md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(circle, #D0AE92 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#D0AE92]">
                03. MULAI PROYEK ANDA
              </p>
              <h2 className="mt-2 mb-4 font-serif text-[34px] leading-tight text-[#F9F2E4] text-balance sm:text-[44px]">
                Siap Merancang Ruang Impian Anda?
              </h2>
              <p className="font-sans text-[15.5px] font-light leading-relaxed text-[#EBD7BE] sm:text-[16px]">
                Konsultasikan denah, gaya desain, dan estimasi anggaran (RAB)
                ruang Anda bersama tim Archterior secara gratis.
              </p>
            </div>

            {/* Right Interactive Action Cluster */}
            <div className="flex w-full flex-col items-start gap-6 lg:w-auto lg:items-end">
              <button
                type="button"
                onClick={() => onOpenConsultation()}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#A8836C] px-8 py-4 font-sans text-[15px] font-medium text-[#F9F2E4] shadow-[0_12px_30px_rgba(24,16,13,0.34)] transition-colors duration-200 hover:bg-[#77574A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F2E4] whitespace-nowrap"
              >
                <span>Jadwalkan Konsultasi Sekarang</span>
                <ArrowRight className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary Quick-Nav Pill Actions + Circular Studio Seal */}
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onNavigate('portfolio')}
                    className="cursor-pointer rounded-full border border-[#EBD7BE]/30 px-4 py-1.5 font-sans text-[12px] uppercase tracking-wider text-[#EBD7BE] transition-colors duration-200 hover:border-[#F9F2E4] hover:bg-[#F9F2E4]/10 hover:text-[#F9F2E4] whitespace-nowrap"
                  >
                    Portfolio
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="cursor-pointer rounded-full border border-[#EBD7BE]/30 px-4 py-1.5 font-sans text-[12px] uppercase tracking-wider text-[#EBD7BE] transition-colors duration-200 hover:border-[#F9F2E4] hover:bg-[#F9F2E4]/10 hover:text-[#F9F2E4] whitespace-nowrap"
                  >
                    Services
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenConsultation(
                        'Mohon jadwalkan diskusi konsultasi awal melalui WhatsApp.'
                      )
                    }
                    className="cursor-pointer rounded-full border border-[#EBD7BE]/30 px-4 py-1.5 font-sans text-[12px] uppercase tracking-wider text-[#EBD7BE] transition-colors duration-200 hover:border-[#F9F2E4] hover:bg-[#F9F2E4]/10 hover:text-[#F9F2E4] whitespace-nowrap"
                  >
                    WhatsApp
                  </button>
                </div>

                {/* Circular Architectural Studio Seal */}
                <div
                  aria-label="Archterior Studio Surakarta"
                  className="relative flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full border border-[#EBD7BE]/25 bg-[#F9F2E4]/[0.04]"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full p-1"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="archterior-seal-circle"
                        d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      />
                    </defs>
                    <text
                      fill="#EBD7BE"
                      fontSize="8.3"
                      fontWeight="500"
                      letterSpacing="2.4"
                    >
                      <textPath href="#archterior-seal-circle" startOffset="0%">
                        ARCHTERIOR STUDIO • SURAKARTA •
                      </textPath>
                    </text>
                  </svg>
                  <Compass
                    aria-hidden="true"
                    className="absolute h-4 w-4 stroke-[1.5] text-[#D0AE92]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
