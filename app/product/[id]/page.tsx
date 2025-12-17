"use client";

import { useState, useEffect } from 'react';
import products from '@/lib/data/products.json';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle, ShoppingCart, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScrollReveal from '@/components/scroll-reveal';
import RelatedProducts from '@/components/related-products';
import { clsx } from 'clsx';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.id.toString() === id);

  // State for the active variant index (for products with variants)
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);

  // Determine if the product has variants
  const hasVariants = product?.variants && product.variants.length > 0;

  // Get the currently active variant object if it exists
  const activeVariant = hasVariants ? product.variants[activeVariantIndex] : null;

  // State for the active image
  const [activeImage, setActiveImage] = useState(
    activeVariant?.image || product?.image || '/placeholder.jpg'
  );

  // Effect to update active image if product or variant changes
  useEffect(() => {
    const newImage = activeVariant?.image || product?.image || '/placeholder.jpg';
    setActiveImage(newImage);
  }, [product, activeVariant]);

  if (!product) {
    return notFound();
  }

  // --- Data Derivation ---
  // Derive all displayed data from the top-level product or the active variant
  const displayName = activeVariant?.name || product.name;
  const displayDescription = activeVariant?.description || product.description;
  const displayBenefits = activeVariant?.benefits || product.benefits;
  const displaySpecifications = activeVariant?.specifications || product.specifications;
  const displayUsage = activeVariant?.usage || product.usage;
  const displayIngredients = product.ingredients;
  const displayPriceList = activeVariant?.priceList || product.priceList;


  const waNumber = '6285156355964';
  const waMessage = encodeURIComponent(
    `Halo, saya tertarik dengan produk ${displayName}.`
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div className="bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <ScrollReveal animation="fadeInUp" delay={200}>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-emerald-600">Home</Link>
              <ChevronRight className="w-4 h-4 mx-1" />
              <Link href="/products" className="hover:text-emerald-600">Products</Link>
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="font-medium text-gray-700">{displayName}</span>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left: Image Gallery */}
            <ScrollReveal animation="slideInLeft" delay={300}>
              <div className="space-y-4 lg:sticky top-28">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-gray-50">
                  <Image
                    src={activeImage}
                    alt={displayName}
                    fill
                    className="object-cover transition-opacity duration-300"
                    priority
                    key={activeImage} // Force re-render on image change for transition
                  />
                </div>

              </div>
            </ScrollReveal>

            {/* Right: Product Info */}
            <ScrollReveal animation="slideInRight" delay={400}>
              <div className="py-4">
                {product.badge && (
                  <Badge className="bg-emerald-100 text-emerald-800 text-sm mb-4">
                    {product.badge}
                  </Badge>
                )}

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {displayName}
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {displayDescription}
                </p>

                {/* Variant Selector */}
                {hasVariants && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-600 mb-3">Pilih Varian:</h3>
                    <div className="space-y-3">
                      {product.variants.map((variant, index) => (
                        <button
                          key={variant.id}
                          onClick={() => setActiveVariantIndex(index)}
                          className={clsx(
                            "flex items-center justify-between w-full p-4 border rounded-lg text-left transition-all",
                            {
                              "bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200": activeVariantIndex === index,
                              "bg-white border-gray-200 hover:border-emerald-400": activeVariantIndex !== index,
                            }
                          )}
                        >
                          <span className="font-medium text-gray-800">{variant.name.replace('Coconut-sugar ', '')}</span>
                          {activeVariantIndex === index && (
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {displayBenefits && (
                  <div className="space-y-3 mb-8">
                    {displayBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Section */}
                <div className="bg-stone-50 border border-gray-200 rounded-2xl p-6 space-y-4">
                  <p className="text-lg font-semibold text-gray-800">
                    Siap untuk memesan atau butuh informasi lebih lanjut?
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shadow-lg"
                  >
                    <a href={waLink} target="_blank" rel="noreferrer">
                      <MessageCircle /> Hubungi via WhatsApp
                    </a>
                  </Button>

                  <Button asChild size="lg" variant="outline" className="w-full gap-2">
                    <Link href="/contact">
                      <ShoppingCart /> Minta Penawaran (B2B)
                    </Link>
                  </Button>
                </div>

                {/* Tabs */}
                <div className="mt-12">
                  <Tabs defaultValue="specifications" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="specifications">Spesifikasi</TabsTrigger>
                      <TabsTrigger value="usage">Penggunaan</TabsTrigger>
                      <TabsTrigger value="pricing">Daftar Harga</TabsTrigger>
                    </TabsList>

                    <TabsContent value="specifications" className="pt-6">
                      <div className="text-sm text-gray-700 space-y-4">
                        {displaySpecifications ? (
                          Object.entries(displaySpecifications).map(([key, value]) => (
                            <div
                              key={key}
                              className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded-lg"
                            >
                              <dt className="font-semibold text-gray-800">{key}</dt>
                              <dd className="text-gray-600">{value}</dd>
                            </div>
                          ))
                        ) : (
                          <p>Spesifikasi tidak tersedia.</p>
                        )}

                        {displayIngredients && (
                          <div className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded-lg">
                            <dt className="font-semibold text-gray-800">Bahan</dt>
                            <dd className="text-gray-600">{displayIngredients}</dd>
                          </div>
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="usage" className="pt-6">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {displayUsage || 'Informasi penggunaan tidak tersedia.'}
                      </p>
                    </TabsContent>

                    <TabsContent value="pricing" className="pt-6">
                      {displayPriceList && displayPriceList.length > 0 ? (
                        <div className="space-y-3">
                          {displayPriceList.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-4 border rounded-lg flex justify-between items-center"
                            >
                              <div>
                                <p className="font-bold text-gray-800">{item.size}</p>
                                <p className="text-xs text-gray-500">{item.packaging}</p>
                              </div>

                              <div className="text-right">
                                <p className="font-semibold text-emerald-600">
                                  {item.retail}
                                </p>
                                {item.cartonPrice &&
                                  item.cartonPrice !== '-' && (
                                    <p className="text-xs text-gray-500">
                                      Karton: {item.cartonPrice}
                                    </p>
                                  )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">
                          Hubungi kami untuk informasi harga.
                        </p>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Related Products Section */}
          {product.relatedIds && product.relatedIds.length > 0 && (
            <div className="mt-24">
              <RelatedProducts relatedIds={product.relatedIds} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
