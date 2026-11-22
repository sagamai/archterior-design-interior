'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HOME_ABOUT_TEASER_IMAGE } from '@/lib/studio-data';

interface HomeAboutTeaserProps {
  onLearnMore: () => void;
}

const TEASER_METRICS = [
  {
    value: '100%',
    label: 'Transparansi RAB',
    subtext: 'Rincian biaya & material terbuka sejak awal',
  },
  {
    value: '14 Hari',
    label: 'Estimasi Render 3D',
    subtext: 'Visualisasi ruang realistis sebelum eksekusi',
  },
  {
    value: '50+',
    label: 'Konsep & Ruang',
    subtext: 'Hunian privat hingga area komersial modern',
  },
] as const;

export default function HomeAboutTeaser({
  onLearnMore,
}: HomeAboutTeaserProps) {
  return (
    <section
      id="home-about-teaser"
      className="bg-[#F9F2E4] px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Editorial Architectural Photo with Offset Hairline Frame */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto max-w-[460px] lg:max-w-none">
            {/* Subtle Offset Thin Hairline Frame */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-[24px] border border-[#D0AE92] sm:translate-x-4 sm:translate-y-4"
            />

            {/* Main 4:5 Architectural Image */}
            <div className="group relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#EBD7BE] via-[#D0AE92]/40 to-[#A8836C]/25">
              <Image
                src={HOME_ABOUT_TEASER_IMAGE}
                alt="Ruang keluarga arsitektural minimalis hangat dengan panel kayu ek, batu travertine, dan pencahayaan alami rancangan ARCHTERIOR"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                referrerPolicy="no-referrer"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Studio Narrative, Key Metrics, and Navigation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <p className="mb-3 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#A8836C]">
            01. TENTANG ARCHTERIOR
          </p>

          <h2 className="mb-6 font-serif text-[34px] leading-[1.15] text-[#4A3A34] text-balance sm:text-[40px] lg:text-[44px]">
            Merancang Ruang yang Presisi, Fungsional, dan Transparan
          </h2>

          <p className="mb-10 max-w-2xl font-sans text-[16px] leading-relaxed text-[#77574A]">
            Berbasis di Surakarta, Archterior hadir untuk menjembatani visi
            estetika dengan kesiapan teknis di lapangan. Setiap ruang kami
            rancang secara terukur—mulai dari penataan denah ergonomis, simulasi
            visual 3D fotorealistis, hingga penyusunan Rencana Anggaran Biaya
            (RAB) yang objektif agar Anda memiliki kendali penuh sebelum tahap
            konstruksi dimulai.
          </p>

          {/* Key Metrics Band */}
          <div className="mb-10 grid grid-cols-1 gap-6 border-y border-[#D0AE92]/50 py-7 sm:grid-cols-3">
            {TEASER_METRICS.map((metric) => (
              <div key={metric.label}>
                <p className="font-serif text-[32px] leading-none text-[#4A3A34] tabular-nums sm:text-[36px]">
                  {metric.value}
                </p>
                <p className="mt-1.5 font-sans text-[14px] font-medium text-[#4A3A34]">
                  {metric.label}
                </p>
                <p className="mt-1 font-sans text-[12.5px] leading-snug text-[#77574A]">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onLearnMore}
            className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#A8836C] px-8 py-4 font-sans text-[15px] font-medium text-[#F9F2E4] transition-colors duration-200 hover:bg-[#77574A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A3A34] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F2E4] whitespace-nowrap"
          >
            <span>Kenali Studio Kami</span>
            <ArrowRight className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
