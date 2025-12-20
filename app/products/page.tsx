"use client"

import { useState, useEffect } from 'react'
import productsData from '@/lib/data/products.json';
import { Product } from '@/lib/data/products';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, MessageCircle, Leaf, Shield, Package, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react'
import ScrollReveal from '@/components/scroll-reveal'
import ProductDisplayCard from '@/components/product-display-card'
import whyChooseUsItems from '@/lib/data/why-choose-us.json';

const products: Product[] = productsData as Product[];

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
          <div className="sticky top-20 z-40 -mx-4 md:-mx-8 px-4 md:px-8 py-4 overflow-y-hidden touch-pan-x">
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
            const isEven = index % 2 === 0
            return (
              <ProductDisplayCard key={`${selectedCategory}-${product.id}`} product={product} isEven={isEven} />
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
