"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, MapPin, Clock, Send, Instagram, Facebook, ShoppingCart, UtensilsCrossed, Handshake, Store, Copy, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";
import { clsx } from "clsx";
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('@/components/leaflet-map'), {
  ssr: false,
  loading: () => <div className="bg-gray-200 animate-pulse h-full w-full" />,
});

// --- Helper: Solutions Section ---
const SolutionsSection = () => {
  const solutions = [
    {
      icon: UtensilsCrossed,
      title: "Untuk Bisnis F&B",
      description: "Pasokan bahan baku premium seperti VCO, gula kelapa, dan sirup untuk kafe, restoran, atau katering Anda dengan kualitas dan harga terbaik."
    },
    {
      icon: Store,
      title: "Untuk Pengecer & Toko",
      description: "Lengkapi rak toko Anda dengan produk turunan kelapa Jeevos yang siap jual dan sudah memiliki basis pelanggan setia."
    },
    {
      icon: Handshake,
      title: "Untuk Calon Mitra Pemasok",
      description: "Jadilah bagian dari ekosistem kami. Kami membuka peluang bagi petani dan produsen komoditas lokal untuk bertumbuh bersama."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Solusi untuk Setiap Kebutuhan</h2>
          <p className="mt-4 text-lg text-gray-600">Apapun kebutuhan Anda, kami siap memberikan layanan dan produk terbaik.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title} animation="fadeInUp" delay={200 * (index + 1)}>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm h-full">
                <solution.icon className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Helper: Contact Info (Contact Hub) ---
const ContactInfo = () => {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/itsalsabil_?igsh=MTBwN2VoY3pqNDkybQ==" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/JeevosOfficial/61581211664102/?mibextid=wwXIfr&rdid=8Y4LFMB4JsiTRPjG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1PbSAtGXVg%2F%3Fmibextid%3DwwXIfr%26ref%3Dwaios.fb_links_xma_control" },
    { name: "TikTok", icon: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.04-5.36-.01-4.03-.01-8.05.02-12.07z"></path></svg>, href: "https://www.tiktok.com/@jeevos.idn?_r=1&_t=ZS-92GllXouwm0" },
    { name: "Shopee", icon: ShoppingCart, href: "https://shopee.co.id/buyer/login?fu_tracking_id=1505387d672-1ca6-46a4-9979-bbfcc50fb11d&next=https%3A%2F%2Fshopee.co.id%2F" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Hubungi Kami Langsung</h2>
        <p className="mt-2 text-lg text-gray-600">Pilih metode yang paling nyaman untuk Anda.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: WhatsApp (Prominent) */}
        <a href="https://wa.me/6285156355964" target="_blank" rel="noopener noreferrer" className="md:col-span-2 group block p-8 bg-emerald-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <MessageCircle size={32} />
              <div>
                <h3 className="text-xl font-bold">WhatsApp (Respon Cepat)</h3>
                <p className="opacity-90">+62 896-6626-9658</p>
              </div>
            </div>
            <ArrowRight size={24} className="opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-1" />
          </div>
        </a>

        {/* Card 2: Email */}
        <div className="p-8 bg-white rounded-2xl border border-gray-200">
          <div className="flex items-start gap-4">
            <Mail size={24} className="text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600 mt-1">Untuk pertanyaan umum atau pengajuan proposal bisnis.</p>
              <a href="mailto:alamijayaorganik@gmail.com" className="mt-4 inline-block font-semibold text-emerald-600 hover:underline">
                alamijayaorganik@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Address & Hours */}
        <div className="p-8 bg-white rounded-2xl border border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <MapPin size={24} className="text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Alamat Kantor</h3>
              <p className="text-gray-600 mt-1">Banyumas, Purwokerto, Jawa Tengah, Indonesia</p>
            </div>
          </div>
          <div className="flex items-start gap-4 border-t border-gray-200 pt-6">
            <Clock size={24} className="text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Jam Operasional</h3>
              <p className="text-gray-600 mt-1">Senin - Jumat, 08:00 - 16:00 WIB</p>
            </div>
          </div>
        </div>
        
        {/* Card 4: Social Media (Full width on bottom) */}
        <div className="md:col-span-2 p-8 bg-white rounded-2xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Ikuti Kami</h3>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(social => (
              <a key={social.name} href={social.href} title={social.name} className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-emerald-100 hover:text-emerald-600 transition-all duration-300">
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper: FAQ ---
const Faq = () => (
  <section className="py-16 sm:py-24 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Pertanyaan Cepat</h2>
        <p className="mt-4 text-lg text-gray-600">Beberapa hal yang sering ditanyakan oleh pelanggan kami.</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1"><AccordionTrigger>Apakah melayani pembelian B2B/partai besar?</AccordionTrigger><AccordionContent>Tentu. Kami sangat terbuka untuk kemitraan B2B dan pemasokan dalam jumlah besar. Silakan hubungi tim B2B kami melalui WhatsApp atau formulir di halaman ini untuk mendapatkan penawaran khusus.</AccordionContent></AccordionItem>
        <AccordionItem value="item-2"><AccordionTrigger>Apa saja area pengiriman yang dijangkau?</AccordionTrigger><AccordionContent>Saat ini kami melayani pengiriman untuk seluruh wilayah regional Banyumas dan sekitarnya. Untuk pengiriman ke luar area, mohon diskusikan terlebih dahulu dengan tim kami untuk pengaturan logistik.</AccordionContent></AccordionItem>
        <AccordionItem value="item-3"><AccordionTrigger>Bagaimana cara menjadi mitra pemasok komoditas?</AccordionTrigger><AccordionContent>Kami selalu mencari petani dan produsen lokal berkualitas untuk menjadi mitra kami. Silakan kirimkan profil dan detail produk Anda ke email kami di alamijayaorganik@gmail.com dengan subjek "Pengajuan Mitra Pemasok".</AccordionContent></AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default function ContactPage() {
  return (
    <div className="bg-stone-100">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-center text-white px-4">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image src="/ass2.png" alt="Jeevos production facility" layout="fill" objectFit="cover" className="z-0" />
          <ScrollReveal animation="fadeInUp" delay={200} className="z-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Mari Terhubung</h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/90 text-balance">
              Pintu Anda menuju produk berkualitas, kemitraan yang saling menguntungkan, dan layanan B2B yang andal.
            </p>
          </ScrollReveal>
        </section>

        <SolutionsSection />

        {/* Main Content Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactInfo />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fadeInUp" delay={200}>
              <div className="text-center mb-12"> {/* Increased mb from 8 to 12 for better separation */}
                <h2 className="text-3xl font-bold text-gray-900">Temukan Lokasi Kami</h2>
                <p className="mt-2 text-lg text-gray-600">Kunjungi kantor kami di Purwokerto.</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center"> {/* New grid layout */}
                {/* Left: Map */}
                <div className="rounded-2xl overflow-hidden shadow-xl relative h-[400px] lg:h-[500px]">
                  <LeafletMap position={[-7.4100, 109.2300]} zoom={13} popupText="Kantor Pusat Jeevos" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
                    <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 shadow-lg pointer-events-auto">
                      <a href="https://maps.app.goo.gl/ZdFTWsWZqqjjJASf9" target="_blank" rel="noopener noreferrer">
                        Lihat di Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
                {/* Right: Description */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Kantor Pusat Jeevos di Purwokerto</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kunjungi kantor pusat kami di Purwokerto, jantung produksi kelapa organik kami. Kami selalu senang menyambut mitra dan pelanggan yang ingin melihat langsung proses kami atau berdiskusi lebih lanjut.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin size={20} className="text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Alamat</h4>
                        <p className="text-gray-600">Banyumas, Purwokerto, Jawa Tengah, Indonesia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock size={20} className="text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Jam Operasional</h4>
                        <p className="text-gray-600">Senin - Jumat, 08:00 - 16:00 WIB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <Faq />
      </main>
      <Footer />
    </div>
  );
}