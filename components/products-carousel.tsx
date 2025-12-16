"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import products from "@/lib/data/products.json";
import { Product } from "@/lib/data/products";
import ProductCard from "./product-card";
import { clsx } from "clsx";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";

import categoriesData from "@/lib/data/product-categories.json";
import { ProductCategory } from "@/lib/data/product-categories";

const ALL_CATEGORIES = "All";

// --- Desktop/Tablet: Grid Component ---
const ProductGrid = () => {
  const [activeFilter, setActiveFilter] = useState(ALL_CATEGORIES);
  const [visibleCards, setVisibleCards] = useState<Set<number> | null>(null);
  const cardRefs = useRef<Map<number, HTMLAnchorElement | null>>(new Map());

  const categories = useMemo(() => {
    const productBadges = new Set(products.map((p) => p.badge).filter(Boolean) as string[]);
    return [ALL_CATEGORIES, ...Array.from(productBadges)];
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeFilter === ALL_CATEGORIES) return products;
    return products.filter((p) => p.badge === activeFilter);
  }, [activeFilter]);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    setVisibleCards((prev) => {
      const newVisible = prev ? new Set(prev) : new Set();
      entries.forEach((entry) => {
        const id = Number((entry.target as HTMLElement).dataset.id);
        if (isNaN(id)) return;
        if (entry.isIntersecting) newVisible.add(id);
        else newVisible.delete(id);
      });
      return newVisible;
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    });
    const refs = cardRefs.current;
    refs.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => {
      refs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [observerCallback, filteredProducts]);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
              {
                "bg-emerald-600 text-white shadow-sm": activeFilter === category,
                "bg-white text-gray-600 hover:bg-gray-100": activeFilter !== category,
              }
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            isInView={visibleCards === null ? undefined : visibleCards.has(product.id)}
            setRef={(node) => {
              if (node) {
                node.dataset.id = String(product.id);
                cardRefs.current.set(product.id, node);
              } else {
                cardRefs.current.delete(product.id);
              }
            }}
          />
        ))}
      </div>
    </>
  );
};

// --- Mobile: Carousel Component ---

// Helper component for Dot navigation
const DotButton = ({ selected, onClick }: { selected: boolean; onClick: () => void }) => (
  <button
    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
      selected ? 'bg-emerald-600 w-6' : 'bg-gray-300'
    }`}
    type="button"
    onClick={onClick}
  />
);

const ProductCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [slidesInView, setSlidesInView] = useState<number[] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const updateSlidesInView = useCallback((api: EmblaCarouselType) => {
    setSlidesInView(api.slidesInView());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    setScrollSnaps(emblaApi.scrollSnapList());
    updateSlidesInView(emblaApi);
    
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", updateSlidesInView);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      updateSlidesInView(emblaApi);
      onSelect(emblaApi);
    });
  }, [emblaApi, updateSlidesInView, onSelect]);

  return (
    <div>
      <div className="overflow-hidden -ml-4" ref={emblaRef}>
        <div className="flex">
          {products.map((product, index) => (
            <div key={product.id} className="flex-shrink-0 w-[85vw] sm:w-[45vw] pl-4 pb-4">
              <ProductCard
                product={product}
                isInView={slidesInView === null ? undefined : slidesInView.includes(index)}
                setRef={() => {}} // setRef is not needed for Embla's animation logic
              />
            </div>
          ))}
        </div>
      </div>
      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main Component: Conditionally renders Grid or Carousel ---
export default function ProductSection() {
  const isMobile = useIsMobile();

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
            Produk Unggulan Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dibuat dari kelapa pilihan dengan proses tradisional untuk menjamin kemurnian dan kualitas terbaik.
          </p>
        </div>
        
        {isMobile === undefined ? (
          // Fallback for SSR or initial load before hook runs
          <div className="h-96" /> // Placeholder to prevent layout shift
        ) : isMobile ? (
          <ProductCarousel />
        ) : (
          <ProductGrid />
        )}

        <div className="mt-16 text-center">
          <a
            href={`/product/${products[0].id}`}
            className="inline-block px-8 py-3 text-base font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-transform duration-200 hover:scale-105"
          >
            Lihat Detail Produk Unggulan
          </a>
        </div>
      </div>
    </section>
  );
}