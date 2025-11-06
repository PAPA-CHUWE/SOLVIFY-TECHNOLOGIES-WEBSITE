'use client';

import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <Card className="relative max-w-[16rem] w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30 group">
      
      {/* Decorative Circle Bottom Right with Icon */}
      {icon && (
        <div
          className="absolute bottom-0 right-0 w-28 h-28 bg-[#e3c53c] rounded-full flex items-center justify-center 
                     translate-y-8 translate-x-8 transition-all duration-500 ease-out
                     group-hover:translate-y-6 group-hover:translate-x-6"
        >
          <div className="text-[#000066]">{icon}</div>
        </div>
      )}

      <CardContent className="relative z-10 flex flex-col gap-4 md:h-64 px-2 ">
        <h2 className="md:text-2xl font-semibold text-white text-sm">{title}</h2>
        <p className="text-slate-200 text-sm leading-relaxed">{description}</p>
      </CardContent>

      {/* Button at Bottom Left */}
      <CardFooter className="relative z-10 flex justify-start">
        <Button
          variant="ghost"
          onClick={onClick}
          className="md:flex items-center gap-2 text-cyan-400 font-semibold hover:text-[#e3c53c] transition-colors hidden"
        >
          Read More
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
