'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import products from '@/lib/data/products.json'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, MessageCircle, Leaf, Shield, Package, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'

type CategoryFilter = 'all' | 'coconut-oil' | 'coconut-sugar' | 'coconut-aminos' | 'coconut-nectar' | 'coconut-syrup'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all')
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'coconut-oil', label: 'Coconut Oil' },
    { id: 'coconut-sugar', label: 'Coconut Sugar' },
    { id: 'coconut-aminos', label: 'Coconut Aminos' },
    { id: 'coconut-nectar', label: 'Coconut Nectar' },
    { id: 'coconut-syrup', label: 'Coconut Syrup' },
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const whyChooseUsItems = [
    'Kualitas premium dari kelapa segar pilihan',
    'Diproduksi langsung oleh pabrik kami (bukan reseller)',
    'Proses tradisional yang menjaga kemurnian & nutrisi',
    'Standar mutu stabil di setiap batch',
    'Harga kompetitif karena langsung dari produsen',
    'Cocok untuk konsumsi & industri',
    'Pengiriman cepat dan aman'
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleExpand = (productId: number) => {
    setExpandedProductId(prev => prev === productId ? null : productId)
  }

  const waNumber = '6285156355964'

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-28 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <ScrollReveal animation="fadeInUp" delay={200}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Produk Unggulan Kami
                <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6">
                Dibuat dari kelapa pilihan dengan proses modern untuk menjamin kemurnian dan kualitas terbaik.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter Tabs - Sticky */}
          <div className="sticky top-20 z-40 bg-gray-100 rounded-3xl backdrop-blur-lg border-y border-gray-200 -mx-4 md:-mx-8 px-4 md:px-8 py-4 mb-12 shadow-sm">
            <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 min-w-max md:justify-center pb-2 md:pb-0">
                {categories.map((cat, idx) => (
                  <ScrollReveal key={cat.id} animation="fadeInUp" delay={300 + idx * 80}>
                    <button
                      onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
                      className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                        selectedCategory === cat.id
                          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-105'
                          : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
          {filteredProducts.map((product, index) => {
            const isExpanded = expandedProductId === product.id
            const isEven = index % 2 === 0
            const waMessage = encodeURIComponent(`Halo, saya tertarik dengan produk ${product.name}.`)
            const waLink = `https://wa.me/${waNumber}?text=${waMessage}`

            return (
              <ScrollReveal key={`${selectedCategory}-${product.id}`} animation="fadeInUp" delay={200}>
                {/* Main Product Card */}
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8`}>
                  
                  {/* Image Section */}
                  <ScrollReveal animation={isEven ? 'slideInLeft' : 'slideInRight'} delay={300}>
                    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-white">
                      <Image
                        src={product.image || '/placeholder.jpg'}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={index < 2}
                      />
                      <Badge className="absolute top-6 right-6 bg-emerald-600 text-white shadow-lg px-4 py-2 text-sm">
                        {product.badge}
                      </Badge>
                    </div>
                  </ScrollReveal>

                  {/* Content Section */}
                  <ScrollReveal animation={isEven ? 'slideInRight' : 'slideInLeft'} delay={400}>
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                          {product.name}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Trust Badges */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center gap-2 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                          <Shield className="w-6 h-6 text-emerald-600" />
                          <p className="text-xs font-bold text-center text-gray-800">100% Natural</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-xl border border-green-100">
                          <Leaf className="w-6 h-6 text-green-600" />
                          <p className="text-xs font-bold text-center text-gray-800">Halal</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-xl border border-blue-100">
                          <Package className="w-6 h-6 text-blue-600" />
                          <p className="text-xs font-bold text-center text-gray-800">Non GMO</p>
                        </div>
                      </div>
                      {/* Identifikasi Utama */}
                      {product.benefits && product.benefits.length > 0 && (
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                          <h3 className="font-bold text-lg text-gray-900 mb-4">Identifikasi Utama</h3>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {product.benefits.slice(0, 6).map((benefit, idx) => (
                              <li 
                                key={idx} 
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Button Lihat Detail */}
                      <Button
                        onClick={() => toggleExpand(product.id)}
                        className={`w-full h-12 font-medium transition-all duration-300 rounded-xl ${
                          isExpanded 
                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                            : 'bg-emerald-600 text-white hover:bg-emerald-700'
                        }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          {isExpanded ? (
                            <>
                              <ChevronUp className="w-5 h-5" />
                              Tutup Detail & Harga
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-5 h-5" />
                              Lihat Detail & Harga
                            </>
                          )}
                        </span>
                      </Button>
                    </div>
                  </ScrollReveal>
                </div>
                {/* Expanded Content */}
                <div 
                  className="transition-all duration-500 ease-in-out"
                  style={{ 
                    maxHeight: isExpanded ? '2000px' : '0',
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden'
                  }}
                >
                  {isExpanded && (
                    <ScrollReveal animation="fadeInUp" delay={100}>
                      <div className="grid lg:grid-cols-2 gap-8 pt-8">
                        
                        {/* Left: Pilihan Ukuran & Harga */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                          <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Pilihan Ukuran & Harga</h3>
                          </div>

                          {product.priceList && product.priceList.length > 0 ? (
                            <div className="space-y-4">
                              {product.priceList.map((item, idx) => (
                                <div 
                                  key={idx}
                                  className="p-5 border-2 border-gray-200 hover:border-emerald-500 rounded-xl transition-all hover:shadow-md"
                                >
                                  <div className="flex items-start justify-between mb-3">
                                    <div>
                                      <p className="text-2xl font-bold text-gray-900">{item.size}</p>
                                      <p className="text-sm text-gray-500">{item.packaging}</p>
                                    </div>
                                    {idx === 0 && (
                                      <Badge className="bg-emerald-600 text-white">Populer</Badge>
                                    )}
                                  </div>
                                  <div className="space-y-2">
                                    <div className="flex items-baseline gap-2">
                                      <span className="text-sm text-gray-600">Retail:</span>
                                      <span className="text-xl font-bold text-emerald-600">{item.retail}</span>
                                    </div>
                                    {item.cartonPrice && item.cartonPrice !== '-' && (
                                      <div className="flex items-baseline gap-2">
                                        <span className="text-sm text-gray-600">Karton:</span>
                                        <span className="text-lg font-semibold text-gray-700">{item.cartonPrice}</span>
                                        {item.qtyPerCarton && item.qtyPerCarton !== '-' && (
                                          <span className="text-xs text-gray-500">({item.qtyPerCarton} pcs)</span>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                              {/* Bulk Order CTA */}
                              <div className="mt-6 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl">
                                <p className="text-sm text-gray-700 mb-3">
                                  <span className="font-bold text-emerald-700">💼 Pembelian dalam jumlah besar?</span>
                                </p>
                                <p className="text-sm text-gray-600 mb-4">
                                  Hubungi kami untuk harga spesial grosir dan distributor.
                                </p>
                                <Button 
                                  asChild 
                                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                                >
                                  <a href={waLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                                    <MessageCircle className="w-4 h-4" />
                                    Hubungi via WhatsApp
                                  </a>
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <p className="text-gray-500 text-center py-8">Hubungi kami untuk informasi harga</p>
                          )}
                        </div>
                        {/* Right: Alasan Memilih Kami (untuk halaman detail produk individual) */}
                        <div className="bg-gradient-to-br from-gray-50 to-emerald-50/50 rounded-2xl border border-gray-200 p-6 shadow-lg">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Shield className="w-6 h-6 text-emerald-600" />
                            Alasan Memilih Kami
                          </h3>
                          <div className="space-y-3">
                            <p className="text-sm font-semibold text-emerald-700">Siap menjadi pemasok</p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Kami memproduksi berbagai produk kelapa seperti Virgin Coconut Oil (VCO), Coconut Sugar, Coconut Aminos, Coconut Nectar, hingga Coconut Syrup. Dengan standar mutu modern, kami siap memenuhi kebutuhan industri makanan, minuman, kesehatan, dan retai. Dengan proses produksi yang konsisten, kami siap menjalin kerjasama jangka panjang dan mendukung pertumbuhan bisnis Anda.
                            </p>
                            <div className="pt-4 space-y-2">
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">Kualitas premium irwan kelapa pilihan</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">Produksi stabil & siap supply produk berjuang</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">Harga kompetitif karena langsung dari produsen</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">Pengiriman cepat & terjamin</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">Cocok untuk UMKM, brand F&B, reseller, distributor</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed pt-4 border-t border-gray-200">
                              Jika Anda membutuhkan pemasok yang dapat diandalkan untuk produk kelapa berkualitas, Jeevos siap menjadi mitra bisnis Anda. Hubungi kami untuk informasi lebih lanjut dan penawaran khusus!
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </section>
        {/* Mengapa Memilih Jeevos - Bottom Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20 mb-16">
          <ScrollReveal animation="fadeInUp" delay={300}>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200 p-8 md:p-12 shadow-xl">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Mengapa Memilih Jeevos?
                </h2>
                <p className="text-gray-600 text-lg">
                  Kualitas premium dari kelapa segar pilihan
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {whyChooseUsItems.map((item, idx) => (
                  <ScrollReveal key={idx} animation="fadeInUp" delay={400 + idx * 80}>
                    <div 
                      className="flex items-start gap-3 p-5 bg-white rounded-xl border border-emerald-100 hover:shadow-md transition-all"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl max-w-3xl mx-auto">
                <p className="text-gray-700 leading-relaxed text-center">
                  Kami berkomitmen dan bertanggung jawab untuk menyediakan produk kelapa berkualitas tinggi, higienis, tersedia, dan terjangkau untuk meningkatkan kualitas hidup Anda dalam mencapai gaya hidup sehat dan berkelanjutan.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="max-w-2xl mx-auto px-4 text-center py-20">
            <ScrollReveal animation="fadeInUp">
              <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tidak Ada Produk</h3>
                <p className="text-gray-600 mb-6">Tidak ada produk dalam kategori ini saat ini.</p>
                <Button 
                  onClick={() => setSelectedCategory('all')}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Lihat Semua Produk
                </Button>
              </div>
            </ScrollReveal>
          </div>
        )}
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 bg-gray-900 text-white p-3 rounded-full shadow-xl hover:bg-gray-800 hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  )
}