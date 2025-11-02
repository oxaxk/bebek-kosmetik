
import { useState } from 'react';

export default function TreatmentsSection() {
  const treatments = [
    {
      title: 'Green Sea Peel (Algenpeeling)',
      description: 'Natürliches Algenpeeling für Regeneration, Porenverfeinerung & gleichmäßigen Teint.',
      icon: 'ri-leaf-line',
      image: 'https://readdy.ai/api/search-image?query=Natural%20algae%20skincare%20treatment%20with%20green%20sea%20algae%20mask%2C%20spa%20setting%2C%20professional%20cosmetic%20treatment%2C%20natural%20organic%20skincare%2C%20green%20beauty%20products%20on%20clean%20white%20background&width=400&height=300&seq=green-sea-peel&orientation=landscape'
    },
    {
      title: 'Pumpkin Pulp Corrector Peel',
      description: 'Kürbis-Power für Glow, Feuchtigkeit & frische Haut.',
      icon: 'ri-sun-line',
      image: 'https://readdy.ai/api/search-image?query=Orange%20pumpkin%20skincare%20products%20for%20facial%20peel%20treatment%2C%20natural%20beauty%20cosmetics%2C%20professional%20spa%20setting%2C%20warm%20autumn%20colors%2C%20organic%20ingredients&width=400&height=300&seq=pumpkin-peel&orientation=landscape'
    },
    {
      title: 'Mineral Magnetic Mask',
      description: 'Mineralien-Maske mit Omega-Fettsäuren, magnetisch entfernt für maximale Reinheit.',
      icon: 'ri-contrast-2-line',
      image: 'https://static.readdy.ai/image/c2dd90fc406d7d04d15e04925690c4cc/bbbcf30942188eaba5f82b687ffec9ea.png'
    },
    {
      title: 'Laser-Haarentfernung (LoriMed)',
      description: 'Dauerhaft glatte Haut mit ICE-Cooling – sanft & sicher für alle Hauttypen.',
      icon: 'ri-flashlight-line',
      image: 'https://static.readdy.ai/image/c2dd90fc406d7d04d15e04925690c4cc/50effd7113ef539adea18595f0dc7545.png'
    },
    {
      title: 'Wimpern & Augenbrauenlifting',
      description: 'Natürlich betonte Augen – mit oder ohne Färben, individuell kombinierbar.',
      icon: 'ri-eye-line',
      image: 'https://static.readdy.ai/image/c2dd90fc406d7d04d15e04925690c4cc/5cf448766312b9741dbfd88d554ce4b1.png'
    },
    {
      title: 'Hydration & Balance Treatment',
      description: 'Vegane Pflege mit pflanzlichen Extrakten für ausgewogene Hautbalance.',
      icon: 'ri-drop-line',
      image: 'https://static.readdy.ai/image/c2dd90fc406d7d04d15e04925690c4cc/77eaaba44dbb61bc77c08ee4b3c1b1c8.png'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`${treatment.icon} text-2xl text-amber-700`}></i>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{treatment.title}</h3>
                <p className="text-stone-600 leading-relaxed">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => window.open('https://buchung.treatwell.de/ort/bebek-beauty-kosmetik/', '_blank')}
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Jetzt Termin buchen
          </button>
        </div>
      </div>
    </section>
  );
}
