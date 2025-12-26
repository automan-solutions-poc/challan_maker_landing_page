import { useState } from "react";
import NavbarHeader from "../components/NavbarHeader";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import DemoVideoSection from "../components/DemoVideoSection";
import StorySection from "../components/StorySection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";
import BookDemoModal from "../components/BookDemoModal";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Pass modal handler to sections */}
      <NavbarHeader onBookDemo={handleOpen} />
      <HeroSection onBookDemo={handleOpen} />
      <FeaturesSection />
      <DemoVideoSection />
      <StorySection />
      {/* <TestimonialsSection /> */}
      <PricingSection onBookDemo={handleOpen} />
      <Footer />

      {/* Shared Demo Modal */}
      <BookDemoModal show={showModal} handleClose={handleClose} />
    </>
  );
}
