// Home.jsx - Working Version

import HeroSection from './HeroSection';
import Slide from './Slide';
import Feature from './Feature';
import PlanButton from './PlanButton';
import CardSection from './CardSection';
import LimitedSection from './LimitedSection';
import LimitedOfferSection from './LimitedOfferSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer'
import CustomerSection from './CustomerSection'


export default function Home() {
  return (
    <>
    <HeroSection />
      <Slide />
      <CustomerSection />
      <Feature />
      <PlanButton />
      <CardSection />
      <LimitedSection />
      <LimitedOfferSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
    </>
  );
}
