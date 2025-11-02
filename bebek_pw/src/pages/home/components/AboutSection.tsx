
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Schönheit beginnt mit Vertrauen
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Bei BEBEK Beauty & Kosmetik verbinden wir medizinische Präzision mit Wellness-Erlebnis. 
              Jede Haut ist einzigartig – unsere Behandlungen sind individuell abgestimmt, 
              um natürliche Schönheit zu entfalten.
            </p>
            
            <div className="border-l-4 border-amber-600 pl-6">
              <p className="text-xl text-stone-700 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                „Ihre Kosmetikerin für gesunde, strahlende Haut"
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20female%20beautician%20in%20elegant%20beauty%20salon%2C%20warm%20lighting%2C%20modern%20equipment%2C%20serene%20atmosphere%2C%20natural%20beauty%20treatment%20setting%2C%20cream%20and%20beige%20interior%20design%2C%20soft%20focus%20background&width=600&height=800&seq=about-bebek&orientation=portrait"
              alt="Fachkosmetikerin im BEBEK Beauty Studio"
              className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-100 rounded-full opacity-60"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-stone-100 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
