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
              src="/images/about/about.jpg"
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
