
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d43lkjupguuav66rg360', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Kontakt & Standort
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-700 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  BEBEK Beauty & Kosmetik
                </h3>
                <div className="space-y-3 text-stone-600">
                  <p className="flex items-center">
                    <i className="ri-map-pin-line text-amber-700 mr-3"></i>
                    Fechnerstraße 6a · 10717 Berlin (Wilmersdorf)
                  </p>
                  <p className="flex items-center">
                    <i className="ri-phone-line text-amber-700 mr-3"></i>
                    <a href="tel:+4917713434343" className="hover:text-amber-700 transition-colors">
                      0177 1343434
                    </a>
                  </p>
                  <p className="flex items-center">
                    <i className="ri-time-line text-amber-700 mr-3"></i>
                    Öffnungszeiten Mo–Sa nach Vereinbarung
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/bebekbeautykosmetik/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors">
                  <i className="ri-instagram-line text-amber-700 text-xl"></i>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:outline-none transition-colors text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Ihre E-Mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:outline-none transition-colors text-sm"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Ihre Telefonnummer"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:outline-none transition-colors text-sm"
              />
              <textarea
                name="message"
                placeholder="Ihre Nachricht"
                value={formData.message}
                onChange={handleInputChange}
                maxLength={500}
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:outline-none transition-colors text-sm resize-none"
              ></textarea>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Jetzt Kontakt aufnehmen'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut.</p>
              )}
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.8!2d13.3189!3d52.4875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI5JzE1LjAiTiAxM8KwMTknMDguMCJF!5e0!3m2!1sde!2sde!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
                <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                  <button className="bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <i className="ri-map-pin-line text-amber-700 mr-2"></i>
                    Karte anzeigen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
