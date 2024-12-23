import { Award, BookOpen, Users } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';

const features = [
  {
    icon: Award,
    title: "Certified Professional",
    description: "Qualified Chartered Accountant with extensive industry experience"
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Dedicated to providing personalized solutions for each client"
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Staying updated with the latest in accounting and finance"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        title="Alishan Tanveer, ACA"
        subtitle="Professional Chartered Accountant dedicated to excellence in financial services"
      />
      
      <AboutSection 
        title="About Me"
        description="With over a decade of experience in financial consulting and accounting, I help businesses and individuals navigate complex financial landscapes with precision and expertise."
        features={features}
      />
    </div>
  );
};

export default Home;