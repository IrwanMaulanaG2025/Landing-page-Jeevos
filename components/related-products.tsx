// components/RelatedProducts.tsx
"use client"

import products from '@/lib/data/products.json'
import { Product } from '@/lib/data/products'
import Link from 'next/link'
import Image from 'next/image' // Import Image component
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

interface RelatedProductsProps {
  relatedIds: number[]
  maxItems?: number
}

export default function RelatedProducts({ 
  relatedIds, 
  maxItems = 4 
}: RelatedProductsProps) {
  // Find products based on the provided relatedIds
  const relatedProducts = products
    .filter(p => relatedIds.includes(p.id))
    .slice(0, maxItems)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Produk Terkait
          </h2>
          <p className="text-muted-foreground">
            Produk lain yang mungkin Anda suka
          </p>
        </div>
        <Link href="/#products">
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            Lihat Semua
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link 
            key={product.id} 
            href={`/product/${product.id}`}
            className="group"
          >
            <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-sm">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || '/placeholder.jpg'}
                  alt={product.name}
                  width={300} // Appropriate width for a card
                  height={300} // Appropriate height for a card
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-3 right-3 bg-primary/10 text-primary">
                  {product.badge}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile: View All Button */}
      <div className="mt-8 flex justify-center md:hidden">
        <Link href="/#products">
          <Button variant="outline" className="flex items-center gap-2">
            Lihat Semua Produk
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}