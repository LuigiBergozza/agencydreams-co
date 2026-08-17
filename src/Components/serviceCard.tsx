import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  linkText?: string;
  onSelect?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  linkText = "Saber mais",
  onSelect,
}) => {
  return (
    <div className="flex flex-col justify-between gap-5 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-lg transition-all duration-300 hover:border-primary/50">
      <div className="flex flex-col gap-3">
        <CheckCircle className="text-primary h-7 w-7" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
      <button
        onClick={onSelect}
        className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline self-start cursor-pointer bg-transparent border-none p-0"
      >
        <span>{linkText}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};