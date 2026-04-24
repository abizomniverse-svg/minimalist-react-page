import Navbar from '../../components/layout/Navbar';
import HeroSection from './HeroSection';
import OrderStepsSection from './OrderStepsSection';
import TrendingPackage from './TrendingPackage';
import PremiumFeatures from './PremiumFeatures';
import AnalyticsSection from './AnalyticsSection';
import Spotlight from './Spotlight';
import TargetedAudience from './TargetedAudience';
import WhyTikytop from './WhyTikytop';
import TestimonialSection from './TestimonialSection';
import FaqSection from './FaqSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <main className="landing-page relative bg-white">
      <Navbar />
      <HeroSection />
      <OrderStepsSection />
      <TrendingPackage />
      <PremiumFeatures />
      <AnalyticsSection />
      <WhyTikytop />
      <TargetedAudience />
      <FaqSection />
      <TestimonialSection />
      <Spotlight />
      <Footer />
    </main>
  );
};

export default LandingPage;
