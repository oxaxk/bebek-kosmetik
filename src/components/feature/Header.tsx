import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../base/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Menü schließen nach Navigation
    if (location.pathname === '/') {
      // Auf der Homepage - direkt zur Sektion scrollen
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Auf anderen Seiten - zur Homepage navigieren und dann zur Sektion
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="https://static.readdy.ai/image/c2dd90fc406d7d04d15e04925690c4cc/35259159ebd26f1edd581850df41cf5a.png"
              alt="BEBEK Beauty & Kosmetik Logo"
              className="h-20 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => handleNavigation('about')}
              className="text-lg text-stone-700 hover:text-[#4A331F] transition-colors cursor-pointer font-medium whitespace-nowrap"
            >
              Über uns
            </button>
            <button 
              onClick={() => handleNavigation('treatments')}
              className="text-lg text-stone-700 hover:text-[#4A331F] transition-colors cursor-pointer font-medium whitespace-nowrap"
            >
              Behandlungen
            </button>
            <button 
              onClick={() => handleNavigation('technology')}
              className="text-lg text-stone-700 hover:text-[#4A331F] transition-colors cursor-pointer font-medium whitespace-nowrap"
            >
              Technologie
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-lg text-stone-700 hover:text-[#4A331F] transition-colors cursor-pointer font-medium whitespace-nowrap"
            >
              Kontakt
            </button>
            <Button 
              size="lg"
              onClick={() => window.open('https://buchung.treatwell.de/ort/bebek-beauty-kosmetik/', '_blank')}
            >
              Termin buchen
            </Button>
          </nav>

          <button 
            className="md:hidden bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md border border-[#4A331F]/30 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <i className={`text-2xl text-[#4A331F] transition-transform duration-300 ${
              isMobileMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
            }`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-stone-200 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('about')}
                className="text-lg text-stone-700 hover:text-[#4A331F] transition-colors cursor-pointer font-medium text-left py-2 border-b border-stone-200 whitespace-nowrap"
              >
                Über uns
              </button>
              <button 
                onClick={() => handleNavigation('treatments')}
                className="text-lg text-stone-700 hover:text-[#4A331F] transition-colors cursor-pointer font-medium text-left py-2 border-b border-stone-200 whitespace-nowrap"
              >
                Behandlungen
              </button>
              <button 
                onClick={() => handleNavigation('technology')}
                className="text-lg text-stone-700 hover:text-[#4A331F] transition-colors cursor-pointer font-medium text-left py-2 border-b border-stone-200 whitespace-nowrap"
              >
                Technologie
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="text-lg text-stone-700 hover:text-[#4A331F] transition-colors cursor-pointer font-medium text-left py-2 border-b border-stone-200 whitespace-nowrap"
              >
                Kontakt
              </button>
              <div className="pt-4">
                <Button 
                  size="lg"
                  onClick={() => {
                    window.open('https://buchung.treatwell.de/ort/bebek-beauty-kosmetik/', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-auto self-start sm:w-full px-8 py-3 rounded-xl text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
                >
                  Termin buchen
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
