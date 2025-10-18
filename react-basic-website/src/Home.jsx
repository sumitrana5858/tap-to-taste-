import FeatureSection from "./FeatureSection";
import Navbar from "./navbar";
import Header from "./Header";
import SlideSection from "./Slide";
import CustomerSection from "./CostomerSection";
import CardGrid from "./CardSection";
import { Card } from "./CardSection";
import PlanButton from "./PlanButton";
import PerfectPlan from "./PerfectPlan";
import PricingSection from "./PricingSection";
import LimitedSection from "./LimitedSection";
import LimitedOfferSection from "./LimitedOfferSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./footer";

const Home = () =>{
    return(
        <>
        <Navbar />
        <Header />
        <SlideSection />
        <CustomerSection />
        <FeatureSection />
        <Card/>
        <CardGrid/>
        <PlanButton />
        <PerfectPlan/>
        <PricingSection/>
        <LimitedSection/>
        <LimitedOfferSection/>
        <TestimonialsSection />
        <ContactSection />
        <Footer/>
        </>
    )
}
export default Home;