import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Zap, Heart } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest materials from trusted manufacturers worldwide."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced professionals guide you through every step of your project."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to get your project started without delays."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're here to make your vision come true."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About TileCraft
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, TileCraft has been transforming spaces with premium tiles and mosaics. 
            We combine traditional craftsmanship with modern design to create beautiful, lasting solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Crafting Beautiful Spaces Since 2008
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a passion for excellence, TileCraft has grown from a small family business 
              to become a trusted name in the tile industry. We believe that every space tells a story, 
              and our premium tiles and mosaics help you write yours.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has earned us the trust 
              of homeowners, architects, and designers across the region. From residential renovations 
              to commercial projects, we deliver solutions that exceed expectations.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-2 h-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i}
                    className={`rounded-lg ${
                      i % 3 === 0 ? 'bg-blue-500' : 
                      i % 3 === 1 ? 'bg-gray-400' : 'bg-amber-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}