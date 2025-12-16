"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  Star,
  PlayCircle,
  Instagram,
  Send,
  CheckCircle,
  Building,
  Store,
  Heart,
  Facebook,
  ShoppingCart,
  Rss,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/scroll-reveal";

import allTestimonials from "@/lib/data/testimonials.json";
import partnersData from "@/lib/data/mitra-partners.json";
import { MitraPartner } from "@/lib/data/mitra-partners";

// Mapping for icons
const iconMap = {
  Building: Building,
  Store: Store,
  Heart: Heart,
};

// --- Helper: Sidebar ---
const TestimonialSidebar = () => {
  return (
    <aside className="lg:sticky top-28">
      <ScrollReveal animation="fadeInUp" delay={600}>
        <div className="space-y-8">
          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Punya Cerita?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Bagikan pengalaman Anda bersama produk Jeevos.
            </p>
            <Button
              asChild
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <a href="/contact">Bagikan Cerita Anda</a>
            </Button>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Star size={20} className="text-gray-400" />
              Produk Favorit Komunitas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <Package size={16} className="text-emerald-600" />
                <span>Coconut Oil</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <Package size={16} className="text-emerald-600" />
                <span>Coconut Syrup</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <Package size={16} className="text-emerald-600" />
                <span>Coconut Aminos</span>
              </li>
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </aside>
  );
};

// --- Helper: Featured Story ---
const FeaturedStory = () => {
  const featuredTestimonial = {
    name: "Salsabila Lutffiyah",
    role: "Pendiri Jeevos",
    quote:
      "Bagi saya, Jeevos lebih dari sekadar bisnis. Ini adalah janji untuk meneruskan warisan, memberdayakan komunitas petani, dan menghadirkan produk jujur dari alam ke meja Anda. Terima kasih telah menjadi bagian dari perjalanan kami dan mempercayai nilai-nilai yang kami usung.",
    imageUrl: "/ceo.jpg",
  };

  return (
    <div className="mb-20">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        {/* Left: Image */}
        <div className="lg:col-span-2">
          <Image
            src={featuredTestimonial.imageUrl}
            alt={`Foto ${featuredTestimonial.name}`}
            width={500}
            height={600}
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>
        {/* Right: Quote */}
        <div className="lg:col-span-3">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="font-sans text-xl font-medium text-gray-900 leading-relaxed">
            {featuredTestimonial.quote}
          </blockquote>
          <figcaption className="mt-8">
            <div className="font-semibold text-lg text-gray-900">
              {featuredTestimonial.name}
            </div>
            <div className="text-gray-600">{featuredTestimonial.role}</div>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

// --- Helper: Mitra Section ---
const MitraSection = () => {
  const partners = partnersData.map(partner => ({
    ...partner,
    icon: iconMap[partner.icon as keyof typeof iconMap] || Building
  }));
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Dipercaya oleh Mitra
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Kami bangga dapat bekerja sama dengan berbagai mitra yang memiliki visi
        yang sama.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-stone-50 rounded-2xl p-6 text-center border border-gray-200"
          >
            <partner.icon className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              {partner.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Helper: Join Us (CTA) ---
const JoinUs = () => (
  <section className="py-16 sm:py-24 bg-white">
    <ScrollReveal animation="fadeInUp" delay={200}>
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Punya Cerita Sendiri?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Bagikan pengalaman Anda bersama produk Jeevos dan jadilah bagian dari
          komunitas kami.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
          >
            <a href="/contact">
              Bagikan Cerita Anda <Send className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

// --- Helper: FAQ Section ---
const FaqSection = () => (
  <section className="py-16 sm:py-24">
    <ScrollReveal animation="fadeInUp" delay={200}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Pertanyaan Umum</h2>
          <p className="mt-4 text-lg text-gray-600">
            Temukan jawaban atas pertanyaan umum Anda.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Bagaimana cara saya mengirimkan testimoni?
            </AccordionTrigger>
            <AccordionContent>
              Kirim testimoni Anda melalui halaman Kontak kami.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Apakah semua testimoni di sini asli?
            </AccordionTrigger>
            <AccordionContent>
              Semua testimoni berasal dari pelanggan nyata dan terverifikasi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Di mana saya bisa melihat lebih banyak ulasan?
            </AccordionTrigger>
            <AccordionContent>
              Ikuti media sosial kami (Instagram, TikTok) untuk ulasan dan
              konten lainnya.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ScrollReveal>
  </section>
);

// --- Main Page Component ---
export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const categories = useMemo(
    () => [
      "Semua",
      ...Array.from(new Set(allTestimonials.map((t) => t.product))),
    ],
    []
  );
  const filteredTestimonials = useMemo(
    () =>
      activeFilter === "Semua"
        ? allTestimonials
        : allTestimonials.filter((t) => t.product === activeFilter),
    [activeFilter]
  );

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <div className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fadeInUp" delay={200}>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
                  Apa Kata Mereka
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Kisah nyata dari para pelanggan setia kami, dari pemilik
                  bisnis kuliner hingga pegiat gaya hidup sehat.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
              <div className="lg:col-span-2">
                <ScrollReveal animation="fadeInUp" delay={400}>
                  <FeaturedStory />
                </ScrollReveal>
                <ScrollReveal animation="fadeInUp" delay={400}>
                  <MitraSection />
                </ScrollReveal>
                <ScrollReveal animation="fadeInUp" delay={400}>
                  <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Ulasan dari Komunitas
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-5">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveFilter(cat)}
                          className={clsx(
                            "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                            activeFilter === cat
                              ? "bg-emerald-600 text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          )}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-12">
                      {filteredTestimonials.map((testimonial) => (
                        <article key={testimonial.id} className="pt-8">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
                              <CheckCircle className="w-4 h-4" />
                              <span>Pembeli Terverifikasi</span>
                            </div>
                          </div>
                          <blockquote className="font-serif text-lg text-gray-800 font-medium leading-relaxed border-l-4 border-emerald-500 pl-6">
                            “{testimonial.quote}”
                          </blockquote>
                          <figcaption className="flex items-center gap-4 mt-6">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={56}
                              height={56}
                              className="w-14 h-14 rounded-full object-cover shadow-sm"
                            />
                            <div>
                              <div className="font-semibold text-sm text-gray-900">
                                {testimonial.name}
                              </div>
                              <div className="text-gray-600 text-sm">
                                {testimonial.batch} •{" "}
                                <span className="font-medium text-gray-700">
                                  Ulasan untuk {testimonial.product}
                                </span>
                              </div>
                            </div>
                          </figcaption>
                        </article>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div className="hidden lg:block">
                <TestimonialSidebar />
              </div>
            </div>
          </div>
        </div>
        <JoinUs />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
