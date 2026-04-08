import { MenuItem } from "@/types/type";

export const menuData: MenuItem[] = [
  {
    title: "Beranda",
    href: "/",
    subItems: [
      { title: "Sambutan Kepala Sekolah", href: "/main/sambutan" },
      { title: "Visi & Misi", href: "/main/visi-misi" },
      { title: "Berita Terbaru", href: "/main/berita" },
      { title: "Alumni", href: "/main/alumni" },
      { title: "Contact Us", href: "/main/hubungi-kami" },
    ],
  },
  {
    title: "Tentang Kami",
    href: "/main/tentang-kami",
    subItems: [
      { title: "Sambutan Kepala Sekolah", href: "/main/sambutan" },
      { title: "Visi & Misi", href: "/main/visi-misi" },
    ],
  },
  {
    title: "Alumni",
    href: "/main/alumni",
    subItems: [
      { title: "Jejaring Alumni", href: "/main/alumni" },
      { title: "Program Karier", href: "/main/alumni" },
    ],
  },
  {
    title: "Hubungi Kami",
    href: "/main/hubungi-kami",
    subItems: [
      { title: "Kontak Sekolah", href: "/main/hubungi-kami" },
      { title: "FAQs", href: "/main/hubungi-kami" },
      { title: "Kirim Pertanyaan", href: "/main/hubungi-kami" },
    ],
  },
  {
    title: "Program",
    href: "/main/program",
  },
];

export const programs = [
  {
    title: "Program Akademik",
    description: "Penguatan literasi, numerasi, dan riset untuk mendorong prestasi akademik siswa.",
  },
  {
    title: "Program Karakter",
    description: "Pembinaan disiplin, kepemimpinan, dan kepedulian sosial melalui kegiatan sekolah.",
  },
  {
    title: "Program Digital",
    description: "Pemanfaatan teknologi dalam pembelajaran serta pengembangan keterampilan digital siswa.",
  },
  {
    title: "Program Ekstrakurikuler",
    description: "Pengembangan minat dan bakat lewat olahraga, seni, organisasi, dan kegiatan ilmiah.",
  },
];
