import type { Metadata } from 'next';
import { DM_Serif_Text, Jost } from 'next/font/google';
import './globals.css';

const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ARCHTERIOR — Architecture & Interior Design Studio',
  description:
    'Solusi desain interior dan arsitektur modern dengan visualisasi 3D fotorealistis serta perencanaan anggaran yang transparan.',
  openGraph: {
    title: 'ARCHTERIOR — Architecture & Interior Design Studio',
    description:
      'Solusi desain interior dan arsitektur modern dengan visualisasi 3D fotorealistis serta perencanaan anggaran yang transparan.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARCHTERIOR — Architecture & Interior Design Studio',
    description:
      'Solusi desain interior dan arsitektur modern dengan visualisasi 3D fotorealistis serta perencanaan anggaran yang transparan.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${dmSerifText.variable} ${jost.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#4A3A34] font-sans text-[#4A3A34] antialiased selection:bg-[#A8836C] selection:text-[#F9F2E4]"
      >
        {children}
      </body>
    </html>
  );
}
