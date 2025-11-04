export default function BookingSection() {
  return (
    <section id="booking" className="py-20" style={{ backgroundColor: '#EAD8C0' }}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Termin buchen und <span className="text-[#4A331F]">Glow spüren</span>
          </h2>
          <p className="text-xl text-stone-600 mb-10 leading-relaxed">
            Buche jetzt deinen individuellen Behandlungstermin und erlebe den Unterschied.
          </p>
          
          <div className="flex justify-center items-center gap-6">
            <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
              <i className="ri-calendar-line text-3xl text-stone-700"></i>
            </div>
            <button 
              onClick={() => window.open('https://buchung.treatwell.de/ort/bebek-beauty-kosmetik/', '_blank')}
              className="bg-gradient-to-r from-[#4A331F] to-[#2F1F13] hover:from-[#3B2818] hover:to-[#1F140C] text-white px-12 py-5 rounded-full font-bold text-xl transition-colors cursor-pointer whitespace-nowrap shadow-lg"
            >
              Jetzt Termin buchen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
