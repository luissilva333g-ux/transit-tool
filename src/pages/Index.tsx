import ClosureBanner from "@/components/ClosureBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WarehousesSection from "@/components/WarehousesSection";
import FrozenSection from "@/components/FrozenSection";
import PrepareSection from "@/components/PrepareSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PressSection from "@/components/PressSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClosureBanner />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WarehousesSection />
      <PrepareSection />
      <FrozenSection />
      <PressSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
