import Sidebar from "@/components/SideNews";
import Footer from "@/components/footer";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import PageHero from "@/components/ui/PageHero";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Visi dan Misi" imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1920&auto=format&fit=crop" alt="Visi Misi" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Visi dan Misi" }]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        <section className="md:col-span-3 text-gray-700 leading-relaxed">
          <h2 className="text-red-700 font-bold text-2xl mb-3">VISI</h2>
          <hr className="border-gray-300 mb-4" />
          <p className="mb-8 text-lg">Terwujudnya insan yang berakhlak mulia, berprestasi, berbudaya, dan berwawasan lingkungan.</p>

          <h2 className="text-red-700 font-bold text-2xl mb-3">MISI</h2>
          <hr className="border-gray-300 mb-4" />
          <ul className="list-disc pl-6 space-y-3">
            <li>Memperkuat keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa melalui pendidikan agama dan pembiasaan religius.</li>
            <li>Meningkatkan prestasi akademik dan non-akademik melalui pembelajaran yang efektif dan pengembangan potensi peserta didik.</li>
            <li>Mengembangkan budaya sekolah yang unggul, disiplin, dan berkarakter.</li>
            <li>Mewujudkan lingkungan sekolah yang hijau, bersih, sehat, dan peduli lingkungan (Adiwiyata). </li>
          </ul>

          <h3 className="text-red-700 font-bold text-xl mt-10 mb-3">Tujuan Sekolah</h3>
          <p>Menghasilkan lulusan yang beriman, berakhlak mulia, memiliki kecakapan akademik yang kuat, serta siap melanjutkan ke jenjang pendidikan tinggi maupun dunia kerja.</p>
        </section>

        <div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </main>
  );
}
