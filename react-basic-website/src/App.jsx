import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import CustomerSection from "./CustomerSection";
import  Pricing from "./Pricing";
import CardSection from "./CardSection";
import Features from "./Features";
import Feature from "./Feature";
import ApnaSignup from "./ApnaSignup"
import Signup from "./ApnaSignup";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/about"element={<CustomerSection />} />
        <Route path="/pricing"element={<CardSection/>} />
        <Route path="/features"element={<Feature/>} />
        <Route path="/signup" element={<ApnaSignup/>} />
      </Routes>
    </Router>
  );
}

export default App;
