export function CollaboratorsSection() {
  const collaborators = [
    { name: "Premium Ceramics Co.", category: "Ceramic Tiles" },
    { name: "Natural Stone Works", category: "Natural Stone" },
    { name: "Mosaic Masters", category: "Artistic Mosaics" },
    { name: "European Tiles Ltd.", category: "Designer Collections" },
    { name: "Stone & Clay Co.", category: "Specialty Materials" },
    { name: "Artisan Mosaics", category: "Custom Designs" }
  ]

  return (
    <section id="collaborators" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading manufacturers and suppliers to bring you 
            the finest quality tiles and mosaics from around the world.
          </p>
        </div>

        {/* Partner logos/cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {collaborators.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                <div className="w-8 h-8 bg-gray-400 rounded group-hover:bg-blue-500 transition-colors"></div>
              </div>
              <h4 className="font-medium text-sm text-gray-900 mb-1">{partner.name}</h4>
              <p className="text-xs text-gray-500">{partner.category}</p>
            </div>
          ))}
        </div>

        {/* Partnership benefits */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Sourcing</h3>
              <p className="text-gray-600 text-sm">
                Access to premium materials from trusted manufacturers worldwide
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-emerald-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Rigorous quality standards maintained through our partner network
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-amber-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Latest designs and technologies from industry-leading partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}