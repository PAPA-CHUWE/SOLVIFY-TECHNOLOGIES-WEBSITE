"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CustCardProps {
  number: string | number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const CustCard: React.FC<CustCardProps> = ({
  number,
  title,
  description,
  icon,
}) => {
  return (
    <Card className="relative max-w-[18rem] rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30 group">
      {/* Hover-Reveal Decorative Circle (top-right) */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#e3c53c] rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-top-8 group-hover:-right-8 transition-all duration-500 ease-out"></div>

      <CardContent className="relative p-6 flex flex-col z-10">
        <h3 className="text-cyan-400 font-bold text-2xl tracking-widest">
          {number}
        </h3>
        <h2 className="text-white font-semibold text-3xl mt-1 mb-2">
          {title}
        </h2>
        <p className="text-slate-200 leading-relaxed tracking-wide">
          {description}
        </p>
        {icon && <div className="mt-4 text-cyan-300">{icon}</div>}
      </CardContent>
    </Card>
  );
};

export default CustCard;
