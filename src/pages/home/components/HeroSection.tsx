import Button from '../../../components/base/Button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ 
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20woman%20receiving%20professional%20facial%20treatment%20in%20luxury%20spa%2C%20soft%20cream%20and%20beige%20interior%2C%20serene%20peaceful%20atmosphere%2C%20natural%20lighting%2C%20professional%20beauty%20salon%20setting%2C%20relaxing%20skincare%20treatment%2C%20minimalist%20design%2C%20warm%20neutral%20tones&width=1920&height=1080&seq=hero-bebek-new&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#EAD8C0'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-stone-50/90 via-stone-50/70 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <h1 className="text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Natürlich schöne Haut mit{' '}
              <span className="text-[#4A331F]">BEBEK Beauty & Kosmetik</span>
            </h1>
            
            <p
              className="text-xl text-stone-900 mb-8 leading-snug max-w-[28ch] sm:max-w-[40ch] lg:max-w-none"
              style={{ textShadow: '0 0 10px rgba(255,255,255,0.85), 0 0 24px rgba(255,255,255,0.55)' }}
            >
              Erlebe Hautpflege, die wirkt – in Berlin Wilmersdorf
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" className="w-auto self-start sm:self-auto"
                onClick={() => scrollToSection('about')}
              >
                Über uns
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-auto self-start sm:self-auto"
                onClick={() => window.open('https://buchung.treatwell.de/ort/bebek-beauty-kosmetik/', '_blank')}
              >
                Jetzt Termin buchen
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            {/* Bild wird über CSS Background angezeigt */}
          </div>
        </div>
      </div>
    </section>
  );
}
