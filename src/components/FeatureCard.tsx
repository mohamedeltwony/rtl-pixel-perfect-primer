import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className = "" }: FeatureCardProps) => {
  return (
    <div className={`feature-card p-6 rounded-2xl ${className}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-light">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-card-foreground leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;