import Footer from "@/components/footer";
import Sidebar from "@/components/SideNews";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import PageHero from "@/components/ui/PageHero";
import { programs } from "@/lib/data";

export default function ProgramPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Program" imageUrl="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1920&auto=format&fit=crop" alt="Program" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Program" }]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        <section className="md:col-span-3 text-gray-700">
          <h2 className="text-red-700 font-bold text-2xl mb-3">Program Unggulan Sekolah</h2>
          <hr className="border-gray-300 mb-6" />
          <div className="grid sm:grid-cols-2 gap-5">
            {programs.map((program) => (
              <article key={program.title} className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
              </article>
            ))}
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
