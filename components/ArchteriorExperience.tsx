'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, X } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HomeAboutTeaser from '@/components/HomeAboutTeaser';
import StudioSections from '@/components/StudioSections';
import AboutUsPage from '@/components/AboutUsPage';
import ServicesPage from '@/components/ServicesPage';
import Footer from '@/components/Footer';
import { CORE_SERVICES, type MaestroCuratedItem } from '@/lib/studio-data';

export default function ArchteriorExperience() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services'>(
    'home'
  );
  const [selectedMaestro, setSelectedMaestro] =
    useState<MaestroCuratedItem | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);

  // Consultation Form State
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    service: 'Residential Interior',
    area: '',
    notes: '',
  });
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMaestro(null);
        setConsultationOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'services') {
      setCurrentPage('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
      }
      return;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenConsultation = (preset = '', serviceTitle?: string) => {
    setFormSubmitted(false);
    setFormError('');
    setFormState((prev) => ({
      ...prev,
      ...(serviceTitle ? { service: serviceTitle } : {}),
      ...(preset ? { notes: preset } : {}),
    }));
    setConsultationOpen(true);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.contact.trim()) {
      setFormError(
        'Mohon lengkapi nama lengkap serta alamat email atau nomor WhatsApp Anda.'
      );
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const navActiveId =
    currentPage === 'about'
      ? 'about'
      : currentPage === 'services'
        ? 'services'
        : 'home';

  const headerTheme = currentPage === 'about' ? 'light' : 'dark';

  return (
    <div
      className={`min-h-screen w-full overflow-x-clip ${
        currentPage === 'about' ? 'bg-[#F9F2E4]' : 'bg-[#4A3A34]'
      }`}
    >
      <Header
        activeSection={navActiveId}
        theme={headerTheme}
        onNavigate={handleNavigate}
        onSelectMaestro={(item) => setSelectedMaestro(item)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'about' ? (
            <AboutUsPage
              key="about-page"
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />
          ) : currentPage === 'services' ? (
            <ServicesPage
              key="services-page"
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />
          ) : (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroSection
                onExplorePortfolio={() => handleNavigate('portfolio')}
                onScheduleConsultation={() => handleNavigate('contact')}
              />

              <HomeAboutTeaser
                onLearnMore={() => handleNavigate('about')}
              />

              <StudioSections
                onSelectMaestro={(item) => setSelectedMaestro(item)}
                onOpenConsultation={handleOpenConsultation}
                onViewAllServices={() => handleNavigate('services')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* ====================================================================
          SHARED MAESTRO REFERENCE DETAIL MODAL (Available on Home & About)
      ==================================================================== */}
      <AnimatePresence>
        {selectedMaestro && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedMaestro.name}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedMaestro(null)}
              className="fixed inset-0 bg-[#2C211D]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 grid max-h-[90vh] w-full max-w-[860px] grid-cols-1 overflow-y-auto rounded-2xl bg-[#F9F2E4] text-[#4A3A34] shadow-2xl md:grid-cols-12"
            >
              <button
                type="button"
                onClick={() => setSelectedMaestro(null)}
                aria-label="Tutup detail maestro"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#4A3A34]/85 text-[#F9F2E4] backdrop-blur-sm transition-colors hover:bg-[#4A3A34]"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#4A3A34]/15 md:col-span-5 md:aspect-auto md:min-h-[460px]">
                <Image
                  src={selectedMaestro.image}
                  alt={`Referensi desain interior bergaya ${selectedMaestro.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-7">
                <div>
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#A8836C]">
                    Kurasi Maestro {selectedMaestro.index} / 07
                  </p>
                  <h3 className="mt-2 font-serif text-[30px] leading-tight text-[#4A3A34]">
                    {selectedMaestro.name}
                  </h3>
                  <p className="mt-1 font-sans text-[14px] text-[#77574A]">
                    {selectedMaestro.focus}
                  </p>
                  <p className="mt-1 font-sans text-[12px] text-[#A8836C]">
                    {selectedMaestro.badge}
                  </p>

                  <p className="mt-5 font-sans text-[14.5px] leading-relaxed text-[#4A3A34]/85">
                    {selectedMaestro.editorialOverview}
                  </p>

                  <div className="mt-6">
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#77574A]">
                      Karakter Utama Ruang
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {selectedMaestro.signatureElements.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 font-sans text-[13.5px] text-[#4A3A34]/85"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#A8836C]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#77574A]">
                      Palet Material Referensi
                    </p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-4">
                      {selectedMaestro.palette.map((swatch) => (
                        <div
                          key={swatch.name}
                          className="flex items-center gap-2"
                        >
                          <span
                            className="h-5 w-5 rounded-full border border-[#4A3A34]/20"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <span className="font-sans text-[12.5px] text-[#4A3A34]/80">
                            {swatch.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#4A3A34]/12 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedMaestro(null)}
                    className="cursor-pointer font-sans text-[13.5px] font-medium text-[#77574A] hover:text-[#4A3A34]"
                  >
                    Tutup
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const maestroName = selectedMaestro.name;
                      setSelectedMaestro(null);
                      handleOpenConsultation(
                        `Saya tertarik mengadaptasi referensi gaya ${maestroName} untuk proyek ruang saya.`
                      );
                    }}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#A8836C] px-6 py-2.5 font-sans text-[13.5px] font-medium text-[#F9F2E4] transition-colors hover:bg-[#77574A]"
                  >
                    <span>Adaptasi Gaya Ini</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ====================================================================
          SHARED CONSULTATION & RAB REQUEST MODAL
      ==================================================================== */}
      <AnimatePresence>
        {consultationOpen && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Jadwalkan Konsultasi ARCHTERIOR"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setConsultationOpen(false)}
              className="fixed inset-0 bg-[#2C211D]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[90vh] w-full max-w-[600px] overflow-y-auto rounded-2xl bg-[#F9F2E4] p-6 text-[#4A3A34] shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setConsultationOpen(false)}
                aria-label="Tutup formulir konsultasi"
                className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#4A3A34]/20 text-[#4A3A34] transition-colors hover:bg-[#4A3A34] hover:text-[#F9F2E4]"
              >
                <X className="h-4 w-4" />
              </button>

              {formSubmitted ? (
                <div className="py-8 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#A8836C]/20 text-[#77574A]">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-[28px] text-[#4A3A34]">
                    Jadwal Konsultasi Diterima
                  </h3>
                  <p className="mx-auto mt-2.5 max-w-md font-sans text-[14.5px] leading-relaxed text-[#4A3A34]/80">
                    Terima kasih,{' '}
                    <strong className="font-medium text-[#4A3A34]">
                      {formState.name}
                    </strong>
                    . Konsultan ARCHTERIOR akan menghubungi Anda melalui{' '}
                    <strong className="font-medium text-[#4A3A34]">
                      {formState.contact}
                    </strong>{' '}
                    dalam 1×24 jam hari kerja.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setConsultationOpen(false);
                    }}
                    className="mt-6 cursor-pointer rounded-full bg-[#4A3A34] px-7 py-3 font-sans text-[14px] font-medium text-[#F9F2E4] transition-colors hover:bg-[#77574A]"
                  >
                    Tutup
                  </button>
                </div>
              ) : (
                <div>
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#A8836C]">
                    Konsultasi Gratis
                  </p>
                  <h3 className="mt-1.5 pr-10 font-serif text-[28px] leading-tight text-[#4A3A34]">
                    Diskusikan Denah &amp; Estimasi RAB
                  </h3>
                  <p className="mt-2 font-sans text-[14px] text-[#77574A]">
                    Isi detail singkat proyek Anda agar tim kami dapat
                    menyiapkan sesi konsultasi yang relevan.
                  </p>

                  <form
                    onSubmit={handleFormSubmit}
                    className="mt-6 space-y-4"
                    noValidate
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="consult-name"
                          className="block font-sans text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#77574A]"
                        >
                          Nama Lengkap
                        </label>
                        <input
                          id="consult-name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState((s) => ({
                              ...s,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Contoh: Nadia Pratama"
                          className="mt-1.5 w-full rounded-xl border border-[#4A3A34]/20 bg-white/75 px-4 py-2.5 font-sans text-[14.5px] text-[#4A3A34] placeholder:text-[#4A3A34]/40 focus:border-[#A8836C] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="consult-contact"
                          className="block font-sans text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#77574A]"
                        >
                          Email / WhatsApp
                        </label>
                        <input
                          id="consult-contact"
                          type="text"
                          required
                          value={formState.contact}
                          onChange={(e) =>
                            setFormState((s) => ({
                              ...s,
                              contact: e.target.value,
                            }))
                          }
                          placeholder="hello@domain.com / 0812..."
                          className="mt-1.5 w-full rounded-xl border border-[#4A3A34]/20 bg-white/75 px-4 py-2.5 font-sans text-[14.5px] text-[#4A3A34] placeholder:text-[#4A3A34]/40 focus:border-[#A8836C] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="consult-service"
                          className="block font-sans text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#77574A]"
                        >
                          Layanan Pilihan
                        </label>
                        <select
                          id="consult-service"
                          value={formState.service}
                          onChange={(e) =>
                            setFormState((s) => ({
                              ...s,
                              service: e.target.value,
                            }))
                          }
                          className="mt-1.5 w-full rounded-xl border border-[#4A3A34]/20 bg-white/75 px-4 py-2.5 font-sans text-[14.5px] text-[#4A3A34] focus:border-[#A8836C] focus:outline-none"
                        >
                          {CORE_SERVICES.map((svc) => (
                            <option key={svc.id} value={svc.title}>
                              {svc.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="consult-area"
                          className="block font-sans text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#77574A]"
                        >
                          Estimasi Luas (m²)
                        </label>
                        <input
                          id="consult-area"
                          type="text"
                          value={formState.area}
                          onChange={(e) =>
                            setFormState((s) => ({
                              ...s,
                              area: e.target.value,
                            }))
                          }
                          placeholder="Contoh: 200 m²"
                          className="mt-1.5 w-full rounded-xl border border-[#4A3A34]/20 bg-white/75 px-4 py-2.5 font-sans text-[14.5px] text-[#4A3A34] placeholder:text-[#4A3A34]/40 focus:border-[#A8836C] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="consult-notes"
                        className="block font-sans text-[11.5px] font-medium uppercase tracking-[0.14em] text-[#77574A]"
                      >
                        Catatan Denah &amp; Gaya Referensi
                      </label>
                      <textarea
                        id="consult-notes"
                        rows={3}
                        value={formState.notes}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            notes: e.target.value,
                          }))
                        }
                        placeholder="Ceritakan kebutuhan ruang, lokasi, atau kisaran RAB yang Anda rencanakan..."
                        className="mt-1.5 w-full resize-none rounded-xl border border-[#4A3A34]/20 bg-white/75 px-4 py-2.5 font-sans text-[14.5px] text-[#4A3A34] placeholder:text-[#4A3A34]/40 focus:border-[#A8836C] focus:outline-none"
                      />
                    </div>

                    {formError && (
                      <p
                        role="alert"
                        className="font-sans text-[13px] font-medium text-[#77574A]"
                      >
                        {formError}
                      </p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#A8836C] px-7 py-3.5 font-sans text-[14.5px] font-medium text-[#F9F2E4] transition-colors duration-200 hover:bg-[#77574A]"
                      >
                        <span>Kirim Permintaan Konsultasi</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
