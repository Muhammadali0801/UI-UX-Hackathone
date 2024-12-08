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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= products.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? products.length - 1 : prevIndex - 1
    )
  }

  const visibleProducts = React.useMemo(() => {
    const numVisible = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3
    const items = [...products, ...products] // Duplicate array for infinite scroll effect
    return items.slice(currentIndex, currentIndex + numVisible)
  }, [currentIndex])

  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Best of Air Max</h2>
        <div className="flex items-center gap-2">
          <span className="mr-4 text-lg	">Shop</span>
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleProducts.length)}%)`
          }}
        >
          {visibleProducts.map((product) => (
            <Card 
              key={`${product.id}-${currentIndex}`}
              className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
            >
              <CardContent className="p-0">
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <span className="text-lg">₹ {product.price.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-lg text-gray-600">{product.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}