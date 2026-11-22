'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';
import ArchteriorLogo from '@/components/ArchteriorLogo';
import {
  NAV_LINKS,
  MAESTRO_CURATION,
  CORE_SERVICES,
  type MaestroCuratedItem,
} from '@/lib/studio-data';

interface HeaderProps {
  activeSection: string;
  theme?: 'dark' | 'light';
  onNavigate: (sectionId: string) => void;
  onSelectMaestro: (item: MaestroCuratedItem) => void;
  onOpenConsultation: () => void;
}

export default function Header({
  activeSection,
  theme = 'dark',
  onNavigate,
  onSelectMaestro,
  onOpenConsultation,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      const timer = setTimeout(() => searchInputRef.current?.focus(), 60);
      return () => clearTimeout(timer);
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const matchedMaestros = MAESTRO_CURATION.filter(
    (item) =>
      !normalizedQuery ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.focus.toLowerCase().includes(normalizedQuery) ||
      item.badge.toLowerCase().includes(normalizedQuery)
  );

  const matchedServices = CORE_SERVICES.filter(
    (svc) =>
      !normalizedQuery ||
      svc.title.toLowerCase().includes(normalizedQuery) ||
      svc.description.toLowerCase().includes(normalizedQuery)
  );

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  const headerBarClasses = isLight
    ? isScrolled
      ? 'bg-[#F9F2E4]/95 backdrop-blur-md border-b border-[#D0AE92]/35 py-3.5 shadow-[0_8px_24px_rgba(74,58,52,0.06)]'
      : 'bg-[#F9F2E4]/85 backdrop-blur-sm py-5 sm:py-6'
    : isScrolled
      ? 'bg-[#4A3A34]/92 backdrop-blur-md border-b border-[#EBD7BE]/15 py-3.5 shadow-[0_8px_28px_rgba(32,22,18,0.22)]'
      : 'bg-transparent py-5 sm:py-6';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBarClasses}`}
      >
        <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-6 px-6 sm:px-10 lg:px-14">
          {/* Left Brand Area: Wordmark + Thin Vertical Divider + Uppercase Tagline */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className={`flex items-center gap-4 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 rounded-sm ${
              isLight
                ? 'focus-visible:ring-[#A8836C] focus-visible:ring-offset-[#F9F2E4]'
                : 'focus-visible:ring-[#D0AE92] focus-visible:ring-offset-[#4A3A34]'
            }`}
            aria-label="ARCHTERIOR — Architecture & Interior Design Studio"
          >
            <ArchteriorLogo
              variant={isLight ? 'dark' : 'light'}
              size="md"
              className="transition-opacity duration-200 group-hover:opacity-85"
            />
            <span
              aria-hidden="true"
              className={`hidden sm:block h-5 w-px shrink-0 ${
                isLight ? 'bg-[#4A3A34]/25' : 'bg-[#F9F2E4]/30'
              }`}
            />
            <span
              className={`hidden sm:block font-sans text-[11px] font-normal uppercase tracking-[0.18em] whitespace-nowrap ${
                isLight ? 'text-[#77574A]' : 'text-[#EBD7BE]'
              }`}
            >
              ARCHITECTURE &amp; INTERIOR DESIGN STUDIO
            </span>
          </a>

          {/* Right Navigation Area: Links + Circular Search Button + Mobile Hamburger */}
          <div className="flex items-center gap-4 lg:gap-8 shrink-0">
            <nav
              aria-label="Navigasi Utama"
              className="hidden lg:flex items-center gap-8"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className={`relative py-1.5 font-sans text-[15px] font-normal tracking-[0.01em] whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none ${
                      isLight
                        ? isActive
                          ? 'text-[#4A3A34] font-medium'
                          : 'text-[#4A3A34]/80 hover:text-[#A8836C] focus-visible:text-[#A8836C]'
                        : isActive
                          ? 'text-[#F9F2E4]'
                          : 'text-[#F9F2E4]/85 hover:text-[#D0AE92] focus-visible:text-[#D0AE92]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="archterior-nav-indicator"
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 34,
                        }}
                        className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] ${
                          isLight ? 'bg-[#A8836C]' : 'bg-[#D0AE92]'
                        }`}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2.5 shrink-0">
              {/* Circular Outlined Search Icon Button (38px x 38px) */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Cari maestro atau layanan"
                className={`flex h-[38px] w-[38px] items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 cursor-pointer shrink-0 ${
                  isLight
                    ? 'border-[#4A3A34]/35 text-[#4A3A34] hover:border-[#A8836C] hover:bg-[#4A3A34]/5 hover:text-[#A8836C] focus-visible:ring-[#A8836C]'
                    : 'border-[#F9F2E4]/35 text-[#F9F2E4] hover:border-[#D0AE92] hover:bg-[#F9F2E4]/10 hover:text-[#D0AE92] focus-visible:ring-[#D0AE92]'
                }`}
              >
                <Search className="h-[16px] w-[16px] stroke-[1.75]" />
              </button>

              {/* Mobile Drawer Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Buka menu navigasi"
                aria-expanded={mobileMenuOpen}
                className={`flex lg:hidden h-[38px] w-[38px] items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 cursor-pointer shrink-0 ${
                  isLight
                    ? 'border-[#4A3A34]/35 text-[#4A3A34] hover:border-[#A8836C] hover:bg-[#4A3A34]/5 focus-visible:ring-[#A8836C]'
                    : 'border-[#F9F2E4]/35 text-[#F9F2E4] hover:border-[#D0AE92] hover:bg-[#F9F2E4]/10 focus-visible:ring-[#D0AE92]'
                }`}
              >
                <Menu className="h-[18px] w-[18px] stroke-[1.75]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-[60] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi ARCHTERIOR"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-[#2C211D]/70 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 flex w-full max-w-[320px] flex-col justify-between bg-[#4A3A34] p-7 text-[#F9F2E4] shadow-2xl border-l border-[#EBD7BE]/15"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#EBD7BE]/15">
                  <ArchteriorLogo variant="light" size="sm" />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Tutup menu"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F9F2E4]/25 text-[#F9F2E4] hover:border-[#D0AE92] hover:text-[#D0AE92] transition-colors cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.2em] text-[#D0AE92]">
                  Architecture &amp; Interior Design Studio
                </p>

                <nav className="mt-6 flex flex-col gap-1">
                  {NAV_LINKS.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.id);
                        }}
                        className={`flex items-center justify-between py-3.5 text-[17px] border-b border-[#EBD7BE]/10 transition-colors ${
                          isActive
                            ? 'text-[#D0AE92] font-medium'
                            : 'text-[#F9F2E4] hover:text-[#D0AE92]'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="h-[1.5px] w-6 bg-[#D0AE92]" />
                        )}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#EBD7BE]/15">
                <p className="font-serif text-[18px] text-[#F9F2E4]">
                  Mulai Proyek Anda
                </p>
                <p className="mt-1 text-[13px] text-[#EBD7BE]/85">
                  Konsultasikan denah &amp; estimasi RAB ruang Anda bersama tim
                  arsitek kami.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#A8836C] px-5 py-3 text-[14px] font-medium text-[#F9F2E4] transition-colors hover:bg-[#77574A]"
                >
                  <span>Jadwalkan Konsultasi</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* Studio Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div
            className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-20 sm:pt-28"
            role="dialog"
            aria-modal="true"
            aria-label="Pencarian ARCHTERIOR"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-[#2C211D]/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[640px] overflow-hidden rounded-2xl border border-[#EBD7BE]/20 bg-[#4A3A34] text-[#F9F2E4] shadow-[0_28px_70px_rgba(20,12,10,0.55)]"
            >
              <div className="flex items-center gap-3 border-b border-[#EBD7BE]/15 px-5 py-4">
                <Search className="h-5 w-5 text-[#D0AE92] shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama maestro, gaya ruang, atau layanan..."
                  className="w-full bg-transparent font-sans text-[15px] text-[#F9F2E4] placeholder:text-[#EBD7BE]/50 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Tutup pencarian"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#EBD7BE]/25 text-[#EBD7BE] hover:border-[#D0AE92] hover:text-[#F9F2E4] transition-colors cursor-pointer shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-5 space-y-6">
                {matchedMaestros.length === 0 &&
                matchedServices.length === 0 ? (
                  <p className="py-8 text-center text-[14px] text-[#EBD7BE]/75">
                    Tidak ditemukan referensi untuk &ldquo;{searchQuery}&rdquo;.
                    Coba kata kunci seperti &ldquo;Jaya Ibrahim&rdquo;,
                    &ldquo;Tropical&rdquo;, atau &ldquo;3D&rdquo;.
                  </p>
                ) : (
                  <>
                    {matchedMaestros.length > 0 && (
                      <div>
                        <p className="mb-2.5 text-[10px] uppercase tracking-[0.2em] text-[#D0AE92]">
                          Kurasi Maestro Indonesia ({matchedMaestros.length})
                        </p>
                        <div className="divide-y divide-[#EBD7BE]/10">
                          {matchedMaestros.map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => {
                                setSearchOpen(false);
                                onSelectMaestro(item);
                              }}
                              className="flex w-full items-center justify-between gap-4 py-3 text-left transition-colors hover:text-[#D0AE92] group cursor-pointer"
                            >
                              <div>
                                <p className="font-sans text-[13.5px] font-medium tracking-[0.06em] text-[#F9F2E4] group-hover:text-[#D0AE92] transition-colors">
                                  {item.name}
                                </p>
                                <p className="text-[12px] text-[#EBD7BE]/75">
                                  {item.focus} · {item.badge}
                                </p>
                              </div>
                              <ArrowUpRight className="h-4 w-4 text-[#D0AE92] opacity-70 group-hover:opacity-100 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {matchedServices.length > 0 && (
                      <div>
                        <p className="mb-2.5 text-[10px] uppercase tracking-[0.2em] text-[#D0AE92]">
                          Layanan Kami ({matchedServices.length})
                        </p>
                        <div className="divide-y divide-[#EBD7BE]/10">
                          {matchedServices.map((svc) => (
                            <button
                              key={svc.id}
                              type="button"
                              onClick={() => {
                                setSearchOpen(false);
                                handleLinkClick('services');
                              }}
                              className="flex w-full items-center justify-between gap-4 py-3 text-left transition-colors hover:text-[#D0AE92] group cursor-pointer"
                            >
                              <div>
                                <p className="font-sans text-[14px] font-medium text-[#F9F2E4] group-hover:text-[#D0AE92] transition-colors">
                                  {svc.number}. {svc.title}
                                </p>
                                <p className="text-[12px] text-[#EBD7BE]/70">
                                  {svc.timeline}
                                </p>
                              </div>
                              <ArrowRight className="h-4 w-4 text-[#D0AE92] opacity-70 group-hover:opacity-100 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
