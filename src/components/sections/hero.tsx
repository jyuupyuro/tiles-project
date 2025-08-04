import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Space with
                <span className="block text-blue-600">Premium Tiles</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our extensive collection of ceramic tiles, mosaics, and natural stone. 
                Create stunning interiors and exteriors with TileCraft&apos;s premium quality products.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg group">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="px-8 py-6 text-lg rounded-lg border-gray-300 hover:bg-gray-50 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Showcase
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-96">
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg"></div>
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg shadow-lg"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg shadow-lg"></div>
                <div className="h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}