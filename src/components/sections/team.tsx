import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "15+ years in tile industry with a passion for transforming spaces.",
      imageColor: "from-blue-400 to-blue-600"
    },
    {
      name: "Michael Chen",
      role: "Design Director",
      description: "Award-winning designer specializing in commercial and residential projects.",
      imageColor: "from-emerald-400 to-emerald-600"
    },
    {
      name: "Emma Rodriguez",
      role: "Sales Manager",
      description: "Expert in helping clients find the perfect tiles for their vision.",
      imageColor: "from-purple-400 to-purple-600"
    },
    {
      name: "David Wilson",
      role: "Technical Specialist",
      description: "Ensures quality and provides technical guidance for complex installations.",
      imageColor: "from-amber-400 to-amber-600"
    }
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our passionate team of experts is dedicated to helping you create beautiful spaces 
            with the perfect tiles and mosaics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white text-center">
              <CardContent className="p-6">
                <div className={`w-24 h-24 bg-gradient-to-br ${member.imageColor} rounded-full mx-auto mb-4 relative`}>
                  <div className="absolute inset-2 bg-white/20 rounded-full"></div>
                </div>
                
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                
                <div className="flex justify-center space-x-3">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}