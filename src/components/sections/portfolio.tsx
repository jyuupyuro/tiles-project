import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Modern Kitchen Renovation",
      category: "Residential",
      description: "Complete kitchen transformation using premium ceramic tiles and mosaic backsplash.",
      tags: ["Ceramic", "Mosaic", "Kitchen"],
      imageColor: "from-blue-400 to-blue-600"
    },
    {
      title: "Luxury Hotel Lobby",
      category: "Commercial",
      description: "Elegant marble and mosaic installation for a 5-star hotel entrance.",
      tags: ["Marble", "Mosaic", "Commercial"],
      imageColor: "from-gray-400 to-gray-600"
    },
    {
      title: "Spa & Wellness Center",
      category: "Commercial",
      description: "Tranquil bathroom design with natural stone and ceramic elements.",
      tags: ["Natural Stone", "Ceramic", "Wellness"],
      imageColor: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Contemporary Bathroom",
      category: "Residential",
      description: "Sleek bathroom design featuring large format tiles and accent mosaics.",
      tags: ["Large Format", "Mosaic", "Bathroom"],
      imageColor: "from-amber-400 to-amber-600"
    },
    {
      title: "Restaurant Interior",
      category: "Commercial",
      description: "Warm and inviting dining space with textured tiles and artistic mosaics.",
      tags: ["Textured", "Artistic", "Restaurant"],
      imageColor: "from-purple-400 to-purple-600"
    },
    {
      title: "Outdoor Patio Design",
      category: "Residential",
      description: "Weather-resistant outdoor tiles creating a beautiful entertaining space.",
      tags: ["Outdoor", "Weather-resistant", "Patio"],
      imageColor: "from-green-400 to-green-600"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our featured projects showcasing the versatility and beauty of our tiles and mosaics 
            in residential and commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white">
              <div className={`h-48 bg-gradient-to-br ${project.imageColor} rounded-t-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}