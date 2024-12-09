'use client'

import * as React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Product {
  id: number
  name: string
  category: string
  price: number
  imageUrl: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Nike Air Max Pulse',
    category: "Women's Shoes",
    price: 13995,
    imageUrl: '/snk-white.svg'
  },
  {
    id: 2,
    name: 'Nike Air Max Pulse',
    category: "Men's Shoes",
    price: 13995,
    imageUrl: '/snk-wgray.svg'
  },
  {
    id: 3,
    name: 'Nike Air Max 97 SE',
    category: "Men's Shoes",
    price: 16995,
    imageUrl: '/snk-linesh.svg'
  },
  {
    id: 4,
    name: 'Nike Air Max 90',
    category: "Women's Shoes",
    price: 12995,
    imageUrl: '/snk-white.svg'
  }
]

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [numVisible, setNumVisible] = React.useState(3)

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setNumVisible(1) // Small screens (sm)
      } else if (window.innerWidth < 768) {
        setNumVisible(2) // Medium screens (md)
      } else if (window.innerWidth < 1024) {
        setNumVisible(3) // Large screens (lg)
      } else {
        setNumVisible(4) // Extra large screens (xl)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % products.length
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + products.length) % products.length
    )
  }

  const visibleProducts = React.useMemo(() => {
    const items = [...products, ...products] // Duplicate array for infinite scroll effect
    return items.slice(currentIndex, currentIndex + numVisible)
  }, [currentIndex, numVisible])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">Best of Air Max</h2>
        <div className="flex items-center gap-2">
          <span className="mr-4 text-base sm:text-lg">Shop</span>
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * (100 / numVisible))}%)`
          }}
        >
          {visibleProducts.map((product, index) => (
            <Card 
              key={`${product.id}-${index}`}
              className={`flex-shrink-0 w-[calc(100%/${numVisible} - 1rem)]`}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-base sm:text-lg">{product.name}</h3>
                    <span className="text-base sm:text-lg">₹ {product.price.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600">{product.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
