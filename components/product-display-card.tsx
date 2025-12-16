"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle, Leaf, Shield, Package, ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '@/components/scroll-reveal';
import { Product, ProductVariant } from '@/lib/data/products';

interface ProductDisplayCardProps {
  product: Product;
  isEven: boolean;
}

export default function ProductDisplayCard({ product, isEven }: ProductDisplayCardProps) {
  const [expanded, setExpanded] = useState(false);
  
  // Initialize active variant if variants exist
  const initialVariant = product.variants && product.variants.length > 0 ? product.variants[0] : null;
  const [activeVariant, setActiveVariant] = useState<ProductVariant | null>(initialVariant);

  const toggleExpand = () => setExpanded(prev => !prev);

  const waNumber = '6285156355964';
  const waMessage = encodeURIComponent(`Halo, saya tertarik dengan produk ${activeVariant ? activeVariant.name : product.name}.`);
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  // Determine which details to display
  const displayData = activeVariant || product;

  return (
    <ScrollReveal animation="fadeInUp" delay={200}>
      {/* Main Product Card */}
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-8`}>
        
        {/* Image Section (Right side for even, Left for odd) */}
        <ScrollReveal animation={isEven ? 'slideInLeft' : 'slideInRight'} delay={300}>
          <div className={`relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-white ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <Image
              src={displayData.image || '/placeholder.jpg'}
              alt={displayData.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
              key={displayData.image} // Force re-render on image change
            />
            {product.badge && (
              <Badge className="absolute top-6 right-6 bg-emerald-600 text-white shadow-lg px-4 py-2 text-sm">
                {product.badge}
              </Badge>
            )}
          </div>
        </ScrollReveal>

        {/* Content Section (Left side for even, Right for odd) */}
        <ScrollReveal animation={isEven ? 'slideInRight' : 'slideInLeft'} delay={400}>
          <div className={`flex flex-col h-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Top content (Name, Description, Variant Selector, Benefits) */}
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {displayData.name}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {displayData.description}
                </p>
              </div>

              {/* Variant Selector Cards (only for products with variants) */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">Pilih Varian:</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {product.variants.map(variant => (
                      <button
                        key={variant.id}
                        onClick={() => setActiveVariant(variant)}
                        className={`p-2 rounded-lg border-2 text-center transition-all duration-200 ${
                          activeVariant?.id === variant.id
                            ? 'border-emerald-500 bg-emerald-50 scale-105 shadow-md'
                            : 'border-gray-200 bg-white hover:border-emerald-300'
                        }`}
                      >
                        <Image src={variant.image || ''} alt={variant.name} width={80} height={80} className="mx-auto rounded-md mb-2" />
                        <span className="text-xs font-bold text-gray-800">{variant.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Benefits */}
              {displayData.benefits && displayData.benefits.length > 0 && (
                <div className="mt-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Manfaat Utama</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {displayData.benefits.slice(0, 6).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Spacer to push button to bottom */}
            <div className="flex-grow" />

            {/* Expand Button */}
            <div className="mt-6">
              <Button
                onClick={toggleExpand}
                className={`w-full h-12 font-medium transition-all duration-300 rounded-xl ${
                  expanded 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  {expanded ? 'Tutup Detail & Harga' : 'Lihat Detail & Harga'}
                </span>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Expanded Content */}
      <div 
        className="transition-all duration-500 ease-in-out"
        style={{ maxHeight: expanded ? '2000px' : '0', opacity: expanded ? 1 : 0, overflow: 'hidden' }}
      >
        {expanded && (
          <ScrollReveal animation="fadeInUp" delay={100}>
            <div className="grid lg:grid-cols-2 gap-8 pt-8">
              {/* Pricing Section */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Harga {displayData.name}</h3>
                {displayData.priceList && displayData.priceList.length > 0 ? (
                  <div className="space-y-3">
                    {displayData.priceList.map((item, idx) => (
                      <div key={idx} className="p-4 border rounded-lg flex justify-between items-center bg-stone-50">
                        <div>
                          <p className="font-bold text-gray-800">{item.size}</p>
                          <p className="text-xs text-gray-500">{item.packaging}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-emerald-600">{item.retail}</p>
                          {item.cartonPrice && item.cartonPrice !== '-' && (
                            <p className="text-xs text-gray-500">Karton: {item.cartonPrice}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">Hubungi kami untuk informasi harga.</p>
                )}
                {/* Bulk Order CTA */}
                <div className="!mt-8 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl">
                  <p className="text-sm font-semibold text-emerald-700 mb-3">💼 Pembelian dalam jumlah besar?</p>
                  <p className="text-sm text-gray-600 mb-4">Hubungi kami untuk harga spesial grosir dan distributor.</p>
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <a href={waLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" /> Hubungi via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
              {/* Specifications Section */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Package className="w-6 h-6 text-blue-600" /> Spesifikasi Produk
                </h3>
                <div className="space-y-3 text-sm">
                  {displayData.specifications ? (
                    Object.entries(displayData.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start gap-4 border-b border-gray-200/80 pb-2 last:border-b-0">
                        <span className="font-semibold text-gray-600">{key}</span>
                        <span className="text-gray-800 text-right font-medium">{value}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Spesifikasi detail tidak tersedia.</p>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </ScrollReveal>
  );
}
