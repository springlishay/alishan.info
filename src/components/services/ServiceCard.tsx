import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-100 text-slate-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
};

export default ServiceCard;