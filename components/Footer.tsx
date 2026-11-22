'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import ArchteriorLogo from '@/components/ArchteriorLogo';
import { FOOTER_SERVICES, NAV_LINKS } from '@/lib/studio-data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#EBD7BE]/15 bg-[#4A3A34] text-[#EBD7BE]">
      <div className="mx-auto max-w-[1380px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Identitas */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              aria-label="ARCHTERIOR Home"
              className="inline-block"
            >
              <ArchteriorLogo variant="light" size="md" />
            </a>
            <p className="mt-4 max-w-xs font-sans text-[14px] font-light leading-relaxed text-[#EBD7BE]">
              Kombinasi Seni Arsitektur dan Interior Kontemporer
            </p>
          </div>

          {/* Col 2: Navigasi Halaman */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#D0AE92]">
              Navigasi Halaman
            </h3>
            <ul className="mt-4 space-y-2.5 font-sans text-[14px]">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="text-[#EBD7BE]/85 transition-colors duration-200 hover:text-[#F9F2E4]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Layanan Desain */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#D0AE92]">
              Layanan Desain
            </h3>
            <ul className="mt-4 space-y-2.5 font-sans text-[14px]">
              {FOOTER_SERVICES.map((svc) => (
                <li key={svc.label}>
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="cursor-pointer text-left text-[#EBD7BE]/85 transition-colors duration-200 hover:text-[#F9F2E4]"
                  >
                    {svc.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontak Studio */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#D0AE92]">
              Kontak Studio
            </h3>
            <ul className="mt-4 space-y-3 font-sans text-[14px] font-light text-[#EBD7BE]/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D0AE92]" />
                <span>
                  Jl. Slamet Riyadi No. 248, Sriwedari, Laweyan, Surakarta
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#D0AE92]" />
                <a
                  href="mailto:hello@archterior.id"
                  className="transition-colors hover:text-[#F9F2E4]"
                >
                  hello@archterior.id
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D0AE92]" />
                <a
                  href="tel:+6281234567890"
                  className="transition-colors hover:text-[#F9F2E4] tabular-nums"
                >
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-14 border-t border-[#EBD7BE]/15 pt-6">
          <p className="font-sans text-[13px] text-[#D0AE92]">
            © 2026 ARCHTERIOR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
