
export default function OffersSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F9F7' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Elegant%20gift%20voucher%20for%20beauty%20spa%20treatment%2C%20luxury%20cream%20and%20gold%20design%2C%20beautiful%20ribbon%20decoration%2C%20premium%20beauty%20gift%20certificate%2C%20minimalist%20sophisticated%20styling%2C%20warm%20beige%20background&width=600&height=400&seq=gift-voucher&orientation=landscape"
              alt="Beauty Gutschein"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Verschenke den <span className="text-amber-700">Healthy Glow</span>
            </h2>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Gutscheine für alle Behandlungen erhältlich – das perfekte Geschenk für strahlende Momente.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Jetzt anfragen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
