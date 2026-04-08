import { MenuItem } from "@/types/type";

export const menuData: MenuItem[] = [
  {
    title: "Beranda",
    href: "/",
    subItems: [
      { title: "Sambutan Kepala Sekolah", href: "/sambutan" },
      { title: "Visi & Misi", href: "/visi-misi" },
      { title: "Berita Terbaru", href: "/berita" },
      { title: "Alumni", href: "/alumni" },
      { title: "Contact Us", href: "/hubungi-kami" },
    ],
  },
  {
    title: "Tentang Kami",
    href: "/sambutan",
    subItems: [
      { title: "Sambutan Kepala Sekolah", href: "/sambutan" },
      { title: "Visi & Misi", href: "/visi-misi" },
    ],
  },
  {
    title: "Alumni",
    href: "/alumni",
    subItems: [
      { title: "Jejaring Alumni", href: "/alumni" },
      { title: "Program Karier", href: "/alumni" },
    ],
  },
  {
    title: "Hubungi Kami",
    href: "/hubungi-kami",
    subItems: [
      { title: "Kontak Sekolah", href: "/hubungi-kami" },
      { title: "FAQs", href: "/hubungi-kami" },
      { title: "Kirim Pertanyaan", href: "/hubungi-kami" },
    ],
  },
  {
    title: "Program",
    href: "/program",
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
