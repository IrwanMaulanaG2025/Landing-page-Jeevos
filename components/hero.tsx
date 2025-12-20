"use client";

import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import heroImages from "@/lib/data/hero-images.json";
import { HeroImage } from "@/lib/data/hero-images";

export default function Hero() {
  const handleExploreProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative pt-36 sm:pt-48 pb-40 sm:pb-32 flex items-center justify-center text-white text-center px-4"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/organic-coconut-farm.jpg"
          alt="Perkebunan Kelapa Organik Jeevos"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div
          className={`flex flex-col items-center gap-8`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <Sparkles size={16} className="text-white" />
            <span className="text-sm font-medium text-white">
              Pure by Nature, Crafted with Purpose.
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-balance">
              Kebaikan Murni,
              <span className="block">Diciptakan Penuh Arti.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-pretty max-w-2xl mx-auto">
              Terinspirasi oleh kekayaan alam, Jeevos dibangun dari keyakinan
              bahwa kebaikan terbaik berasal dari yang paling murni. Kami
              menghadirkan produk kelapa alami yang dibuat dengan ketelitian,
              tujuan, dan hati.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={handleExploreProducts}
              size="lg"
              className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Jelajahi Produk Kami
              <ArrowRight size={20} />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-2 border-white/80 text-white hover:bg-white/10 bg-transparent"
            >
              <a
                href="https://wa.me/6285156355964"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
