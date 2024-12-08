'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProductSlider() {
  const scrollLeft = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollBy({ left: -260, behavior: 'smooth' })
    }
  }

  const scrollRight = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollBy({ left: 260, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Gear Up</h1>
      
      {/* Shop Sections */}
      <div className="flex justify-between mb-12">
        {/* Men's Section */}
        <div className="w-full md:w-[48%]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">Shop Men's</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollLeft('mensScroll')}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollRight('mensScroll')}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div
            id="mensScroll"
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <Card className="flex-none w-[250px] rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/blue-shirt.svg"
                  alt="Nike Dri-FIT ADV TechKnit Ultra"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
                    <span className="text-sm">₹ 3,895</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Men's Short-Sleeve Running Top</p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-none w-[250px] rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/short.svg"
                  alt="Nike Dri-FIT Challenger"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Nike Dri-FIT Challenger</h3>
                    <span className="text-sm">₹ 2,495</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Women's Section */}
        <div className="w-full md:w-[48%]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">Shop Women's</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollLeft('womensScroll')}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollRight('womensScroll')}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div
            id="womensScroll"
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <Card className="flex-none w-[250px] rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/women-fit.svg"
                  alt="Nike Dri-FIT ADV Run Division"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Nike Dri-FIT ADV Run Division</h3>
                    <span className="text-sm">₹ 5,295</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Women's Long-Sleeve Running Top</p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-none w-[250px] rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/women-truser.svg"
                  alt="Nike Fast"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Nike Fast</h3>
                    <span className="text-sm">₹ 3,795</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
