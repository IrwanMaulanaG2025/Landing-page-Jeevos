"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import ScrollReveal from "../scroll-reveal"

// Using a mix of available logos and duplicating for a smooth loop
const partners = [
  { name: "Partner 1", logo: "/emco.png" },
  { name: "Partner 2", logo: "/kebunKita.png" },
  { name: "Partner 3", logo: "/baliNutraa.png" },
  { name: "Partner 4", logo: "/healtcornet.png" },
  { name: "Partner 5", logo: "/emco.png" },
  { name: "Partner 6", logo: "/kebunKita.png" },
  { name: "Partner 7", logo: "/baliNutraa.png" },
  { name: "Partner 8", logo: "/healtcornet.png" },
];

export default function FeaturedSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fadeInUp" delay={200}>
          <h2 className="text-center text-lg font-semibold text-gray-500 tracking-wider">
            Dipercaya oleh mitra ternama
          </h2>
        </ScrollReveal>
        <div className="mt-8">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-2">
                  <div className="p-4 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={158}
                      height={48}
                      className="h-12 w-auto object-contain"
                      style={{ filter: 'grayscale(100%)', opacity: 0.6 }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
