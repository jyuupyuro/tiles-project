"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Grid3X3, List } from "lucide-react"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'ceramic', name: 'Ceramic Tiles', count: 8 },
    { id: 'mosaic', name: 'Mosaics', count: 6 },
    { id: 'natural-stone', name: 'Natural Stone', count: 5 },
    { id: 'designer', name: 'Designer Collections', count: 5 }
  ]

  const products = [
    {
      id: 1,
      name: "Elegance Ceramic Series",
      category: "ceramic",
      price: "$45.99",
      priceUnit: "per sq ft",
      description: "Premium ceramic tiles with a glossy finish, perfect for modern kitchens and bathrooms.",
      features: ["Water-resistant", "Easy to clean", "Scratch-resistant"],
      dimensions: "12\" x 12\"",
      imageColor: "from-blue-400 to-blue-600",
      inStock: true
    },
    {
      id: 2,
      name: "Mosaic Art Collection",
      category: "mosaic",
      price: "$125.00",
      priceUnit: "per sq ft",
      description: "Handcrafted mosaic tiles featuring intricate patterns and vibrant colors.",
      features: ["Handcrafted", "Unique patterns", "Color-fast"],
      dimensions: "1\" x 1\" chips",
      imageColor: "from-emerald-400 to-emerald-600",
      inStock: true
    },
    {
      id: 3,
      name: "Natural Marble Luxe",
      category: "natural-stone",
      price: "$85.50",
      priceUnit: "per sq ft",
      description: "Authentic marble tiles with natural veining, ideal for luxury installations.",
      features: ["Natural stone", "Unique veining", "Heat-resistant"],
      dimensions: "24\" x 24\"",
      imageColor: "from-gray-300 to-gray-500",
      inStock: false
    },
    {
      id: 4,
      name: "Metro Subway Tiles",
      category: "ceramic",
      price: "$32.99",
      priceUnit: "per sq ft",
      description: "Classic subway tiles with a contemporary twist, perfect for backsplashes.",
      features: ["Classic design", "Versatile", "Easy installation"],
      dimensions: "3\" x 6\"",
      imageColor: "from-amber-400 to-amber-600",
      inStock: true
    },
    {
      id: 5,
      name: "Designer Hexagon Series",
      category: "designer",
      price: "$95.00",
      priceUnit: "per sq ft",
      description: "Modern hexagonal tiles in various sizes and finishes.",
      features: ["Geometric design", "Multiple finishes", "Contemporary"],
      dimensions: "8\" hexagon",
      imageColor: "from-purple-400 to-purple-600",
      inStock: true
    },
    {
      id: 6,
      name: "Glass Mosaic Shimmer",
      category: "mosaic",
      price: "$110.00",
      priceUnit: "per sq ft",
      description: "Iridescent glass mosaic tiles that create stunning light effects.",
      features: ["Glass material", "Light-reflecting", "Waterproof"],
      dimensions: "0.75\" x 0.75\"",
      imageColor: "from-cyan-400 to-cyan-600",
      inStock: true
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product Catalogue
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive collection of premium tiles and mosaics. 
              Find the perfect solution for your next project.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Search Products</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search tiles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Under $50</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">$50 - $100</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Over $100</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">In Stock Only</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center flex-col gap-2.5 sm:flex-row">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
                <div className="flex items-center space-x-4">
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Name: A to Z</option>
                  </select>
                  <div className="flex border border-gray-300 rounded-md">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 text-sm ${
                        viewMode === 'grid' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'
                      }`}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 text-sm ${
                        viewMode === 'list' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 bg-white">
                  <div className={`h-48 bg-gradient-to-br ${product.imageColor} relative overflow-hidden ${
                    viewMode === 'list' ? 'lg:h-32' : ''
                  }`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    {!product.inStock && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="destructive">Out of Stock</Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800 capitalize">
                        {product.category.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className={viewMode === 'list' ? 'flex justify-between items-start' : ''}>
                      <div className={viewMode === 'list' ? 'flex-1 mr-6' : ''}>
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Dimensions:</span>
                            <span className="font-medium">{product.dimensions}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`${viewMode === 'list' ? 'text-right' : 'flex flex-col justify-between items-center gap-4'}`}>
                        <div className={viewMode === 'list' ? 'mb-4' : ''}>
                          <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                          <div className="text-sm text-gray-500">{product.priceUnit}</div>
                        </div>
                        <Button 
                          className={`${product.inStock ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} text-white ${
                            viewMode === 'list' ? 'w-32' : 'w-full'
                          }`}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'Add to Quote' : 'Out of Stock'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}