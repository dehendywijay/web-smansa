import Sidebar from "@/components/SideNews";
import Footer from "@/components/footer";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import PageHero from "@/components/ui/PageHero";

export default function AlumniPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Alumni" imageUrl="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920&auto=format&fit=crop" alt="Alumni" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Alumni" }]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        <section className="md:col-span-3 text-gray-700">
          <h2 className="text-red-700 font-bold text-2xl mb-3">Komunitas Alumni SMA N 1 Bangunrejo</h2>
          <hr className="border-gray-300 mb-5" />
          <p className="mb-4 leading-relaxed">Halaman alumni menjadi ruang untuk mempererat jejaring lintas angkatan, berbagi pengalaman, serta membuka peluang kolaborasi bagi siswa aktif dan lulusan.</p>
          <p className="mb-6 leading-relaxed">Kami mendorong alumni untuk berkontribusi melalui program mentoring, seminar karier, beasiswa, dan dukungan pengembangan sekolah.</p>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Program Mentoring</h3>
              <p className="text-sm text-gray-600">Alumni mendampingi siswa kelas akhir dalam persiapan kuliah dan dunia kerja.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Tracer Study</h3>
              <p className="text-sm text-gray-600">Pendataan lulusan untuk evaluasi kurikulum dan peningkatan kualitas pembelajaran.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Career Talk</h3>
              <p className="text-sm text-gray-600">Sesi berbagi pengalaman karier dari alumni di berbagai bidang profesi.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Dukungan Beasiswa</h3>
              <p className="text-sm text-gray-600">Program kolaboratif alumni untuk mendukung siswa berprestasi.</p>
            </div>
          </div>
        </section>

        <div>
          <Sidebar />
        </div>
      </div>

      <Footer />
    </main>
  );
}
