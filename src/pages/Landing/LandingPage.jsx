import Navbar from '../../components/layout/Navbar';
import HeroSection from './HeroSection';
import OrderStepsSection from './OrderStepsSection';
import TrendingPackage from './TrendingPackage';
import Spotlight from './Spotlight';
import TargetedAudience from './TargetedAudience';
import WhyTikytop from './WhyTikytop';
import TestimonialSection from './TestimonialSection';
import FaqSection from './FaqSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <main className="landing-page relative bg-white">
      <Navbar />
      <HeroSection />
      <OrderStepsSection />
      <TrendingPackage />
      <WhyTikytop />
      <TargetedAudience />
      <ServicesSection />
      <FaqSection />

      <TestimonialSection />
      <Spotlight />
      <Footer />

      {/* Footer can be added here */}
    </main>
  );
};

export default LandingPage;
