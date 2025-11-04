import { useState } from 'react';

export default function TreatmentsSection() {
  const treatments = [
    {
      title: 'Gesichtsbehandlungen',
      description: 'Individuell kombinierte Pflege für ein klares, strahlendes Hautbild – von Aquafacial und Microdermabrasion bis Microneedling/RF und sanften Peelings',
      image: '/images/treatments/gesichtsbehandlungen.jpg'
    },
    {
      title: 'Permanent Make‑up',
      description: 'Augenbrauen, Lid & Lippen in natürlicher Form – präzise Pigmentierung, typgerechte Farben und frische Konturen mit langem Halt',
      image: '/images/treatments/pmu.jpg'
    },
    {
      title: 'Augenbrauen & Wimpern',
      description: 'Brow Lifting & Tint für definierte Brauen, Lash Lifting für geschwungene Wimpern – für einen offenen, wachen Blick, gepflegt von früh bis spät, ganz ohne Make‑up',
      image: '/images/treatments/brows-lashes.jpg'
    },
    {
      title: 'Dauerhafte Haarentfernung (Laser)',
      description: 'Damen & Herren – modernste ICE‑Kühltechnologie für eine nahezu schmerzfreie Behandlung. Präzise Zonen oder komplette Pakete.',
      image: '/images/treatments/laser.jpg'
    },
    {
      title: 'Körperbehandlungen',
      description: 'Gezielte Körperpflege gegen Spannungsverlust und Cellulite – straffende Anwendungen, Massageelemente und Detox für glattere Konturen',
      image: '/images/treatments/koerper.jpg'
    },
    {
      title: 'Waxing & Fadentechnik',
      description: 'Schonende Haarentfernung mit Wachs oder Faden – präzise Konturen an Gesicht & Körper, sanft auch bei empfindlichen Zonen',
      image: '/images/treatments/waxing.jpg'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="treatments" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Unsere Behandlungen
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Jede Behandlung wird individuell auf Ihren Hauttyp abgestimmt
          </p>
        </div>

        <div className="overflow-x-auto overflow-y-visible scrollbar-hide mb-12 pb-4">
          <div className="flex gap-6 snap-x snap-mandatory px-2">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden min-w-[80%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] snap-center"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{treatment.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{treatment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => window.open('https://buchung.treatwell.de/ort/bebek-beauty-kosmetik/', '_blank')}
            className="bg-gradient-to-r from-[#4A331F] to-[#2F1F13] hover:from-[#3B2818] hover:to-[#1F140C] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Jetzt Termin buchen
          </button>
        </div>
      </div>
    </section>
  );
}
