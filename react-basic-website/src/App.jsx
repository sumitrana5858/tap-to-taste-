import './App.css'
import CustomerSection from './CostomerSection'
import Header from './Header'
import Navbar from './navbar'
import SlideSection from './Slide'
import FeatureSection from './FeatureSection'
import CardSection from './CardSection'
import PlanButton from './PlanButton'
import PricingSection from "./PricingSection";
import PerfectPlan from './PerfectPlan';
import LimitedSection from './LimitedSection';
import LimitedOfferSection from "./LimitedOfferSection";
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './footer'
import Home from './Home'
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom";

function App() {
  

  return (
    
      <div>
        {/* <Navbar />
        <Header />
        <SlideSection />
        <CustomerSection />
        <FeatureSection />
        <CardSection />
        <PlanButton />
        <PerfectPlan/>
        <PricingSection/>
        <LimitedSection/>
        <LimitedOfferSection/>
        <TestimonialsSection />
        <ContactSection />
        <Footer/> */}
        // <Router>
        // <Routes>
        // <Route path="/home" element={<Home/>}/>
        // </Routes>
        // </Router>
        <Home/>
      </div>

     
    
  )
}

export default App
