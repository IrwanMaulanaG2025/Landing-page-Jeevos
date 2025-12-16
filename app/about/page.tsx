import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  Leaf,
  Target,
  Eye,
  Award,
  HeartHandshake,
  Rss,
  Package,
  Tractor,
  HardHat,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";

import sidebarHighlights from "@/lib/data/about-sidebar-highlights.json";
import { SidebarHighlight } from "@/lib/data/about-sidebar-highlights";
import teamMembers from "@/lib/data/about-team-members.json";
import { TeamMember } from "@/lib/data/about-team-members";

// --- Helper: Sidebar ---
const Sidebar = () => {

  return (
    <aside className="lg:sticky top-28">
      <ScrollReveal animation="fadeInUp" delay={500}>
        <div className="space-y-8">
          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Tentang Jeevos
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Brand produk olahan kelapa organik premium yang berakar dari
              kearifan lokal Banyumas.
            </p>
            <Button
              asChild
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <a href="/contact">Hubungi Kami</a>
            </Button>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Rss size={20} className="text-gray-400" />
              Sorotan Terbaru
            </h3>
            <ul className="space-y-4">
              {sidebarHighlights.map((item) => (
                <li key={item.title} className="flex items-center gap-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </aside>
  );
};

// --- New Helper: Our Team ---
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Salsabila Luthfiyyah",
      role: "Pendiri & Pengelola Jeevos",
      imageUrl:
        "/ceo.jpg",
      description: "Mengelola seluruh proses Jeevos secara langsung—mulai dari pengolahan bahan baku kelapa, produksi tradisional, hingga memastikan produk sampai ke tangan pelanggan dengan kualitas terbaik.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <ScrollReveal animation="fadeInUp" delay={200}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Orang di Balik Jeevos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Jeevos dibangun dan dijalankan langsung oleh pendirinya, dengan keterlibatan penuh di setiap proses—dari produksi hingga distribusi.
            </p>
          </div>
          <div className="max-w-3xl mx-auto"> {/* Single centered profile */}
            {teamMembers.map((member, index) => (
              <ScrollReveal
                key={member.name}
                animation="fadeInUp"
                delay={200}
              >
                <div className="text-center">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="rounded-full w-48 h-48 mx-auto shadow-sm"
                  />
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-emerald-600">{member.role}</p>
                  <p className="mt-5 text-gray-600 leading-relaxed">
                    Sebagai pendiri, Salsabila Lutfiyyah terlibat penuh dalam setiap tahap. Ia mengawal langsung proses dari pengolahan bahan baku, produksi secara tradisional, hingga distribusi untuk menjamin setiap produk Jeevos sampai ke tangan Anda dengan kualitas terbaik.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

// --- New Helper: Join Us ---
const JoinUs = () => (
  <section className="py-16 sm:py-24 bg-white">
    <ScrollReveal animation="fadeInUp" delay={200}>
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Bergabunglah dengan Cerita Kami
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Jadilah bagian dari perjalanan kami dalam melestarikan tradisi dan
          mempromosikan gaya hidup sehat. Hubungi kami untuk kemitraan,
          pertanyaan, atau sekadar berbagi cerita.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
          >
            <a href="/contact">Hubungi Jeevos</a>
          </Button>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

// --- Main Page Component ---
export default function AboutPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <div className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Opening Section */}
            <ScrollReveal animation="fadeInUp" delay={200}>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
                  Cerita di Balik Setiap Tetes Kemurnian
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Jeevos lebih dari sekadar produk. Kami adalah penjaga tradisi,
                  mitra petani lokal, dan penggerak gaya hidup sehat yang
                  berakar pada kekayaan alam Indonesia.
                </p>
              </div>
            </ScrollReveal>

            {/* Main Two-Column Layout */}
            <div className="grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
              {/* Left Column: Main Content */}
              <article className="lg:col-span-2 prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-700">
                <ScrollReveal animation="fadeInUp" delay={300}>
                  <h2 className="font-bold">Akar Kami Warisan Banyumas</h2>
                  <p>
                    Jeevos berakar dari tradisi pengolahan kelapa murni di Banyumas. Kami melestarikan kearifan lokal dan metode tradisional yang menghasilkan produk bernutrisi tinggi, membuktikan bahwa kualitas terbaik datang dari tangan terampil yang menghargai alam.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fadeInUp" delay={300}>
                  <figure className="my-12">
                    <Image
                      src="/ass2.png"
                      alt="Proses tradisional pembuatan produk Jeevos"
                      width={800}
                      height={500}
                      className="rounded-2xl shadow-sm"
                    />
                  </figure>
                </ScrollReveal>

                <div className="not-prose">
                  <ScrollReveal animation="fadeInUp" delay={300}>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Diversifikasi Bisnis Jeevos
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                      Menghubungkan produk lokal Banyumas ke pasar yang lebih
                      luas — mencakup produksi produk kelapa premium, komoditas
                      pertanian, hingga pengadaan material industri.
                    </p>
                  </ScrollReveal>
                  <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                    <ScrollReveal animation="fadeInUp" delay={400}>
                      <div className="flex flex-col gap-y-4 rounded-2xl border border-gray-200 p-6 h-full">
                        <Package className="h-8 w-8 text-emerald-600" />
                        <h3 className="text-xl font-semibold">
                          Produk Turunan Kelapa
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Produksi langsung VCO, Coconut Aminos, Nectar, Syrup, dan Sugar dengan kontrol kualitas ketat.
                        </p>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeInUp" delay={500}>
                      <div className="flex flex-col gap-y-4 rounded-2xl border border-gray-200 p-6 h-full">
                        <Tractor className="h-8 w-8 text-emerald-600" />
                        <h3 className="text-xl font-semibold">
                          Komoditas Pertanian Lokal
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Jaringan pemasok lokal untuk kelapa, arang, gula jawa, tembakau, dan komoditas Banyumas lain berstandar.
                        </p>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeInUp" delay={600}>
                      <div className="flex flex-col gap-y-4 rounded-2xl border border-gray-200 p-6 h-full">
                        <HardHat className="h-8 w-8 text-emerald-600" />
                        <h3 className="text-xl font-semibold">
                          Material & Kebutuhan Industri
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Penyediaan bahan bangunan dan material industri untuk kebutuhan B2B di Banyumas dan sekitarnya.
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>
                  <ScrollReveal animation="fadeInUp" delay={700}>
                    <div className="mt-12 text-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                      >
                        <a href="/contact">Hubungi Tim B2B Jeevos</a>
                      </Button>
                      <p className="mt-4 text-sm">
                        <a
                          href="/contact"
                          className="font-medium text-emerald-600 hover:text-emerald-500"
                        >
                          Ajukan permintaan pemasokan{" "}
                          <ArrowRight className="inline h-4 w-4" />
                        </a>
                        <span className="text-gray-400 mx-2">atau</span>
                        <a
                          href="https://wa.me/6285156355964"
                          className="font-medium text-emerald-600 hover:text-emerald-500"
                        >
                          chat via WhatsApp{" "}
                          <MessageCircle className="inline h-4 w-4" />
                        </a>
                        .
                      </p>
                      <p className="mt-6 flex items-center justify-center gap-x-3 text-xs text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Terverifikasi · Mitra petani lokal · Pengiriman regional
                        Banyumas
                      </p>
                    </div>
                  </ScrollReveal>
                </div>



                <ScrollReveal animation="fadeInUp" delay={300}>
                  <h2>Visi & Misi: Tujuan Kami</h2>
                  <div className="grid sm:grid-cols-2 gap-8 not-prose my-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-emerald-600 mt-1">
                        <Eye size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 m-0">
                          Visi
                        </h3>
                        <p className="text-base text-gray-600 mt-1">
                          Menjadi brand global terpercaya untuk produk kelapa organik premium, dikenal karena kualitas, integritas, dan kearifan lokal Indonesia.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-emerald-600 mt-1">
                        <Target size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 m-0">
                          Misi
                        </h3>
                        <p className="text-base text-gray-600 mt-1">
                          Menghasilkan produk murni berkualitas tinggi, memberdayakan petani lokal, dan mengedukasi pasar global tentang konsumsi sadar dan alami.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <div>
                  <ScrollReveal animation="fadeInUp" delay={300}>
                    <h2>Komitmen Kami untuk Anda dan Bumi</h2>
                  </ScrollReveal>
                  <ul className="space-y-4 not-prose">
                    <ScrollReveal animation="fadeInUp" delay={400}>
                      <li className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                        <div className="flex-shrink-0 text-emerald-600 mt-1">
                          <Award size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Kualitas Tanpa Kompromi
                          </h4>
                          <p className="text-sm text-gray-600">
                            Setiap produk melalui seleksi dan pengujian ketat untuk kemurnian, rasa, dan manfaat terbaik.
                          </p>
                        </div>
                      </li>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeInUp" delay={500}>
                      <li className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                        <div className="flex-shrink-0 text-emerald-600 mt-1">
                          <Leaf size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Praktik Berkelanjutan
                          </h4>
                          <p className="text-sm text-gray-600">
                            Berkomitmen pada pertanian regeneratif dan produksi minim jejak karbon, selaras dengan alam.
                          </p>
                        </div>
                      </li>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeInUp" delay={600}>
                      <li className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                        <div className="flex-shrink-0 text-emerald-600 mt-1">
                          <HeartHandshake size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Kemitraan yang Adil
                          </h4>
                          <p className="text-sm text-gray-600">
                            Memastikan petani mendapat harga adil dan dukungan, karena mereka pilar utama kualitas Jeevos.
                          </p>
                        </div>
                      </li>
                    </ScrollReveal>
                  </ul>
                </div>
              </article>

              {/* Right Column: Sidebar */}
              <div className="hidden lg:block">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>

        {/* Appended Sections */}
        <OurTeam />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
