'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Check,
  MessageCircle,
  Minus,
  Plus,
} from 'lucide-react';
import {
  ABOUT_HERO_IMAGE,
  ABOUT_PHILOSOPHY_IMAGE,
  DETAILED_SERVICES,
  SERVICE_CTA_TEXTURE,
  SERVICE_FAQS,
  SERVICE_JOURNEY_BG,
  SERVICE_PACKAGES,
  WORKFLOW_STEPS,
} from '@/lib/studio-data';

interface ServicesPageProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: (preset?: string) => void;
}

const WHATSAPP_ORDER_URL =
  'https://wa.me/6281234567890?text=Halo%20Archterior%2C%20saya%20tertarik%20untuk%20memesan%20paket%20perencanaan%20desain';

export default function ServicesPage({
  onNavigate,
  onOpenConsultation,
}: ServicesPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(SERVICE_FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((current) => (current === id ? '' : id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#F9F2E4] text-[#4A3A34]"
    >
      {/* ====================================================================
          1. PAGE HEADER / HERO SERVICES (Warm Moody Full-Bleed Banner)
      ==================================================================== */}
      <section className="relative min-h-[460px] w-full overflow-hidden bg-[#4A3A34] pt-36 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={ABOUT_HERO_IMAGE}
            alt="Ruang studio arsitektur dan perencanaan interior ARCHTERIOR"
            fill
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover object-center"
          />

          {/* Rich Dark Espresso Gradient Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(74, 58, 52, 0.92) 0%, rgba(74, 58, 52, 0.72) 55%, rgba(74, 58, 52, 0.45) 100%)',
            }}
          />

          {/* Subtle Top Navbar Gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-36"
            style={{
              background:
                'linear-gradient(180deg, rgba(74, 58, 52, 0.65) 0%, transparent 100%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2.5 font-sans text-[12px] uppercase tracking-[0.2em] text-[#D0AE92]"
          >
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="cursor-pointer transition-colors duration-200 hover:text-[#F9F2E4] focus-visible:outline-none focus-visible:underline"
            >
              Home
            </button>
            <span aria-hidden="true" className="text-[#D0AE92]/60">
              /
            </span>
            <span className="text-[#F9F2E4]">Services</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mt-6 mb-3 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#D0AE92]">
              LAYANAN &amp; PAKET DESAIN
            </p>
            <h1 className="max-w-3xl font-serif text-[40px] leading-[1.12] tracking-[-0.01em] text-[#F9F2E4] text-balance sm:text-[48px] lg:text-[56px]">
              Solusi Perencanaan Interior Terukur untuk Setiap Ruang
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-[15.5px] font-light leading-relaxed text-[#EBD7BE] sm:text-[16px]">
              Layanan desain interior dan arsitektur menyeluruh mulai dari tata
              letak denah, visualisasi render 3D fotorealistis, gambar kerja
              teknis, hingga penyusunan Rencana Anggaran Biaya (RAB).
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          2. SEKSI 01: BIDANG LAYANAN (Alternating Editorial Rows — Ref 1)
      ==================================================================== */}
      <section className="bg-[#F9F2E4] py-24 text-[#4A3A34]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Staggered Editorial Header */}
          <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#A8836C]">
                01. BIDANG LAYANAN
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-[36px] leading-[1.12] text-[#4A3A34] text-balance sm:text-[46px]">
                Layanan Spesialis Perencanaan Ruang
              </h2>
            </div>
          </div>

          {/* 6 Alternating Left-Right Architectural Editorial Rows */}
          <div className="mt-20 space-y-20 lg:space-y-28">
            {DETAILED_SERVICES.map((service, index) => {
              const isPhotoRight = index % 2 === 0;
              return (
                <article
                  key={service.id}
                  className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14"
                >
                  {/* Text Block */}
                  <div
                    className={`lg:col-span-5 ${
                      isPhotoRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <h3 className="font-sans text-[18px] font-medium uppercase tracking-[0.06em] text-[#4A3A34]">
                        {service.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="h-px w-8 shrink-0 bg-[#A8836C]"
                      />
                    </div>

                    <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-[#77574A]">
                      {service.description}
                    </p>
                  </div>

                  {/* Photo Frame with Offset Line Border & Oversized Outlined Numeral */}
                  <div
                    className={`lg:col-span-7 ${
                      isPhotoRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative pt-8 sm:pt-10">
                      {/* Oversized Hollow Outlined Number Positioned Above Upper Corner */}
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute -top-2 z-20 select-none font-sans text-[54px] font-semibold leading-none tracking-tight sm:text-[64px] ${
                          isPhotoRight
                            ? 'right-3 sm:right-5'
                            : 'left-3 sm:left-5'
                        }`}
                        style={{
                          WebkitTextStroke: '1px #A8836C',
                          color: 'transparent',
                        }}
                      >
                        {service.number}
                      </span>

                      <div className="relative">
                        {/* Delicate Offset Thin Architectural Line Border Behind Photo */}
                        <div
                          aria-hidden="true"
                          className={`pointer-events-none absolute inset-0 z-0 rounded-lg border border-[#D0AE92] ${
                            isPhotoRight
                              ? '-translate-x-3 -translate-y-3 sm:-translate-x-4 sm:-translate-y-4'
                              : 'translate-x-3 -translate-y-3 sm:translate-x-4 sm:-translate-y-4'
                          }`}
                        />

                        {/* Main Image */}
                        <div className="group relative z-10 aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#EBD7BE]/50 shadow-sm">
                          <Image
                            src={service.image}
                            alt={service.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            referrerPolicy="no-referrer"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. SEKSI 02: ALUR KERJA PROYEK (Atmospheric Full-Bleed Journey)
      ==================================================================== */}
      <section className="relative flex min-h-[540px] w-full flex-col justify-between overflow-hidden bg-[#4A3A34] py-20 text-[#F9F2E4]">
        <div className="absolute inset-0 z-0">
          <Image
            src={SERVICE_JOURNEY_BG}
            alt="Koridor arsitektur modern bernuansa kayu walnut dan pencahayaan hangat"
            fill
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(74, 58, 52, 0.72) 0%, rgba(74, 58, 52, 0.55) 45%, rgba(74, 58, 52, 0.92) 100%)',
            }}
          />
        </div>

        {/* Top Header Row */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#D0AE92]">
            02. ALUR KERJA
          </p>
          <h2 className="mt-2 max-w-2xl font-serif text-[36px] leading-[1.14] text-[#F9F2E4] text-balance sm:text-[44px]">
            Tahapan Perancangan yang Terstruktur
          </h2>
        </div>

        {/* Bottom 4-Column Horizontal Step Grid */}
        <div className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 border-t border-[#EBD7BE]/25 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#EBD7BE]/20">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.number}
                className="lg:px-7 lg:first:pl-0 lg:last:pr-0"
              >
                <p className="font-sans text-[12px] font-medium tracking-[0.16em] text-[#D0AE92] tabular-nums">
                  {step.number}
                </p>
                <h3 className="mt-2.5 font-serif text-[22px] leading-snug text-[#F9F2E4]">
                  {step.title}
                </h3>
                <p className="mt-2.5 font-sans text-[14px] font-light leading-relaxed text-[#EBD7BE]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. SEKSI 03: PAKET LAYANAN (3 Structured Cards + Single WhatsApp CTA)
      ==================================================================== */}
      <section className="bg-[#F9F2E4] py-24 text-[#4A3A34]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#A8836C]">
              03. PAKET PERENCANAAN
            </p>
            <h2 className="mt-2 font-serif text-[36px] leading-[1.14] text-[#4A3A34] text-balance sm:text-[44px]">
              Pilihan Paket Sesuai Kebutuhan Proyek
            </h2>
          </div>

          {/* 3-Column Package Grid (No Individual Order Buttons Inside Cards) */}
          <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
            {SERVICE_PACKAGES.map((pkg) => {
              const isDark = Boolean(pkg.featured);
              return (
                <article
                  key={pkg.id}
                  className={`relative flex flex-col justify-between rounded-2xl p-8 transition-transform duration-200 ${
                    isDark
                      ? 'bg-[#4A3A34] text-[#F9F2E4] shadow-xl'
                      : 'border border-[#D0AE92]/45 bg-[#FDFBF7] text-[#4A3A34]'
                  }`}
                >
                  <div>
                    {pkg.badge && (
                      <span className="absolute right-6 top-6 rounded-full bg-[#A8836C] px-3.5 py-1 font-sans text-[10.5px] font-medium uppercase tracking-[0.16em] text-[#F9F2E4]">
                        {pkg.badge}
                      </span>
                    )}

                    <h3
                      className={`pr-20 font-serif text-[25px] leading-snug ${
                        isDark ? 'text-[#F9F2E4]' : 'text-[#4A3A34]'
                      }`}
                    >
                      {pkg.name}
                    </h3>

                    <p
                      className={`mt-3 font-sans text-[14.5px] font-light leading-relaxed ${
                        isDark ? 'text-[#EBD7BE]' : 'text-[#77574A]'
                      }`}
                    >
                      {pkg.description}
                    </p>

                    <div
                      className={`my-6 h-px w-full ${
                        isDark ? 'bg-[#EBD7BE]/18' : 'bg-[#D0AE92]/40'
                      }`}
                    />

                    <p
                      className={`font-sans text-[11px] font-medium uppercase tracking-[0.18em] ${
                        isDark ? 'text-[#D0AE92]' : 'text-[#A8836C]'
                      }`}
                    >
                      Cakupan Layanan
                    </p>

                    <ul className="mt-4 space-y-3.5">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 font-sans text-[14.5px] leading-snug"
                        >
                          <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              isDark ? 'text-[#D0AE92]' : 'text-[#A8836C]'
                            }`}
                          />
                          <span
                            className={
                              isDark ? 'text-[#F9F2E4]/95' : 'text-[#4A3A34]/90'
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Single Centered WhatsApp CTA Below the 3-Card Grid */}
          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#A8836C] px-9 py-4 font-sans text-[15px] font-medium text-[#F9F2E4] shadow-md transition-colors duration-200 hover:bg-[#77574A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A3A34] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F2E4] whitespace-nowrap"
            >
              <MessageCircle className="h-[18px] w-[18px] stroke-[1.8]" />
              <span>Pesan Paket via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. SEKSI 04: PERTANYAAN UMUM (FAQ — 2-Column Photo + Accordion)
      ==================================================================== */}
      <section className="bg-[#EBD7BE]/30 py-24 text-[#4A3A34]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Column: Tall Vertical Editorial Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-[#D0AE92]/25">
                <Image
                  src={ABOUT_PHILOSOPHY_IMAGE}
                  alt="Interior minimalis hangat dengan pencahayaan alami studio ARCHTERIOR"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Interactive Expandable Accordion */}
            <div className="lg:col-span-7">
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#A8836C]">
                04. INFORMASI &amp; FAQ
              </p>
              <h2 className="mt-2 mb-8 font-serif text-[34px] leading-[1.15] text-[#4A3A34] sm:text-[42px]">
                Pertanyaan yang Sering Diajukan
              </h2>

              <div className="divide-y divide-[#D0AE92]/50 border-y border-[#D0AE92]/50">
                {SERVICE_FAQS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div key={faq.id} className="py-5">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={isOpen}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left focus-visible:outline-none group"
                      >
                        <span className="font-serif text-[20px] leading-snug text-[#4A3A34] transition-colors group-hover:text-[#77574A] sm:text-[22px]">
                          {faq.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                            isOpen
                              ? 'border-[#4A3A34] bg-[#4A3A34] text-[#F9F2E4]'
                              : 'border-[#4A3A34]/25 text-[#4A3A34] group-hover:border-[#A8836C] group-hover:text-[#A8836C]'
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-4 w-4 stroke-[1.8]" />
                          ) : (
                            <Plus className="h-4 w-4 stroke-[1.8]" />
                          )}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.24,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3.5 pr-10 font-sans text-[15px] leading-relaxed text-[#77574A]">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. SEKSI 05: BANNER AJAKAN KONSULTASI (Atmospheric Dark Banner)
      ==================================================================== */}
      <section className="bg-[#F9F2E4] px-6 py-4 md:px-12">
        <div className="relative mx-auto my-16 max-w-7xl overflow-hidden rounded-[32px] bg-[#4A3A34] p-10 text-[#F9F2E4] md:p-16">
          {/* Subtle Warm Interior Texture Overlay */}
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <Image
              src={SERVICE_CTA_TEXTURE}
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              referrerPolicy="no-referrer"
              className="object-cover opacity-20"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(100deg, rgba(74, 58, 52, 0.94) 0%, rgba(74, 58, 52, 0.80) 60%, rgba(74, 58, 52, 0.72) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-[#D0AE92]">
                05. MULAI PROYEK ANDA
              </p>
              <h2 className="mt-2 mb-3 font-serif text-[34px] leading-[1.14] text-[#F9F2E4] text-balance sm:text-[44px]">
                Belum Yakin Paket Mana yang Sesuai?
              </h2>
              <p className="max-w-xl font-sans text-[15.5px] font-light leading-relaxed text-[#EBD7BE] sm:text-[16px]">
                Konsultasikan denah, gaya desain, dan estimasi anggaran (RAB)
                ruang Anda bersama tim Archterior secara gratis.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation()}
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#A8836C] px-8 py-4 font-sans text-[15px] font-medium text-[#F9F2E4] shadow-[0_12px_30px_rgba(24,16,13,0.34)] transition-colors duration-200 hover:bg-[#77574A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F2E4] whitespace-nowrap shrink-0"
            >
              <span>Jadwalkan Konsultasi Sekarang</span>
              <ArrowRight className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
