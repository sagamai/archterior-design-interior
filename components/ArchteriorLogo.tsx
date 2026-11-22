'use client';

import Image from 'next/image';
import { LOGO_IMAGE } from '@/lib/studio-data';

interface ArchteriorLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Renders the geometric ARCHTERIOR wordmark PNG cropped cleanly to its opaque bounds
 * (1448x160 centered inside a 2048x2048 transparent canvas) and tinted accurately
 * to either #F9F2E4 (Alabaster) or #4A3A34 (Dark Espresso).
 */
export default function ArchteriorLogo({
  variant = 'light',
  size = 'md',
  className = '',
}: ArchteriorLogoProps) {
  const dimensions = {
    sm: { box: 'h-[18px] w-[132px]', px: 186, img: 'w-[186px] h-[186px]' },
    md: { box: 'h-[22px] w-[160px]', px: 224, img: 'w-[224px] h-[224px]' },
    lg: { box: 'h-[26px] w-[190px]', px: 266, img: 'w-[266px] h-[266px]' },
  }[size];

  // Light variant tints black PNG cleanly into warm Alabaster (#F9F2E4)
  // Dark variant tints black PNG cleanly into Dark Espresso (#4A3A34)
  const filterClass =
    variant === 'light'
      ? '[filter:brightness(0)_invert(96%)_sepia(14%)_saturate(360%)_hue-rotate(344deg)_brightness(101%)_contrast(96%)]'
      : '[filter:brightness(0)_invert(21%)_sepia(14%)_saturate(680%)_hue-rotate(334deg)_brightness(94%)_contrast(92%)]';

  return (
    <span
      className={`relative block overflow-hidden shrink-0 select-none ${dimensions.box} ${className}`}
    >
      <Image
        src={LOGO_IMAGE}
        alt="ARCHTERIOR"
        width={dimensions.px}
        height={dimensions.px}
        priority
        referrerPolicy="no-referrer"
        className={`pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 ${dimensions.img} ${filterClass}`}
      />
    </span>
  );
}
