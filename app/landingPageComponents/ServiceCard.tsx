"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <div className="relative max-w-[16rem] w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30 group">
      
      {/* Decorative Circle Bottom Right with Icon */}
      {icon && (
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#e3c53c] rounded-full flex items-center justify-center 
                        translate-y-8 translate-x-8 transition-all duration-500 ease-out
                        group-hover:translate-y-6 group-hover:translate-x-6">
          <div className="text-white text-2xl">{icon}</div>
        </div>
      )}

      {/* Title */}
      <h2 className="relative z-10 text-2xl font-semibold text-white mb-2">
        {title}
      </h2>

      {/* Description */}
      <p className="relative z-10 text-slate-200 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Button */}
      <button
        onClick={onClick}
        className="relative z-10 flex items-center gap-2 text-cyan-400 font-medium hover:text-[#e3c53c] transition-colors"
      >
        Read More
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ServiceCard;
