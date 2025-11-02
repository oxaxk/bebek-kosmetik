
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TreatmentsSection from './components/TreatmentsSection';
import TechnologySection from './components/TechnologySection';
import OffersSection from './components/OffersSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import InstagramSection from './components/InstagramSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
        <TechnologySection />
        <OffersSection />
        <BookingSection />
        <ContactSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}
