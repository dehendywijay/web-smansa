import Footer from "@/components/footer";
import Sidebar from "@/components/SideNews";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Contact Us" imageUrl="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1920&auto=format&fit=crop" alt="Hubungi Kami" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        <section className="md:col-span-3 text-gray-700">
          <h2 className="text-red-700 font-bold text-2xl mb-3">Hubungi SMA N 1 Bangunrejo</h2>
          <hr className="border-gray-300 mb-6" />

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold mb-2">Alamat</h3>
              <p className="text-sm text-gray-600">Jl. Raya Sidorejo, Kec. Bangunrejo, Kab. Lampung Tengah</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold mb-2">Telepon</h3>
              <p className="text-sm text-gray-600">(0721) 123456</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-gray-600">info@sman1bangunrejo.sch.id</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold mb-2">Jam Layanan</h3>
              <p className="text-sm text-gray-600">Senin - Jumat, 07.00 - 15.00 WIB</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Pertanyaan Umum (FAQ)</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong>Bagaimana cara mendaftar peserta didik baru?</strong>
              <br />
              Silakan kunjungi menu PPDB atau hubungi panitia melalui kontak sekolah.
            </p>
            <p>
              <strong>Bagaimana menghubungi wali kelas?</strong>
              <br />
              Orang tua dapat menghubungi administrasi sekolah untuk diarahkan ke wali kelas terkait.
            </p>
            <p>
              <strong>Apakah sekolah menerima kunjungan studi?</strong>
              <br />
              Ya, silakan kirim surat resmi dan jadwal kunjungan ke email sekolah.
            </p>
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
