"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CountUp from "react-countup";
import { Fragment, useEffect, useState } from "react";
import { BookOpen, GraduationCap, School, Users } from "lucide-react";
import NewsSection from "@/components/NewSection";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import HeroSlideCaption from "@/components/animations/HeroSlideCaption";
import { heroSlides, schoolStatsConfig } from "@/lib/homeData";
import type { SchoolStat, StatIconKey } from "@/types/home";

// Maps stable data keys from config to real Lucide icon components.
const statsIconMap: Record<StatIconKey, SchoolStat["icon"]> = {
  students: Users,
  teachers: School,
  programs: BookOpen,
  alumni: GraduationCap,
};

// Converts config data into UI-ready stats with icon components attached.
const schoolStats: SchoolStat[] = schoolStatsConfig.map((stat) => ({
  label: stat.label,
  value: stat.value,
  icon: statsIconMap[stat.iconKey],
}));

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    // Sinkronkan slide aktif agar animasi judul/subjudul berjalan setiap perpindahan slide.
    const onSelect = () => setActiveSlideIndex(emblaApi.selectedScrollSnap());

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <main className="">
      <div className="embla__viewport overflow-hidden relative w-full h-screen" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {heroSlides.map((slide, index) => (
            <div key={slide.title} className="embla__slide flex-[0_0_100%] min-w-0 relative h-full">
              <Image src={slide.imageUrl} alt={slide.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40"></div>
              <HeroSlideCaption title={slide.title} subtitle={slide.subtitle} isActive={index === activeSlideIndex} />
            </div>
          ))}
        </div>
      </div>
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto p-6 mt-16 md:mt-40">
        {/* Foto dengan border dan dekorasi lingkaran */}
        <RevealOnScroll direction="left" rootMargin="0px 0px -10% 0px" className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 mx-auto md:mx-0">
          {/* Border lingkaran besar */}
          <div className="absolute inset-0 rounded-full border-8 border-red-800"></div>

          {/* Foto lingkaran */}
          <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Kepala Sekolah" fill className="rounded-full w-full h-full object-cover relative z-10" />

          {/* Dekorasi lingkaran kecil kiri atas */}
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-red-800 bg-red-900 z-20"></div>

          {/* Dekorasi lingkaran kecil kanan bawah */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-red-800 bg-red-900 z-20"></div>

          {/* Dekorasi lingkaran kecil kiri bawah */}
          <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-red-800 bg-red-700 z-20"></div>
        </RevealOnScroll>

        {/* Teks sambutan */}
        <RevealOnScroll direction="right" rootMargin="0px 0px -10% 0px" delayClassName="delay-150" className="flex-1 text-gray-700 text-center md:text-left">
          <h2 className="text-red-700 font-bold text-xl md:text-2xl mb-2">SAMBUTAN KEPALA SEKOLAH</h2>
          <hr className="border-gray-300 mb-4 mx-auto md:mx-0 w-24 md:w-full" />
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Selamat datang di website <strong>SMA N 1 BANGUNREJO</strong> yang saya tujukan untuk seluruh unsur pimpinan, guru, karyawan, siswa, serta masyarakat umum agar dapat mengakses berbagai informasi tentang sekolah kami.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Kami menyadari bahwa dalam penyajian informasi di website ini masih terdapat banyak kekurangan. Oleh karena itu, kami sangat terbuka terhadap saran dan kritik dari seluruh civitas akademika maupun masyarakat luas demi perbaikan
            dan kemajuan sekolah ke depannya.
          </p>
          <p className="mb-6 text-sm md:text-base leading-relaxed">
            Harapan saya, website ini dapat menjadi wahana interaksi yang positif, baik antar civitas akademika maupun dengan masyarakat pada umumnya, sehingga dapat mempererat jalinan silaturahmi di berbagai unsur. Mari kita bekerja dan
            berkarya dengan penuh keikhlasan serta mengharap ridho Tuhan Yang Maha Esa demi masa depan generasi bangsa.
          </p>
          <p className="font-semibold text-sm md:text-base">
            – LOREM
            <br />
            Kepala Sekolah SMA N 1 BANGUNREJO
          </p>
        </RevealOnScroll>
      </section>

      <div className=" relative w-full bg-slate-900 mt-16 md:mt-24 py-12 md:py-20 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
        {/* Background image dengan overlay */}
        <div className="absolute inset-0 bg-black/70 "></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-8 md:justify-between text-white text-center">
          {schoolStats.map((stat, index) => (
            <Fragment key={stat.label}>
              <div className="flex flex-col items-center w-32 md:w-auto">
                <stat.icon className="w-7 h-7 md:w-8 md:h-8 mb-3 text-white/90" aria-hidden="true" />
                <CountUp start={0} end={stat.value} duration={2.5} separator="," className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg" />
                <span className="uppercase text-xs md:text-sm font-semibold mt-2 tracking-wider">{stat.label}</span>
              </div>

              {index < schoolStats.length - 1 && <div className="hidden md:block w-px bg-white/30 self-stretch"></div>}
            </Fragment>
          ))}
        </div>
      </div>
      <NewsSection />
    </main>
  );
}
