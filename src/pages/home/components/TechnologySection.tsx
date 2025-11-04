export default function TechnologySection() {
  const brands = [
    {
      name: 'Tanura Cosmetics',
      description: 'Premium Pflegeformeln'
    },
    {
      name: 'LoriMed',
      description: 'Laser-Technologie'
    },
    {
      name: 'Green Sea Peel',
      description: 'Natürliche Peelings'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Apparative Kosmetik auf höchstem Niveau
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Wir arbeiten mit modernster Technologie für nachhaltige Ergebnisse – 
            von LoriMed-Lasern bis Tanura Pflegeformeln.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#4A331F]/10 hover:border-[#4A331F]/20"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#4A331F]/10 to-[#4A331F]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-3xl text-[#4A331F]"></i>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {brand.name}
              </h3>
              <p className="text-stone-600 font-medium">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
