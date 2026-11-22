'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Compass,
  Layers,
  X,
} from 'lucide-react';
import {
  CORE_SERVICES,
  MAESTRO_CURATION,
  type CoreService,
  type MaestroCuratedItem,
} from '@/lib/studio-data';

interface StudioSectionsProps {
  onSelectMaestro: (item: MaestroCuratedItem) => void;
  onOpenConsultation: (preset?: string, serviceTitle?: string) => void;
  onViewAllServices: () => void;
}

const SERVICE_ICONS = [Compass, Building2, Layers];

export default function StudioSections({
  onSelectMaestro,
  onOpenConsultation,
  onViewAllServices,
}: StudioSectionsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [viewAllMaestros, setViewAllMaestros] = useState(false);
  const [selectedServiceModal, setSelectedServiceModal] =
    useState<CoreService | null>(null);

  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, [viewAllMaestros]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedServiceModal(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const scrollCarousel = (direction: 'prev' | 'next') => {
    const el = carouselRef.current;
    if (!el) return;
    const distance = Math.max(300, Math.round(el.clientWidth * 0.72));
    el.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* ====================================================================
          SEKSI 02: LAYANAN INTI (Warm Mocha #77574A)
      ==================================================================== */}
      <section
        id="services"
        className="bg-[#77574A] py-20 sm:py-24 lg:py-28 text-[#F9F2E4]"
      >
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          {/* Split Row Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[#D0AE92]">
                02. LAYANAN KAMI
              </p>
              <h2 className="mt-3 max-w-xl font-serif text-[32px] leading-[1.16] text-[#F9F2E4] text-balance sm:text-[42px]">
                Solusi Perencanaan Interior &amp; Arsitektur
              </h2>
            </div>

            <button
              type="button"
              onClick={onViewAllServices}
              className="group inline-flex w-fit cursor-pointer items-center gap-2.5 rounded-full border border-[#EBD7BE]/40 px-6 py-3 font-sans text-[14px] font-medium text-[#F9F2E4] transition-all duration-200 hover:border-[#F9F2E4] hover:bg-[#F9F2E4] hover:text-[#4A3A34] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F2E4] whitespace-nowrap shrink-0"
            >
              <span>Lihat Semua Layanan</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* 3-Column Service Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CORE_SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx] ?? Compass;
              return (
                <article
                  key={service.id}
                  onClick={() => setSelectedServiceModal(service)}
                  className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-[#EBD7BE]/18 bg-[#4A3A34]/35 p-7 transition-all duration-200 hover:border-[#EBD7BE]/40 hover:bg-[#4A3A34]/50 sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#EBD7BE]/20 bg-[#F9F2E4]/10 text-[#EBD7BE]">
                        <Icon className="h-5 w-5 stroke-[1.6]" />
                      </span>
                      <span className="font-sans text-[12px] tracking-[0.16em] text-[#D0AE92] tabular-nums">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-serif text-[23px] leading-snug text-[#F9F2E4]">
                      {service.title}
                    </h3>

                    <p className="mt-3 font-sans text-[14.5px] font-light leading-relaxed text-[#EBD7BE]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#EBD7BE]/15 pt-4 text-[13px] text-[#D0AE92]">
                    <span>{service.timeline}</span>
                    <ArrowRight className="h-4 w-4 text-[#F9F2E4] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SEKSI 03: KURASI KARYA MAESTRO DESAIN INTERIOR INDONESIA (#F9F2E4)
      ==================================================================== */}
      <section
        id="portfolio"
        className="bg-[#F9F2E4] py-20 sm:py-24 lg:py-28 text-[#4A3A34]"
      >
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          {/* Split Row Header */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[#A8836C]">
                03. INSPIRASI &amp; KURASI MAESTRO INDONESIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-[32px] leading-[1.15] text-[#4A3A34] text-balance sm:text-[42px]">
                Referensi Mahakarya Desain Interior Indonesia
              </h2>
            </div>

            {/* Right Controls: View All Pill + Circular Prev/Next Slider Arrows */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setViewAllMaestros((prev) => !prev)}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-[#4A3A34]/30 px-6 py-2.5 font-sans text-[14px] font-medium text-[#4A3A34] transition-all duration-200 hover:border-[#4A3A34] hover:bg-[#4A3A34] hover:text-[#F9F2E4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A3A34] whitespace-nowrap"
              >
                <span>{viewAllMaestros ? 'Carousel View' : 'View All'}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              {!viewAllMaestros && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollCarousel('prev')}
                    disabled={!canScrollLeft}
                    aria-label="Geser referensi sebelumnya"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A3A34] ${
                      canScrollLeft
                        ? 'cursor-pointer border-[#4A3A34]/30 text-[#4A3A34] hover:border-[#4A3A34] hover:bg-[#4A3A34] hover:text-[#F9F2E4]'
                        : 'cursor-not-allowed border-[#4A3A34]/12 text-[#4A3A34]/30'
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4 stroke-[1.7]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCarousel('next')}
                    disabled={!canScrollRight}
                    aria-label="Geser referensi berikutnya"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A3A34] ${
                      canScrollRight
                        ? 'cursor-pointer border-[#4A3A34]/30 text-[#4A3A34] hover:border-[#4A3A34] hover:bg-[#4A3A34] hover:text-[#F9F2E4]'
                        : 'cursor-not-allowed border-[#4A3A34]/12 text-[#4A3A34]/30'
                    }`}
                  >
                    <ArrowRight className="h-4 w-4 stroke-[1.7]" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Gallery: Sleek Horizontal Portrait Carousel OR Expanded Grid */}
          {viewAllMaestros ? (
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {MAESTRO_CURATION.map((item) => (
                <MaestroPortraitCard
                  key={item.id}
                  item={item}
                  onSelect={() => onSelectMaestro(item)}
                />
              ))}
            </div>
          ) : (
            <div
              ref={carouselRef}
              onScroll={updateScrollButtons}
              className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scroll-smooth"
            >
              {MAESTRO_CURATION.map((item) => (
                <div
                  key={item.id}
                  className="w-[78vw] max-w-[300px] shrink-0 snap-start sm:w-[270px] lg:w-[calc((100%-72px)/4)] xl:w-[calc((100%-96px)/4.5)] xl:max-w-none"
                >
                  <MaestroPortraitCard
                    item={item}
                    onSelect={() => onSelectMaestro(item)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ====================================================================
          SEKSI 04: BANNER AJAKAN KONSULTASI (Deep Espresso #4A3A34)
      ==================================================================== */}
      <section id="contact" className="bg-[#F9F2E4] pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
          <div className="relative overflow-hidden rounded-3xl bg-[#4A3A34] px-7 py-14 text-[#F9F2E4] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20"
              style={{
                background:
                  'radial-gradient(circle, #D0AE92 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="font-sans text-[12px] font-medium uppercase tracking-[0.2em] text-[#D0AE92]">
                  04. MULAI PROYEK ANDA
                </p>
                <h2 className="mt-3 font-serif text-[34px] leading-[1.14] text-[#F9F2E4] text-balance sm:text-[42px] lg:text-[44px]">
                  Siap Merancang Ruang Impian Anda?
                </h2>
                <p className="mt-4 max-w-2xl font-sans text-[15.5px] font-light leading-relaxed text-[#EBD7BE]">
                  Diskusikan denah ruangan, gaya desain interior, serta estimasi
                  Rencana Anggaran Biaya (RAB) Anda bersama tim konsultan
                  Archterior secara gratis.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultation()}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#A8836C] px-8 py-4 font-sans text-[15px] font-medium text-[#F9F2E4] shadow-[0_12px_30px_rgba(24,16,13,0.35)] transition-colors duration-200 hover:bg-[#77574A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F2E4] whitespace-nowrap shrink-0"
              >
                <span>Jadwalkan Konsultasi Sekarang</span>
                <ArrowRight className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SERVICE DETAIL MODAL
      ==================================================================== */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Detail Layanan ARCHTERIOR"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedServiceModal(null)}
              className="fixed inset-0 bg-[#2C211D]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[88vh] w-full max-w-[680px] overflow-y-auto rounded-2xl bg-[#F9F2E4] p-6 text-[#4A3A34] shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedServiceModal(null)}
                aria-label="Tutup detail layanan"
                className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#4A3A34]/20 text-[#4A3A34] transition-colors hover:bg-[#4A3A34] hover:text-[#F9F2E4]"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#A8836C]">
                Layanan Perancangan ARCHTERIOR
              </p>
              <h3 className="mt-2 pr-10 font-serif text-[28px] leading-tight text-[#4A3A34]">
                {selectedServiceModal.title}
              </h3>

              <div className="mt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-[20px] text-[#4A3A34]">
                    {selectedServiceModal.number}. {selectedServiceModal.title}
                  </h4>
                  <span className="font-sans text-[12.5px] text-[#A8836C] whitespace-nowrap">
                    {selectedServiceModal.timeline}
                  </span>
                </div>
                <p className="mt-2 font-sans text-[14.5px] leading-relaxed text-[#4A3A34]/80">
                  {selectedServiceModal.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {selectedServiceModal.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-sans text-[13.5px] text-[#4A3A34]/85"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#A8836C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#4A3A34]/12 pt-5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedServiceModal(null);
                    onViewAllServices();
                  }}
                  className="inline-flex cursor-pointer items-center gap-1.5 font-sans text-[13.5px] font-medium text-[#77574A] underline-offset-4 transition-colors hover:text-[#4A3A34] hover:underline"
                >
                  <span>Lihat Semua Layanan</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const title = selectedServiceModal.title;
                    setSelectedServiceModal(null);
                    onOpenConsultation('', title);
                  }}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#A8836C] px-6 py-3 font-sans text-[14px] font-medium text-[#F9F2E4] transition-colors hover:bg-[#77574A]"
                >
                  <span>Konsultasikan Layanan Ini</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================================
   BORDERLESS EDITORIAL MAESTRO PORTRAIT CARD
============================================================================ */
function MaestroPortraitCard({
  item,
  onSelect,
}: {
  item: MaestroCuratedItem;
  onSelect: () => void;
}) {
  return (
    <article
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Lihat referensi desain interior ${item.name} — ${item.focus}`}
      className="group cursor-pointer focus-visible:outline-none"
    >
      {/* 1. Tall Rounded Portrait Image (aspect-[3/4], rounded-[22px]) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px] bg-[#EBD7BE]/50">
        <Image
          src={item.image}
          alt={`Referensi desain interior ${item.name} — ${item.focus}`}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 280px"
          referrerPolicy="no-referrer"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* 2. Clean Borderless Text & Minimalist Arrow Row Directly Below Image */}
      <div className="flex items-end justify-between gap-3 pt-4">
        <div className="min-w-0">
          <h3 className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-[#4A3A34]">
            {item.name}
          </h3>
          <p className="mt-0.5 font-sans text-[13px] leading-snug text-[#77574A]">
            {item.focus}
          </p>
          <p className="mt-1 font-sans text-[11px] leading-snug text-[#A8836C]">
            {item.badge}
          </p>
        </div>

        <ArrowRight
          aria-hidden="true"
          className="h-[18px] w-[18px] shrink-0 stroke-[1.6] text-[#4A3A34] transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </article>
  );
}
