"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Product } from "@/lib/data/products";
import { clsx } from "clsx";

interface ProductCardProps {
  product: Product;
  isInView: boolean | undefined;
  setRef: (node: HTMLAnchorElement | null) => void;
}

export default function ProductCard({ product, isInView, setRef }: ProductCardProps) {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  return (
    <a
      ref={setRef}
      href={`/product/${product.id}`}
      aria-label={product.name}
            className={clsx(
              "group block overflow-hidden rounded-3xl bg-[#FBF9F6]",
              // A softer, more natural, multi-layered shadow
              "shadow-[0_4px_12px_rgba(0,0,0,0.04),_0_8px_24px_rgba(0,0,0,0.06)]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400",
              // A more organic hover effect with scale
              "transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-slate-300/20 hover:scale-[1.02]",
              {
                "transform-gpu transition-all duration-400 ease-out will-change-[transform,opacity]":
                  isInView !== undefined && !prefersReducedMotion,
                "opacity-100": isInView === undefined,
                "opacity-100 scale-100 translate-y-0": isInView === true,
                "opacity-0 scale-95 translate-y-4": isInView === false,
              }
            )}
          >
            <div className="overflow-hidden p-5">
              <div className="relative rounded-2xl overflow-hidden bg-white aspect-square shadow-sm shadow-slate-400/10">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
              </div>
            </div>
      <div className="px-5 pb-5">
        <h3 className="text-zinc-800 text-lg font-semibold leading-tight">{product.name}</h3>
        <div className="mt-4">
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-emerald-600 text-white shadow-sm transition-all duration-300 group-hover:bg-emerald-700 group-hover:scale-105">
            Lihat Detail
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </a>
  );
}
