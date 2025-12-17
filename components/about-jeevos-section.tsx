import { Leaf, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./scroll-reveal";

export default function AboutJeevosSection() {
  const features = [
    {
      icon: Leaf,
      title: "Murni dari Alam, Tanpa Kompromi",
      description: "Kami hanya menggunakan kelapa pilihan dari perkebunan lestari, diolah tanpa bahan kimia atau tambahan artifisial."
    },
    {
      icon: ShieldCheck,
      title: "Proses Tradisional, Kualitas Terjaga",
      description: "Setiap tetes dan butir produk Jeevos diproses dengan tangan dan metode kuno, menjaga nutrisi dan cita rasa asli kelapa."
    },
    {
      icon: Users,
      title: "Kearifan Lokal, Berdayakan Komunitas",
      description: "Bekerja sama erat dengan petani lokal, kami melestarikan teknik tradisional sekaligus meningkatkan kesejahteraan komunitas."
    }
  ];

  return (
    <section id="about" className="relative bg-stone-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal animation="fadeInUp" delay={200}>
            <span className="text-sm uppercase tracking-wider font-semibold text-emerald-600">
              Tentang Jeevos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 text-balance">
              Kebaikan Alam, Diolah dengan Kearifan Tradisional
            </h2>
            <p className="text-gray-600 leading-relaxed text-pretty max-w-2xl mx-auto">
              Jeevos menghadirkan esensi kelapa murni yang diolah dengan
              metode tradisional yang telah diwariskan turun-temurun. Kami
              percaya pada kekuatan alam dan kearifan lokal untuk hasil terbaik.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-stretch">
          
          {/* Left Image */}
          <ScrollReveal animation="slideInLeft" delay={200}>
            <div className="relative h-full flex items-center justify-start">
              <div className="relative rounded-[10px] overflow-hidden shadow-xl w-full max-w-sm mx-auto lg:max-w-md">
                <Image
                  src="/ass10.jpg"
                  alt="Fasilitas Produksi Jeevos"
                  width={500}
                  height={625}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Content - Minimalist */}
          <ScrollReveal animation="slideInRight" delay={400}>
            <div className="flex flex-col h-full">
              <div className="space-y-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-11 h-11 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional text content */}
              <p className="text-gray-600 leading-relaxed mt-8">
                Komitmen kami adalah menghadirkan kebaikan alam murni, diolah dengan hati, untuk kesejahteraan Anda dan komunitas.
              </p>

              {/* Minimalist Button */}
              <div className="mt-8">
                <a href="/about" className="inline-flex items-center gap-2 font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group">
                  Pelajari selengkapnya
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
