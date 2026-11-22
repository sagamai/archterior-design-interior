export interface CoreService {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export interface MaestroCuratedItem {
  id: string;
  index: string;
  name: string;
  focus: string;
  badge: string;
  image: string;
  editorialOverview: string;
  signatureElements: string[];
  palette: { name: string; hex: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const HERO_BG_IMAGE =
  '/assets/aistudio/Gemini_Generated_Image_clrvmgclrvmgclrv__1__1086c841.jfif';

export const LOGO_IMAGE =
  '/assets/aistudio/Gemini_Generated_Image_hg9kuhg9kuhg9kuh-Photoroom__1__d1cc992f.png';

export const ABOUT_HERO_IMAGE =
  '/assets/about/about_studio_hero_1795234647437.jpg';

export const ABOUT_PHILOSOPHY_IMAGE =
  '/assets/about/about_philosophy_studio_1795234646166.jpg';

export const HOME_ABOUT_TEASER_IMAGE =
  '/assets/about/home_about_teaser_studio_1795315435477.jpg';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'samuel-gabriel',
    name: 'Samuel Gabriel',
    role: 'PRINCIPAL ARCHITECT & FOUNDER',
    bio: 'Memimpin arah konsep arsitektur, proporsi ruang, dan kelayakan teknis proyek.',
    image: '/assets/about/team_samuel_gabriel_1795234648644.jpg',
  },
  {
    id: 'nadia-larasati',
    name: 'Nadia Larasati',
    role: 'LEAD INTERIOR DESIGNER',
    bio: 'Mengkurasi palet material alami, tata cahaya, dan ergonomi interior modern.',
    image: '/assets/about/team_nadia_larasati_1795234648578.jpg',
  },
  {
    id: 'raka-pratama',
    name: 'Raka Pratama',
    role: '3D VISUALIZER & SPATIAL STYLIST',
    bio: 'Mewujudkan gambar kerja menjadi render 3D fotorealistis dan komposisi visual ruang.',
    image: '/assets/about/team_raka_pratama_1795234649067.jpg',
  },
];

export interface DetailedServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICE_JOURNEY_BG =
  '/assets/services/service_journey_corridor_1795238360323.jpg';

export const SERVICE_CTA_TEXTURE =
  '/assets/services/service_3d_visualization_1795238359909.jpg';

export const DETAILED_SERVICES: DetailedServiceItem[] = [
  {
    id: 'residential-interior',
    number: '01',
    title: 'RESIDENTIAL INTERIOR',
    description:
      'Perancangan interior rumah, vila, dan apartemen modern yang nyaman serta fungsional.',
    image: HERO_BG_IMAGE,
    alt: 'Desain interior hunian modern dengan bukaan kaca penuh dan furnitur bernuansa hangat',
  },
  {
    id: 'commercial-retail',
    number: '02',
    title: 'COMMERCIAL & RETAIL',
    description:
      'Konsep desain kafe, kantor, dan area komersial yang memperkuat identitas brand bisnis Anda.',
    image: '/assets/services/service_commercial_retail_1795238360808.jpg',
    alt: 'Interior kafe dan ruang ritel butik dengan meja travertine dan rak kayu walnut',
  },
  {
    id: '3d-realistic-visualization',
    number: '03',
    title: '3D REALISTIC VISUALIZATION',
    description:
      'Render 3D fotorealistis dengan simulasi pencahayaan dan tekstur material sebelum konstruksi.',
    image: '/assets/services/service_3d_visualization_1795238359909.jpg',
    alt: 'Visualisasi render 3D fotorealistis ruang keluarga dan ruang makan berplafon tinggi',
  },
  {
    id: 'spatial-planning-layouting',
    number: '04',
    title: 'SPATIAL PLANNING & LAYOUTING',
    description:
      'Penataan denah 2D, zonasi ruang, serta sirkulasi udara dan cahaya alami yang presisi.',
    image: '/assets/services/service_spatial_planning_1795238362210.jpg',
    alt: 'Proses penyusunan denah 2D arsitektur, penggaris skala kuningan, dan maket kayu',
  },
  {
    id: 'material-furniture-curation',
    number: '05',
    title: 'MATERIAL & FURNITURE CURATION',
    description:
      'Rekomendasi material finishing dan kurasi furnitur siap pakai (loose furniture) sesuai anggaran.',
    image: '/assets/services/service_material_curation_1795238362184.jpg',
    alt: 'Moodboard kurasi material batu travertine, kayu ek, walnut, kain linen, dan aksen kuningan',
  },
  {
    id: 'technical-drawing-rab',
    number: '06',
    title: 'TECHNICAL DRAWING & RAB',
    description:
      'Penyusunan gambar kerja teknis lengkap beserta rincian Rencana Anggaran Biaya (RAB) transparan.',
    image: '/assets/services/service_technical_rab_1795238362044.jpg',
    alt: 'Dokumen gambar kerja teknis elevasi dan rincian anggaran biaya RAB di meja studio',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01.',
    title: 'Konsultasi & Survei',
    description:
      'Diskusi kebutuhan ruang, gaya desain, serta pengukuran dimensi di lokasi proyek.',
  },
  {
    number: '02.',
    title: 'Layout 2D & Moodboard',
    description:
      'Penyusunan denah tata letak ruang serta referensi palet warna dan material.',
  },
  {
    number: '03.',
    title: 'Visualisasi 3D & Revisi',
    description:
      'Pembuatan render 3D realistis dari berbagai sudut ruang disertai sesi revisi.',
  },
  {
    number: '04.',
    title: 'Gambar Kerja & RAB',
    description:
      'Penyerahan dokumen gambar kerja teknis, daftar material, dan rincian RAB.',
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'paket-konsep-layout',
    name: 'Paket Konsep & Layout',
    description: 'Cocok untuk penataan ulang tata letak dan konsep ruang.',
    features: [
      'Konsultasi & Survei Lokasi',
      'Denah Layout 2D (Furniture Plan)',
      'Moodboard Konsep Warna & Material',
      'Rekomendasi Kurasi Furnitur Siap Pakai',
    ],
  },
  {
    id: 'paket-visualisasi-3d',
    name: 'Paket Visualisasi 3D',
    description:
      'Gambaran visual utuh untuk hunian maupun ruang komersial.',
    featured: true,
    badge: 'POPULER',
    features: [
      'Semua fitur Paket Konsep & Layout',
      'Render 3D Fotorealistis (3–4 sudut per ruang)',
      'Simulasi Pencahayaan Siang & Malam',
      'Maksimal 2x Revisi Desain 3D',
    ],
  },
  {
    id: 'paket-lengkap-desain-rab',
    name: 'Paket Lengkap Desain & RAB',
    description:
      'Dokumen perencanaan siap eksekusi untuk pembangunan atau renovasi total.',
    features: [
      'Semua fitur Paket Visualisasi 3D',
      'Gambar Kerja Teknis Lengkap (MEP, Plafon, Lantai, Dinding)',
      'Rincian Rencana Anggaran Biaya (RAB) & Daftar Material (BOQ)',
      'Asistensi Teknis dengan Kontraktor Pilihan Anda',
    ],
  },
];

export const SERVICE_FAQS: FaqItem[] = [
  {
    id: 'faq-durasi',
    question: 'Berapa lama estimasi pengerjaan desain?',
    answer:
      'Rata-rata 2 hingga 4 minggu, menyesuaikan luas ruangan dan tingkat kompleksitas desain.',
  },
  {
    id: 'faq-konstruksi',
    question: 'Apakah Archterior melayani konstruksi atau custom furniture?',
    answer:
      'Kami berfokus penuh pada jasa perencanaan desain, visualisasi 3D, gambar kerja, dan penyusunan RAB agar dokumen desain Anda objektif dan siap dikerjakan kontraktor mana pun.',
  },
  {
    id: 'faq-revisi',
    question: 'Berapa kali batas revisi desain yang diberikan?',
    answer:
      'Setiap paket mencakup 2 kali revisi minor pada tahap denah 2D maupun visualisasi 3D sebelum gambar kerja difinalisasi.',
  },
  {
    id: 'faq-pembayaran',
    question: 'Bagaimana sistem pembayaran di Archterior?',
    answer:
      'Pembayaran dilakukan bertahap: 50% uang muka (DP) setelah survei lokasi dan 50% pelunasan saat dokumen final diserahkan.',
  },
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const CORE_SERVICES: CoreService[] = [
  {
    id: 'residential-interior',
    number: '01',
    title: 'Residential Interior',
    description:
      'Perancangan interior rumah dan apartemen modern yang nyaman, ergonomis, dan estetik.',
    deliverables: [
      'Tata letak ruang & alur sirkulasi ergonomis',
      'Gambar kerja DED & detail furnitur custom',
      'Rencana Anggaran Biaya (RAB) itemized transparan',
    ],
    timeline: '4 – 6 Minggu Perancangan',
  },
  {
    id: 'commercial-retail',
    number: '02',
    title: 'Commercial & Retail',
    description:
      'Konsep desain ruang kantor, kafe, dan area komersial yang memperkuat identitas brand bisnis Anda.',
    deliverables: [
      'Analisis alur pengunjung & optimasi kapasitas',
      'Konsep pencahayaan, akustik, dan identitas ruang',
      'Spesifikasi material tahan pakai & kontrol biaya',
    ],
    timeline: '5 – 8 Minggu Perancangan',
  },
  {
    id: '3d-visualization-spatial-styling',
    number: '03',
    title: '3D Visualization & Spatial Styling',
    description:
      'Visualisasi render 3D fotorealistis serta kurasi furnitur, warna, dan pencahayaan sebelum konstruksi.',
    deliverables: [
      'Render perspektif 3D fotorealistis resolusi tinggi',
      'Simulasi pencahayaan alami & material asli',
      'Kurasi furnitur lepas, tekstil, dan dekorasi ruang',
    ],
    timeline: '10 – 14 Hari Kerja',
  },
];

export const FOOTER_SERVICES = [
  { label: 'Residential Interior', serviceId: 'residential-interior' },
  { label: 'Commercial & Retail', serviceId: 'commercial-retail' },
  { label: '3D Visualization', serviceId: '3d-visualization-spatial-styling' },
  { label: 'Spatial Styling', serviceId: '3d-visualization-spatial-styling' },
] as const;

export const MAESTRO_CURATION: MaestroCuratedItem[] = [
  {
    id: 'jaya-ibrahim',
    index: '01',
    name: 'JAYA IBRAHIM',
    focus: 'Hotel & Resor Mewah Dunia',
    badge: 'Asian Contemporary • Symmetrical • Tranquil',
    image: '/assets/maestros/maestro_jaya_ibrahim_1795232905917.jpg',
    editorialOverview:
      'Menghadirkan ketenangan spasial melalui simetri arsitektural, kolom kayu jati gelap, batu alam bertekstur lembut, serta transisi halus antara ruang dalam dan taman teduh.',
    signatureElements: [
      'Komposisi simetris yang menenangkan',
      'Harmoni kayu jati gelap, travertine, dan linen alami',
      'Pencahayaan ambient hangat yang lembut',
    ],
    palette: [
      { name: 'Dark Espresso', hex: '#4A3A34' },
      { name: 'Warm Mocha', hex: '#77574A' },
      { name: 'Warm Sand', hex: '#D0AE92' },
      { name: 'Alabaster', hex: '#F9F2E4' },
    ],
  },
  {
    id: 'yuni-jie',
    index: '02',
    name: 'YUNI JIE',
    focus: 'Hunian, Retail Mewah, & Furnitur',
    badge: 'Modern Urban • Casual Elegance',
    image: '/assets/maestros/maestro_yuni_jie_1795232907428.jpg',
    editorialOverview:
      'Memadukan keanggunan kasual perkotaan dengan furnitur bersiluet organik, panel kayu walnut hangat, dan kurasi objek seni yang terasa personal namun tetap terukur.',
    signatureElements: [
      'Proporsi furnitur bersih dengan sentuhan kurva lembut',
      'Palet warna bumi netral bertekstur kain & kayu',
      'Keseimbangan fungsi harian dan detail mewah halus',
    ],
    palette: [
      { name: 'Warm Mocha', hex: '#77574A' },
      { name: 'Terracotta Taupe', hex: '#A8836C' },
      { name: 'Soft Cream', hex: '#EBD7BE' },
      { name: 'Alabaster', hex: '#F9F2E4' },
    ],
  },
  {
    id: 'agam-riadi',
    index: '03',
    name: 'AGAM RIADI',
    focus: 'Restoran Ikonik & Hunian Klasik',
    badge: 'Colonial • Peranakan • Eclectic Heritage',
    image: '/assets/maestros/maestro_agam_riadi_1795232906771.jpg',
    editorialOverview:
      'Merayakan kekayaan warisan kolonial dan Peranakan lewat pintu krepyak kayu tinggi, ubin terakota hangat, serta kurasi furnitur antik yang dihidupkan kembali secara kontemporer.',
    signatureElements: [
      'Pintu kisi kayu gelap & aksen lentera kuningan',
      'Lapisan tekstur terakota, ukiran kayu, dan kain polos',
      'Atmosfer hangat penuh karakter dan narasi sejarah',
    ],
    palette: [
      { name: 'Dark Espresso', hex: '#4A3A34' },
      { name: 'Terracotta Taupe', hex: '#A8836C' },
      { name: 'Warm Sand', hex: '#D0AE92' },
      { name: 'Soft Cream', hex: '#EBD7BE' },
    ],
  },
  {
    id: 'prasetio-budhi',
    index: '04',
    name: 'PRASETIO BUDHI',
    focus: 'Hunian Privat & Luxury Living',
    badge: 'Timeless • Refined • Warm Modern',
    image: '/assets/maestros/maestro_prasetio_budhi_1795232907671.jpg',
    editorialOverview:
      'Pendekatan modern hangat yang abadi dengan dinding batu kapur berdimensi tinggi, garis arsitektur bersih, serta detail perunggu gelap yang presisi.',
    signatureElements: [
      'Ruang berplafon tinggi dengan panel batu alam matte',
      'Sofa modular berjahitan rapi bernuansa taupe hangat',
      'Integrasi ruang dalam dengan lanskap tropis privat',
    ],
    palette: [
      { name: 'Dark Espresso', hex: '#4A3A34' },
      { name: 'Warm Mocha', hex: '#77574A' },
      { name: 'Soft Cream', hex: '#EBD7BE' },
      { name: 'Alabaster', hex: '#F9F2E4' },
    ],
  },
  {
    id: 'shirley-gouw',
    index: '05',
    name: 'SHIRLEY GOUW',
    focus: 'Showroom Mewah & Residensial',
    badge: 'Modern Classic • Detailed Luxury',
    image: '/assets/maestros/maestro_shirley_gouw_1795232909913.jpg',
    editorialOverview:
      'Menghadirkan interpretasi modern klasik yang halus melalui profil molding dinding berwarna alabaster, marmer berurat lembut, serta aksen beludru moka dan kuningan hangat.',
    signatureElements: [
      'Profil dinding klasik dengan proporsi modern bersih',
      'Kombinasi marmer krem, kayu herringbone, dan beludru',
      'Pencahayaan chandelier lembut berkesan intim',
    ],
    palette: [
      { name: 'Warm Mocha', hex: '#77574A' },
      { name: 'Warm Sand', hex: '#D0AE92' },
      { name: 'Soft Cream', hex: '#EBD7BE' },
      { name: 'Alabaster', hex: '#F9F2E4' },
    ],
  },
  {
    id: 'alex-bayusaputro',
    index: '06',
    name: 'ALEX BAYUSAPUTRO',
    focus: 'Hunian, Mal, & Hospitality',
    badge: 'Contemporary Tropical • Dramatic Space',
    image: '/assets/maestros/maestro_alex_bayusaputro_1795232907670.jpg',
    editorialOverview:
      'Eksplorasi skala spasial yang dramatis lewat plafon kisi kayu melengkung, tangga pahatan batu, dan pencahayaan cove tidak langsung yang berpadu dengan vegetasi tropis.',
    signatureElements: [
      'Skala ruang megah dengan permainan garis lengkung',
      'Pencahayaan tidak langsung yang menonjolkan tekstur kayu',
      'Koneksi visual kuat ke elemen hijau tropis',
    ],
    palette: [
      { name: 'Dark Espresso', hex: '#4A3A34' },
      { name: 'Terracotta Taupe', hex: '#A8836C' },
      { name: 'Warm Sand', hex: '#D0AE92' },
      { name: 'Soft Cream', hex: '#EBD7BE' },
    ],
  },
  {
    id: 'studio-air-putih',
    index: '07',
    name: 'STUDIO AIR PUTIH',
    focus: 'Hunian Tropis & Ruang Komersial',
    badge: 'Sleek • Tropical Modernism',
    image: '/assets/maestros/maestro_studio_air_putih_1795232907030.jpg',
    editorialOverview:
      'Modernisme tropis berpresisi tinggi dengan bidang beton ekspos, plafon kayu jati rata, bukaan lebar tanpa sekat, serta aliran udara alami menghadap kolam refleksi.',
    signatureElements: [
      'Bidang horizontal tegas berpadu material jujur',
      'Sirkulasi udara silang & pencahayaan alami optimal',
      'Kesederhanaan furnitur rendah menghadap lanskap air',
    ],
    palette: [
      { name: 'Dark Espresso', hex: '#4A3A34' },
      { name: 'Warm Mocha', hex: '#77574A' },
      { name: 'Terracotta Taupe', hex: '#A8836C' },
      { name: 'Alabaster', hex: '#F9F2E4' },
    ],
  },
];
