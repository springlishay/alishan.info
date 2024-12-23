import { Calculator, BarChart, FileText, PieChart, Shield, Users } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';

const services = [
  {
    icon: Calculator,
    title: "Tax Planning & Compliance",
    description: "Comprehensive tax planning strategies and compliance services for individuals and businesses"
  },
  {
    icon: BarChart,
    title: "Financial Analysis",
    description: "In-depth financial analysis and reporting to help make informed business decisions"
  },
  {
    icon: FileText,
    title: "Bookkeeping",
    description: "Accurate and timely bookkeeping services to maintain your financial records"
  },
  {
    icon: Users,
    title: "Business Advisory",
    description: "Strategic business advisory services to help your business grow and succeed"
  },
  {
    icon: Shield,
    title: "Audit & Assurance",
    description: "Independent audit and assurance services to ensure financial accuracy"
  },
  {
    icon: PieChart,
    title: "Investment Planning",
    description: "Professional investment planning and portfolio management services"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Services</h1>
          <p className="mt-4 text-xl text-slate-600">
            Comprehensive financial services tailored to your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;