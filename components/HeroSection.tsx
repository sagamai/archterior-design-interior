'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HERO_BG_IMAGE } from '@/lib/studio-data';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
  onScheduleConsultation: () => void;
}

export default function HeroSection({
  onExplorePortfolio,
  onScheduleConsultation,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#4A3A34]"
    >
      {/* Full-Bleed Architectural Living Room Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_BG_IMAGE}
          alt="Ruang keluarga modern dengan jendela kaca floor-to-ceiling menghadap taman hijau rancangan ARCHTERIOR"
          fill
          priority
          sizes="100vw"
          referrerPolicy="no-referrer"
          className="object-cover object-center"
        />

        {/* Warm Atmospheric Horizontal Espresso Gradient Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(95deg, rgba(74, 58, 52, 0.90) 0%, rgba(74, 58, 52, 0.62) 48%, rgba(74, 58, 52, 0.25) 100%)',
          }}
        />

        {/* Subtle Top Navbar Gradient for Crisp Navigation Legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-44"
          style={{
            background:
              'linear-gradient(180deg, rgba(74, 58, 52, 0.65) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1380px] flex-col justify-center px-6 pt-28 pb-12 sm:px-10 sm:pt-32 lg:px-14 lg:py-24">
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-12">
          {/* Left Column: Vertically Centered Hero Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:col-span-7"
          >
            <h1 className="max-w-[640px] font-serif text-[38px] leading-[1.12] tracking-[-0.01em] text-[#F9F2E4] text-balance sm:text-[48px] xl:text-[56px]">
              Wujudkan Ruang Modern yang Presisi, Estetik, dan Fungsional
            </h1>

            <p className="mt-5 max-w-md font-sans text-[15.5px] font-light leading-relaxed text-[#EBD7BE] sm:text-[16px]">
              Solusi desain interior dan arsitektur modern dengan visualisasi 3D
              fotorealistis serta perencanaan anggaran yang transparan.
            </p>

            {/* Single Primary Action Button */}
            <div className="mt-8">
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  onExplorePortfolio();
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-[#A8836C] px-7 py-3.5 font-sans text-[15px] font-medium tracking-[0.02em] text-[#F9F2E4] shadow-[0_12px_30px_rgba(42,30,26,0.34)] transition-all duration-200 hover:bg-[#77574A] hover:shadow-[0_14px_34px_rgba(42,30,26,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F2E4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A3A34] whitespace-nowrap"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom-Right Floating Consultation Card (Dark Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 w-full max-w-[330px] lg:mt-0 lg:absolute lg:bottom-10 lg:right-14"
        >
          <div className="rounded-2xl border border-[#EBD7BE]/20 bg-[#4A3A34]/75 p-5 backdrop-blur-md">
            <h2 className="font-serif text-[20px] leading-snug text-[#F9F2E4]">
              Mulai Proyek Anda
            </h2>
            <p className="mt-1.5 font-sans text-[13px] font-light leading-relaxed text-[#EBD7BE]">
              Konsultasikan denah &amp; estimasi RAB ruang Anda.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onScheduleConsultation();
              }}
              className="group mt-4 inline-flex items-center gap-2.5 rounded-full bg-[#A8836C] px-5 py-2.5 font-sans text-[13.5px] font-medium text-[#F9F2E4] transition-colors duration-200 hover:bg-[#77574A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F2E4] whitespace-nowrap"
            >
              <span>Jadwalkan Konsultasi</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
