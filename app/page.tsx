import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import TestimonialsSection from '@/components/testimonials-section';
import PricingSection from '@/components/pricing-section';
import ContactSection from '@/components/contact-section';
import FaqSection from '@/components/faq-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </main>
  );
}