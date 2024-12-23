import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-100">
        <Icon className="h-8 w-8 text-slate-600" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;